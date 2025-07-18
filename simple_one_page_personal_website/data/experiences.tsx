import { Experience } from "@/app/types/experience";

// Add your experiences here


export const experiences: Experience[] = [
  {
    company: "Company Name",
    position: "Your Position",
    period: "2023 - Present",
    description:
      "Brief description of your role and key responsibilities. Include specific achievements and metrics where possible.",
    achievements: [
      "Increased efficiency by 40% through process optimization",
      "Led a team of 5 developers on multiple projects",
      "Implemented new technologies that reduced costs by 25%",
    ],
  },
  {
    company: "Previous Company",
    position: "Previous Position",
    period: "2021 - 2023",
    description:
      "Another role description highlighting your growth and contributions to the organization.",
    achievements: [
      "Developed and launched 3 major features",
      "Improved user satisfaction scores by 30%",
      "Mentored junior developers and interns",
    ],
  },
  {
    company: "Earlier Company",
    position: "Earlier Position",
    period: "2019 - 2021",
    description: "Your earlier experience and how it shaped your career path.",
    achievements: [
      "Successfully completed certification in [Technology]",
      "Contributed to open-source projects",
      "Participated in hackathons and coding competitions",
    ],
  },
];
