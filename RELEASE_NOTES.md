# Action Plan: Release Notes

Newest first. The same notes appear in the app under **About & Legal → Release notes** (footer link).

## Version 17 · October 9, 2026

**Focus timer**
- **Mark complete.** When a task is selected under "Log focus time to", a **Mark complete** button now sits right under Start and Reset. It counts the time so far toward the task, finishes it, and clears the selection. Undo is in the message that appears.

**Look**
- **Centered icon.** The app icon is now centered, including the home-screen icon on iPhone and the icon on Android (they were drawn slightly off-center before). It also has a soft gradient instead of flat color. The preview image for shared links matches.
- The tagline **Simple, focused daily productivity.** is back under the name at the top, on every screen size.
- The footer now reads "mbactionplan.online - a free, local-only productivity app." The version number is still in About & Legal.

## Version 16 · October 8, 2026

**Install as an app**
- **Install button.** On Chrome, Edge and Android there is an **Install** button in the header (on a phone, in the tools menu). On iPhone and iPad, tap **Share**, then **Add to Home Screen**. The app opens full screen with its own icon, named **Action Plan**.
- **Works with no signal.** After the first visit the app opens offline. Your tasks were always stored on your device; now the page itself is too. When you are online it always checks for a newer version first.
- The Install button disappears once the app is installed, and in browsers that can't install.

**Focus timer**
- **Follows the clock.** If your screen locks or you switch apps, the time is still counted. When you come back the timer shows the right time left, and the minutes logged to your task catch up.
- **Remembers where it was** if the page is reloaded or the browser closes it in the background.
- **Fixed:** while the timer was running, typing in a task, its notes or its steps could jump out of the box every second.
- "Keep screen on" turns itself back on when you return to the app.

**Tabs and sharing**
- Browser tabs read **Action Plan | Today**, **Action Plan | Projects**, and so on. The same goes for the Privacy, Terms and other pages.
- New preview image when the link is shared.

**Privacy**
- Still no accounts, no server, no network requests after the page loads. The Privacy Policy now covers the saved timer state and the offline copy of the app's own files.

## Version 15 · October 8, 2026

**Today is now the home screen**
- **Quick add** at the top understands plain language: `call dentist tomorrow 3pm 15m @phone #work p1 every week`. A preview shows what it understood before you press Enter. Press **N** on Today to jump straight to it.
- **Must do / Should do / If time.** Today is sorted using your matrix: Do First or pinned = Must do, Schedule and Delegate = Should do, Eliminate = If time. Later and no-date tasks wait under **Coming up** (Upcoming, Inbox, Later) so they stay out of the way.
- **"What should I do now?"** suggests one task using due date, priority, time estimate, energy, and where you are. **Not this one** shows the next. Narrow it with "I only have 15 minutes" or low energy.
- **Focus mode.** Start any task to see it, its steps, and the timer on one screen. The timer is the same Focus Timer as before, so time is still logged to the task.
- **Needs a decision.** Overdue tasks get one-tap choices: do today, tomorrow, next week, or someday. A task you move three times asks what is getting in the way (too big, not important, bad date, waiting, or avoiding) and offers a fix.
- **Wrap up day** moves unfinished tasks forward in one pass. **Explain my tasks** reads your list back in plain language, using simple rules on your device (no AI service, nothing sent anywhere).
- Checking a task off pauses for a moment so it feels finished. Streak and "last 7 days" counts are under "Your numbers".

**Task form**
- Under More options: **time estimate**, **steps**, **where** (home, computer, phone, errands, shopping, away), **energy needed**, and **Count from when I finish** for repeating tasks.
- New tasks now start as **Schedule** (Should do) instead of Do First, so Must do stays short on purpose.

