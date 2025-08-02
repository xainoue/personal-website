import { Project } from "@/app/types/projects";

// Add your projects here

export const projects: Project[] = [
  {
    title: "Ice cream adventure",
    description:
      "A seemingly simple ice cream game about serving customers with a combat/adventure twist. I made this game in 2022 as a project for my middle school computer science class. It was my first real big project I had ever coded and introduced me to the possibilities ahead. I used p5.js to make the game.",
    image: "🍦",
    tags: ["p5.js"],
    github: "https://github.com/xainoue/ice-cream-adventure",
    live: "",
  },
  {
    title: "Ice cream game",
    description:
      "A simple game about serving customers in an ice cream shop. I made this game recently inspired by the ice cream adventure game I made in 2022, however making it much more simple due to the new programming tools I was learning to work with as well as the new challenges of designing my own assets. This was my second attempt at a bigger coding project not having picked up coding in a while. I used Python to make the game.",
    image: "🍧",
    tags: ["Python", "Cursor"],
    github: "https://github.com/xainoue/ice-cream-game",
    live: "",
  },
  {
    title: "Portrait",
    description:
      "An art piece I made in IbisPaint depicting a close up portrait of a person. I used this piece to study color and values by not directly color picking from a reference. It helped me improve my understanding in color theory and color contrasts that work well together.",
    image: "🎨",
    tags: ["IbisPaint"],
    github: "https://github.com/xainoue/still-life",
    live: "file:///Users/cheriec/Downloads/piece1.png",
  },
  {
    title: "Still life",
    description:
      "Another art piece I made in IbisPaint, a still life that I worked on to study the shapes and values of various still objects in a reference photo. This helped me improve in my ability to depict depth in my art.",
    image: "🖼️",
    tags: ["IbisPaint"],
    github: "https://github.com/xainoue/still-life",
    live: "file:///Users/cheriec/Downloads/piece2.png",
  },
];
