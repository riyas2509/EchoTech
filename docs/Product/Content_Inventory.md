# EchoCard Content Inventory

This document serves as the single source of truth for all content displayed within EchoCard, the Official Digital Headquarters of EchoTech.

## 1. Founder
- **Purpose:** To introduce Riya as the visionary and architect behind EchoTech, establishing credibility and a personal connection.
- **Content blocks:** Bio summary, personal ethos, overarching career narrative, philosophical statement on engineering.
- **Priority:** High. This is the cornerstone of the visitor's initial orientation.
- **Dependencies:** `profile.ts` data layer.
- **Supporting assets:** High-resolution professional avatar (`avatar.jpg`).
- **Call-to-action:** "Discover EchoTech" or "View Experience".
- **Future expansion:** Long-form interviews, personal blog links, or spoken-word audio greetings.

## 2. EchoTech
- **Purpose:** To establish the company's identity, mission, and overarching ecosystem.
- **Content blocks:** Company vision, mission statement, core philosophy, overview of the company structure.
- **Priority:** High. Anchors the transition from the individual to the organization.
- **Dependencies:** `profile.ts` and `navigation.ts` data layers.
- **Supporting assets:** Brand logo, ambient background orbs.
- **Call-to-action:** "Explore Products" or "View Research".
- **Future expansion:** Team page, company culture manifesto, or interactive brand timelines.

## 3. Products
- **Purpose:** To showcase EchoTech's primary commercial and flagship offerings (e.g., EchoPlatform, EchoVision).
- **Content blocks:** Product titles, one-sentence pitches, feature highlights, status (Live/Beta).
- **Priority:** High. The primary value driver for enterprise visitors and partners.
- **Dependencies:** `products.ts` data layer.
- **Supporting assets:** Product logos, interface mockups, or abstract visual representations of the tools.
- **Call-to-action:** "Request Access", "View Documentation", or "Try Demo".
- **Future expansion:** Pricing tiers, interactive product demos, customer testimonials.

## 4. Projects
- **Purpose:** To highlight open-source contributions, historical builds, and passion projects that demonstrate engineering depth.
- **Content blocks:** Project names, descriptions, tech stacks, GitHub/Demo links.
- **Priority:** Medium. Essential for recruiting and technical validation.
- **Dependencies:** `projects.ts` data layer.
- **Supporting assets:** GitHub repository metadata, screenshots.
- **Call-to-action:** "View on GitHub" or "Launch Project".
- **Future expansion:** Integrated GitHub metrics (stars, forks), detailed case studies.

## 5. Research
- **Purpose:** To demonstrate EchoTech’s forward-thinking initiatives and bleeding-edge technical explorations.
- **Content blocks:** Research areas (e.g., AI integration, Spatial Computing), whitepaper summaries, experimental findings.
- **Priority:** Medium. Establishes thought leadership.
- **Dependencies:** New `research.ts` data layer.
- **Supporting assets:** Abstract data visualizations, diagrams, or PDF downloads.
- **Call-to-action:** "Read Whitepaper" or "Discuss Findings".
- **Future expansion:** Dedicated interactive research portal, video explainers.

## 6. Experience
- **Purpose:** To validate the Founder's and EchoTech's technical capabilities through past professional milestones.
- **Content blocks:** Roles, companies, dates, key accomplishments, technologies used.
- **Priority:** High (for talent and investor personas).
- **Dependencies:** `experience.ts` data layer.
- **Supporting assets:** Company logos, timeline graphics.
- **Call-to-action:** "Download Resume".
- **Future expansion:** Detailed impact metrics, coworker references.

## 7. Achievements
- **Purpose:** To highlight awards, recognitions, speaking engagements, and notable milestones.
- **Content blocks:** Award titles, issuing organizations, dates, context/descriptions.
- **Priority:** Low. Acts as supplementary credibility.
- **Dependencies:** `achievements.ts` data layer.
- **Supporting assets:** Award badges, event photos.
- **Call-to-action:** "View Certificate" or "Watch Talk".
- **Future expansion:** Dedicated press page, media kit.

## 8. Skills
- **Purpose:** To quickly communicate the technical stack and proficiencies powering EchoTech.
- **Content blocks:** Languages, frameworks, tools, architectural paradigms.
- **Priority:** Medium. 
- **Dependencies:** `skills.ts` data layer.
- **Supporting assets:** Tech stack icons (Lucide or branded SVGs).
- **Call-to-action:** None (purely informational).
- **Future expansion:** Proficiency meters, filtering by domain (Frontend, Backend, AI).

## 9. Media
- **Purpose:** To provide a visual gallery of the Founder, the team, or the products in action.
- **Content blocks:** Image grids, event photos, product lifestyle shots.
- **Priority:** Low. Provides humanizing context.
- **Dependencies:** `gallery.ts` data layer.
- **Supporting assets:** Optimized WebP/AVIF image files.
- **Call-to-action:** "View Full Image".
- **Future expansion:** Video integrations, 3D interactive renders.

## 10. AI Knowledge
- **Purpose:** To serve as the structured context window for EchoCard’s internal LLM/Agent (Let's Talk).
- **Content blocks:** Structured Q&A, detailed system prompts, extensive background lore not visible in the main UI.
- **Priority:** High. Critical for the interactive AI chat experience.
- **Dependencies:** `ai.ts` data layer.
- **Supporting assets:** None (purely textual data).
- **Call-to-action:** "Ask me anything" (Chat input).
- **Future expansion:** Dynamic integration with live external documentation or real-time product updates.

## 11. Contact
- **Purpose:** To provide frictionless vectors for professional and business inquiries.
- **Content blocks:** Email address, LinkedIn profile, GitHub profile, scheduling links.
- **Priority:** High. The ultimate conversion point of the Headquarters.
- **Dependencies:** `contact.ts` and `social.ts` data layers.
- **Supporting assets:** Social media icons.
- **Call-to-action:** "Send Email", "Connect on LinkedIn", "Book a Meeting".
- **Future expansion:** Embedded scheduling widget, integrated contact forms.
