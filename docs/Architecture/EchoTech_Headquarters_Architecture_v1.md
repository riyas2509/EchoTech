# EchoTech Headquarters Architecture v1

This document defines the complete architectural hierarchy and page-by-page breakdown of the EchoTech Headquarters website. It serves as the definitive source of truth for the structure of the digital ecosystem. EchoTech Headquarters is not a personal portfolio or digital business card; it is the official corporate locus for visitors to understand the company, discover products, and interact with the brand.

## Navigation Hierarchy
- **Homepage (Reception)**
  - Vision Hall
  - Products
    - EchoCard
    - EchoNote
    - Thinkoria
    - ProtoLens
    - LifeCapital
  - Research
  - Founder Studio
  - AI Experience
  - News & Updates
  - Contact

---

## 1. Reception (Homepage)

**Purpose:** Introduce EchoTech in under 10 seconds and serve as the central routing hub.
**Target Audience:** All visitors (investors, talent, clients, peers).
**Primary Goal:** Establish premium brand identity and drive traffic to specific internal wings.

**Navigation Path:** `/`
**Expected User Journey:** Arrive -> Read Hero Purpose -> Scan Featured Product -> Select a specific wing to dive deeper.
**Estimated Reading Time:** < 30 seconds

**Sections:**
1. Hero (Building Human-Centered AI)
2. Vision (Mission statement preview)
3. Featured Products (Current focus, e.g., EchoNote)
4. Latest Research (Recent publications)
5. Why EchoTech (Philosophy summary)
6. Founder (Brief Riya Shah attribution)
7. Call to Action (Routing)
8. Footer (Minimal)

**Call To Actions:**
- **Primary CTA:** Enter Headquarters
- **Secondary CTA:** Explore Our Products

**Components Used:**
`HeroSection`, `GlassCard`, `ProductBadge`, `SectionHeader`, `SectionFooter`, `GlobalLayout`.

**Responsive Behaviour:**
- **Mobile:** Single viewport lock (`100dvh`), vertical stacking, thumb-friendly CTAs.
- **Desktop:** Expansive dashboard feel, max-width constraints, horizontal spatial distribution.

**Accessibility Notes:** Strict color contrast on hero text overlaying glassmorphic backgrounds. Full keyboard navigation for the 3 primary experience cards.
**Animation Notes:** Staggered spring-physics fade up on initial load. Hover states lift cards slightly.
**Future Expansion:** Dynamic injection of personalized greetings for returning users.
**Acceptance Criteria:** Page renders fully under 1.5 seconds without layout shift. Hero immediately communicates "EchoTech."

---

## 2. Vision Hall

**Purpose:** Explain the Mission, Vision, Philosophy, Values, Long-term direction, and Future of EchoTech.
**Target Audience:** Investors, potential hires, deep-dive researchers.
**Primary Goal:** Cultivate deep trust and alignment with EchoTech's core beliefs.

**Navigation Path:** `/vision`
**Expected User Journey:** Reception -> Vision Hall -> Products (to see vision applied).
**Estimated Reading Time:** 3 - 5 minutes

**Sections:**
1. Mission Statement
2. Vision (The 10-year outlook)
3. Core Philosophy (Human-centered design, cognitive load reduction)
4. Values (Engineering excellence, minimal clutter)
5. Long-term Direction

**Call To Actions:**
- **Primary CTA:** Explore Our Products
- **Secondary CTA:** Read Latest Research

**Components Used:**
`TwoColumnLayout`, `InformationCard`, `TimelineCard`, `SectionHeader`.

**Responsive Behaviour:** Text-heavy layout transitions from single-column on mobile to side-by-side readable prose blocks on desktop to maintain `max-w-prose` line lengths.
**Accessibility Notes:** Text line-height (`leading-relaxed`) optimized for readability.
**Animation Notes:** Parallax scrolling on ambient backgrounds to create depth behind text.
**Future Expansion:** Interactive 3D visualization of the 10-year roadmap.
**Acceptance Criteria:** Philosophy reads clearly without overwhelming the user; distinct transition between current values and future direction.

---

## 3. Products

