export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image?: string;
  hasCaseStudy?: boolean;
  link?: string;
  githubUrl?: string;
  pypiUrl?: string;
}

export interface Report {
  id: string;
  title: string;
  date: string;
  summary: string;
  content: string;
  authors: string;
  type: string;
  tags: string[];
}
