# EchoTech Component Library v1.0

This library is the single source of truth for every reusable component across the EchoTech ecosystem (EchoCard, EchoNote, EchoOS, Thinkoria, ProtoLens, LifeCapital). Every component strictly adheres to the EchoTech Design System v2.0 and Design Tokens v1.

---

## FOUNDATIONS

### Colors, Typography, Spacing, Tokens, Motion
*Note: Foundations act as utility wrappers and providers rather than strict visual components. They enforce the tokens across the ecosystem.*
- **Purpose:** To inject the EchoTech design tokens (brand, semantic, spacing, motion) into the component tree.
- **Variants:** GlobalProvider, ThemeProvider, MotionProvider.
- **States:** Active, Idle.
- **Responsive Behaviour:** Scales fluidly based on viewport (`sm`, `md`, `lg`).
- **Accessibility:** Injects `prefers-reduced-motion` fallbacks globally.
- **Animation:** None natively; enables `motion.spring.stiff` for children.
- **Spacing:** Establishes the global `space.8` base grid.
- **Tokens Used:** All tokens defined in `EchoTech_Design_Tokens_v1.md`.
- **Do:** Wrap the root of the application in Foundation providers.
- **Don't:** Hardcode hex codes or pixel values inside downstream components.
- **Acceptance Criteria:** Changing a token in the Foundation instantly updates the entire ecosystem without visual regressions.

---

## NAVIGATION

### Top Navigation
- **Purpose:** Primary horizontal routing and brand anchoring.
- **Variants:** Transparent, Glass (`bg-white/70`), Solid.
- **States:** Default, Scrolled (elevated shadow), Mobile-collapsed.
- **Responsive Behaviour:** Collapses to a hamburger menu on `mobile`. Expands to inline links on `desktop`.
- **Accessibility:** `<nav>` semantic tag. ARIA role `navigation`. Keyboard tab-order enforced.
- **Animation:** Background blurs and fades in on scroll (`duration.normal`).
- **Spacing:** `space.16` vertical padding, `space.24` horizontal.
- **Tokens Used:** `surface.glass.light`, `shadow.md`, `blur.lg`.
- **Do:** Keep the EchoTech logo visible at all times.
- **Don't:** Overload with more than 5 primary links.
- **Acceptance Criteria:** Passes WCAG AA contrast against dynamic scrolling backgrounds.

### Bottom Navigation
- **Purpose:** Ergonomic mobile routing for primary user flows.
- **Variants:** Fixed Dock, Floating Pill.
- **States:** Default, Active Tab, Inactive Tab.
- **Responsive Behaviour:** Visible only on `mobile` and `tablet`. Hidden on `desktop`.
- **Accessibility:** `aria-current="page"` for active tab. Touch targets minimum 44x44px.
- **Animation:** Active state uses a spring-based indicator slide.
- **Spacing:** `space.8` between icons, `space.16` padding.
- **Tokens Used:** `surface.glass.light`, `shadow.ambient`, `border.glass`.
- **Do:** Anchor to the bottom safe area.
- **Don't:** Hide critical actions solely inside the bottom nav if it disappears on desktop.
- **Acceptance Criteria:** Does not obscure footer content when scrolled to the absolute bottom.

### Sidebar
- **Purpose:** Deep internal routing for complex products (EchoOS, EchoNote).
- **Variants:** Collapsible, Persistent, Overlay.
- **States:** Expanded, Collapsed, Hovered.
- **Responsive Behaviour:** Hidden on mobile (becomes a drawer). Fixed left on desktop.
- **Accessibility:** Focus trap when used as a mobile drawer overlay.
- **Animation:** Width transitions using `motion.spring.gentle`.
- **Spacing:** `space.24` internal padding.
- **Tokens Used:** `surface.base`, `border.subtle`, `text.secondary`.
- **Do:** Provide a clear toggle mechanism.
- **Don't:** Place primary call-to-actions at the bottom of a scrolling sidebar.
- **Acceptance Criteria:** Width remains consistent (e.g., 240px) when expanded across all products.

### Floating Navigation
- **Purpose:** Contextual actions floating above the content.
- **Variants:** Pill, Circle.
- **States:** Visible, Hidden on scroll down, Visible on scroll up.
- **Responsive Behaviour:** Adapts position to avoid overlapping the Bottom Navigation on mobile.
- **Accessibility:** High contrast, `aria-label` required.
- **Animation:** Y-axis translation (`duration.normal`, `motion.ease.out`).
- **Spacing:** Placed `space.24` from screen edges.
- **Tokens Used:** `surface.elevated`, `shadow.lg`, `z.sticky`.
- **Do:** Use for primary page actions (e.g., "Create Note").
- **Don't:** Stack multiple floating navigations.
- **Acceptance Criteria:** Seamlessly hides/shows based on scroll velocity direction.

