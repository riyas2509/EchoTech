# EchoCard Visitor Navigation Map

This document defines the complete navigation architecture for EchoCard, designed to encourage progressive discovery of EchoTech rather than disjointed, random exploration.

## 1. Primary Navigation
- **Structure:** The central 2x3 (or 3x2) GridNav located on the Headquarters Home page.
- **Purpose:** Acts as the primary routing mechanism to the core conceptual pillars of EchoTech.
- **Items:** Discover EchoTech, Experience, Projects, About Me, Let's Talk (AI), Contact.
- **Behaviour:** Routes the visitor to dedicated deep-dive pages. It is always accessible by returning to the Headquarters.

## 2. Secondary Navigation
- **Structure:** The persistent floating Bottom Dock.
- **Purpose:** Provides omnipresent access to critical conversion and external validation points without requiring the user to navigate back to the Home page.
- **Items:** LinkedIn, GitHub, Email, Scheduling.

## 3. Deep Links
- **Definition:** Specific anchor links or child routes within primary sections (e.g., `/echotech#echovision` or `/projects/echo-platform`).
- **Purpose:** Allows external linking directly to specific evidence of competence, bypassing the general introduction when appropriate (e.g., sending an investor directly to a product page).

## 4. Entry Points
- **The Front Door (`/`):** The default Headquarters Home screen.
- **Direct Domain Links:** Direct links to sub-routes (e.g., `/echotech`). These must instantly provide context and a clear, frictionless "Back to Headquarters" button.

## 5. Exit Points
- **Controlled Exits:** The Bottom Dock links leading to LinkedIn and GitHub.
- **In-Content Exits:** Specific external links embedded within Project or Product descriptions (e.g., a link to a live demo or a research paper).
- **Philosophy:** Exit points are strictly curated. The goal is to keep the visitor inside the EchoCard ecosystem until they are ready to convert (contact/connect).

## 6. Internal Linking
- **Progressive Disclosure:** Pages naturally link to the next logical step in the narrative. For example, the Founder's "About Me" page includes a CTA linking to the "Experience" page, and the "Experience" page links to specific "Projects".
- **Cross-pollination:** Relevant EchoTech products link directly to the underlying research or engineering achievements that power them.

## 7. CTA Flow
- **Stage 1 (Orientation):** "Discover EchoTech" (moves visitor from Hero to Ecosystem).
- **Stage 2 (Validation):** "View Engineering" or "Explore Projects" (moves visitor from Ecosystem to Proof of Work).
- **Stage 3 (Conversion):** "Let's Talk", "Connect on LinkedIn", or "Send Email" (moves visitor from Validation to Action).

## 8. Recommended Visitor Journeys
- **The Partner/Investor Journey:** Headquarters → Discover EchoTech → Founder Experience → Contact.
- **The Talent/Engineer Journey:** Headquarters → Projects → Let's Talk (AI Chat) → GitHub Exit.
- **The General Explorer:** Headquarters → About Me → Discover EchoTech → Projects → Bottom Dock Socials.

## 9. Mobile Navigation
- **Hub and Spoke:** Relies heavily on the central Headquarters hub. Deep pages utilize a prominent, thumb-friendly "Back" button (usually top-left) to return to the hub.
- **Dock:** The secondary navigation dock remains fixed at the bottom center, above the safe area, easily reachable by the thumb.

## 10. Desktop Navigation
- **Expansive Context:** The Headquarters GridNav remains central, but deep pages may utilize a persistent sidebar or a sticky top header to allow lateral movement between sections without constantly returning to the Home hub.
- **Hover States:** Navigation relies on rich hover interactions to preview destinations.

## 11. QR Entry Behaviour
- **Context:** When a user scans a physical EchoCard or presentation QR code.
- **Routing:** Lands strictly on the Headquarters (`/`) to ensure the complete brand narrative is established first.
- **Onboarding:** A subtle, temporary banner or animation ("Welcome via QR") may trigger to acknowledge the physical-to-digital transition.

## 12. Direct URL Behaviour
- **Context:** When a user types or pastes a specific sub-route (e.g., `echocard.io/projects`).
- **Routing:** Loads the specific page immediately (zero friction).
- **Fallback:** If a route is invalid, it fails gracefully by instantaneously redirecting to the Headquarters (`/`) without flashing a 404 error page.
