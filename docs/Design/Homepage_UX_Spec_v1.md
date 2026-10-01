# Homepage UX Specification v1

## 1. User Flow
1. **Arrival:** Visitor lands on the Homepage (the Reception Lobby).
2. **Orientation:** The visitor immediately consumes the Hero statement (EchoTech's purpose) and the Founder connection.
3. **Decision:** The visitor scans the primary entry points (Discover Wing, Explore Wing, Connect Wing) and the featured highlights.
4. **Action:** The visitor selects a wing to dive deeper into the ecosystem or uses the persistent dock to exit to an external validation point (e.g., LinkedIn).

## 2. Interaction Flow
- **Pointer/Hover:** Interactive elements (wing entries, featured products) respond with physics-based scaling (`scale: 1.02`) and slight elevation changes to indicate clickability.
- **Tap/Click:** Triggering an action initiates an immediate routing transition. Buttons physically depress (`scale: 0.98`) to confirm interaction.
- **Feedback:** Interactions are immediate and non-blocking, relying on fluid spring physics rather than linear ease transitions.

## 3. Navigation Logic
- **The Hub Model:** The Homepage acts as an omnidirectional hub. It does not contain deep content itself; rather, it routes users to the deep content.
- **Zero Friction:** Navigation must occur instantaneously without page reloads, preserving the application state.
- **Persistent Anchor:** While the Homepage routes users outward, a mechanism (e.g., a "Back to Headquarters" button on sub-pages) ensures users can instantly return to this central hub at any time.

## 4. Section Order
The Homepage maintains a strict vertical stacking order designed for a single viewport:
1. **Hero Module:** The overarching purpose statement and founder attribution.
2. **Wing Entries:** The primary navigation pathways (Discover, Explore, Connect).
3. **Featured Highlights:** Dynamic slots for the Featured Product, Latest Update, or AI Preview.
4. **Persistent Dock:** The globally available bottom dock housing external communication links.

## 5. Information Hierarchy
1. **The 'Why' (Hero):** The most visually prominent element; establishes the reason EchoTech exists.
2. **The 'Where' (Wings):** The primary structural pathways guiding the user to specific domains of knowledge.
3. **The 'Proof' (Highlights):** Supporting evidence (e.g., a flagship product) that validates the Hero statement.
4. **The 'Who' (Dock):** Contact and social validation vectors.

## 6. Mobile Behaviour
- **The One-Viewport Rule:** The Homepage must perfectly fit within standard mobile viewports (`100dvh`). Vertical scrolling is strictly disabled.
- **Thumb Optimization:** The primary Wing Entries and the Bottom Dock are positioned within the natural reach of the user's thumb.
- **Density:** Padding and margins are heavily compressed to maintain high information density without feeling cluttered.

## 7. Tablet Behaviour
- **Orientation Adaptation:** The layout adapts to utilize wider horizontal real estate (e.g., shifting from stacked rows to wider grids) while strictly maintaining the non-scrolling single viewport preference.
- **Touch Targets:** Tap areas remain generous (minimum 44x44px) to accommodate finger interactions.

## 8. Desktop Behaviour
- **Dashboard Immersion:** The Homepage scales into a centralized, expansive dashboard. It does not stretch mobile elements unnaturally.
- **Cursor Dynamics:** Hover states become more pronounced, utilizing ambient glows or tooltips to reveal secondary information before a click occurs.
- **Scroll Lock:** Vertical scrolling remains disabled; the desktop experience is an immersive control panel.

## 9. Loading States
- **Instantaneous Rendering:** The core architecture relies on static data, demanding near-zero latency load times.
- **Staggered Entrance:** Upon initial load, elements animate into view sequentially (staggered fade-up) over a maximum duration of 0.8s to guide the eye from the Hero down to the Dock.
- **Asset Fallbacks:** High-resolution images (like avatars or product thumbnails) utilize blurred placeholders or skeleton frames until fully decoded to prevent layout shift.

## 10. Error States
- **Data Resilience:** If a dynamic highlight (e.g., Latest Update) fails to parse from the local data layer, the specific module gracefully hides itself rather than breaking the grid layout or displaying an error message.
- **Routing Safety:** As the central hub, the Homepage cannot fail on routing. Any unrecognized internal link automatically defaults back to this stable state.

## 11. Transitions
- **Spatial Movement:** Navigating away from the Homepage should feel like stepping into a new room. 
- **Exit Animation:** The Homepage elements fade out and scale down slightly, while the destination Wing scales up and fades in, creating a physical sense of depth (powered by Framer Motion).

## 12. Calls to Action
- **Primary:** The Wing Entries are large, unmistakable visual targets. They use action-oriented labels (e.g., "Explore Ecosystem").
- **Secondary:** The AI Preview or Featured Product act as contextual CTAs, drawing curiosity-driven clicks.
- **Tertiary:** The Bottom Dock provides constant, unobtrusive exit points for professional contact.

## 13. Progressive Disclosure
- The Homepage is an exercise in restraint. It only displays top-level domain summaries and the most critical highlights.
- Visitors must click into a Wing to reveal exhaustive lists (e.g., all projects or the full timeline). 
- This prevents cognitive overload and ensures the lobby remains a clean, focused orientation space.