### Breadcrumb
- **Purpose:** Indicate current hierarchical location and allow upward traversal.
- **Variants:** Text-only, Icon-prefixed.
- **States:** Default, Hover, Truncated.
- **Responsive Behaviour:** Middle levels truncate to `...` on mobile screens.
- **Accessibility:** `aria-label="Breadcrumb"`.
- **Animation:** Instant hover states.
- **Spacing:** `space.8` between items.
- **Tokens Used:** `text.secondary`, `text.primary` (for active), `icon.sm`.
- **Do:** Use for nested structures deeper than 2 levels.
- **Don't:** Use as primary navigation.
- **Acceptance Criteria:** Truncation logic executes perfectly without horizontal scrolling.

---

## HERO

### Hero
- **Purpose:** Establish the primary value proposition at the top of an experience.
- **Variants:** Centered, Split (Text left, Asset right).
- **States:** Loading, Loaded.
- **Responsive Behaviour:** Stacks vertically on mobile. Left-aligns or maintains center on desktop.
- **Accessibility:** H1 header enforcement. Contrast checks against ambient backgrounds.
- **Animation:** Staggered fade-up (`duration.slow`) for children elements.
- **Spacing:** `space.64` top padding, `space.32` internal vertical spacing.
- **Tokens Used:** `type.display`, `type.body.large`, `text.primary`.
- **Do:** Keep the message concise and immediately impactful.
- **Don't:** Overload with multiple conflicting CTAs.
- **Acceptance Criteria:** Must render the H1 above the fold on a standard mobile device (iPhone 13).

### Hero CTA
- **Purpose:** Primary conversion mechanism within the Hero.
- **Variants:** Primary Pill, Dual Action (Primary + Ghost).
- **States:** Default, Hover (`scale.up`), Active (`scale.down`).
- **Responsive Behaviour:** Full width on mobile, inline on desktop.
- **Accessibility:** Minimum touch target size. Clear actionable text.
- **Animation:** `motion.spring.stiff` on interaction.
- **Spacing:** `space.16` padding.
- **Tokens Used:** `brand.primary`, `shadow.md`, `text.inverse`.
- **Do:** Pair with an icon (e.g., ArrowRight) to indicate forward momentum.
- **Don't:** Use red or negative colors.
- **Acceptance Criteria:** Depresses visually upon interaction before triggering routing.

### Hero Product Preview
- **Purpose:** Visual anchor accompanying the Hero text.
- **Variants:** Mockup, Abstract Orb, Dashboard Preview.
- **States:** Initial, Floating (ambient animation).
- **Responsive Behaviour:** Scales proportionally. Hidden on ultra-small mobile screens if necessary.
- **Accessibility:** `alt` text defining the product UI being shown.
- **Animation:** Infinite Y-axis floating (`duration: 4s`, ease-in-out).
- **Spacing:** `space.32` margin from text.
- **Tokens Used:** `shadow.ambient`, `radius.2xl`.
- **Do:** Use high-resolution or vector assets.
- **Don't:** Use complex, heavy videos that degrade Time to Interactive (TTI).
- **Acceptance Criteria:** Animation pauses if `prefers-reduced-motion` is active.

---

## BUTTONS

### Primary
- **Purpose:** Principal call to action on a page.
- **Variants:** Standard, Large, Icon-only.
- **States:** Default, Hover, Active, Disabled, Loading.
- **Responsive Behaviour:** Scales to 100% width on mobile if inside a standard container.
- **Accessibility:** `role="button"`. Sufficient contrast (e.g., White on Slate 900).
- **Animation:** Hover scales up (`1.02`), Tap scales down (`0.98`).
- **Spacing:** `space.16` horizontal, `space.8` vertical.
- **Tokens Used:** `text.inverse`, `radius.full`, `shadow.sm`.
- **Do:** Limit to one per view context.
- **Don't:** Use for destructive actions.
- **Acceptance Criteria:** Loading state displays a spinner and disables click events.

