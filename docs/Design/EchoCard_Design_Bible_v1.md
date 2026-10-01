# EchoCard Design Bible v1.0
**The Definitive Design Language for EchoTech's Digital Headquarters**

## 1. Design Principles
- **Apple-Inspired Scandinavian Aesthetic:** The design must remain stark, clean, incredibly balanced, and premium. No visual clutter.
- **Intentional Restraint:** Every shadow, blur, and gradient must have a purpose. Do not overuse visual effects.
- **Glassmorphism as Depth:** Translucency and blurs are used exclusively to create physical depth, not just for styling.
- **Typography as Architecture:** Text hierarchy drives the layout. Fonts must be extremely legible, geometrically perfect, and flawlessly tracked.
- **One Viewport Perfection (Mobile):** The most critical view is the mobile home screen. It must fit in a single viewport. It must never scroll.

## 2. Layout System
The layout system is based on a flexible, responsive container max-width approach.
- **Max Width:** The core content container is constrained to `max-w-md` on mobile, but expands intentionally on larger breakpoints.
- **Safe Areas:** Strict enforcement of `pt-safe` and `pb-safe` to avoid device notches and home indicators.
- **Grid Geometry:** The core navigation grid is a strict 2-column layout on mobile, scaling up in deliberate breakpoints.

## 3. Mobile Rules
- **Viewport Constraints:** The Home screen must fit exactly into `100dvh`. No scrolling.
- **Grid:** 2 columns × 3 rows for navigation cards.
- **Density:** Highly compressed vertical spacing. Small margins between components to maximize information density while remaining touch-friendly.
- **Dock:** Fixed glassmorphic dock at the bottom center.

## 4. Tablet Rules
- **Viewport Constraints:** Scrolling is permitted on Home screen if required by orientation, but single viewport is preferred in portrait.
- **Grid Expansion:** 3 columns × 2 rows to utilize the wider screen real estate.
- **Container Sizing:** `max-w-2xl` to prevent content from stretching too thin.
- **Dock:** Fixed bottom dock remains, scaling horizontally to fit up to 6 icons comfortably.

## 5. Desktop Rules
- **Viewport Constraints:** Home screen is a large, centralized, non-scrolling dashboard layout.
- **Grid Expansion:** 3 columns × 2 rows, or a customized dashboard view. Do not stretch mobile UI to fill desktop monitors.
- **Container Sizing:** `max-w-4xl` or `max-w-6xl` depending on content type (e.g., Timeline or Knowledge Base).
- **Dock:** Fixed dock translates into a floating vertical sidebar or stays at bottom center depending on ergonomic preference.
- **Hover States:** Aggressive but smooth scale and color transitions on hover (mouse interactions).

## 6. Typography Scale
Font Family: **Manrope** (or modern geometric sans-serif).
- **H1 (Hero):** 26px to 32px. Extra Bold. Tight tracking (-0.02em).
- **H2 (Section Header):** 20px to 24px. Bold. 
- **Body (Primary):** 14px to 16px. Medium. High contrast text (e.g., `text-slate-800`).
- **Body (Secondary):** 12px to 13px. Medium. Muted text (e.g., `text-slate-500`).
- **Micro/Badges:** 10px to 12px. Bold/Semibold. Uppercase for labels with wide tracking.

## 7. Color Usage
- **Backgrounds:** `slate-50` (`#f8fafc`) as the absolute base.
- **Primary Text:** `slate-900` (`#0f172a`) and `slate-800` (`#1e293b`).
- **Secondary Text:** `slate-500` (`#64748b`) and `slate-400` (`#94a3b8`).
- **Gradients (Ambient):** Pastel Cyan (`#22d3ee`), Pastel Pink (`#f472b6`), Pastel Purple (`#c084fc`).
- **Status (Online):** Emerald (`#10b981`).
- **Borders:** Extremely subtle translucent whites (`white/40`, `white/95`) to define glass edges.

## 8. Glassmorphism Rules
- **Base Recipe:** `bg-white/70 backdrop-blur-md border border-white/40 shadow-sm`.
- **Contrast Check:** Text on glass must meet WCAG AA contrast against the underlying page background.
- **Avoid Stacking:** Do not stack heavily blurred elements on top of each other, as it causes performance degradation and visual mud.

