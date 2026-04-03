export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  image: string;
  year: string;
  tags: string[];
  role?: string;
  timeline?: string;
  tools?: string[];
  link?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details: string[];
  honors?: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
}

export interface Skill {
  category: string;
  items: SkillItem[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  details: string[];
  location?: string;
}