### Secondary
- **Purpose:** Alternative actions supporting the Primary button.
- **Variants:** Outline, Glass.
- **States:** Default, Hover (solidifies background), Active, Disabled.
- **Responsive Behaviour:** Matches Primary button width rules.
- **Accessibility:** Outline contrast must pass WCAG AA against background.
- **Animation:** `motion.fast` background color transition.
- **Spacing:** Matches Primary.
- **Tokens Used:** `border.subtle`, `surface.glass.light`, `text.primary`.
- **Do:** Use for "Cancel" or "Learn More".
- **Don't:** Make visually heavier than the Primary button.
- **Acceptance Criteria:** Border does not shift layout when hovered.

### Ghost
- **Purpose:** Low priority actions.
- **Variants:** Text only, Icon + Text.
- **States:** Default, Hover (subtle background), Active, Disabled.
- **Responsive Behaviour:** Inline block.
- **Accessibility:** Text contrast is critical.
- **Animation:** Opacity and background fade (`duration.fast`).
- **Spacing:** Minimal, `space.4`.
- **Tokens Used:** `text.secondary`, `state.hover.bg`.
- **Do:** Use for repetitive list actions.
- **Don't:** Use for form submissions.
- **Acceptance Criteria:** Hover background perfectly encapsulates the text bounds.

### Text
- **Purpose:** Inline links and tertiary actions.
- **Variants:** Underlined, Arrow-appended.
- **States:** Default, Hover (color shift), Active.
- **Responsive Behaviour:** Wraps natively with text.
- **Accessibility:** Must be distinguishable from standard body text.
- **Animation:** Arrow translates X on hover.
- **Spacing:** Inherits text spacing.
- **Tokens Used:** `brand.primary`, `type.body.base`.
- **Do:** Use inside paragraphs.
- **Don't:** Use as the main CTA of a Hero section.
- **Acceptance Criteria:** Tab focus creates a clear outline ring.

---

## CARDS

### Hero Card
- **Purpose:** Highlight a premier piece of content or product entry point.
- **Variants:** Dark mode bias, Light mode bias, Gradient mesh.
- **States:** Default, Hover (ambient lift).
- **Responsive Behaviour:** Full width on mobile, spans multiple grid columns on desktop.
- **Accessibility:** Entire card acts as a single touch target; semantic HTML button or anchor.
- **Animation:** `shadow.ambient` increases opacity on hover.
- **Spacing:** `space.32` internal padding.
- **Tokens Used:** `radius.2xl`, `surface.glass.light`, `shadow.lg`.
- **Do:** Use vivid imagery or abstract gradients.
- **Don't:** Clutter with dense typography.
- **Acceptance Criteria:** Hover states do not trigger internal layout shifts.

### Product Card
- **Purpose:** Showcase an EchoTech product (e.g., EchoNote, ProtoLens).
- **Variants:** Vertical Stack, Horizontal Row.
- **States:** Default, Hover (border illuminates to Product Color Token), Active.
- **Responsive Behaviour:** Horizontal on desktop, stacks vertical on mobile.
- **Accessibility:** Contains visually hidden text describing the product status.
- **Animation:** Icon scales up slightly on hover.
- **Spacing:** `space.24` internal padding.
- **Tokens Used:** `product.*` specific colors, `surface.elevated`, `border.subtle`.
- **Do:** Include the specific product logo and status badge.
- **Don't:** Mix multiple product colors in one card.
- **Acceptance Criteria:** The border matches the product's primary color when hovered.

### Feature Card
- **Purpose:** Explain a specific capability or benefit.
- **Variants:** Icon Left, Icon Top.
- **States:** Static, rarely interactive.
- **Responsive Behaviour:** Fits into 2 or 3 column grids depending on viewport.
- **Accessibility:** Meaningful iconography with alt text if complex.
- **Animation:** Staggered entrance on scroll view.
- **Spacing:** `space.16` padding.
- **Tokens Used:** `surface.base`, `radius.lg`, `text.primary`.
- **Do:** Keep copy to 2-3 short lines.
- **Don't:** Use for primary navigation.
- **Acceptance Criteria:** Scales fluidly in CSS Grid without breaking.

### Timeline Card
- **Purpose:** Display historical milestones, experience, or education.
- **Variants:** Left aligned, Alternating (Desktop only).
- **States:** Default.
- **Responsive Behaviour:** Alternating collapses to left-aligned on mobile.
- **Accessibility:** Linear chronological reading order in the DOM.
- **Animation:** Connecting line draws downward as user scrolls.
- **Spacing:** `space.16` from timeline track.
- **Tokens Used:** `border.subtle`, `text.secondary`.
- **Do:** Clearly separate date from description.
- **Don't:** Overstuff with generic details.
- **Acceptance Criteria:** Connecting nodes align perfectly with the card headers on all viewports.

