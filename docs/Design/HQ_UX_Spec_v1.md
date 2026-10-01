# Headquarters UX Specification v1

## 1. User flow
1. **Initial Entry:** Visitor lands directly on the Headquarters page from an external source or root domain.
2. **Immediate Orientation:** Visitor immediately consumes the hero message and founder profile without scrolling.
3. **Primary Decision:** Visitor selects an exploratory path (e.g., navigating to EchoTech Products, AI Chat, or Experience) via the navigation grid.
4. **Secondary Action:** At any point, the visitor utilizes the persistent bottom dock to trigger an exit point (LinkedIn, GitHub, Email).

## 2. Screen hierarchy
1. **Global Persistent Layer:** Bottom-anchored dock for persistent contact actions.
2. **Top-Level Content (The Viewport):** The central hub designed to fit within a single un-scrolled viewport on mobile.
3. **Hero Module:** Prime real estate introducing the Founder and EchoTech identity.
4. **Navigation Module:** A structured grid acting as the primary routing mechanism to sub-experiences.

## 3. Section order
The Headquarters page maintains a strict vertical stacking order:
1. **Hero/Profile Header:** Contains the primary avatar, identity markers, and core brand statement.
2. **Navigation Grid:** A 2x3 matrix of highly visible routing cards leading to domain-specific pages.
3. **Bottom Dock (Floating):** Persistent external action links anchored to the bottom safe area.

## 4. Interaction model
- **Tap/Click:** The primary interaction. Cards and buttons trigger immediate routing or external links.
- **Hover:** On pointer devices, interactive elements elevate or subtly expand to indicate clickability.
- **Micro-interactions:** Interactive elements offer immediate, non-blocking physics-based feedback (e.g., spring compression on tap).

## 5. Navigation logic
- **Omnidirectional Routing:** The Headquarters acts as the central node. All sub-pages must provide a clear, frictionless route back to this Headquarters.
- **Instantaneous Transitions:** Clicking a navigation card immediately transitions the view state to the new domain without a page reload or blocking transition.
- **Persistent Actions:** The bottom dock remains consistently accessible regardless of the active internal route, ensuring critical actions are never more than one interaction away.

## 6. Scroll behaviour
- **Home Viewport:** The Headquarters Home screen must explicitly prevent vertical scrolling. Content is strictly constrained to fit within standard mobile viewports (The "One Viewport" Rule).
- **Sub-pages:** Once a user navigates away from Headquarters to a deep-dive page, smooth, native vertical scrolling is enabled for content consumption.

## 7. Entry points
- **Root Domain (`/`):** The primary and expected entry point, loading the Headquarters screen by default.
- **Direct Sub-route:** If a visitor lands directly on a sub-route (e.g., `/echotech`), they must have a visible mechanism (e.g., a "Back" or "Home" button) to return to the Headquarters.

## 8. Exit points
- **Persistent Dock Links:** External vectors such as LinkedIn, GitHub, or Email.
- **Inline External Links:** Any contextual links embedded within the founder's profile or product descriptions that lead away from the EchoCard domain.

## 9. Calls to action
- **Primary CTAs:** The cards within the navigation grid directing users to internal deep dives (e.g., "View Products", "Let's Talk").
- **Secondary CTAs:** The persistent dock icons driving external engagement (e.g., "Send Email").

## 10. Empty states
- As the Headquarters is statically driven by the local data layer, empty states for core modules (Hero, Nav Grid) should theoretically not occur.
- If a data array for a navigation card is empty, the card should gracefully hide itself rather than displaying a broken or empty container, adapting the grid layout accordingly.

## 11. Loading states
- **Zero-Latency Expectation:** The architecture mandates instantaneous load via static assets.
- **Asset Loading:** Images (e.g., the Founder avatar) must utilize optimized blurring or skeleton placeholders until the high-resolution asset is fully decoded by the browser, preventing layout shift.

## 12. Error states
- **Routing Errors:** Any invalid URL or unmatched route must instantly redirect the visitor back to the Headquarters Home screen without exposing a generic 404 page.
- **Data Integrity:** If the core profile data fails to parse, a highly polished, branded fallback state must maintain the premium feel while indicating the service is temporarily unavailable.

## 13. Responsive behaviour
- **Mobile First:** The grid and hero elements are mathematically sized to fit a mobile screen perfectly. Safe-area padding is strictly enforced.
- **Tablet/Desktop Scaling:** On larger viewports, the single-viewport rule is maintained. The content container remains centered, scaling proportionally or introducing balanced whitespace to prevent elements from stretching uncomfortably. The layout does not infinitely expand.
