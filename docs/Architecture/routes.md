# EchoCard Routing Architecture

This document defines every route in EchoCard to prevent route drift as the application grows.

## Core Flow
The user journey starts from Splash and goes sequentially for unauthenticated users, or directly to Home for authenticated users.

Splash → Onboarding → Authentication → Home

## Defined Routes

### Public / Onboarding
- `/` - Splash Screen
- `/onboarding` - First-time user onboarding
- `/auth` - Authentication screen (Login / Sign Up)

### Main Navigation (Bottom Nav)
- `/home` - Main dashboard (Currently "Coming Soon")
- `/profile` - The user's main profile/portfolio
- `/resume` - Resume view
- `/ai` - AI Chat interface
- `/more` or Settings (handled via bottom nav / drawer depending on implementation)

### Sections & Details
- `/about` - About me section
- `/projects` - List of projects
- `/project/:id` - Individual project details
- `/products` - List of products
- `/product/:id` - Individual product details
- `/experience` - Work experience / Timeline
- `/contact` - Contact information

### Management & App Features
- `/analytics` - View card analytics
- `/settings` - App and user settings

### Legal & Fallbacks
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service
- `/not-found` - 404 Error Page (catch-all fallback)
