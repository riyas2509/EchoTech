# EchoCard Master UX Blueprint v1

This document defines the overarching User Experience (UX) Blueprint for EchoCard. As the Official Digital Headquarters of EchoTech, the UX is designed not as a set of disconnected pages, but as a continuous, naturally unfolding story of the founder, the company, and its mission.

## 1. Product Experience Map
EchoCard is modeled as a physical headquarters. Visitors enter the Lobby (Home), proceed through the Showcase (Products & Projects), explore the Archives (Experience & Research), and finally reach the Meeting Room (AI Chat & Contact). The experience must feel spatial, intentional, and linear despite offering free exploration.

## 2. Visitor Journey
The core journey follows a "Hook → Context → Evidence → Action" structure:
- **Hook (Home):** The purpose of EchoTech and the founder.
- **Context (About/Discover):** The deep dive into the company's ecosystem.
- **Evidence (Projects/Experience):** The tangible proof of engineering excellence.
- **Action (Contact/AI):** Meaningful engagement or conversion.

## 3. Room Architecture
- **The Lobby:** `Home`. High visual impact, no scrolling on mobile, immediate brand statement.
- **The Product Wings:** `Discover EchoTech`, `Projects`. Scrolling enabled, high information density.
- **The Archives:** `Experience`, `About Me`. Linear timelines, readable typography.
- **The Concierge:** `Let's Talk (AI)`, `Contact`. Focused on inputs and direct communication vectors.

## 4. Navigation Logic
Navigation is hub-and-spoke with lateral bridges. While the Headquarters (Home) serves as the central hub, users can traverse laterally between related topics (e.g., from an EchoTech product directly to a related open-source project) without necessarily returning to the hub, driven by in-content contextual links.

## 5. User Decision Points
At the end of every "Room," the user faces a deliberate decision point. There are no dead ends. Every page ends with a clear CTA directing the user to the next logical step in the narrative (e.g., viewing a project ends with a prompt to contact the founder).

## 6. Entry Paths
- **Organic/Root (`/`):** Experiences the complete linear story.
- **Direct Link (`/projects`):** Starts at Evidence. Must be provided immediate context via a sticky header to understand they are inside EchoTech's broader ecosystem.
- **QR Code:** Lands on Root with a subtle environmental welcome animation.

## 7. Exit Paths
Exits are strictly curated to external validators.
- **Primary Exits:** GitHub (Code validation), LinkedIn (Professional validation).
- **Secondary Exits:** Specific external product demos or research papers.
- **Philosophy:** Keep visitors in the EchoTech ecosystem until they are fully context-aware before offering an exit.

## 8. Cross Navigation
Cross-navigation relies on conceptual linking rather than structural menus. If a user is reading about Riya's experience at a past company, a contextual link will route them to the specific skills or projects that originated there, weaving a cohesive web of information.

## 9. Mobile Flow
- The mobile flow is hyper-vertical and thumb-driven.
- The Home screen is strictly locked to `100dvh` (The One Viewport Rule).
- All subsequent pages use native, buttery-smooth vertical scrolling.
- A persistent bottom dock ensures CTAs are never out of reach.

## 10. Tablet Flow
- Utilizes adaptive grids (e.g., 3-column navigation instead of 2).
- Relies on touch-friendly targets while expanding horizontal content areas to prevent vertical stretching.
- Incorporates side-by-side reading layouts for narrative sections.

## 11. Desktop Flow
- The Home screen transforms into a centralized dashboard or floating control panel.
- Extensive use of cursor-driven micro-interactions, parallax effects, and expansive horizontal spatial layouts.
- Readability is maintained by strictly capping line lengths (`max-w-prose`) despite the larger screen real estate.

## 12. QR Visitor Flow
- Visitors scanning a physical EchoCard are assumed to have real-world context but need digital validation.
- They bypass standard loading states into a highly optimized, instantaneous Headquarters view.
- Content subtly shifts to prioritize "Contact" and "Let's Talk" over deep-dive reading.

## 13. Direct URL Flow
- Bypasses the Headquarters intro.
- A persistent "Back to Headquarters" or "Discover EchoTech" element ensures the user can easily find their way to the start of the narrative funnel if they desire full context.

## 14. Returning Visitor Flow
- Recognized returning visitors (via local storage) experience accelerated animations.
- The UX may subtly surface new projects, recent research, or updated AI knowledge models rather than repeating the foundational introductory story.

## 15. Scroll Behaviour
- Home: Fixed, absolute zero scroll.
- Content Pages: Smooth, native scrolling. Parallax effects are used sparingly on background elements to create depth, but text and interactive elements must scroll predictably without hijacking native scroll physics.

## 16. Transition Behaviour
- Routing between rooms feels like sliding through physical space rather than loading new HTML pages.
- Previous components fade out and scale down slightly (`scale: 0.98`), while new components fade in and scale up from `0.98` to `1`, utilizing Framer Motion spring physics.

## 17. Animation Principles
- Motion explains behavior; it does not just decorate.
- **Speed:** Fast (under 400ms for transitions) to respect the user's time.
- **Physics:** Spring-based (`stiffness: 300, damping: 20`) to feel organic, heavy, and premium.

## 18. CTA Hierarchy
1. **Primary Intent:** Engaging the AI ("Let's Talk") or direct Contact.
2. **Secondary Intent:** Deep-diving into Products or Projects (Validation).
3. **Tertiary Intent:** Reading historical/background information (Experience/About).

## 19. Information Density
- High density is preferred over endless scrolling.
- We trust the user's intelligence. Data is presented cleanly and compactly.
- Padding is compressed to maximize the signal-to-noise ratio within viewable areas, especially on mobile.

## 20. Progressive Disclosure
- EchoCard does not overwhelm the user with all data at once.
- The Headquarters offers only high-level domain summaries.
- Clicking into a domain reveals lists (e.g., all projects).
- Clicking a list item expands into the deepest level of detail (e.g., specific project tech stack and GitHub metrics).