## 9. Shadow System
- **No Harsh Drop Shadows:** Avoid standard black/gray drop shadows.
- **Ambient Glows:** Use low-opacity colored shadows to lift elements. Example: `shadow-[0_20px_60px_-15px_rgba(236,72,153,0.15)]`.
- **Inner Highlights:** Use inner white shadows on elements that need to pop off the page. Example: `shadow-[inset_0_0_20px_rgba(255,255,255,0.5)]`.

## 10. Radius System
- **Avatars:** Perfect circles (`rounded-full`).
- **Cards/Modules:** Very generous corner radiuses (`rounded-3xl` or `rounded-2xl`). Must feel friendly, soft, and approachable.
- **Buttons/Docks:** Pill-shaped (`rounded-full`).

## 11. Motion System
- **Physics-Based:** All animations must use Spring physics (e.g., `stiffness: 300, damping: 20`). No linear or standard ease-in-out transitions.
- **Staggered Entry:** Lists and grids should stagger their entrance (e.g., `staggerChildren: 0.1`).
- **Micro-Interactions:** Tap/Hover states scale slightly (Hover: `scale: 1.02`, Tap: `scale: 0.98`).

## 12. Component Hierarchy
1. **Layout / Scaffold:** `GlobalLayout`, `HeroSection`. Handlers of safe-areas and background ambient lighting.
2. **Structural:** `GlassCard`, `ProjectCard`. Highly reusable, stateless containers.
3. **Atomic:** `Avatar`, `Button`, `Badge`. Focused solely on their visual representation and scaling perfectly within parents.

## 13. Spacing Scale
Based on the standard 4px Tailwind scale, but heavily compressed on mobile.
- **Micro (gap/mt/mb):** `0.5` (2px), `1` (4px), `2` (8px).
- **Macro (paddings):** `4` (16px), `5` (20px), `6` (24px).
- **Extreme Constraints:** Use specific pixel measurements only when matching precise graphic layouts (e.g., Avatar `w-[180px]`).

## 14. Card Rules
- **Proportions:** Maintain consistent aspect ratios (e.g., almost square for mobile grid nav).
- **Padding:** Keep internal padding compressed (`py-3 px-4` or `py-4 px-4`) to maximize information density.
- **Backgrounds:** Strictly glassmorphic or pure white with subtle borders. 
- **Content:** Icons and text must be perfectly centered vertically and horizontally.

## 15. Icon Rules
- **Library:** `lucide-react` as the primary source.
- **Sizing:** 18px for inline elements, 22px-24px for grid navigation and docks.
- **Styling:** Monotone or dual-tone max. Never use complex multi-colored SVGs unless it's a specific brand logo.
- **Color:** Icons typically inherit `slate-700` or `slate-800` to match text hierarchy.

## 16. Navigation Rules
- **Zero Friction:** Navigation must feel instantaneous.
- **Bottom Dock:** Fixed to the bottom. Contains external, professional outlinks only (LinkedIn, GitHub, Email, Website). Maximum 5 items to prevent touch target overlap.
- **Grid Nav:** The primary internal router. 

## 17. Accessibility
- **Touch Targets:** Minimum 44x44px for all interactable elements (buttons, dock items).
- **Contrast:** Ensure all text on glassmorphism passes WCAG contrast thresholds.
- **Screen Readers:** Utilize proper `aria-labels` for icon-only buttons (like the Bottom Dock).

## 18. Responsive Behaviour
- **No Stretching:** A mobile UI stretched across a desktop monitor is unacceptable. 
- **Intentional Restructuring:** 
    - Mobile: 2-column grid.
    - Tablet: 3-column grid.
    - Desktop: Multi-column dashboard or masonry layouts.
- **Ambient Lighting:** Background glow orbs should scale relative to viewport size (`vw/vh`) to ensure they cover the screen naturally.

## 19. Animation Guidelines
- **Performance First:** Animate `transform` and `opacity` exclusively. Never animate `width`, `height`, or `margin` on page load to prevent layout thrashing.
- **Entrance Duration:** Keep initial load animations under 0.8 seconds total duration.
- **Exit Animations:** Ensure components fade out cleanly before the route unmounts if `AnimatePresence` is used.
