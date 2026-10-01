const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'src', 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const files = {
  'profile.ts': `export interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  availability: string;
  avatarSrc: string;
  avatarFallback: string;
}

export const profileData: ProfileData = {
  name: "Riya Shah",
  title: "AI Engineer | Founder | Builder",
  tagline: "Turning ideas into intelligent products.",
  availability: "Available for Opportunities",
  avatarSrc: "/profile-pic.png",
  avatarFallback: "R",
};`,
  'about.ts': `export interface AboutData {
  bio: string[];
  interests: string[];
}
export const aboutData: AboutData = {
  bio: ["I am an AI Engineer building cool things.", "I love tech."],
  interests: ["AI", "Web3", "Design"]
};`,
  'projects.ts': `export interface ProjectData {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
}
export const projectsData: ProjectData[] = [];`,
  'products.ts': `export interface ProductData {
  id: string;
  name: string;
  price: number;
  description: string;
}
export const productsData: ProductData[] = [];`,
  'experience.ts': `export interface ExperienceData {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
}
export const experienceData: ExperienceData[] = [];`,
  'skills.ts': `export interface SkillData {
  category: string;
  skills: string[];
}
export const skillsData: SkillData[] = [];`,
  'achievements.ts': `export interface AchievementData {
  id: string;
  title: string;
  date: string;
  description: string;
}
export const achievementsData: AchievementData[] = [];`,
  'gallery.ts': `export interface GalleryItem {
  id: string;
  imageUrl: string;
  caption?: string;
}
export const galleryData: GalleryItem[] = [];`,
  'contact.ts': `export interface ContactData {
  email: string;
  phone: string;
  location: string;
}
export const contactData: ContactData = {
  email: "hello@example.com",
  phone: "+1 234 567 8900",
  location: "San Francisco, CA"
};`,
  'social.ts': `export interface SocialData {
  platform: string;
  url: string;
  icon: string;
}
export const socialData: SocialData[] = [];`,
  'resume.ts': `export interface ResumeData {
  downloadUrl: string;
  lastUpdated: string;
}
export const resumeData: ResumeData = {
  downloadUrl: "/resume.pdf",
  lastUpdated: "2024-01-01"
};`,
  'navigation.ts': `export interface NavigationItem {
  label: string;
  route: string;
  iconName: string;
}
export const navigationData: NavigationItem[] = [
  { label: "About Me", route: "/about", iconName: "User" },
  { label: "Projects", route: "/projects", iconName: "Briefcase" },
  { label: "Experience", route: "/experience", iconName: "FileText" },
  { label: "EchoTech", route: "/echotech", iconName: "Sparkles" },
  { label: "Contact", route: "/contact", iconName: "Phone" },
  { label: "Let's Talk", route: "/ai", iconName: "MessageSquare" },
];`,
  'settings.ts': `export interface SettingsData {
  theme: string;
  notificationsEnabled: boolean;
}
export const settingsData: SettingsData = {
  theme: "light",
  notificationsEnabled: true
};`,
  'ai.ts': `export interface AIData {
  greeting: string;
  suggestedQuestions: string[];
}
export const aiData: AIData = {
  greeting: "Hi, I'm Riya's AI assistant. How can I help you?",
  suggestedQuestions: ["What are your skills?", "Tell me about your experience."]
};`
};

for (const [filename, content] of Object.entries(files)) {
  const filePath = path.join(dataDir, filename);
  fs.writeFileSync(filePath, content);
  console.log("Created " + filename);
}
