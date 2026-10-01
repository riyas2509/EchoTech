# EchoTech Design System v2.0

This document is the official Design System (v2.0) for EchoTech. It serves as the single source of truth for every interface within the EchoTech ecosystem, including EchoCard, EchoNote, EchoOS, Thinkoria, ProtoLens, and LifeCapital.

## 1. Brand Philosophy
EchoTech designs intelligent software that helps people think, learn, and work with less cognitive load. Our interfaces must get out of the way, allowing the human mind to focus entirely on the task at hand. Every design decision must augment human intelligence and return time to the user.

## 2. Brand Personality
- **Premium:** High-quality, flawless execution, and uncompromising standards.
- **Minimal:** Restrained, focused, removing everything that isn't absolutely necessary.
- **Scandinavian:** Clean lines, functional, warm, and highly legible.
- **Apple-inspired:** Effortlessly elegant, obsessive attention to micro-details and hardware-software harmony.
- **Human-Centered:** Designed for the human eye, hand, and mind.

## 3. Design Principles
- **Clarity over cleverness:** Interfaces must be immediately understandable.
- **Purposeful motion:** Animation is used to explain state changes, not just to decorate.
- **Elegant whitespace:** Let content breathe. Silence is a design element.
- **No visual clutter:** Ruthlessly eliminate noise and extraneous borders.

## 4. Color System
Our foundation relies on a clean, bright, neutral canvas to let product accents shine.

**Foundation:**
- **Cotton White:** `#FCFCFD`
- **Cloud Gray:** `#F4F5F7`
- **Mist Gray:** `#E8EBF0`

**Primary Brand:**
- **Azure Blue:** `#5DA9FF`
- **Ocean Blue:** `#3E82FF`
- **Violet:** `#A874FF`
- **Deep Purple:** `#7D5CFF`

**Secondary Accent:**
- **Emerald Green:** `#34C985`

## 5. Semantic Color Tokens
- **Background Base:** Cotton White (`#FCFCFD`)
- **Background Surface:** Cloud Gray (`#F4F5F7`)
- **Border/Divider:** Mist Gray (`#E8EBF0`)
- **Text Primary:** Slate 900
- **Text Secondary:** Slate 500
- **Action/Interactive:** Ocean Blue (`#3E82FF`)
- **Success/Verified:** Emerald Green (`#34C985`)

## 6. Product Color Tokens
Each product within the ecosystem owns a distinct primary color to create immediate visual context while remaining harmonious within the overarching brand.
- **EchoNote:** Azure Blue (`#5DA9FF`)
- **EchoOS:** Ocean Blue (`#3E82FF`)
- **Thinkoria:** Violet (`#A874FF`)
- **ProtoLens:** Emerald Green (`#34C985`)
- **LifeCapital:** Amber Orange (`#FFBC5E`)

## 7. Typography
- **Primary Typeface:** Manrope (or modern geometric sans-serif).
- **Headings:** Bold, tracking tight (`tracking-tight`), high contrast.
- **Body:** Medium, highly legible line height (`leading-relaxed`), slate-500.
- **Labels:** Uppercase, extra tracking (`tracking-widest`), small sizing for utility.

## 8. Spacing Scale
- Utilizes an 8pt grid system.
- Extreme precision in micro-spacing (2px, 4px) for icons and text alignments.
- Generous macro-padding (24px, 32px, 48px) for structural containers to provide elegant whitespace.

## 9. Grid System
- **Mobile:** 1 or 2 column matrices, strictly constrained by `max-w-md`.
- **Tablet/Desktop:** Organic expansion to 3 or 4 columns. 
- Content blocks expand to fill horizontal space, bounded by centralized max-width constraints (e.g., `max-w-6xl`), never stretching unnaturally.

## 10. Border Radius System
Friendly, organic geometry.
- **Buttons/Pills:** Fully rounded (`rounded-full` / 9999px).
- **Cards/Containers:** Large radius (`rounded-[32px]` or `rounded-3xl`) to match Apple-inspired hardware curves.
- **Inner Elements:** Smaller proportional radius (e.g., `rounded-2xl` inside a `rounded-3xl` card) to maintain concentric visual harmony.

