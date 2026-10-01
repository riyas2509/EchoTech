# EchoCard Component Inventory
**The Comprehensive Component Architecture for EchoTech HQ**

This document acts as the definitive component registry for EchoCard. Every future interface and feature must be assembled exclusively using these reusable blocks. Custom, one-off UI components are strictly forbidden.

---

## 1. Foundation
Foundational tokens that define the absolute baseline of the visual system.
- `Typography`: Core text scaler handling H1-H6, body, and micro-copy.
- `ColorSystem`: Centralized CSS variables for slate, pastel gradients, and semantic colors.
- `Spacing`: Standardized padding and margin scale constraints.

## 2. Primitive
The smallest indivisible UI elements that cannot be broken down further without losing meaning.
- `Badge`: Small, pill-shaped indicator for statuses (e.g., "Online", "v2.0").
- `Divider`: Hairline separator (`w-[1px]` or `h-[1px]`) in `slate-200`.
- `Icon`: Wrapper for Lucide or SVG icons inheriting current text color.
- `Spinner`: Minimalist loading indicator.
- `Label`: Form and metadata identifier text.

## 3. Composite
Components built by combining two or more primitives.
- `Avatar`: Circular image container merging `img` and `fallback` primitives.
- `StatusIndicator`: A `Badge` merged with a pulsating animation for availability.
- `IconLabel`: An `Icon` paired with a `Typography` element for inline metadata.
- `TagList`: A row of `Badge` primitives used to display technologies or categories.

## 4. Section
Macro-level building blocks that assemble multiple composites into a cohesive page block.
- `HeroSection`: The primary identity block containing Avatar, titles, and bio.
- `GridSection`: Standardized wrapper for displaying masonry or grid-aligned cards.
- `ListSection`: Vertical stack wrapper for linear data (e.g., timeline entries).
- `EmptyState`: Standardized section for when data arrays are empty.

## 5. Layout
Structural components that dictate screen anatomy and viewport behavior.
- `GlobalLayout`: The absolute root wrapper handling safe-areas (`pt-safe`, `pb-safe`) and global backgrounds.
- `DashboardLayout`: The Desktop-specific split-pane structure (Sidebar + Content).
- `ScrollContainer`: Specialized wrapper that manages hidden scrollbars for overflowing internal pages.
- `AmbientBackground`: Renders the fixed, blurred pastel gradient orbs behind the UI.

## 6. Navigation
Components strictly responsible for routing the visitor.
- `Header`: Top bar containing the EchoTech logo, brand name, and mobile menu toggle.
- `SocialDock`: Fixed glassmorphic bottom bar for external professional links.
- `GridNav`: The 2x3 (mobile) routing menu driving the core internal UX.
- `Breadcrumbs`: Path indicator for deeply nested desktop views.
- `Sidebar`: Desktop-equivalent of the `SocialDock` and `GridNav` combined.

## 7. Interaction
Components wrapping complex physical or gesture-based interactions.
- `FramerWrapper`: Universal wrapper applying standard Spring entrance physics.
- `TapTarget`: Invisible wrapper ensuring minimum 44x44px touch areas.
- `SwipeableContainer`: Horizontal scrolling or swiping constraint for carousels.

## 8. AI
Specialized UI blocks for the EchoTech conversational agent and knowledge retrieval system.
- `AIChatBubble`: Visual representation of a query or response.
- `AISuggestionPill`: Tapable prompts derived from the `ai.ts` knowledge base.
- `AITypingIndicator`: Animated pulse indicating model inference.
- `KnowledgeReference`: Small inline citation linking back to the `ai.ts` source data.

## 9. Media
Components strictly handling visual assets.
- `OptimizedImage`: Lazy-loaded image wrapper with blur-up placeholders.
- `VideoPlayer`: Minimalist, controls-hidden looping video player for product demos.
- `CoverImage`: High-aspect ratio (16:9) image block for Project or Product headers.

## 10. Cards
Generic structural containers applying the standard glassmorphic design system.
- `GlassCard`: The base `bg-white/70 backdrop-blur-md` container.
- `SolidCard`: Pure white fallback card for high-contrast needs.
- `HoverCard`: Desktop-only extension applying elevation and glow on pointer hover.

## 11. Buttons
Clickable action triggers.
- `PrimaryButton`: High-emphasis solid button (e.g., "Contact Us").
- `GlassButton`: Translucent button matching the dock aesthetic.
- `IconButton`: Circular button containing only an `Icon`.
- `TextButton`: Minimalist inline action without a background container.

## 12. Forms
Data entry elements (reserved for Contact or AI chat inputs).
- `TextInput`: Standard text field with subtle focus rings.
- `TextArea`: Multi-line input.
- `FormGroup`: Wrapper linking a `Label`, Input, and validation message.

## 13. Dialogs
Modal overlays interrupting the main flow.
- `ModalBase`: The core glassmorphic overlay and trap.
- `QuickActionModal`: Centered popup for fast routing or sharing links.
- `ImageLightbox`: Fullscreen expansion for viewing architecture diagrams or product shots.

## 14. Bottom Sheets
Mobile-first sliding panels attached to the bottom edge.
- `BottomSheetBase`: The core spring-animated sliding drawer.
- `MenuSheet`: Mobile drawer replacing traditional dropdowns for settings or routing.
- `FilterSheet`: Drawer for narrowing down Project or Research arrays.

## 15. Search
Components for querying the local data structures or triggering AI.
- `SearchBar`: Pill-shaped input for standard text search.
- `CommandPalette`: Desktop-first `Cmd+K` interface for global navigation.
- `SearchResultItem`: Standardized row output for queried data.

## 16. Timeline
Components for rendering the `experience.ts` professional history.
- `TimelineTrack`: The vertical connector line (`w-[2px]`).
- `TimelineNode`: The circular marker (`Badge`) on the track.
- `TimelineContent`: The adjacent text block containing role, company, and duration.
- `TimelineItem`: The composite assembling the Track, Node, and Content.

## 17. Product Cards
Specialized cards driven by `products.ts`.
- `ProductCard`: Displays the product logo, title, and tagline.
- `ProductFeatureList`: Inline display of core product capabilities.
- `ProductStatus`: Custom badge specifically indicating product lifecycle (e.g., "Beta", "Live").

## 18. Founder Cards
Specialized blocks driven by `profile.ts` highlighting the EchoTech founder.
- `FounderBioCard`: Text-heavy glass card detailing the founder's ethos.
- `FounderMetricCard`: Small stat block (e.g., "Years Experience", "Patents").

## 19. Research Cards
Components designed for deep-dive intellectual content.
- `PaperCard`: Displays title, abstract snippet, and DOI/Link.
- `AuthorList`: Formats multiple researchers clearly.
- `AbstractPreview`: Expandable text block for lengthy scientific abstracts.

## 20. Project Cards
Specialized cards driven by `projects.ts`.
- `ProjectCard`: Base container with CoverImage, Title, and Description.
- `TechStackRow`: Uses `TagList` to show project technologies.
- `RepositoryLink`: Specialized `IconLabel` pointing to GitHub or external source code.
