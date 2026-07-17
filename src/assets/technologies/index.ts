// Tech stack assets module - consolidates all tech stack icons
import AWSLight from "./AWS-Light.svg";
import NodeJSLight from "./NodeJS-Light.svg";
import ReactLight from "./React-Light.svg";
import TailwindCSSLight from "./TailwindCSS-Light.svg";
import TypeScript from "./TypeScript.svg";
import VercelLight from "./Vercel-Light.svg";

export const techIcons = {
  AWSLight,
  NodeJSLight,
  ReactLight,
  TailwindCSSLight,
  TypeScript,
  VercelLight,
};

// Export as array for easier iteration if needed
export const techIconArray = Object.entries(techIcons).map(([name, icon]) => ({
  name,
  icon,
}));

export default techIcons;
