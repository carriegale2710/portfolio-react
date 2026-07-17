import { comingSoon } from "@/assets";
import socialLinks from "@/config/socialLinks";
import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    title: "Indigenous Academic Library",
    description:
      "Full-stack Flask web app for managing restricted cultural collections for a public library. Features role-based access control, session management, and password hashing",
    technologies: ["Python", "Flask", "MySQL", "HTML", "CSS"],
    icon: comingSoon,
    detailsUrl: "/projects/indigenous-library",
    githubUrl: socialLinks.repositories.projectOne,
  },
  {
    title: "Employee Management System",
    description:
      "Full-stack CRUD application for managing employee records and contracts. Built over 4 weeks as a solo project, it demonstrates enterprise-level development practices including comprehensive testing, CI/CD deployment, and scalable architecture.",
    technologies: [
      "React",
      "Typescript",
      "SASS",
      "Java",
      "Spring Boot",
      "MySQL",
    ],
    icon: comingSoon,
    detailsUrl: "/projects/employee-creator",
    githubUrl: socialLinks.repositories.projectTwo,
  },
  {
    title: "Trivia Game",
    description:
      "Play trivia with Questions fetched from Open Trivia Database. Users can keep track of the quiz games they played with token based session history.",
    technologies: ["React", "Typescript", "Java", "Spring Boot", "MySQL"],
    icon: comingSoon,
    detailsUrl: "/projects/trivia",
    githubUrl: socialLinks.repositories.projectThree,
  },
  {
    title: "Minesweeper Game",
    description:
      "Recreate a simplified version of the game Minesweeper to be played in the java console.",
    technologies: ["Java"],
    icon: comingSoon,
    detailsUrl: "/projects/minesweeper",
    githubUrl: socialLinks.repositories.projectFour,
  },
];
