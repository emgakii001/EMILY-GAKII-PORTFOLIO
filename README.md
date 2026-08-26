[README.md](https://github.com/user-attachments/files/31451985/README.md)
# Emily Gakii — Portfolio

Finance & bookkeeping portfolio site. Plain HTML/CSS/JS, no build step, no framework, no backend — built to deploy directly on GitHub Pages.

**Status:** Work/Case Studies section is now live with all 9 completed case studies. Home and Contact are fully written. About, Services, and Credentials are still intentional placeholders from the "Empty but Live" milestone — see "What's a placeholder right now" below.

---

## File structure

```
/
├── index.html          Homepage — hero, problem framing, Selected Work carousel
├── about.html           placeholder
├── services.html         placeholder
├── work.html             case-study gallery — links out to all 9 pages below
├── credentials.html      placeholder
├── contact.html          fully built
├── favicon.ico
├── assets/
│   ├── css/style.css     all styles, one file, uses CSS variables for the brand tokens
│   ├── js/main.js        mobile nav toggle + active-link highlighting (vanilla JS)
│   ├── logo/              SVG brand marks (monogram, favicon, horizontal lockup)
│   └── images/projects/   put real screenshots here if you ever want a static preview image instead of the "Interactive Dashboard" placeholder strip on a card
├── work/                 the 9 completed case-study pages (see below)
└── README.md
```

### The 9 case-study pages (`/work/`)

Each file is **self-contained** — its own `<style>` block, its own fonts, its own color system. They were each designed individually and deliberately look different from one another (a magazine-style long-form piece, a sidebar dashboard, a tabbed report, etc.) — that variety is a feature, not an inconsistency to fix, so these files are **not** wired into `assets/css/style.css`.

| File | Case study |
|---|---|
| `work/loan-portfolio-analysis.html` | Loan Portfolio Analysis (featured) |
| `work/share-portfolio-analysis.html` | Share Portfolio Analysis |
| `work/branch-variance-analysis.html` | Branch Variance Analysis |
| `work/financial-performance-regulatory-reporting.html` | Financial Performance & Regulatory Reporting |
| `work/bank-reconciliation.html` | Bank Reconciliation |
| `work/staff-cost-to-income-analysis.html` | Staff Cost-to-Income Analysis |
| `work/ai-data-analysis-predictive-modeling.html` | AI Data Analysis & Predictive Modeling |
| `work/machine-learning-capstone.html` | Machine Learning Capstone |
| `work/grant-thornton-china-market-research.html` | Grant Thornton China — Market Research |

**The only thing added to each file:** a small floating "← Portfolio" pill (bottom-right corner, `position: fixed`) linking back to `work.html`, using the shared navy/teal brand colors. It's inserted as a single self-contained snippet right after `<body>`, with inline styles and a unique id (`#eg-portfolio-chip`) so it can't collide with any of the page's own CSS. Nothing else in these files was touched — no rewritten copy, no restructured layout, no altered charts or data.

**A couple of these case studies load a charting library from a CDN** (visible if a chart area says "Chart library could not be loaded" while previewing offline). This will resolve itself automatically once the site is live on GitHub Pages with normal internet access — it's not something introduced by this integration.

No page uses a templating engine, so the header/nav and footer are repeated in every HTML file. This is intentional for a beginner-maintainable static site — no build step required — but it means **if you edit the nav (e.g. add a page), you need to paste that change into every `.html` file.**

---

## What's a placeholder right now

- **About, Services, Credentials** — each has the header/nav, a page title, and a dashed placeholder box. Replace the placeholder box with real content when you're ready; don't need to touch anything else on the page.
- **Work** — no longer a placeholder. Live gallery of all 9 case studies, grouped into Finance & Accounting / Data, AI & Analytics / Research & Business Analysis, each linking out to its full page in `/work/`.
- **Selected Work carousel (homepage)** — still shows "Coming soon" badges and disabled buttons for the projects that now have real case-study pages (this wasn't touched in this pass, since the brief scoped this update to Work/Case Studies only — Expense Analysis was removed from the array since it no longer exists as a project, but the rest is unchanged). When you're ready, this is a quick follow-up: swap each card's disabled "View Project" button for a real link into `/work/`, and update status badges to drop "Coming soon" where a case study now exists.
- **Contact page** — email and LinkedIn are placeholders (`hello@emilygakii.com`, `linkedin.com/in/emily-gakii`). **Replace these before sharing the live link.** They're marked with `<!-- TODO -->` comments in `contact.html` and in the footer of every page.
- **About photo** — no photo is included. Add a real photograph when you build out the About page; the brief is explicit that this should never be AI-generated.

---

## Brand tokens (don't change without updating the identity kit)

Defined once at the top of `assets/css/style.css`:

| Variable | Value | Use |
|---|---|---|
| `--navy` | `#16324F` | primary brand color, headings, buttons |
| `--charcoal` | `#1F2933` | body text |
| `--soft-white` | `#F8FAFC` | background |
| `--teal` | `#2F7F7B` | accent only — used sparingly (labels, focus states, active nav underline) |

Font is **Manrope**, loaded from Google Fonts in the `<head>` of every page, falling back to Helvetica Neue / Arial. If you add a new page, copy the two `<link>` tags for `fonts.googleapis.com` / `fonts.gstatic.com` and the stylesheet `<link>` from an existing page.

---

## Adding a new case study page later

1. Build the new case study as its own standalone HTML file (own `<style>` block is fine — that's the existing pattern) and drop it into `/work/` using a lowercase-with-hyphens filename, e.g. `work/new-project-name.html`.
2. If you want it to carry the same "← Portfolio" corner link as the other 9, copy the snippet from any existing file in `/work/` (search for `eg-portfolio-chip`) and paste it right after `<body>`.
3. Add a new `<article class="project-card">` block to `work.html` in the relevant category section — copy an existing card as a template and update the title, category, description, and `href`.
4. Optional: once it's live, update the homepage carousel card for that project too (see note above).

---

## Deploying to GitHub Pages

This site uses **relative paths everywhere**, so it works whether it's a user page or a project page — no config changes needed either way.

1. Create a GitHub repository and push this folder's contents to the `main` branch.
   - If the repo is named `your-username.github.io`, the site becomes your root domain: `https://your-username.github.io/`
   - If it's named anything else (e.g. `portfolio`), it becomes a project page: `https://your-username.github.io/portfolio/`
2. In the repository: **Settings → Pages → Build and deployment → Source → Deploy from a branch.**
3. Select branch `main`, folder `/ (root)`, and save.
4. GitHub gives you the live URL within a minute or two — open it on your phone to confirm it's reachable, which is the actual milestone for this stage.

No further configuration is needed since there's no build step.

---

## Adding a real contact form later

Currently the Contact page uses a plain `mailto:` link — no backend, nothing to break. When you're ready for an actual form:

1. Sign up for a free tier of a form backend service (e.g. Formspree).
2. Add a `<form>` in `contact.html` pointing at the endpoint they give you.
3. No other code on the site needs to change.

---

## Local preview

No build tools needed. From this folder, run any static file server, e.g.:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000` in a browser.
