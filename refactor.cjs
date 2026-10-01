const fs = require('fs');
const path = require('path');

const moves = [
  // Pages -> Features
  ['src/pages/Home.tsx', 'src/features/headquarters/Home.tsx'],
  ['src/pages/Splash.tsx', 'src/features/headquarters/Splash.tsx'],
  ['src/pages/About.tsx', 'src/features/headquarters/About.tsx'],
  ['src/pages/Profile.tsx', 'src/features/founder/Profile.tsx'],
  ['src/pages/Resume.tsx', 'src/features/founder/Resume.tsx'],
  ['src/pages/Experience.tsx', 'src/features/founder/Experience.tsx'],
  ['src/pages/TimelinePage.tsx', 'src/features/founder/Timeline.tsx'],
  ['src/pages/Products.tsx', 'src/features/echotech/Products.tsx'],
  ['src/pages/ProductDetail.tsx', 'src/features/echotech/ProductDetail.tsx'],
  ['src/pages/Projects.tsx', 'src/features/products/Projects.tsx'],
  ['src/pages/ProjectDetail.tsx', 'src/features/products/ProjectDetail.tsx'],
  ['src/pages/AIChat.tsx', 'src/features/ai/AIChat.tsx'],
  ['src/pages/Contact.tsx', 'src/features/connect/Contact.tsx'],
  ['src/pages/QuickActionsPage.tsx', 'src/features/connect/QuickActions.tsx'],

  // Components -> Generic Categories
  // Navigation
  ['src/components/profile/SocialDock.tsx', 'src/components/navigation/SocialDock.tsx'],
  ['src/components/ui/Header.tsx', 'src/components/navigation/Header.tsx'],
  ['src/components/navigation/BottomNavigation.tsx', 'src/components/navigation/BottomNavigation.tsx'], // Already there
  // Layout
  ['src/components/ui/SectionContainer.tsx', 'src/components/layout/SectionContainer.tsx'],
  ['src/components/ui/BottomSheet.tsx', 'src/components/layout/BottomSheet.tsx'],
  // Sections
  ['src/components/profile/HeroSection.tsx', 'src/components/sections/HeroSection.tsx'],
  // Cards
  ['src/components/ui/ProjectCard.tsx', 'src/components/cards/ProjectCard.tsx'],
  ['src/components/ui/ResumeCard.tsx', 'src/components/cards/ResumeCard.tsx'],
  ['src/components/ui/TimelineCard.tsx', 'src/components/cards/TimelineCard.tsx'],
  ['src/components/ui/StatCard.tsx', 'src/components/cards/StatCard.tsx'],
  ['src/components/ui/GlassCard.tsx', 'src/components/cards/GlassCard.tsx'],
  ['src/components/cards/AIChatCard.tsx', 'src/components/cards/AIChatCard.tsx'],
  ['src/components/cards/AnalyticsCard.tsx', 'src/components/cards/AnalyticsCard.tsx'],
  ['src/components/cards/ContactCard.tsx', 'src/components/cards/ContactCard.tsx'],
  ['src/components/cards/ExperienceCard.tsx', 'src/components/cards/ExperienceCard.tsx'],
  ['src/components/cards/GalleryCard.tsx', 'src/components/cards/GalleryCard.tsx'],
  ['src/components/cards/ProductCard.tsx', 'src/components/cards/ProductCard.tsx'],
  ['src/components/cards/ProfileCard.tsx', 'src/components/cards/ProfileCard.tsx'],
  ['src/components/cards/QRCard.tsx', 'src/components/cards/QRCard.tsx'],
  ['src/components/cards/SectionCard.tsx', 'src/components/cards/SectionCard.tsx'],
  ['src/components/cards/VideoCard.tsx', 'src/components/cards/VideoCard.tsx'],
  // Shared / Foundation
  ['src/components/ui/Avatar.tsx', 'src/components/foundation/Avatar.tsx'],
  ['src/components/ui/AvailabilityBadge.tsx', 'src/components/foundation/AvailabilityBadge.tsx'],
  ['src/components/ui/GradientButton.tsx', 'src/components/foundation/GradientButton.tsx'],
  ['src/components/ui/ActionTile.tsx', 'src/components/shared/ActionTile.tsx'],
  ['src/components/ui/ProfileRing.tsx', 'src/components/shared/ProfileRing.tsx'],
];