### Statistic Card
- **Purpose:** Display raw data, metrics, or GitHub stats.
- **Variants:** Number-focus, Chart-focus.
- **States:** Loading (Skeleton), Loaded.
- **Responsive Behaviour:** Shrinks text size slightly on smaller screens.
- **Accessibility:** Provide context to the number (e.g., "75 Repositories").
- **Animation:** Number counting up from 0 on intersection.
- **Spacing:** `space.16` padding.
- **Tokens Used:** `type.heading.1`, `brand.primary`.
- **Do:** Make the number massive and the label small.
- **Don't:** Use complex fractional numbers if unnecessary.
- **Acceptance Criteria:** Number increment animation respects performance constraints.

### Information Card
- **Purpose:** General purpose data container.
- **Variants:** Standard, Alert-style.
- **States:** Default.
- **Responsive Behaviour:** Fluid width.
- **Accessibility:** High contrast text.
- **Animation:** None.
- **Spacing:** `space.16` padding.
- **Tokens Used:** `surface.elevated`, `radius.md`.
- **Do:** Use for plain text grouping.
- **Don't:** Use when a specific card type (Feature, Product) applies.
- **Acceptance Criteria:** Renders perfectly nested inside layout grids.

### AI Card
- **Purpose:** Display AI interactions, model knowledge, or prompts.
- **Variants:** User Prompt, AI Response.
- **States:** Typing, Complete, Error.
- **Responsive Behaviour:** Matches chat bubble width constraints (e.g., max 80% width).
- **Accessibility:** `aria-live="polite"` for incoming messages.
- **Animation:** Bubbles pop in (`motion.spring.stiff`). Typing indicator dots bounce.
- **Spacing:** `space.16` padding.
- **Tokens Used:** `surface.glass.light`, `brand.primary` (for user).
- **Do:** Distinguish visually between User and AI.
- **Don't:** Use heavy shadows on individual messages.
- **Acceptance Criteria:** Markdown renders correctly inside the AI response variant.

---

## SECTIONS

### Section Header
- **Purpose:** Introduce a new semantic block of content.
- **Variants:** Centered, Left-aligned with Action.
- **States:** Static.
- **Responsive Behaviour:** Text scales down on mobile. Action button may move to next line.
- **Accessibility:** H2 or H3 tags enforced.
- **Animation:** Fade in on scroll intersection.
- **Spacing:** `space.48` top margin, `space.16` bottom margin.
- **Tokens Used:** `type.heading.2`, `text.primary`.
- **Do:** Include a concise subtitle if context is needed.
- **Don't:** Center align if the following content is strictly left-aligned.
- **Acceptance Criteria:** Maintains consistent visual hierarchy across all pages.

### Section Footer
- **Purpose:** Conclude a block of content with an exploratory action.
- **Variants:** Simple Link, Divider + Button.
- **States:** Static.
- **Responsive Behaviour:** Fluid centering.
- **Accessibility:** Clear CTA text.
- **Animation:** None.
- **Spacing:** `space.32` top margin.
- **Tokens Used:** `border.subtle`, `text.secondary`.
- **Do:** Provide a natural next step for the user.
- **Don't:** Replicate the global application footer.
- **Acceptance Criteria:** Seamlessly transitions into the next Section Header.

### Divider
- **Purpose:** Visually separate unrelated content.
- **Variants:** Horizontal Line, Dotted, Gradient fade.
- **States:** Static.
- **Responsive Behaviour:** 100% width of container.
- **Accessibility:** `role="separator"`.
- **Animation:** None.
- **Spacing:** `space.24` vertical margins.
- **Tokens Used:** `border.subtle`.
- **Do:** Use sparingly. Prefer whitespace for separation when possible.
- **Don't:** Use thick, heavy black lines.
- **Acceptance Criteria:** Renders 1px sharp on high-DPI displays.

---

## PRODUCTS

