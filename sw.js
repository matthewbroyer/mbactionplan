/* Action Plan service worker.
 *
 * What it does: keeps a copy of the app's own files so the app opens with no signal, and lets the browser offer
 * "Install". It never touches your tasks (those live in localStorage, which a service worker cannot see).
 *
 * How it updates: it always asks the network first and only uses the saved copy when that fails (or is very
 * slow). So uploading new files to the host is enough. There is no version number to bump here.
 */
const CACHE = 'actionplan-app-v18';
const SHELL = ['./', 'index.html', 'manifest.json', 'favicon.svg', 'icon-192.png', 'icon-512.png',
  'icon-maskable-512.png', 'apple-touch-icon.png'];
const SLOW_MS = 4000; // with a saved copy on hand, stop waiting on a bad connection after this long

// One cache key per page, ignoring ?query and #hash, so the cache can't fill up with look-alike copies.
const keyFor = (url) => new Request(url.origin + url.pathname);
const inShell = (url) => SHELL.some((p) => new URL(p, self.registration.scope).pathname === url.pathname);

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      // 'reload' skips the browser's HTTP cache, so the first saved copy is never stale. One missing file
      // must not stop the rest, so each is added on its own.
      .then((cache) => Promise.all(SHELL.map((p) => cache.add(new Request(p, { cache: 'reload' })).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE && k.startsWith('actionplan-')).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function fetchFresh(request, timeoutMs) {
  // cache:'no-cache' = always check with the server, so a file you just uploaded is never hidden behind the
  // browser's own HTTP cache (this is what makes drag-and-drop updates show up on the next visit).
  const network = fetch(request, { cache: 'no-cache' });
  if (!timeoutMs) return network;
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('slow')), timeoutMs);
    network.then((r) => { clearTimeout(timer); resolve(r); }, (e) => { clearTimeout(timer); reject(e); });
  });
}

async function networkFirst(request) {
  const url = new URL(request.url);
  const cache = await caches.open(CACHE);
  const key = keyFor(url);
  const saved = (await cache.match(key)) || (request.mode === 'navigate' ? await cache.match(keyFor(new URL('index.html', self.registration.scope))) : undefined);
  try {
    const response = await fetchFresh(request, saved ? SLOW_MS : 0);
    if (response && response.ok && response.type === 'basic' && (request.mode === 'navigate' || inShell(url))) {
      cache.put(key, response.clone());
    }
    return response;
  } catch (err) {
    if (saved) return saved;
    throw err;
  }
}

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return; // only our own files
  event.respondWith(networkFirst(request));
});
