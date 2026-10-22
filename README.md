# Hayeon Yun — Research Portfolio

The existing six-route Next.js App Router website, redesigned with a warm off-white background, restrained plum accents, editorial headings, and responsive layouts. It uses the existing React, TypeScript, and Tailwind CSS dependencies; no packages were added.

## Pages and interactions

- / — personal introduction, real portrait, complete biography, research-interest labels, and education
- /research — a laboratory selector beside a persistent detail panel; the first experience is selected initially
- /projects — four project cards and an in-page detail section; UroSense is selected initially
- /publications — four conference citations and three explicitly labeled manuscripts in preparation
- /experience — compact industry and mentoring timeline, awards, and grouped technical skills
- /cv — functional View CV and Download PDF links to the existing /cv.pdf

Research and project selectors use React state and native buttons with pressed/focus states. Use Tab to reach each button and Enter or Space to select. Research detail updates in place. Selecting a project moves focus and scrolls to its detail section without opening a new route. The mobile navigation supports Escape to close and closes on link selection.

## Editing

All existing factual content remains in data/site.ts. Presentation settings are separate exports in the same file:

- homePresentation — introduction heading and research-oriented subtitle
- projectPresentation — card summaries, typographic cover text, and cover color themes

The public directory contains no real project imagery, so the portfolio uses CSS typographic covers. These are visual labels, not experimental diagrams. The original profile.jpg is enlarged and cropped with CSS only; the photo file and its colors are untouched. The real cv.pdf is also unchanged.

## Source structure

- app/globals.css — color palette, typography, layouts, responsive rules, reduced-motion support, and focus/selected states
- app/layout.tsx — shared site frame and preserved footer information
- app/**/page.tsx — the existing six routes
- components/research-explorer.tsx — laboratory selection
- components/project-portfolio.tsx — project selection and covers
- components/entry-detail.tsx — complete descriptions, metadata, contributions, methods, results, limitations, and video
- components/content-sections.tsx — editorial citations and experience layouts
- components/site-nav.tsx, contact-links.tsx, page-heading.tsx — shared navigation and presentation

The former accordion module is retired and has no implementation or consumers. Research and Projects contain no expandable interactions.

## Manual verification

No shell commands, package installs, Git operations, builds, tests, preview servers, or deployment were executed for this redesign. Browser and build verification are still required.

Run these yourself from the project directory:

~~~bash
npm run typecheck
npm run build
npm run dev
~~~

Open http://localhost:3000. Review all six routes at desktop and mobile widths, use keyboard selection in Research and Projects, confirm UroSense is selected initially, play the responsive video, check both contact links, and test the CV view/download buttons.
