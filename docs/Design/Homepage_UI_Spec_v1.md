# Homepage UI Specification v1

## 1. Grid
- **Mobile Structure:** The primary navigational structure for Wing Entries operates on a tight 2-column matrix. The overall container is locked to `max-w-md`.
- **Desktop/Tablet Structure:** The grid organically expands to a 3-column dashboard arrangement to utilize wider aspect ratios without vertically stretching the content.

## 2. Spacing
- **Compression Logic:** Extreme vertical compression is applied to ensure the entire lobby fits within a single viewport.
- **Micro-Spacing:** `2px` (`0.5`) to `8px` (`2`) gaps between tightly coupled elements (e.g., an icon and its label).
- **Macro-Padding:** `16px` (`4`) to `24px` (`6`) padding inside structural cards to maintain touch-friendly density without feeling cluttered.

## 3. Typography
- **Font Family:** Manrope (or modern geometric sans-serif).
- **Hero H1 (Purpose):** 20px to 22px, Bold, tight tracking (`tracking-tight`), leading-snug. Drives the primary mission statement.
- **Hero Subtitle (Founder):** 14px, Medium, `slate-500`. Connects the purpose to the individual.
- **Card Labels:** 14px, Semibold, `slate-800`. Highly legible for primary interaction targets.

## 4. Hero Layout
- **Visual Stacking:** The hero leads text-first. The H1 purpose statement sits at the top, immediately followed by the "Founded by Riya Shah" attribution with a verified badge. 
- **Alignment:** Strictly centered horizontally. This focuses the visitor's eye down the center axis, leading directly into the Avatar and the navigation grid below.

## 5. Cards
- **Geometry:** Generous, friendly corner radiuses (`rounded-3xl`).
- **Internal Padding:** Compressed (`py-3 px-4`) to maximize space.
- **Content Alignment:** Icons and text within Wing Entry cards are perfectly centered both vertically and horizontally.

## 6. Buttons
- **Shape:** Action buttons and dock items are heavily pill-shaped (`rounded-full`).
- **Accessibility:** All interactive button surfaces must maintain a minimum 44x44px touch target, even if the visual element (e.g., an icon) is smaller.

## 7. Glassmorphism
- **Base Style:** `bg-white/70`, `backdrop-blur-md`, `border border-white/40`, `shadow-sm`.
- **Application:** Used specifically for the Wing Entry cards and the Bottom Dock to create physical depth against the ambient background orbs.
- **Contrast Check:** Text rendered atop these surfaces must pass WCAG AA contrast thresholds.

## 8. Icons
- **Library:** Lucide React.
- **Sizing:** 22px to 24px for the primary Wing Entry cards and Bottom Dock actions. 16px to 18px for inline typographical elements (like the verified badge).
- **Styling:** Monotone rendering, inheriting `text-slate-700` or `text-slate-800` to match the surrounding hierarchy. No multi-color complex SVGs.

## 9. Motion
- **Engine:** Framer Motion relying on Spring physics (`stiffness: 300`, `damping: 20`).
- **Entrance:** The lobby must load with a staggered fade-up animation sequence lasting no longer than 0.8s total.
- **Interaction:** Hovering elements scales them up slightly (`scale: 1.02`), while tapping depresses them (`scale: 0.98`), providing immediate, physics-based tactile feedback.

## 10. Responsive Layout
- **Mobile First:** Strictly locked to `100dvh`. Vertical scrolling is disabled. 
- **Tablet/Desktop Scaling:** The Homepage transitions into an expansive, centralized dashboard. The content container centers itself within the viewport and expands horizontally, but vertical scrolling remains intentionally locked to maintain the lobby paradigm.

## 11. Component Usage
- **GlobalLayout:** Manages the base background color, safe-area padding (`pt-safe`, `pb-safe`), and ambient glow orbs.
- **HeroSection:** A dedicated, modular component handling the purpose statement, avatar, and core identity.
- **GlassCard:** Reusable, stateless containers utilized for the Wing Entries and Highlights.
- **BottomDock:** A persistent, floating component housing external navigation.

## 12. Visual Hierarchy
1. **The Purpose (H1 Text):** Highest contrast, largest text weight.
2. **The Founder (Subtitle + Avatar):** Establishes the human connection.
3. **The Pathways (Wing Entry Grid):** The highest interactive weight.
4. **The Proof (Featured Highlights):** Secondary focal points.
5. **The Environment (Background/Dock):** Ambient context and tertiary exits.

## 13. Shadow Rules
- **Prohibition:** No harsh, opaque black drop shadows.
- **Ambient Lift:** Use low-opacity pastel-tinted shadows to elevate elements (e.g., `shadow-[0_20px_60px_-15px_rgba(236,72,153,0.15)]`).
- **Inner Depth:** Utilize subtle inner white highlights (`shadow-[inset_0_0_20px_rgba(255,255,255,0.5)]`) to give glassmorphic cards a solid edge.

## 14. Color Usage
- **Background:** `slate-50` (`#f8fafc`).
- **Primary Typography:** `slate-900` and `slate-800`.
- **Secondary Typography:** `slate-500` and `slate-400`.
- **Ambient Glows:** Soft, heavily blurred orbs of Pastel Cyan (`#22d3ee`) and Pastel Pink (`#f472b6`) placed behind the glass UI.
- **Status/Verification:** Emerald (`#10b981`) for online availability indicators and Cyan/Emerald for verified badges.