### Product Badge
- **Purpose:** Visually classify an item as belonging to a specific EchoTech product.
- **Variants:** Solid, Outline, Glass.
- **States:** Static.
- **Responsive Behaviour:** Fixed small size.
- **Accessibility:** High contrast for text legibility.
- **Animation:** None.
- **Spacing:** `space.4` vertical, `space.8` horizontal padding.
- **Tokens Used:** `product.*`, `radius.full`, `type.caption`.
- **Do:** Use to tag features or cross-link products.
- **Don't:** Overuse inline within dense paragraphs.
- **Acceptance Criteria:** Text is perfectly vertically centered.

### Product Status
- **Purpose:** Indicate the lifecycle state of a product.
- **Variants:** Active (Emerald), Beta (Amber), Deprecated (Slate).
- **States:** Static.
- **Responsive Behaviour:** Fixed small size.
- **Accessibility:** Color must not be the only indicator (use text like "Beta").
- **Animation:** Occasional pulse ring on "Active" if critical.
- **Spacing:** Matches Product Badge.
- **Tokens Used:** `semantic.success`, `semantic.warning`.
- **Do:** Place directly next to Product names.
- **Don't:** Use for user-state (e.g., online/offline).
- **Acceptance Criteria:** Renders legibly on both light and glass backgrounds.

### Product Showcase
- **Purpose:** Large layout component detailing a product's features.
- **Variants:** Media Left, Media Right, Stacked.
- **States:** Default.
- **Responsive Behaviour:** Media stacks above text on mobile.
- **Accessibility:** Screen reader skips decorative product abstract art.
- **Animation:** Media enters via subtle scale up.
- **Spacing:** `space.64` vertical margin.
- **Tokens Used:** `product.*` specific gradients.
- **Do:** Tell a cohesive story regarding the product's value.
- **Don't:** Use tiny, unreadable screenshots.
- **Acceptance Criteria:** Alternating layouts correctly stack predictably on mobile.

---

## AI

### AI Prompt Card
- **Purpose:** Suggest conversational entry points to the user.
- **Variants:** Grid item, Carousel item.
- **States:** Default, Hover (`border.interactive`), Active.
- **Responsive Behaviour:** Swipes horizontally on mobile if in a carousel.
- **Accessibility:** Acts as a button triggering a chat input fill.
- **Animation:** Hover lifts and adds an ambient shadow.
- **Spacing:** `space.16` padding.
- **Tokens Used:** `surface.glass.light`, `text.primary`.
- **Do:** Keep prompts short (under 50 characters).
- **Don't:** Promise capabilities the AI cannot fulfill.
- **Acceptance Criteria:** Clicking immediately transitions the UI into the active chat state.

### Suggested Questions
- **Purpose:** Contextual follow-up actions inside a chat flow.
- **Variants:** Pill row.
- **States:** Default, Hover.
- **Responsive Behaviour:** Wraps to next line on small screens.
- **Accessibility:** Tab index sequential order.
- **Animation:** Staggers in after the AI Response completes.
- **Spacing:** `space.8` gap between pills.
- **Tokens Used:** `border.subtle`, `text.secondary`.
- **Do:** Suggest logical next steps in the conversation.
- **Don't:** Overwhelm with more than 3 suggestions.
- **Acceptance Criteria:** Disappears once the user types a new custom prompt.

### Response Card
- *(Detailed under AI Card above)*

### Typing Indicator
- **Purpose:** Inform the user that the AI model is generating a response.
- **Variants:** Three dots, Pulsing logo.
- **States:** Active.
- **Responsive Behaviour:** Matches chat bubble constraints.
- **Accessibility:** `aria-live="polite"` announcing "AI is typing...".
- **Animation:** Infinite wave bounce (`staggered`, `duration.fast`).
- **Spacing:** `space.16` padding.
- **Tokens Used:** `text.secondary`, `surface.elevated`.
- **Do:** Use immediately upon user submission.
- **Don't:** Let it run indefinitely if the API times out (transition to Error State).
- **Acceptance Criteria:** Animation is smooth and does not cause layout jitter.

---

## TIMELINE

### Timeline
- **Purpose:** Vertical track mapping historical data.
- **Variants:** Single track, Dual track.
- **States:** Default.
- **Responsive Behaviour:** Dual track collapses to Single track on mobile.
- **Accessibility:** Semantic ordered list (`<ol>`).
- **Animation:** Track fills downward based on scroll position.
- **Spacing:** `space.32` vertical padding.
- **Tokens Used:** `border.subtle`.
- **Do:** Use to tell the founder or company story.
- **Don't:** Use for non-chronological data.
- **Acceptance Criteria:** Track line sits precisely beneath timeline nodes without gapping.

