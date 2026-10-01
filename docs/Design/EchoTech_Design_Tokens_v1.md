# EchoTech Design Tokens v1

This document outlines the official Design Token System for EchoTech, acting as the implementation layer of the EchoTech Design System v2.0. These semantic tokens provide a framework-agnostic language for scaling design across web, mobile, and future EchoTech hardware/software products.

## 1. Brand Colors
- `brand.primary`: Ocean Blue (`#3E82FF`)
- `brand.secondary`: Violet (`#A874FF`)
- `brand.accent`: Emerald Green (`#34C985`)
- `brand.neutral`: Cotton White (`#FCFCFD`)

## 2. Semantic Colors
- `semantic.success`: `#34C985` (Emerald Green)
- `semantic.warning`: `#FFBC5E` (Amber Orange)
- `semantic.error`: `#EF4444` (Crimson)
- `semantic.info`: `#5DA9FF` (Azure Blue)

## 3. Surface Colors
- `surface.base`: Cotton White (`#FCFCFD`)
- `surface.elevated`: Cloud Gray (`#F4F5F7`)
- `surface.glass.light`: `rgba(255, 255, 255, 0.7)`
- `surface.glass.dark`: `rgba(0, 0, 0, 0.6)`

## 4. Text Colors
- `text.primary`: Slate 900 (`#0F172A`)
- `text.secondary`: Slate 500 (`#64748B`)
- `text.tertiary`: Slate 400 (`#94A3B8`)
- `text.inverse`: Cotton White (`#FCFCFD`)

## 5. Border Colors
- `border.subtle`: Mist Gray (`#E8EBF0`)
- `border.strong`: Slate 200 (`#E2E8F0`)
- `border.glass`: `rgba(255, 255, 255, 0.6)`
- `border.interactive`: Ocean Blue (`#3E82FF`)

## 6. Product Colors
- `product.echonote`: Azure Blue (`#5DA9FF`)
- `product.echoos`: Ocean Blue (`#3E82FF`)
- `product.thinkoria`: Violet (`#A874FF`)
- `product.protolens`: Emerald Green (`#34C985`)
- `product.lifecapital`: Amber Orange (`#FFBC5E`)

## 7. Gradient Tokens
- `gradient.ambient.cyan`: `linear-gradient(to bottom right, rgba(34,211,238,0.2), transparent)`
- `gradient.ambient.pink`: `linear-gradient(to bottom right, rgba(244,114,182,0.2), transparent)`
- `gradient.shimmer`: `linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)`

## 8. Spacing Scale
- `space.4`: `4px` (Micro spacing)
- `space.8`: `8px` (Element grouping)
- `space.16`: `16px` (Component padding)
- `space.24`: `24px` (Section padding)
- `space.32`: `32px` (Container padding)
- `space.48`: `48px` (Macro spacing)
- `space.64`: `64px` (Layout margins)

## 9. Radius Scale
- `radius.sm`: `4px`
- `radius.md`: `8px`
- `radius.lg`: `16px`
- `radius.xl`: `24px`
- `radius.2xl`: `32px` (Standard Card)
- `radius.full`: `9999px` (Pills/Avatars)

## 10. Shadow Scale
- `shadow.sm`: `0 1px 2px rgba(0,0,0,0.05)`
- `shadow.md`: `0 4px 6px -1px rgba(0,0,0,0.05)`
- `shadow.lg`: `0 10px 15px -3px rgba(0,0,0,0.05)`
- `shadow.ambient`: `0 20px 40px -10px rgba(0,0,0,0.08)`
- `shadow.inner.glass`: `inset 0 0 20px rgba(255,255,255,0.5)`

## 11. Blur Tokens
- `blur.sm`: `4px`
- `blur.md`: `12px`
- `blur.lg`: `24px` (Standard Glass)
- `blur.xl`: `40px`
- `blur.ambient`: `100px` (Background Orbs)

## 12. Elevation Tokens
- `elevation.base`: Surface is flat on the background.
- `elevation.raised`: Surface slightly elevated (`shadow.sm`).
- `elevation.floating`: Surface heavily elevated, creating physical depth (`shadow.ambient`, `blur.lg`).

## 13. Motion Tokens
- `motion.spring.stiff`: `stiffness: 300, damping: 20` (Tactile feedback)
- `motion.spring.gentle`: `stiffness: 100, damping: 15` (Large structural shifts)
- `motion.ease.out`: `cubic-bezier(0.2, 0.8, 0.2, 1)` (Entrance)
- `motion.ease.in`: `cubic-bezier(0.8, 0, 0.8, 0.2)` (Exit)

## 14. Animation Duration
- `duration.fast`: `150ms` (Hover states)
- `duration.normal`: `300ms` (State changes)
- `duration.slow`: `600ms` (Page transitions/Staggering)

## 15. Opacity Tokens
- `opacity.10`: `0.1` (Subtle overlays)
- `opacity.40`: `0.4` (Disabled elements)
- `opacity.60`: `0.6` (Secondary text/Glass base)
- `opacity.80`: `0.8` (Hover overlays)
- `opacity.100`: `1.0` (Solid)

## 16. Typography Tokens
- `type.display`: `3.5rem` / `tracking-tight` / `leading-none` / `font-extrabold`
- `type.heading.1`: `2.25rem` / `tracking-tight` / `leading-tight` / `font-bold`
- `type.heading.2`: `1.5rem` / `tracking-tight` / `leading-snug` / `font-bold`
- `type.body.large`: `1.125rem` / `leading-relaxed` / `font-medium`
- `type.body.base`: `1rem` / `leading-relaxed` / `font-medium`
- `type.caption`: `0.75rem` / `tracking-widest` / `font-semibold` / uppercase

## 17. Icon Sizes
- `icon.sm`: `16px`
- `icon.md`: `24px` (Standard navigation/buttons)
- `icon.lg`: `32px`
- `icon.xl`: `48px`

## 18. Grid Tokens
- `grid.columns.mobile`: `4`
- `grid.columns.tablet`: `8`
- `grid.columns.desktop`: `12`
- `grid.gap.sm`: `16px`
- `grid.gap.md`: `24px`
- `grid.gap.lg`: `32px`

## 19. Layout Widths
- `layout.max.mobile`: `480px`
- `layout.max.tablet`: `768px`
- `layout.max.desktop`: `1200px`
- `layout.max.ultrawide`: `1600px`

## 20. Responsive Breakpoints
- `breakpoint.sm`: `640px` (Mobile Landscape)
- `breakpoint.md`: `768px` (Tablet)
- `breakpoint.lg`: `1024px` (Desktop)
- `breakpoint.xl`: `1280px` (Large Desktop)

## 21. Z-index Layers
- `z.base`: `0`
- `z.elevated`: `10`
- `z.sticky`: `50`
- `z.dropdown`: `100`
- `z.overlay`: `500`
- `z.modal`: `1000`

## 22. Focus States
- `state.focus.ring.color`: Ocean Blue (`#3E82FF`)
- `state.focus.ring.width`: `2px`
- `state.focus.ring.offset`: `2px`

## 23. Hover States
- `state.hover.scale.up`: `1.02`
- `state.hover.scale.down`: `0.98`
- `state.hover.bg.glass`: `rgba(255, 255, 255, 0.9)`
- `state.hover.shadow`: `shadow.ambient`

## 24. Disabled States
- `state.disabled.opacity`: `0.4`
- `state.disabled.cursor`: `not-allowed`
- `state.disabled.bg`: `surface.elevated`
