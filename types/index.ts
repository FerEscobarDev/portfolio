// Navigation Types
export interface NavItem {
  label: string;
  href: string;
}

// Project Types
export interface Project {
  id: string;
  tag: string;
  name: string;
  description: string;
  gradient: string;
  isComingSoon?: boolean;
  url?: string;
}

// Skill Types
export interface Skill {
  icon: string;
  name: string;
  color: string;
  isHighlighted?: boolean;
}

// Contact Types
export interface ContactLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

// Social Types
export interface SocialLink {
  label: string;
  href: string;
  icon?: string;
}

// SEO Types
export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  url: string;
  image: string;
}