### Milestone / Achievement / Experience / Education
- **Purpose:** Specific nodes embedded within the Timeline track.
- **Variants:** Standard Node, Featured Node (larger icon).
- **States:** Inactive (grayed), Active (colored).
- **Responsive Behaviour:** Text formatting scales down.
- **Accessibility:** Clear hierarchy (H3 for title, span for dates).
- **Animation:** Nodes scale up as they enter the viewport.
- **Spacing:** `space.24` bottom margin per node.
- **Tokens Used:** `surface.base`, `shadow.sm`.
- **Do:** Highlight the specific role and timeline explicitly.
- **Don't:** Write essay-length descriptions inside a timeline node.
- **Acceptance Criteria:** Inactive states have reduced opacity until scrolled into view.

---

## LAYOUTS

### Hero Layout
- **Purpose:** Master container for top-of-page elements.
- **Variants:** Standard Lobbies (e.g., Homepage PRD).
- **States:** N/A.
- **Responsive Behaviour:** Strictly `100dvh` for reception areas, unlocking scroll for deep content pages.
- **Accessibility:** Main landmark role (`<main>`).
- **Animation:** Orchestrates all child animations.
- **Spacing:** Safe area padding (`pt-safe`, `pb-safe`).
- **Tokens Used:** `z.base`, `gradient.ambient.*`.
- **Do:** Center align core brand messaging.
- **Don't:** Exceed the viewport height on introductory lobbies.
- **Acceptance Criteria:** Renders perfectly across iOS Safari and Desktop Chrome without UI jumping.

### Two Column / Three Column / Feature Grid / Product Gallery
- **Purpose:** Structural matrices for organizing cards and sections.
- **Variants:** CSS Grid, Flexbox masonry.
- **States:** N/A.
- **Responsive Behaviour:** 3 Col (Desktop) -> 2 Col (Tablet) -> 1 Col (Mobile).
- **Accessibility:** Logical DOM order matches visual layout.
- **Animation:** Children stagger in based on grid index.
- **Spacing:** `grid.gap.md` or `grid.gap.lg`.
- **Tokens Used:** `layout.max.desktop`.
- **Do:** Ensure consistent card heights within rows.
- **Don't:** Force multi-column layouts on mobile.
- **Acceptance Criteria:** Columns do not overflow the max-width container on ultrawide monitors.

---

## SYSTEM

### Empty State
- **Purpose:** Gracefully handle absence of data (e.g., no search results).
- **Variants:** Illustration-heavy, Text-only.
- **States:** Static.
- **Responsive Behaviour:** Centers within available parent space.
- **Accessibility:** Clear, actionable fallback text.
- **Animation:** Subtle fade in.
- **Spacing:** `space.48` padding.
- **Tokens Used:** `text.secondary`, `icon.xl`.
- **Do:** Provide a clear "next step" or CTA to resolve the empty state.
- **Don't:** Blame the user (e.g., "You didn't add anything").
- **Acceptance Criteria:** Must contain at least one primary action button.

### Loading State
- **Purpose:** Provide feedback during data fetches.
- **Variants:** Skeletons (Contextual), Spinners (Global), Progress Bars (Routing).
- **States:** Active.
- **Responsive Behaviour:** Skeleton matches the expected dimensions of the content.
- **Accessibility:** `aria-busy="true"`.
- **Animation:** Shimmer effect (`gradient.shimmer`) over skeletons.
- **Spacing:** Inherits parent spacing.
- **Tokens Used:** `surface.elevated`, `duration.slow`.
- **Do:** Prefer contextual skeletons over full-screen spinners.
- **Don't:** Flash the loading state if data resolves in under 100ms.
- **Acceptance Criteria:** Shimmer animation does not cause high CPU utilization.

### Error State
- **Purpose:** Recover from system or network failures.
- **Variants:** Inline alert, Full-page block.
- **States:** Static.
- **Responsive Behaviour:** Responsive padding.
- **Accessibility:** `role="alert"`. High contrast red/amber.
- **Animation:** Shake or pop-in on critical failures.
- **Spacing:** `space.16` internal padding.
- **Tokens Used:** `semantic.error`, `border.subtle`.
- **Do:** Explain the error in human-readable terms and provide a "Retry" mechanism.
- **Don't:** Expose raw stack traces or JSON errors to the user.
- **Acceptance Criteria:** Can gracefully self-heal if the user clicks "Retry" and the network succeeds.
