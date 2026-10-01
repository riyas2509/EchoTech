export interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  availability: string;
  avatarSrc: string;
  avatarFallback: string;
  brandName: string;
}

export const profileData: ProfileData = {
  name: "Riya Shah",
  title: "Founder",
  tagline: "Building human-centered AI products that reduce cognitive load.",
  availability: "Available for Opportunities",
  avatarSrc: "/profile-pic.png",
  avatarFallback: "R",
  brandName: "ECHOCARD",
};