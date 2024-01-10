import { Project } from "./definitions";
import linyersPageV2 from "@/assets/projects/linyers_page_v2.jpeg";
import linyersPageV1 from "@/assets/projects/linyers_page_v1.jpeg";
import lomitosAPI from "@/assets/projects/lomitos_api.jpeg";
import ecommerce from "@/assets/projects/ecommerce.jpeg";
import quiz from "@/assets/projects/quiz.png";

export const projects: Project[] = [
  {
    id: 1,
    url: "lomitos-api",
    images: [lomitosAPI],
    tags: ["Django", "DjangoRest", "ReactJS", "Docker", "Nginx"],
    github: "https://github.com/linyers/LomitosAPI",
    website: "https://lomitos-api.vercel.app",
    es: {
      title: "Lomitos API",
      description:
        "Este proyecto es una API REST que contiene información sobre algunos lugares de comida rápida, principalmente lomiterías, de mi ciudad, Santiago del Estero, Argentina. Para obtener los datos, se utilizó una biblioteca de web scraping llamada Selenium en la página de Google Maps. La API cuenta con autenticación de usuarios, paginación, filtros, todas las operaciones CRUD y otras funcionalidades. Para el desarrollo de la API se empleó Django Rest Framework, PostgreSQL y para el despliegue se utilizaron Docker, un servidor Nginx y además Gunicorn. La API fue desplegada en AWS. También existe documentación sobre la API escrita en ReactJS, la cual está disponible. Cabe destacar que actualmente la API no está disponible en la nube.",
    },
    en: {
      title: "Lomitos API",
      description:
        "This project is a REST API that contains information about some fast-food places, mainly snack bars, in my city, Santiago del Estero, Argentina. To obtain the data, a web scraping library called Selenium was used on the Google Maps page. The API features user authentication, pagination, filters, all CRUD operations, and other functionalities. For the development of the API, Django Rest Framework, PostgreSQL, Docker, an Nginx server, and Gunicorn were used for deployment. The API was deployed on AWS. There is also documentation about the API written in ReactJS, which is available. It's worth noting that the API is currently not available in the cloud.",
    },
  },
  {
    id: 2,
    url: "quiz",
    images: [quiz],
    tags: ["DjangoRest", "ReactJS", "TailwindCSS", "Zustand"],
    github: "https://github.com/linyers/quiz-django-react",
    website: "",
    es: {
      title: "Quiz",
      description:
        "Esta aplicación fue hecha para un cliente y sigue en mantenimiento. Se trata de una app de gestión de exámenes de secundaria, cada examen tiene información sobre el año, curso, asignatura, cuando empieza y finaliza el examen, además de sus respectivas preguntas y las respuestas de dichas preguntas. El profesor podrá crear, modificar y eliminar los exámenes, así como también las cuentas de los alumnos. Los alumnos podrán realizar los exámenes de forma intuitiva, ver cuánto tiempo les queda, y el resultado al finalizar el examen. Fue hecha con Django y DjangoRest para el backend y ReactJS para el frontend. Además, para la gestión del estado se usó la librería Zustand y para la autenticación de usuarios se usó JWT.",
    },
    en: {
      title: "Quiz",
      description:
        "This application was made for a client and is still under maintenance. It is a high school exam management app; each exam has information about the year, grade, subject, start and end time, as well as its respective questions and answers. The teacher can create, modify, and delete exams, as well as student accounts. Students can take exams intuitively, see how much time is left, and view the results upon finishing the exam. It was built with Django and DjangoRest for the backend, and ReactJS for the frontend. Additionally, Zustand was used for state management, and JWT for user authentication.",
    },
  },
  {
    id: 3,
    url: "ecommerce",
    images: [ecommerce],
    tags: ["Django", "DjangoRest", "ReactJS", "TailwindCSS"],
    github: "https://github.com/linyers/Ecommerce-django",
    website: "",
    es: {
      title: "Ecommerce",
      description:
        "Esta aplicación vendría a ser una suerte de MercadoLibre, donde existe autenticación de usuarios, direcciones de los usuarios, productos, búsqueda de productos, filtros, comentarios, reseñas, reembolsos y carrito de compras. Además, cada usuario puede publicar sus productos y comprar los productos de otros usuarios. La aplicación también cuenta con una pasarela de pago de prueba. Para el frontend se utilizó ReactJS y para el backend Django Rest Framework.",
    },
    en: {
      title: "Ecommerce",
      description:
        "This application would be a sort of MercadoLibre, where there is user authentication, user addresses, products, product search, filters, comments, reviews, refunds, and a shopping cart. In addition, each user can post their products and buy products from other users. The application also includes a test payment gateway. ReactJS was used for the frontend, and Django Rest Framework for the backend.",
    },
  },
  {
    id: 4,
    url: "linyers-page-v1",
    images: [linyersPageV1],
    tags: ["DjangoRest", "ReactJS", "Docker", "Nginx"],
    github: "https://github.com/linyers/LinyersPage",
    website: "https://linyers-page.vercel.app",
    es: {
      title: "Mi primer sitio web personal",
      description:
        "Este sitio web contiene una breve presentación sobre mí, un apartado de mis proyectos y un blog. El blog contenía un filtro por categorías y paginación. Para obtener los proyectos, se utilizaba la API de Github para obtener los datos de mis repositorios y luego guardarlos en una base de datos PostgreSQL. Para el frontend se usó ReactJS y para el backend Django Rest Framework. El backend se desplegó en AWS, se utilizó Docker y Nginx. Actualmente, el blog y el apartado de proyectos no están disponibles.",
    },
    en: {
      title: "My first personal website",
      description:
        "This website contains a brief presentation about me, a section for my projects, and a blog. The blog had a category filter and pagination. To obtain the projects, the Github API was used to fetch data from my repositories and then store it in a PostgreSQL database. ReactJS was used for the frontend, and Django Rest Framework for the backend. The backend was deployed on AWS, using Docker and Nginx. Currently, the blog and the projects section are not available.",
    },
  },
  {
    id: 5,
    url: "linyers-page-v2",
    images: [linyersPageV2],
    tags: ["NextJS", "TypeScript", "TailwindCSS"],
    github: "https://github.com/linyers/linyers_page_v2",
    website: "https://linyers.com.ar",
    es: {
      title: "Mi actual sitio web personal",
      description:
        "Este es el sitio web en el que ahora mismo estás navegando. Tiene ciertas características como el modo oscuro y claro, soporta el inglés y español, se puede tener la última canción que escuché en Spotify, mi estado actual en Discord, el tiempo y clima de donde vivo, mis redes sociales y un apartado para mis proyectos. Para el desarrollo de este sitio web se usó NextJS 14 con TypeScript.",
    },
    en: {
      title: "My current personal website",
      description:
        "This is the website you are currently browsing. It has certain features such as dark and light mode, supports English and Spanish, displays the last song I listened to on Spotify, my current status on Discord, the weather of my location, my social media links, and a section for my projects. NextJS 14 with TypeScript was used for the development of this website.",
    },
  },
];
