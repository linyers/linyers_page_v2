import { StaticImageData } from "next/image";

export type ProjectLang = {
  title: string;
  description: string;
};

export type Project = {
  id: number;
  url: string;
  images: StaticImageData[];
  tags: string[];
  github: string;
  website: string;
  es: ProjectLang;
  en: ProjectLang;
};
