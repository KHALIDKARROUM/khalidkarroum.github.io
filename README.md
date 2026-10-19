# Khalid Karroum — Portfolio

A portfolio for data science, machine learning, and backend projects, with a dark technical design, blue accents, illustrated project cards, and responsive layouts.

The home page introduces Khalid and showcases his existing projects, skills, education, and contact links. Each section also has a dedicated page in the shared layout, with a link back home. Project details include the problem, implementation, evaluation context, limitations, and source code. The charts on project cards are decorative illustrations, not reported evaluation results.

The theme button in the header switches between dark and light appearances and remembers the choice in your browser. Dark is the default. On narrow screens, the menu button opens the navigation.

## Pages

- `/` — introduction, about, skills, project gallery, and contact
- `/projects` — all six projects, including Price Monitor
- `/projects/[slug]` — project details
- `/skills` — skill groups and technologies
- `/about` — personal introduction, interests, working approach, and current study and internship context
- `/contact` — email, browser-viewable CV, detailed internship availability, and contact links

## Local setup

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Checks

```bash
npm run typecheck
npm run lint
npm run build
```

For the Vercel build, run `npm run build:vercel`.

## Editing content

- `data/profile.ts` — name, role, availability, social accounts, and language levels
- `data/projects.ts` — project descriptions, technologies, evaluation, and repository links
- `data/skills.ts` — skill groups
- `data/education.ts` — education from baccalaureate to master’s studies and expected graduation
- `data/experience.ts` — professional experience, project responsibilities, and technologies
- `app/globals.css` — shared styles

Email, LinkedIn, GitHub, and the CV are shown on the Contact page and in the shared contact links. Edit `data/profile.ts` to maintain contact details and the preferred start, duration, target roles, and remote/relocation preferences. An undefined work preference is shown as “To discuss”; set it only when confirmed. Keep education and experience dates tied to confirmed information.

The English CV is included at `public/Khalid-Karroum-CV.pdf`, and `resume.available` is enabled. The “View CV” links open the PDF in a new browser tab. Replace that file and update the version query in `resume.path` when the CV changes to avoid cached copies. The current PDF was supplied as `Karroum_Khalid_resume.pdf` from the owner's Desktop. The owner's earlier CV supplied the January 2027 start and six-month duration shown in availability details. The owner confirmed the email and Delta Holding dates/location in this task. The internship title describes the project work rather than a verified HR title.

Price Monitor screenshots were captured from a local run against its public historical snapshot, without supplier quotes. The case study's numbers are tied to `public/projects/price-monitor/evaluation.md`, an excerpt of the project's generated research results. They do not represent measured business impact.

`skillEvidence` in `data/skills.ts` links demonstrated skills to relevant case-study sections. Unlinked items are labeled “Familiarity”. Power BI, PySpark, MLflow, and Airflow are omitted because the owner has not used them in a project yet.

New entries in `data/projects.ts` appear automatically in the project lists and detail routes.

## Deployment

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the public site origin for metadata and the sitemap.

The default build uses Vinext for Sites/Cloudflare. Vercel uses `vercel.json` and the Next.js build. No database, external API, or secrets are required by the portfolio.

## Project content

Only include claims supported by the project repositories. Keep evaluation results with their context: Aegis-Credit’s reported results belong to its historical 2.1.0 demonstration and do not validate the corrected 2.2.0 model. The diabetes notebook is an educational project.
