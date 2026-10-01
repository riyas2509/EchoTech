# EchoCard Responsive Architecture Specification

This specification defines the architectural rules governing the layout and behavior of EchoCard across different viewport sizes. The goal is to deliver a bespoke, premium software experience on every device—eschewing the "enlarged phone" approach for desktop in favor of a native, highly structured, dashboard-like environment inspired by Apple, Linear, and Vercel.

---

## 1. Mobile Experience (Up to 767px)

The mobile experience is the purest form of EchoCard. It is hyper-dense, mathematically balanced, and entirely self-contained within a single screen.

- **Grid:** 2-column × 3-row strictly locked grid for the primary navigation.
- **Container Width:** `max-w-md` (centered).
- **Margins:** Minimal outer margins (`mx-auto`). 
- **Padding:** Rely on `pt-safe`, `pb-safe`, and compact horizontal padding (`px-5`).
- **Hero Layout:** Vertical stack. Centered header → Avatar (180px) → Name → Role → Tagline → Navigation Grid.
- **Navigation:** Fixed bottom dock containing core global actions (max 4 icons). Internal routing handled exclusively by the grid cards.
- **Cards:** High density (`py-3 px-4`). Aspect ratio is slightly squarish to maximize touch area while conserving vertical space.
- **Typography:** Base font 14px. Hero Header up to 26px. Very tight tracking.
- **Animations:** Spring-based stagger entrances (`staggerChildren: 0.1`). Focus on smooth fade-ups on mount.
- **Scroll Behaviour:** **NO SCROLLING.** The primary Home screen is locked to `100dvh`. Internal pages (Projects, Experience) may scroll vertically.
- **Image Behaviour:** Avatars perfectly fill containers (`object-cover`). No overflowing elements.
- **Hover Behaviour:** N/A. Replaced by active/tap states (`scale: 0.98`) providing immediate tactile feedback.

---

## 2. Tablet Experience (768px to 1023px)

The tablet experience acts as a bridge, utilizing the wider screen to relax the extreme vertical constraints of mobile while maintaining touch-first ergonomics.

- **Grid:** 3-column × 2-row grid.
- **Container Width:** `max-w-2xl` (centered).
- **Margins:** Generous outer margins to prevent content from stretching edge-to-edge.
- **Padding:** Increased horizontal padding (`px-8` to `px-12`).
- **Hero Layout:** Remains a centered vertical stack but with relaxed spacing (`mb-6`, `mt-4`). The avatar size can subtly increase (up to 200px).
- **Navigation:** Fixed bottom dock expands slightly to comfortably house icons with more generous spacing.
- **Cards:** Wider aspect ratio. Padding increases (`py-5 px-6`).
- **Typography:** Base font 15px. Hero Header scales to 32px.
- **Animations:** Retains spring stagger entrances, but slightly faster to account for the larger field of view.
- **Scroll Behaviour:** Vertical scrolling is permitted if orientation requires it (landscape), but single-viewport lock is preferred for the Home screen in portrait.
- **Image Behaviour:** Images scale proportionally. Project cover images adopt a 16:9 ratio.
- **Hover Behaviour:** Introduction of subtle hover states for devices with pointer support (e.g., iPad Magic Keyboard). `scale: 1.02` with slight opacity lifts.

---

## 3. Desktop Experience (1024px and above)

The desktop experience must not feel like a stretched mobile app. It transitions into a powerful, multi-pane dashboard structure reminiscent of premium developer tools (Linear, Vercel). Information density increases horizontally.

- **Grid:** Shifts to a fluid masonry or a highly structured 4-column layout depending on the internal page (e.g., 2x3 dashboard widgets for Home).
- **Container Width:** `max-w-6xl` or `max-w-7xl` to comfortably utilize widescreen real estate.
- **Margins:** Centered with auto margins, but internal modules have distinct, structural gutters (`gap-6` or `gap-8`).
- **Padding:** Expansive inner padding (`p-10`) for deep-dive content areas (Projects, AI Knowledge Base).
- **Hero Layout:** Transitions to a split-pane layout. Left pane: Fixed identity module (Avatar, Name, Role, Bio). Right pane: Scrollable dynamic content (Grid, Recent Projects, Experience).
- **Navigation:** The bottom dock translates into a sleek, fixed vertical sidebar (left or right) or a premium top navigation bar with glassmorphic blurring.
- **Cards:** Evolve into detailed modules. Hovering over a card reveals secondary metadata, actions, or inline tooltips.
- **Typography:** Base font 16px. Hero Header up to 48px. Introduction of multi-column text layouts for long-form content.
- **Animations:** Highly sophisticated micro-interactions. Magnetic buttons, cursor-tracking ambient glows, and layout-shift animations (Framer Motion `layoutId`).
- **Scroll Behaviour:** The left identity pane remains fixed (sticky). The right content pane scrolls independently, creating a smooth, app-like reading experience.
- **Image Behaviour:** High-resolution optimization. Images utilize sophisticated revealing masks and parallax effects on scroll.
- **Hover Behaviour:** First-class citizen. Deep reliance on `hover` for interactivity. Cards elevate cleanly (`translate-y-[-4px]`), glows intensify, and borders illuminate to provide immediate desktop feedback.
