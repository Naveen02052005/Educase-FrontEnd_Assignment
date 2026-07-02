# PopX - React Onboarding Flow

This is a React implementation of the PopX Adobe XD design. It includes basic onboarding screens like Welcome, Login, Create Account, and Account Settings, connected using React Router.

## Features

- Multi-page onboarding flow using React Router
- Form validation (basic enable/disable button logic)
- Responsive UI based on Adobe XD design
- Account settings page after login/signup
- Clean component structure with reusable UI parts

## Screens

- `/` — Welcome page (Create Account / Already Registered? Login)
- `/login` — Login page (Email, Password — login button works when fields are filled)
- `/signup` — Sign up page (Full Name, Phone, Email, Password, Company, Agency option — create account enabled when required fields are filled)
- `/account-settings` — Account Settings page (profile photo, name, email, bio) — shown after login or signup

## Tech Stack

- React 18
- Vite
- React Router v6
- Plain CSS (no frameworks)
- Styling handled in `src/index.css`

## How to run locally

```bash
npm install
npm run dev
