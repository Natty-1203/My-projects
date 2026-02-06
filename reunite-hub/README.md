# Reunite Hub

Reunite Hub is a React + Vite single-page application that helps communities report and coordinate responses for missing persons. It provides pages to submit reports, view urgent cases and alerts, access resources, and a moderator API surface for task assignment and moderation actions.

**Key features:**
- **Report submission:** Form for reporting missing persons with media support.
- **Urgent cases & alerts:** Highlight and map critical incidents.
- **Resources directory:** Searchable, filterable resources and contact info.
- **Moderator API helpers:** Client utilities to create, update, assign, and fetch moderation tasks.

**Tech stack:**
- Frontend: React 19, React Router DOM, Vite
- UI: Tailwind CSS (configured), React Icons, Lucide
- Maps: Leaflet + React Leaflet
- State: Zustand
- HTTP: Axios

## Quick start

Prerequisites: Node.js (16+ recommended) and npm.

Install dependencies:

```bash
npm install
```

Run dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

Lint the project:

```bash
npm run lint
```

## Project structure (important files)

- `index.html` — Vite HTML entry
- `src/main.jsx` — React entry; mounts `App`
- `src/App.jsx` — Router provider
- `src/Routes.jsx` — Application routes and layout
- `src/Componenets/` — Reusable UI components (Header, Footer, HeroSection, MapSection, ResourceCard, etc.)
- `src/pages/` — Route pages (Home, SubmitForm, Resources, AlertsMaps, Login, SignUp, Volunteer, ModeratorDashboard)
- `src/Store/resourcesStore.jsx` — Zustand store for resources (filters, fetch logic)
- `src/Data/resources.jsx` — Mock resources data used by the store
- `src/api/moderation.jsx` — Axios helpers for moderation and task assignment endpoints

## Routes overview

Main routes are defined in `src/Routes.jsx`. Notable paths:

- `/` — Home
- `/submitform` — Report a missing person
- `/Resources` — Resource directory
- `/alertsmaps` — Alerts and maps
- `/login`, `/signup`, `/forgotpassword` — Auth pages

## API & moderation client

Client helpers live in `src/api/moderation.jsx` and wrap Axios calls for:

- Fetch, create, update, delete moderation actions
- Assign tasks and fetch assigned tasks

These helpers expect a backend API root under `/api` (proxy or server).

## Development notes

- The resources UI uses mock data from `src/Data/resources.jsx` via `src/Store/resourcesStore.jsx`.
- The project uses Tailwind (see `package.json`) — ensure Tailwind is configured when making style updates.
- Map functionality uses Leaflet; ensure `leaflet` CSS is included when working with map components.

## Contributing

1. Fork the repo and create a branch for your feature/fix.
2. Run the dev server and implement changes.
3. Open a pull request with a clear description.
<<<<<<< HEAD
=======

## License

This repository does not include a license file. Add a `LICENSE` if you intend to open-source the project.

---
If you'd like, I can also:
- add a contributing guide,
- add developer setup for environment variables (API base URL), or
- run quick checks and adjust README details after you confirm any backend endpoints or environment variables.
>>>>>>> 4a842a50169b56a4dd8fea6dfbfe402a7269db67