**Purpose:** Introduce every EchoTech product comprehensively.
**Target Audience:** Users, enterprise clients, tech press.
**Primary Goal:** Demonstrate technical capability and convert interest into product adoption or waitlist signups.

**Navigation Path:** `/products` and `/products/[id]`
**Expected User Journey:** Reception -> Products Hub -> Individual Product Page -> CTA.
**Estimated Reading Time:** 2 minutes per product

**Sections (Per Product):**
1. Hero (Product Title & Subtitle)
2. Overview (High-level value prop)
3. Features (Grid of capabilities)
4. Technology (Tech stack and engineering feats)
5. Screenshots (Visual proof)
6. Roadmap (Upcoming updates)
7. FAQ (Common questions)
8. CTA (Get Access / Waitlist)

**Call To Actions:**
- **Primary CTA:** Try [Product Name] / Join Waitlist
- **Secondary CTA:** View Documentation / Architecture

**Components Used:**
`ProductShowcase`, `FeatureGrid`, `ProductCard`, `Accordion` (for FAQ), `ProductBadge`.

**Responsive Behaviour:** Product screenshots stack above text on mobile. On desktop, they alternate left/right for narrative flow.
**Accessibility Notes:** Screen readers must announce the product status (Active, Beta, Concept) clearly via hidden text or ARIA labels.
**Animation Notes:** Screenshots scale up subtly when scrolled into view.
**Future Expansion:** Automatic hydration of new product pages via a CMS or JSON data layer without requiring structural React changes.
**Acceptance Criteria:** Current products (EchoCard, EchoNote, Thinkoria, ProtoLens, LifeCapital) all have distinct, fully structured pages matching this schema.

---

## 4. Research

**Purpose:** Publish research papers, whitepapers, articles, experiments, AI studies, and industry reports.
**Target Audience:** Academics, AI engineers, tech enthusiasts.
**Primary Goal:** Establish EchoTech as a thought leader in cognitive AI and human-centered design.

**Navigation Path:** `/research`
**Expected User Journey:** Reception -> Research Hub -> Specific Paper -> Connect (for collaboration).
**Estimated Reading Time:** 5 - 15 minutes per paper

**Sections:**
1. Featured Study
2. Filter/Search Bar
3. Publications Grid (Papers, Whitepapers, Experiments)
4. Newsletter Signup

**Call To Actions:**
- **Primary CTA:** Read Full Paper
- **Secondary CTA:** Subscribe to Research Updates

**Components Used:**
`ThreeColumnGrid`, `InformationCard`, `TextInput` (Search), `SectionHeader`.

**Responsive Behaviour:** Grid transitions from 1 column (mobile) to 2 (tablet) to 3 (desktop).
**Accessibility Notes:** All PDFs or external links must indicate they open in a new tab.
**Animation Notes:** Instant filtering without page reload.
**Future Expansion:** Integration of an AI summarizer for long-form whitepapers.
**Acceptance Criteria:** Visitors can clearly distinguish between a formal whitepaper and a casual experiment based on the UI card tag.

---

## 5. Founder Studio

**Purpose:** Tell the founder's story without feeling like a standard portfolio or resume. Frame the founder as the architect of EchoTech.
**Target Audience:** Media, investors, networking peers.
**Primary Goal:** Humanize the company and build authority through the founder's track record.

**Navigation Path:** `/founder`
**Expected User Journey:** Vision Hall -> Founder Studio -> Connect.
**Estimated Reading Time:** 3 minutes

**Sections:**
1. Introduction (The Architect behind EchoTech)
2. Journey (Narrative arc)
3. Experience Timeline (Career history)
4. Research (Personal contributions)
5. Speaking (Talks and keynotes)
6. Awards (Industry recognition)
7. Current Focus (What Riya is building today)
8. Media (Press kit/photos)
9. Connect (Direct outreach)

**Call To Actions:**
- **Primary CTA:** Connect on LinkedIn
- **Secondary CTA:** Download Press Kit

**Components Used:**
`TimelineCard`, `ProfileCard`, `GalleryCard`, `SectionHeader`.

