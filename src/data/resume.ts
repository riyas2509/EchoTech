export interface ResumeData {
  title: string;
  subtitle: string;
  pdf: string;
  lastUpdated: string;
  downloadLabel: string;
  previewImage: string;
}

export const resumeData: ResumeData = {
  title: "My Resume",
  subtitle: "Full Stack AI Engineer",
  pdf: "/resume.pdf",
  lastUpdated: "January 2024",
  downloadLabel: "Download PDF",
  previewImage: "https://placehold.co/600x800/e2e8f0/475569?text=Resume+Preview"
};