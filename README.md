# Listening Season · Command Centre

Private dashboard for Tricia Ling — built March 2026.

Live at: https://tricia-dahsboard.netlify.app

---

## What this is

A personal command centre tied to the 24 solar terms. Not a productivity tool — an orientation device. Opens every day to answer: what season am I in, what matters right now, how far along am I.

---

## Files in this repo

| File | What it is |
|---|---|
| `index.html` | The dashboard — start here |
| `philosophy.html` | Life philosophy & brand blueprint |
| `solar-terms.html` | Interactive 24 solar terms reference |
| `timeline.html` | Brand & school timeline (Gantt) |
| `capture.html` | Capture system reference card |
| `brand-voice.html` | Brand voice guide |
| `mindmap.html` | Ideas map |
| `ux-tcm-journey.html` | UX TCM journey |
| `observation-log-jingzhe.html` | Observation log · 驚蟄 |
| `reminders-setup.html` | Reminders setup guide |

---

## How to update

```bash
# Make your changes in VS Code, then:
git add .
git commit -m "describe what you changed"
git push
```

Netlify auto-deploys on every push. Changes are live within 30 seconds.

---

## Dashboard CONFIG

At the top of `index.html` there is a CONFIG block. Update here if anything changes:

```javascript
const CONFIG = {
  whatsappNumber: '12086173097',   // Capacities WhatsApp number
  schoolStart:    new Date('2026-09-08'),
  racExam:        new Date('2028-10-01'),
  daughterBday:   new Date('2026-07-25'),
};
```

---

## Architecture

```
tricialing.com          ← the roof (domain owned, future clinic)
├── Listening Season    ← content brand, passive income
└── Just Noodling       ← personal Substack (justnoodling.substack.com)
```

This dashboard is private — it lives at the Netlify URL, not on tricialing.com. It is for Tricia only.

---

## Stack

| Tool | Job |
|---|---|
| GitHub (private repo) | Version control |
| Netlify (free tier) | Hosting, auto-deploy |
| VS Code | Editing |
| Dropbox | Local folder sync |

---

*A living document. Built in the season of 驚蟄 · Awakening of Insects · March 2026.*