**Moving in and out**
- **Import from another app** (Data menu): paste a list (indented lines become steps), or choose a Todoist, Google Tasks (Takeout), TickTick, or other CSV file. You see a preview first, finished tasks are skipped, and tasks already here (same name and date) are not duplicated.
- **Export as text list (.txt)** and **Print or save as PDF** give a clean checklist. These are not backups.
- Backups: CSV gains seven columns at the end (Estimate, Energy, Context, Steps, RepeatMode, Postponed, CreatedAt) and the JSON backup includes your finished-per-day counts. Older backups still import normally.

**Privacy**
- Still no accounts, no server, no network requests after the page loads. The Privacy Policy now lists the new fields and the daily finished count.

## Version 14 · September 28, 2026
- Action Plan is now mbactionplan.online.
- New app icon: a checked box with a small yellow dot, shown in the browser tab, header, loading screen, and welcome guide. It follows your chosen accent color.
- Your tasks, projects, settings, and existing backups are unchanged and still import normally.

## Version 13 · September 26, 2026

**Backups you control**
- **Choose where backups are saved.** The first save asks for a folder and file name. After that, **Save backup now** (Ctrl/Cmd+S) overwrites the same file in one click. Use **Change location…** in the Data menu to pick a new one.
- **JSON backups (recommended).** **Export All (JSON)…** saves every project, task, and setting in one file that restores exactly.
- **CSV backups** can also be saved to a location you choose. Once you've set one up, **Save backup now** updates the CSV too.
- **Import Backup (JSON or CSV)…** opens in your backup folder and accepts either format. It adds what's missing and skips anything already here (matched by ID), so importing twice never duplicates and an older backup can't overwrite newer edits. This follows the shared ecosystem rule; before, an import replaced matching tasks. Imported files are validated (size, format, dates, times, colours).
- The **"Backed up …"** status next to the Data button saves a backup when clicked, and turns yellow after 7 days or when you have data that has never been backed up. On phones it becomes a small warning dot on the Data button.
- The Data menu shows the file name you're saving to. Browsers only reveal the file name, never the folder path.
- **Fallback:** Firefox, Safari, and phones can't choose a save location, so they download a dated backup (or offer the share sheet on phones), and the Data menu says so.

**Ecosystem consistency**
- The Data menu uses the shared order: Save backup now → Export All (JSON)… → Import Backup… → Export All (CSV)…, with backup status and save location at the bottom. "Clear all data…" stays separate, at the end.
- Selected chips are solid accent, toasts match the rest of the app family, controls are 44px on touch screens and narrow windows, and bottom-bar rows are 54px.
- Removed the floating "Your data stays on this device" pop-up. That information is in the welcome screen and the Privacy Policy.

**Privacy**
- The Privacy Policy now explains that the browser remembers the backup file you picked (name and write permission only, not the folder path). **Clear all data** also forgets that location. Backup files you saved yourself are never touched.

## Version 12 · September 26, 2026
- Fully self-contained: React, icons, and styles are built into the page. No network requests after loading, and much faster start-up.
- Strict Content Security Policy; imported files are size-limited and validated.
- "Clear all data" deletes everything (including older saved data) and can't be undone by accident.
- Monthly, quarterly, 6-month, and yearly repeats keep the end of the month (Jan 31 → Feb 28).
- A warning banner appears if the browser can't save (storage full or blocked).
- Accessibility: focus stays inside dialogs, skip link, heading order, contrast, keyboard-friendly cards.
- New Credits tab. Privacy, Terms, and Disclaimer rewritten to match how the app works.

## Version 11 · September 26, 2026
- Short welcome guide for first-time visitors (what it does, light/dark, first task or import).
- Dashboard leads with Today: due and overdue tasks with a progress bar.
- Simpler task form: priority boxes that match the matrix, quick date buttons, extras under "More options."
- Data menu with backup reminder; Undo after delete and complete; + buttons in each matrix quadrant; larger tap targets; N adds a task.

## Version 10
- Utility theme with the indigo Action Plan accent: dashboard, projects, Eisenhower matrix, calendar, and focus timer, with CSV import and export.
