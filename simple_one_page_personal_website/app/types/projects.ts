export interface Tag {
  title: string;
}

export interface Project {
  title: string;
  image: string;
  github: string;
  live: string;
  description: string;
  tags: Tag[];
}
