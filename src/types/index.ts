export interface NavItem {
  label: string;
  href: string;
}

export interface Step {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}