// Imports replacements
const importReplacements = [
  // Pages
  ['@/pages/Home', '@/features/headquarters/Home'],
  ['@/pages/Splash', '@/features/headquarters/Splash'],
  ['@/pages/About', '@/features/headquarters/About'],
  ['@/pages/Profile', '@/features/founder/Profile'],
  ['@/pages/Resume', '@/features/founder/Resume'],
  ['@/pages/Experience', '@/features/founder/Experience'],
  ['@/pages/TimelinePage', '@/features/founder/Timeline'],
  ['@/pages/Products', '@/features/echotech/Products'],
  ['@/pages/ProductDetail', '@/features/echotech/ProductDetail'],
  ['@/pages/Projects', '@/features/products/Projects'],
  ['@/pages/ProjectDetail', '@/features/products/ProjectDetail'],
  ['@/pages/AIChat', '@/features/ai/AIChat'],
  ['@/pages/Contact', '@/features/connect/Contact'],
  ['@/pages/QuickActionsPage', '@/features/connect/QuickActions'],

  // Components
  ['@/components/profile/SocialDock', '@/components/navigation/SocialDock'],
  ['@/components/ui/Header', '@/components/navigation/Header'],
  ['@/components/ui/SectionContainer', '@/components/layout/SectionContainer'],
  ['@/components/ui/BottomSheet', '@/components/layout/BottomSheet'],
  ['@/components/profile/HeroSection', '@/components/sections/HeroSection'],
  ['@/components/ui/ProjectCard', '@/components/cards/ProjectCard'],
  ['@/components/ui/ResumeCard', '@/components/cards/ResumeCard'],
  ['@/components/ui/TimelineCard', '@/components/cards/TimelineCard'],
  ['@/components/ui/StatCard', '@/components/cards/StatCard'],
  ['@/components/ui/GlassCard', '@/components/cards/GlassCard'],
  ['@/components/ui/Avatar', '@/components/foundation/Avatar'],
  ['@/components/ui/AvailabilityBadge', '@/components/foundation/AvailabilityBadge'],
  ['@/components/ui/GradientButton', '@/components/foundation/GradientButton'],
  ['@/components/ui/ActionTile', '@/components/shared/ActionTile'],
  ['@/components/ui/ProfileRing', '@/components/shared/ProfileRing'],
  
  // Specific fix for cards directory since they might be imported via index or directly
  ['@/components/cards/', '@/components/cards/'], // No-op, just for clarity
];

function moveFiles() {
  for (const [src, dest] of moves) {
    if (fs.existsSync(src)) {
      if (src === dest) continue;
      const destDir = path.dirname(dest);
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }
      fs.renameSync(src, dest);
      console.log(`Moved: ${src} -> ${dest}`);
    } else {
      console.warn(`File not found: ${src}`);
    }
  }
}

function updateImports(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      updateImports(fullPath);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      for (const [oldImport, newImport] of importReplacements) {
        if (content.includes(oldImport)) {
          content = content.split(oldImport).join(newImport);
          changed = true;
        }
      }
      // Also handle relative imports inside ui that moved to cards/ etc
      if (content.includes("from './GlassCard'")) {
         // This works automatically if they both moved to cards/
      }
      if (changed) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated imports in: ${fullPath}`);
      }
    }
  }
}

console.log('Starting file moves...');
moveFiles();
console.log('Starting import updates...');
updateImports('src');
console.log('Done.');