## 11. Shadow System
- **Prohibition:** Harsh, opaque black drop shadows are strictly banned.
- **Ambient Lift:** Use highly blurred, low-opacity shadows (`rgba(0,0,0,0.06)` to `0.1`) with large vertical offsets to create elegant floating effects.
- **Inner Depth:** Utilize subtle inner white highlights (`inset 0 0 20px rgba(255,255,255,0.5)`) on glass surfaces.

## 12. Glassmorphism Rules
- **Base:** White or off-white with 60%-70% opacity (`bg-white/70`).
- **Blur:** Heavy background blur (`backdrop-blur-xl`).
- **Border:** Delicate, semi-transparent white borders (`border-white/80`) to define edges against ambient backgrounds.

## 13. Gradient Rules
- Used sparingly to create ambient background lighting (orbs) or inside specific product icons.
- Gradients must be soft, pastel, and low contrast to avoid drawing attention away from content.

## 14. Button System
- **Primary:** High contrast (e.g., Slate 900 background, White text), pill-shaped, generous horizontal padding.
- **Secondary:** Glassmorphic or solid white/cloud gray, slate text, subtle border.
- **Interactive States:** Hover scales slightly (`scale 1.01`) with deepened shadow. Tap compresses (`scale 0.98`).

## 15. Card System
- Cards are the primary architectural units for content.
- They must use the defined Border Radius System and Shadow System.
- Hover states on cards should invite interaction (slight negative Y translation, shadow increase).

## 16. Navigation System
- Hub and spoke model.
- Navigation relies on discrete entry gateways (Cards) rather than exhaustive dropdown menus.
- Mobile navigation is thumb-optimized (bottom docks or easily reachable quick-action menus).

## 17. Iconography
- **Style:** Monoline, minimal, and geometric (e.g., Lucide). 
- **Stroke Width:** Generally `1.5px` to maintain elegance and avoid heavy, blocky appearances.
- **Color:** Inherits text color or utilizes specific Product Color Tokens when representing a distinct application.

## 18. Motion Principles
- **Purpose:** Animation must orient the user in digital space. 
- **Physics:** Spring-based motion (`stiffness: 300`, `damping: 20`) to replicate the weight and tactility of physical objects. Linear transitions are prohibited for interactive elements.

## 19. Animation Timing
- **Micro-interactions (Hover/Tap):** Instantaneous initiation, fast settle (under 150ms).
- **Page/Component Entrance:** Staggered fade-up, maximizing at 600ms-800ms total duration to feel fluid but not artificially slow.

## 20. Responsive Behaviour
- **Mobile First:** Strict constraints (e.g., one-viewport rules for lobbies).
- **Desktop Adaptation:** Desktop layouts must feel like a premium dashboard. UI elements do not stretch; instead, whitespace is distributed, and grids expand to utilize horizontal real estate.

## 21. Accessibility Rules
- Contrast ratios must pass WCAG AA standards, especially text overlaid on glassmorphic or colored backgrounds.
- All interactive components (Buttons, Cards) require ARIA labels and full keyboard focus states.
- Motion must respect `prefers-reduced-motion` media queries.

## 22. Component Naming Convention
- PascalCase for all React components (`GlassCard`, `HeroSection`).
- Clear, semantic naming focusing on function over form (`ConnectWing` over `PinkBoxArea`).

## 23. Product Branding Rules
When representing an EchoTech product (e.g., EchoNote) within the larger ecosystem:
- The product's specific Color Token (e.g., Azure Blue) is used for its icon, active status badges, and hover accents.
- The overarching container still utilizes the foundation colors to maintain EchoTech brand consistency.

## 24. Dark Mode Strategy
*(Reserved for future implementation)*
- Dark mode will invert the foundation: Deep slate/black backgrounds.
- Glassmorphism will shift from white-based (`bg-white/70`) to dark-based (`bg-slate-900/70`) with subtle lighter borders (`border-white/10`).
- Product color tokens will adjust slightly for optimal contrast against dark surfaces.
