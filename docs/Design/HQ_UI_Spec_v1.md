# Headquarters UI Specification v1

## 1. Layout
- **Philosophy:** Mobile-first, mathematically compressed to fit a single viewport without vertical scrolling (The "One Viewport" Rule).
- **Constraints:** Base container is restricted to `max-w-md` on mobile to maintain density.
- **Safe Areas:** Strict enforcement of `pt-safe` and `pb-safe` to avoid device notches, status bars, and home indicators.
- **Alignment:** Content is centrally anchored within the viewport to maintain perfect vertical and horizontal balance.

## 2. Grid
- **Structure:** A strict matrix layout for the primary navigation (GridNav).
- **Mobile Configuration:** 2 columns × 3 rows.
- **Tablet/Desktop Configuration:** Expands to 3 columns × 2 rows to utilize horizontal space without stretching.

## 3. Typography
- **Font Family:** Manrope (or equivalent modern geometric sans-serif).
- **H1 (Hero):** 26px to 32px, Extra Bold, -0.02em tracking. Reserved for the primary founder/company statement.
- **H2 (Section Header):** 20px to 24px, Bold.
- **Body Primary:** 14px to 16px, Medium (slate-800 or slate-900).
- **Body Secondary:** 12px to 13px, Medium (slate-400 or slate-500).
- **Micro Labels:** 10px to 12px, Bold/Semibold, uppercase with wide tracking for badges.

## 4. Spacing
- **Scale:** Based on a 4px increment scale, but highly compressed to achieve the single-viewport goal.
- **Micro Spacing:** 2px (`0.5`), 4px (`1`), and 8px (`2`) for gaps between text and icons.
- **Macro Padding:** 16px (`4`), 20px (`5`), and 24px (`6`) for internal card padding and container margins.

## 5. Components
- **Global Layout:** Handles the base ambient background lighting and safe-area padding.
- **Hero Module:** Features a perfectly circular Avatar (`rounded-full`), the primary H1 typography, and the core identity marker.
- **Bottom Dock:** A floating, pill-shaped (`rounded-full`) container housing external link icons.

## 6. Cards
- **Geometry:** Very generous corner radiuses (`rounded-2xl` or `rounded-3xl`) to convey a friendly, approachable premium feel.
- **Padding:** Compressed internal padding (`py-3 px-4` or `py-4 px-4`) to maximize information density.
- **Content:** Icons and text within GridNav cards must be perfectly centered vertically and horizontally.

## 7. Motion
- **Physics:** All animations driven by Spring physics (e.g., `stiffness: 300`, `damping: 20`). No linear easing.
- **Entrance:** Staggered fade-ups (`staggerChildren: 0.1`) on initial load to guide the eye. Maximum load animation duration of 0.8s.
- **Micro-Interactions:** Physics-based scaling on interaction (Hover: `scale: 1.02`, Tap: `scale: 0.98`).
- **Optimization:** Only animate `transform` and `opacity`.

## 8. Shadows
- **Avoidance:** No harsh black or dark gray drop shadows.
- **Ambient Glows:** Use low-opacity pastel colored shadows to lift elements off the page (e.g., `shadow-[0_20px_60px_-15px_rgba(236,72,153,0.15)]`).
- **Inner Highlights:** Use subtle inner white shadows to make glassmorphic elements pop off the background.

## 9. Glassmorphism
- **Base Style:** `bg-white/70`, `backdrop-blur-md`, `border border-white/40`, `shadow-sm`.
- **Constraint:** Do not aggressively stack heavily blurred elements to prevent visual mud and performance drops.
- **Accessibility:** Text rendered on glassmorphic backgrounds must pass WCAG AA contrast thresholds against the base slate-50 background.

## 10. Icons
- **Library:** Lucide React.
- **Sizing:** 18px for inline text icons; 22px to 24px for GridNav cards and Bottom Dock actions.
- **Styling:** Monotone or dual-tone only. Avoid complex multi-colored SVGs.
- **Color:** Inherit `slate-700` or `slate-800` to match the surrounding text hierarchy.

## 11. Color usage
- **Base Background:** `slate-50` (`#f8fafc`).
- **Text:** `slate-900`/`slate-800` (Primary), `slate-500`/`slate-400` (Secondary).
- **Ambient Gradients:** Pastel Cyan (`#22d3ee`), Pastel Pink (`#f472b6`), Pastel Purple (`#c084fc`) used for background orbs and shadow glows.
- **Status Indicators:** Emerald (`#10b981`) for "Online" or active states.

## 12. Responsive layout
- **Core Principle:** Elements scale proportionally and restructure purposefully. A mobile layout must never just stretch to fill a desktop screen.

### 13. Mobile
- **Viewport:** Strict `100dvh`, zero scrolling.
- **Grid:** 2-column GridNav.
- **Container:** `max-w-md`.
- **Dock:** Fixed bottom center, perfectly sized for thumb reach.

### 14. Tablet
- **Viewport:** Scrolling permitted if necessary, but single-viewport preferred in portrait.
- **Grid:** Expands to 3-column GridNav.
- **Container:** `max-w-2xl` to prevent stretching.
- **Dock:** Fixed bottom center, horizontally scales to accommodate up to 6 icons.

### 15. Desktop
- **Viewport:** Large, centralized dashboard layout, strictly non-scrolling.
- **Grid:** 3-column GridNav or custom masonry dashboard arrangement.
- **Container:** `max-w-4xl` to `max-w-6xl`.
- **Dock:** Adapts to a floating vertical sidebar or remains bottom center based on ergonomic preference.
- **Interactions:** Aggressive but fluid hover states triggered by mouse pointers.
