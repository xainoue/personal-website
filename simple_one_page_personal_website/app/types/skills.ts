import React from "react";

interface Skill {
  title: string;
}

export interface SkillList {
  category: string;
  icon: React.ReactNode;
  skills: Skill[];
}
