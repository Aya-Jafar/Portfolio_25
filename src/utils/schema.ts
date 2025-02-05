export interface ProjectData {
  path: string;
  img: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  githubLink: string;
  activeLink: string;
  colors?:Array<string>;
  extraImages?: string[]; // Optional because some projects may not have extra images
}
