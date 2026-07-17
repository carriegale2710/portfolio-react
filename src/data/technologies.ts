import type { Technology } from "@/lib/types";
import techIcons from "@/assets/technologies";

// Destructure for backwards compatibility with existing code
const {
  AWSLight: AWS,
  NodeJSLight: NodeJS,
  ReactLight: React,
  TailwindCSSLight: TailwindCSS,
  TypeScript,
  VercelLight: Vercel,
} = techIcons;

export const technologies: Technology[] = [
  {
    title: "AWS",
    icon: AWS,
  },
  {
    title: "NodeJS",
    icon: NodeJS,
  },
  {
    title: "React",
    icon: React,
  },
  {
    title: "Tailwind CSS",
    icon: TailwindCSS,
  },
  {
    title: "TypeScript",
    icon: TypeScript,
  },
  {
    title: "Vercel",
    icon: Vercel,
  },
];
