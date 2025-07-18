interface Achievement {
  content: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: Achievement[];
}
