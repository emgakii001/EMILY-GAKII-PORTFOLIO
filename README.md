# Emily Gakii — Portfolio

Finance & bookkeeping portfolio site. Plain HTML/CSS/JS, no build step, no framework, no backend — deploys directly on GitHub Pages.

**Status: complete.** All six nav pages are fully built — Home, About, Services (overview + 3 detail pages), Work (9 real case studies), Credentials (7 real certificates), and Contact.

---

## File structure

```
/
├── index.html            Home
├── about.html             About
├── services.html          Services overview
├── work.html              Work — case study gallery
├── credentials.html       Credentials
├── contact.html           Contact
├── favicon.ico
├── .nojekyll
├── services/
│   ├── bookkeeping.html
│   ├── financial-tracking-reporting.html
│   └── finance-data-support.html
├── work/                  9 completed case-study pages (self-contained, own styling)
├── assets/
│   ├── css/style.css       single stylesheet, all pages
│   ├── js/main.js          mobile nav toggle + active-link highlighting
│   ├── logo/                SVG brand marks
│   └── images/
│       ├── profile/          real photos (hero + about)
│       ├── projects/         real case-study screenshot thumbnails
│       └── certificates/     real certificate scans
└── README.md
```

---

## Contact details on file

- **Email:** `emgakiioo1@gmail.com` (mailto link, used by "Hire Emily" and the Email contact card)
- **LinkedIn:** `https://www.linkedin.com/in/emily-gakii-89335a344/` — same URL used in the Contact page and every page's footer
- **WhatsApp:** `https://wa.me/254768267676` (footer), with a pre-filled opening message on the Contact page itself

If any of these ever change, they appear in exactly these places and nowhere else: `contact.html`'s contact cards, and the `footer-links` block repeated at the bottom of every page.

---

## Two known follow-ups (not bugs — just future updates)

1. **Bachelor of Commerce status** — currently shown as "In progress — expected December 2026" on the Credentials page, per the actual transcript status. Marked with an HTML comment in `credentials.html` (search `TODO (Dec 2026)`) for exactly where to update it once the degree is conferred, and where to add the certificate scan to the archive.
2. **Machine Learning Capstone figure** — one chart image (`work/figures/model_vs_baseline.png`) referenced inside that case study file isn't present, so it displays a small text fallback instead of the image. This is inside your source-of-truth case-study content, which per your earlier instruction I don't rewrite — so it's left as-is. If you have that figure, drop it at `work/figures/model_vs_baseline.png` and it'll appear automatically (the file already has the fallback logic built in).

---

## Certificate archive — adding a new one later

`credentials.html` renders certificates from a small JS array (search `var certificates`). To add one:

1. Drop the certificate image into `assets/images/certificates/`
2. Add one object to the array with `title`, `issuer`, `date`, and `image` path
3. Nothing else needs to change — the carousel, hover effects, and click-to-expand modal all pick it up automatically

A dashed "+" card at the end of the certificate row signals more are coming.

---

## Brand tokens

Defined once at the top of `assets/css/style.css`:

| Variable | Value | Use |
|---|---|---|
| `--navy` | `#16324F` | primary brand color, headings, buttons |
| `--charcoal` | `#1F2933` | body text |
| `--soft-white` | `#F8FAFC` | background |
| `--teal` | `#2F7F7B` | accent — labels, focus states, active nav underline |
| `--svc-green` / `--svc-blue` / `--svc-purple` | — | Services-page-only accents (bookkeeping / tracking / data support), used sparingly on numbers, icons, and links only |

Font is **Manrope**, loaded from Google Fonts, falling back to Helvetica Neue / Arial.

---

## Deploying to GitHub Pages

Relative paths are used throughout, so this works whether the repo is `your-username.github.io` (root) or any other repo name (project page under `/repo-name/`).

1. Push this folder's contents to the `main` branch of your repo (make sure the `work` and `services` folder names stay **lowercase** — GitHub Pages is case-sensitive).
2. Repo → **Settings → Pages → Build and deployment → Source → Deploy from a branch.**
3. Branch `main`, folder `/ (root)` → Save.
4. Live in a minute or two.

## Local preview

```
python3 -m http.server 8000
```
Then open `http://localhost:8000`.