**Responsive Behaviour:** Timelines collapse from dual-track alternating (desktop) to single-track left-aligned (mobile).
**Accessibility Notes:** Chronological DOM ordering is strictly enforced for the timeline.
**Animation Notes:** Timeline nodes draw downward as the user scrolls.
**Future Expansion:** Interactive AMA (Ask Me Anything) AI instance trained specifically on the founder's public history.
**Acceptance Criteria:** The page feels like a corporate "About the Founder" section, not a standalone personal resume site.

---

## 6. AI Experience

**Purpose:** Allow visitors to interact directly with EchoTech AI.
**Target Audience:** All visitors curious about EchoTech's technical capabilities.
**Primary Goal:** Demonstrate AI competency through a live, flawless interaction.

**Navigation Path:** `/ai`
**Expected User Journey:** Reception -> AI Experience -> Products (driven by AI recommendation).
**Estimated Reading Time:** Interactive (Variable)

**Sections:**
1. Interactive Chat Interface
2. Prompt Suggestions
3. AI Capabilities Overview

**Call To Actions:**
- **Primary CTA:** Send Prompt
- **Secondary CTA:** Explore Recommended Product

**Components Used:**
`AICard`, `SuggestedQuestions`, `TypingIndicator`, `GlassCard`.

**Responsive Behaviour:** Max width of chat interface constrained on desktop to ensure readable line lengths. Keyboard pushes UI up smoothly on mobile.
**Accessibility Notes:** `aria-live="polite"` applied to the AI response container to announce incoming text to screen readers.
**Animation Notes:** Messages pop in with spring physics.
**Future Expansion:** Full Knowledge Assistant capable of searching Research papers and suggesting EchoTech products based on user needs.
**Acceptance Criteria:** The interface must feel immediately responsive, with no layout jumping when the typing indicator appears.

---

## 7. News & Updates

**Purpose:** Host company updates, product launches, research updates, and achievements.
**Target Audience:** Returning visitors, press, community.
**Primary Goal:** Show momentum and active development.

**Navigation Path:** `/news`
**Expected User Journey:** Homepage (Latest Update widget) -> News Hub.
**Estimated Reading Time:** 2 minutes per article

**Sections:**
1. Headline News
2. Update Feed (Chronological)
3. Press Mentions

**Call To Actions:**
- **Primary CTA:** Read Update
- **Secondary CTA:** Press Enquiries (routes to Contact)

**Components Used:**
`FeatureCard`, `TwoColumnLayout`, `SectionHeader`.

**Responsive Behaviour:** Fluid masonry or standard grid depending on article thumbnail aspect ratios.
**Accessibility Notes:** Semantic `<article>` tags for each news item.
**Animation Notes:** Standard fade-up on scroll.
**Future Expansion:** RSS Feed integration and automated cross-posting to social channels.
**Acceptance Criteria:** The feed cleanly separates major product launches from minor company updates visually.

---

## 8. Contact

**Purpose:** Facilitate business enquiries, hiring, research collaboration, investor relations, media contact, and support.
**Target Audience:** High-intent visitors.
**Primary Goal:** Route the user to the correct communication channel instantly.

**Navigation Path:** `/contact`
**Expected User Journey:** Any Page -> Footer/Nav CTA -> Contact -> Form Submission/Email.
**Estimated Reading Time:** < 1 minute

**Sections:**
1. Intent Routing (I am looking to...)
2. Contact Details (Email/Socials)
3. Direct Message Interface

**Call To Actions:**
- **Primary CTA:** Send Message
- **Secondary CTA:** Connect with Founder (LinkedIn)

**Components Used:**
`ContactCard`, `TextInput`, `PrimaryButton`, `GlassCard`.

**Responsive Behaviour:** Forms stack vertically on all devices to maintain input ergonomics.
**Accessibility Notes:** Explicit `<label>` associations for all form inputs. High-contrast focus rings.
**Animation Notes:** Form validation errors shake horizontally (`motion.spring.stiff`).
**Future Expansion:** Direct scheduling integration (e.g., Cal.com/Calendly) for qualified investor/media leads.
**Acceptance Criteria:** Clear routing so support tickets do not mix with investor inquiries. Visual success state upon message sending.
