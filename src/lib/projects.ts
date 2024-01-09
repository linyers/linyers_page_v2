import { Project } from "./definitions";
import linyersPageV2 from "@/assets/projects/linyers_page_v2.png";

export const projects: Project[] = [
  {
    id: 1,
    url: "lomitos-api",
    images: [linyersPageV2],
    tags: ["Django", "DjangoRest", "ReactJS", "Docker", "Python"],
    github: "https://github.com/linyers/LomitosAPI",
    website: "",
    es: {
      title: "Lomitos API",
      description:
        "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
    },
    en: {
      title: "Lomitos API",
      description: "lorem",
    },
  },
  {
    id: 2,
    url: "ecommerce",
    images: [linyersPageV2],
    tags: ["Django", "DjangoRest", "ReactJS"],
    github: "https://github.com/linyers/Ecommerce-django",
    website: "",
    es: {
      title: "Ecommerce",
      description: "lorem",
    },
    en: {
      title: "Ecommerce",
      description: "lorem",
    },
  },
  {
    id: 3,
    url: "linyers-page-v1",
    images: [linyersPageV2],
    tags: ["Django", "DjangoRest", "ReactJS", "Docker"],
    github: "https://github.com/linyers/LinyersPage",
    website: "",
    es: {
      title: "Mi primer sitio web personal",
      description: "lorem",
    },
    en: {
      title: "",
      description: "lorem",
    },
  },
  {
    id: 4,
    url: "linyers-page-v2",
    images: [linyersPageV2],
    tags: ["NextJS", "TypeScript"],
    github: "https://github.com/linyers/linyers_page_v2",
    website: "",
    es: {
      title: "Mi actual sitio web personal",
      description: "lorem",
    },
    en: {
      title: "",
      description: "lorem",
    },
  },
];
