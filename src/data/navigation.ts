export interface NavigationItem {
  label: string;
  route: string;
  iconName: string;
}
export const navigationData: NavigationItem[] = [
  { label: "About Me", route: "/about", iconName: "User" },
  { label: "Projects", route: "/projects", iconName: "Briefcase" },
  { label: "Experience", route: "/experience", iconName: "FileText" },
  { label: "Discover EchoTech", route: "/echotech", iconName: "Sparkles" },
  { label: "Contact", route: "/contact", iconName: "Phone" },
  { label: "Let's Talk", route: "/ai", iconName: "MessageSquare" },
];