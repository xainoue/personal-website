import { Project } from "@/app/types/projects";

// Add your projects here

export const projects: Project[] = [
  {
    title: "Ice cream adventure",
    description:
      "A seemingly simple ice cream game about serving customers with a combat/adventure twist. I made this game in 2022 as a project for my middle school computer science class. I used p5.js to make the game.",
    image: "🍦",
    tags: ["p5.js"],
    github: "https://github.com/xainoue/ice-cream-adventure",
    live: "",
  },
  {
    title: "Ice cream game",
    description:
      "A simple game about serving customers in an ice cream shop. I made this game recently inspired by the ice cream adventure game I made in 2022, however making it much more simple due to the new programming tools I was learning to work with as well as the new challenges of designing my own assets. I used Python to make the game.",
    image: "🍧",
    tags: ["Python", "Cursor"],
    github: "https://github.com/xainoue/ice-cream-game",
    live: "",
  },
  {
    title: "Project Name 3",
    description:
      "A third project showcasing different aspects of your expertise. This could be a mobile app, web application, or any other type of project.",
    image: "file:///Users/cheriec/Downloads/piece1.png",
    tags: ["IbisPaint"],
    github: "",
    live: "",
  },
  {
    title: "Project Name 4",
    description:
      "Your fourth featured project. Remember to include metrics and results where possible to show the impact of your work.",
    image: "file:///Users/cheriec/Downloads/piece2.png",
    tags: ["IbisPaint"],
    github: "",
    live: "",
  },
];
