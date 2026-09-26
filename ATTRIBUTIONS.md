# Attributions: Action Plan

Action Plan's own code, design, name, and logo are by its developer. The app bundles the open-source components below directly into `mbactionplan13.html`. Nothing is loaded from their servers at runtime, and none of them receive any user data.

The same credits and full licence texts are shown in the app under **About & Legal → Credits**.

| Component | Version | What it does in the app | Licence | Attribution required? |
|---|---|---|---|---|
| React | 18.3.1 | UI rendering | MIT | Yes: copyright + licence notice kept |
| React DOM | 18.3.1 | UI rendering in the browser | MIT | Yes: copyright + licence notice kept |
| Modernizr (fragment bundled inside React DOM) | 3.0.0pre custom build | Feature detection inside React DOM | MIT | Yes: covered by the notice in React DOM's bundled source and the Credits tab |
| Lucide icons (only the 51 icons used, embedded as SVG path data) | 1.47.0 | Interface icons | ISC; icons derived from Feather are MIT | Yes: copyright + licence notice kept |
| Tailwind CSS (generated stylesheet) | 3.4.19 | Utility CSS classes, precompiled into the page | MIT | Header comment kept in the CSS; credited |

No web fonts, images, stock photos, audio files, maps, analytics, or advertising libraries are used. Text uses the device's system fonts. The timer sound is generated in the browser with the Web Audio API, not from an audio file. The logo and favicon are an original 2×2 grid drawn in SVG.

---

## React / React DOM: MIT License

Copyright (c) Facebook, Inc. and its affiliates.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Lucide: ISC License

Copyright (c) 2026 Lucide Icons and Contributors

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

### Feather-derived Lucide icons: MIT License

Used in this app: alert-circle, alert-triangle, arrow-left, arrow-right, arrow-up, calendar, check, chevron-down, chevron-left, chevron-right, circle, database, download, info, moon, plus, search, trash-2, upload, x.

Copyright (c) 2013-present Cole Bemis

(MIT License text as above.)

## Tailwind CSS: MIT License

Copyright (c) Tailwind Labs, Inc.

(MIT License text as above.)
