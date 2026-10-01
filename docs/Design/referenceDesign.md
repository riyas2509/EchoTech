# EchoCard - Visual Source of Truth Specification

This document is the highest priority design document, reverse-engineered directly from `References/Digital Card - EchoCard.png`. It serves as the absolute visual source of truth for the EchoCard project.

## 1. Global Setup
- **Background Color**: Soft light gray (`#F8FAFC` or `slate-50`).
- **Background Layers**: 
  - Abstract, blurred radial gradients placed fixed in the background.
  - Top-Left Glow: Soft pink (`bg-pink-200`), opacity ~30%, blur 100px.
  - Bottom-Right Glow: Soft cyan/blue (`bg-cyan-200`), opacity ~30%, blur 120px.
- **Glassmorphism**: 
  - Overlays use `bg-white/70` with `backdrop-blur-md`.
  - Borders use `border-white/40` or `border-white/50`.
  - Shadows use subtle, soft drop shadows (e.g., `shadow-sm` or `shadow-[0_8px_30px_rgb(0,0,0,0.08)]`).

## 2. Typography
- **Font Family**: Primary font is modern sans-serif (e.g., Manrope or Inter).
- **Hierarchy**:
  - Brand Logo: 14px (`text-sm`), Bold, wide tracking, Slate-800.
  - Name (H1): 28px (`text-[28px]`), Bold, tight tracking, Slate-900.
  - Subtitle: 14px (`text-sm`), Medium weight, Slate-500.
  - Bio: 12px (`text-xs`), Medium weight, Slate-400.
  - Badge Text: 12px (`text-xs`), Semi-bold, wide tracking, Emerald-700.
  - Card Labels: 14px (`text-sm`), Semi-bold, Slate-800.

## 3. Component Hierarchy & Structure

### A. Header (Top Navigation)
- **Layout**: Flexbox, space-between, full width, padded.
- **Left**: Brand text "ECHOCARD".
- **Right**: Hamburger menu icon (size 20px, Slate-800) inside a 40x40px circular hover-state button.

### B. Profile Section (Center aligned)
- **Avatar Container**: 
  - Size: 112x112px (`w-28 h-28`).
  - Shape: Fully rounded (`rounded-full`).
  - Border: 3px solid white.
  - Background Ring: An absolute positioned glowing gradient ring (`from-cyan-400 via-pink-400 to-purple-400`, blur-md, opacity-20) extending slightly past the avatar.
- **Status Dot**: 
  - Position: Absolute, bottom-right of avatar.
  - Size: 16x16px (`w-4 h-4`).
  - Color: Solid Emerald-500.
  - Border: 2px solid white.
- **Identity Row**: 
  - Flexbox, horizontal, center-aligned, gap-1.5.
  - Contains Name and a Cyan Verified Check Badge (size 20px, fill-cyan-50, text-cyan-500).
- **Subtitle & Bio**: 
  - Stacked vertically, center-aligned, distinct text colors (Slate-500 and Slate-400 respectively).
- **Availability Pill**: 
  - Layout: Inline-flex, center-aligned, padded (px-4, py-2).
  - Shape: Fully rounded (`rounded-full`).
  - Styling: `bg-emerald-50/80`, `border-emerald-200/50`, `backdrop-blur-sm`.
  - Icon: Pulsing green dot (8x8px) on the left.
  - Text: "Available for Opportunities".

### C. Navigation Grid (Main Actions)
- **Layout**: 2 columns by 3 rows grid (`grid-cols-2`), gap-3.
- **Cards (6 total)**:
  1. About Me (User icon)
  2. Projects (Briefcase icon)
  3. Resume (Document icon)
  4. EchoTech (Sparkle/Logo icon)
  5. Contact (Phone icon)
  6. Let's Talk (Message icon)
- **Card Styling**:
  - Layout: Flex column, center-aligned, padded (`py-6 px-4`), gap-3.
  - Shape: Large radius (`rounded-3xl` or ~24px).
  - Background: Glassmorphic (`bg-white/70`).
  - Border: Glass edge (`border-white/40`).
  - Icon: Size 24px, Slate-700.

### D. Floating Social Capsule (Bottom Navigation)
- **Positioning**: Fixed to bottom center (`bottom-6`), highly elevated `z-50`.
- **Layout**: Flexbox, horizontal, center-aligned, gap-6, padded (`px-8 py-4`).
- **Shape**: Fully rounded pill (`rounded-full`).
- **Styling**: Highly glassmorphic (`bg-white/80`, `backdrop-blur-xl`, `border-white/50`, soft deep shadow).
- **Contents**: 
  - Icons (size 22px, Slate-600 with hover to Slate-900): LinkedIn, GitHub, Mail, Instagram.
  - Divider: Vertical line (`w-[1px] h-5 bg-slate-300`).
  - More Options: Horizontal ellipsis icon (MoreHorizontal).

## 4. Spacing & Margins (Inferred)
- **Page Padding**: Safe area paddings, horizontal padding ~20px (`px-5`).
- **Section Gaps**: 
  - Header to Profile: ~24px (`mt-6`).
  - Profile elements: Small gaps (4-8px) between text blocks, 20px (`mb-5`) below identity.
  - Profile to Grid: ~24px (`mt-6`).
  - Grid to Bottom: Padded sufficiently (`pb-24`) to prevent collision with floating capsule.

## 5. Animation Style
- **Elements**: 
  - Entire screen content staggers in softly (`fade + slide up 20px`).
  - Availability pill dot pulses continuously.
  - Background glowing ring rotates slowly (linear, infinite).
  - Buttons and cards slightly scale down on tap (`scale: 0.98`) and scale up on hover (`scale: 1.02`).
  - Social capsule floats in from bottom (`y: 100` to `y: 0`).
