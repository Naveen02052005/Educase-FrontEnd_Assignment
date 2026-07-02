# PopX - React Onboarding Flow

A pixel-oriented React implementation of the PopX Adobe XD prototype: Welcome, Login, Create Account, and Account Settings screens, wired together with React Router.

## Screens

- `/` — Welcome (Create Account / Already Registered? Login)
- `/login` — Sign in (Email, Password — Login button enables once both fields are filled)
- `/signup` — Create account (Full Name, Phone, Email, Password, Company, Agency radio — Create Account button enables once required fields are filled)
- `/account-settings` — Account Settings (profile photo, name, email, bio) — reached after a successful login or signup

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (typically `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Deploy

**Vercel**
```bash
npm i -g vercel
vercel
```
Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.

**Netlify**
```bash
npm i -g netlify-cli
netlify deploy --build
```
Build command: `npm run build`. Publish directory: `dist`.

## Push to GitHub

```bash
git init
git add .
git commit -m "PopX React implementation"
git branch -M main
git remote add origin <your-empty-github-repo-url>
git push -u origin main
```

## Tech

- React 18 + Vite
- React Router v6
- Plain CSS (no framework), design tokens in `src/index.css`
