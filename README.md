# The Law Offices of Damrich & Allen: Blueprint WebStudio Concept

Independent, non-official redesign concept for https://www.dma-lawfirm.com/ (The Law Offices of Damrich & Allen, David M. Allen, LLC; Mobile and Daphne, Alabama).
Preview: https://dal.blueprintwebstudio.com (noindex; the demo code lives in the Neon `demos` table).

Custom build. Content and layout are in `src/App.jsx`, styles in `src/styles.css`, and the Blueprint WebStudio concept widget in `src/concept.jsx`.

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

Vercel project `damrich-and-allen-law` (framework: Vite, team mrwerner-s-projects). Pushes to `main` deploy automatically.
Domain `dal.blueprintwebstudio.com` is a CNAME at Porkbun pointing to the target Vercel shows for this project.

Environment variables (all optional): `VITE_CONCEPT_END_DATE` (countdown end, defaults to 2026-11-30), `RESEND_API_KEY` / `CONTACT_TO_EMAIL` / `CONTACT_FROM_EMAIL` for the consultation form (`api/contact.js`; without them the form answers in demo mode). The "I'm Interested" form posts to `api/demo-interest.js`, which proxies to the main studio site.

## Design

- Palette from their logo and site: navy #2d3747 and slate #7d8491, deepened to #1c2431 for the header bar and footer, with a warm paper background and a brass accent (#b08a52) added for an editorial, trustworthy feel.
- Their white DA monogram logo sits on the navy header; the monogram alone is the favicon and stands in for Hamilton Jordan's missing portrait.
- Cormorant Garamond (display, italic accents) with Jost (a geometric sans close to the logo's tracked capitals).
- Motif: a legal-brief layout. Practices are numbered § I, § II, § III, the hero photo has a "Fig. 1" caption, attorney credentials read like a court record, and hairline rules divide everything like a printed brief.
- Section order: top bar with phone → hero ("Prepared for trial. Prepared to win.", Mobile skyline photo, fact strip) → § docket strip → three practice areas with collapsible "matters we handle" lists → their own quote over the Fairhope pier photo → attorneys → "what happens when you call" steps → courts by county → client reviews → contact with both offices, consultation form and map → footer with the Rule 7.2 disclaimer.

## What changed from the current site

- A "COVID-19 ALERT / Quarantine Update" pop-up is still in the homepage markup; removed.
- The FAQ page says "There are currently no frequently asked questions" and the Termite Litigation page is empty; the empty pages are gone (termite litigation is kept as a listed matter).
- Ten personal injury sub-pages and several criminal pages repeat the same boilerplate paragraph; the concept groups 60+ matters into three short sections with expandable lists.
- Raw template code (`block('sections/home-familylaw')->render() ?>`, "of your page -->") leaks into the homepage text; gone.
- 22 court pages collapse into one "where we appear" section grouped by county ("Loxely" corrected to Loxley).
- The only blog post is from December 2018; the concept leaves the blog out.
- Phone, free consultation and both office addresses are within the first screen and the contact section; the consultation form keeps the "no attorney-client relationship" acknowledgement.
- Checked at 1280px and 390px with no sideways scrolling.

## Owner should confirm

- Which number is the main line: (251) 444-1444 is used everywhere, but Joe Damrich's profile and the Civil Forfeiture page use (251) 301-0362.
- Email: only david@dma-lawfirm.com appears on the site. Is there a general inbox?
- Office hours are not on the current site, so none are shown.
- Which office is the main one (Mobile at 214 S. Lawrence Street is used for the map), and whether both offices take walk-ins.
- Hamilton Jordan has no photo on the current site; a monogram plate is used. A portrait is needed.
- The "United States District Court" court page: confirm which district (presumably the Southern District of Alabama) before naming it.
- Practice wording: the site describes the firm both as "Criminal Defense and Personal Injury" and as also handling Family Law. The concept presents all three; confirm family law is still active, and whether termite litigation and PEX piping litigation are still taken.
- The reviews page is titled "Reviews of the Law Offices of David M. Allen". The 8 reviews are quoted word for word from it; confirm their original source (Google, Avvo, etc.) so it can be labelled.
- No awards or badges appear on the current site, so none are shown.

## Photos

All photos are the firm's own from dma-lawfirm.com: the Mobile skyline and Fairhope pier aerials, the Lawrence Street office, and the portraits of David Allen and Joe Damrich. The skyline and aerial images may be licensed stock bought for the old site; confirm the license or replace them before launch.
