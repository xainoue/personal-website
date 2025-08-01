import { SkillList } from "@/app/types/skills";
import { Code, Database, Palette, Globe } from "lucide-react";

// Add your skills here
// NOTE: you can also use other libraries for icons (e.g. React Icons)

export const skills: SkillList[] = [
  {
    category: "Frontend",
    icon: <Code className="w-6 h-6" />,
    skills: ["Next.js", "Python", "p5.js", "Cursor"],
  },
  {
    category: "Backend",
    icon: <Database className="w-6 h-6" />, // React.ReactNode
    skills: ["Node.js", "JavaScript"],
  },
  {
    category: "Design",
    icon: <Palette className="w-6 h-6" />,
    skills: ["Krita", "Blender", "Clip Studio Paint",],
  },
  {
    category: "Tools",
    icon: <Globe className="w-6 h-6" />,
    skills: ["Git", "Vercel", "VS Code"],
  },
];
