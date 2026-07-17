export type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
};

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  icon: string;
  detailsUrl: string;
  githubUrl: string;
};

export type Technology = {
  title: string;
  icon: string;
};
