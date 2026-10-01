# Homepage PRD v1

## 1. Purpose
The Homepage serves as the digital reception lobby of the EchoTech Headquarters. Its singular purpose is to instantly orient the visitor, establish the premium nature of the brand, and inspire them to progressively explore the deeper, domain-specific wings of the ecosystem.

## 2. Business Goals
- Establish EchoTech as a leading, authoritative force in human-centered AI products.
- Increase the volume of high-quality professional inquiries.
- Efficiently funnel specific visitor segments (investors, talent, clients) to the most relevant areas of the headquarters.

## 3. Visitor Goals
- Immediately understand EchoTech's core value proposition without scrolling or searching.
- Quickly identify the founder and the architectural philosophy behind the products.
- Experience a frictionless, aesthetically pleasing routing mechanism to find specific information.

## 4. Success Metrics
- **Zero Layout Shift:** The lobby must load instantaneously to maintain the premium feel.
- **Low Bounce Rate:** High percentage of visitors selecting a wing to explore.
- **High Interaction:** Measurable engagement with the Connect Wing and AI Preview elements.

## 5. Content Hierarchy
1. **The Hook:** The Hero Strategy (Purpose + Founder).
2. **The Map:** The Wing Entries (Discover, Explore, Connect).
3. **The Proof:** Featured Product & Latest Update.
4. **The Teaser:** AI Preview.

## 6. Hero Strategy
The hero section must not open with a generic introduction. It must lead with EchoTech’s overarching purpose (e.g., "Building human-centered AI products that reduce cognitive load.") and immediately anchor it to the founder ("Founded by Riya Shah"). This establishes both corporate scale and personal accountability.

## 7. Discover Wing Entry
A visually distinct, compelling gateway (e.g., a glassmorphic card) inviting visitors to understand the overarching vision, brand story, and the founder's detailed narrative.

## 8. Explore Wing Entry
The primary pathway to tangible evidence. This entry point directs visitors to the repository of EchoTech products, open-source projects, engineering timelines, and active research.

## 9. Connect Wing Entry
The conversion-focused gateway. This routes the visitor directly to interactive elements like the Let's Talk AI interface and professional communication vectors (email, LinkedIn).

## 10. Featured Product
A dedicated, dynamic slot within the lobby layout designed to highlight a flagship offering (e.g., EchoPlatform). This serves as immediate proof of capability without requiring the user to navigate away.

## 11. Latest Update
A concise module surfacing the most recent company milestone, shipped feature, or published research. This demonstrates that the headquarters is active, evolving, and maintaining forward momentum.

## 12. AI Preview
A subtle, interactive teaser hinting at the capabilities of the EchoTech AI (Let's Talk). This could be a static prompt example or a micro-interaction that naturally drives curiosity toward the Connect Wing.

## 13. Calls to Action
- **Primary:** Action-oriented labels on Wing Entries (e.g., "Discover EchoTech", "Explore the Ecosystem", "Initiate Contact").
- **Secondary:** Global persistent dock links for immediate external validation (GitHub, LinkedIn).

## 14. Responsive Behaviour
- **Mobile:** Strict adherence to the "One Viewport Rule." The entire lobby experience must fit within `100dvh` without requiring vertical scrolling.
- **Tablet/Desktop:** Expands into a centralized, dashboard-like reception area utilizing wider grid structures, while maintaining a non-scrolling, immersive experience.

## 15. Accessibility
- All text over glassmorphic backgrounds must pass WCAG AA contrast thresholds against the base slate background.
- Full keyboard navigability is required to traverse the Wing Entries and CTAs.
- Screen readers must be provided with descriptive ARIA labels for all visual entry points and ambient background elements.

## 16. Acceptance Criteria
- The Homepage concept strictly aligns with the Master UX Blueprint.
- All 16 sections of this PRD are clearly defined.
- No implementation details or React code are present in this document.
- Stakeholders approve the entry point logic and hero strategy before engineering kickoff.
