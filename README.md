# 聆聽季節 · Tricia Ling — Personal Dashboard

A private command centre for living intentionally through the 24 solar terms.

**Live at:** [your Netlify URL here]

---

## What this is

A single-page personal dashboard that:
- Shows the current solar term, its description, and what to notice in the world right now
- Counts down to the next solar term
- Tracks countdowns to school, R.Ac board exam, and Dr. TCM designation
- Displays the full life arc across three tracks — School, Brand, Family
- Holds today's focus (persisted in the browser)
- Links out to all the tools and platforms I use daily

**Word of the year:** Integration

---

## How to update

Everything you need to change lives at the top of `index.html` in the `CONFIG` block:

```javascript
const CONFIG = {
  whatsappNumber: '',     // your Capacities WhatsApp number e.g. '16041234567'
  schoolStart:    new Date('2026-09-08'),
  racExam:        new Date('2028-10-01'),
  drTCM:          new Date('2030-02-01'),
  daughterBday:   new Date('2026-07-01'), // update with exact date
};
```

For links, search for `href="https://` in the file — all external links are clearly labeled.

---

## How to deploy updates

```bash
# 1. Edit index.html in any text editor
# 2. Save
# 3. Push to GitHub — Netlify deploys automatically

git add .
git commit -m "your note about what changed"
git push
```

Netlify picks it up within 30 seconds. Done.

---

## File structure

```
/
├── index.html    — the whole dashboard (one file, no dependencies)
└── README.md     — this file
```

No build step. No npm. No database. Just a smart HTML file that knows what day it is.

---

## Planned updates

- [ ] Add North Star statement
- [ ] Add exact daughter birthday
- [ ] Add real Substack URLs
- [ ] Add WhatsApp/Capacities number
- [ ] Password protection (if needed)
- [ ] Semester progress tracking (tick off each semester)

---

*progress over perfection · 聆聽季節*
