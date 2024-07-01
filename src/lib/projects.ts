import { Project } from "./definitions";
import linyersPageV1 from "@/assets/projects/linyers_page_v1.jpeg";
import lomitosAPI from "@/assets/projects/lomitos_api.jpeg";
import ecommerce from "@/assets/projects/ecommerce.jpeg";
import quiz from "@/assets/projects/quiz.png";
import pdfGenerator from "@/assets/projects/pdf_generator.png";
import pomoMon from "@/assets/projects/pomomon.png";
import cyberCafe from "@/assets/projects/cyber_cafe.png";
import multigtg from "@/assets/projects/multigtg.png";

export const projects: Project[] = [
  {
    id: 1,
    url: "multigtg",
    images: [multigtg],
    tags: ["Job", "Django", "JS", "Bootstrap", "Nginx", "Docker", "PostgreSQL"],
    github: "",
    website: "http://multigtg.duckdns.org",
    es: {
      title: "MultiGTG",
      description:
        "Este fue un trabajo que realicé, se trata de una aplicación para subir álbumes de fotos. En la página de inicio se encuentran los álbumes y sus 4 primeras fotos, que se pueden seleccionar en el momento en que se suben las fotos. Hay un buscador para encontrar los títulos y etiquetas que coincidan. La aplicación se desarrolló con Django, JavaScript y Bootstrap. Para desplegar la aplicación se utilizó Nginx y Docker, y para la base de datos se usó PostgreSQL. El cliente estuvo satisfecho con la aplicación y con que haya terminado las funciones importantes en poco tiempo.",
    },
    en: {
      title: "MultiGTG",
      description:
        "This was a project I worked on; it is an application for uploading photo albums. On the homepage, you can find the albums and their first 4 photos, which can be selected when the photos are uploaded. There is a search feature to find matching titles and tags. The application was developed with Django, JavaScript, and Bootstrap. Nginx and Docker were used to deploy the app, and PostgreSQL was used for the database. The client was satisfied with the app and the fact that I completed the important features in a short time.",
    },
  },
  {
    id: 2,
    url: "pdf-generator",
    images: [pdfGenerator],
    tags: ["Job", "DjangoRest", "PostgreSQL", "ReactJS", "Docker", "Nginx"],
    github: "",
    website: "",
    es: {
      title: "Generador de PDF",
      description:
        "Este fue un trabajo que realicé, es una aplicación genera PDFs a partir de CSVs con información de analíticas de Google Ads. Lo que hacía era enviar varios CSVs desde una aplicación de React a una API desarrollada en Django, y la API se encargaba de generar un PDF que era un resumen a través de la información de los CSVs. El resumen era creado mediante inteligencia artificial, y después de ser procesado se guardaba en una base de datos y se enviaba de vuelta a la aplicación de React. Allí, el usuario podía visualizar y/o descargar su resumen generado por IA. Me encargué del desarrollo de la aplicación de React, que es la que ve el usuario, y también de la API y sus respectivas conexiones. No desarrollé el modo en que se realiza la generación del PDF mediante IA, aunque estuve revisando y resolviendo algunos problemas que había en ello. Además, me encargué del despliegue de la API en AWS usando Docker y Nginx.",
    },
    en: {
      title: "PDF Generator",
      description:
        "This was a project I worked on; it is an application who generates PDFs from CSVs containing Google Ads analytics information. What it did was send several CSVs from a React application to an API developed in Django, and the API was responsible for generating a PDF that summarized the information from the CSVs. The summary was created through artificial intelligence, and after being processed, it was saved in a database and sent back to the React application. There, the user could view and/or download their AI-generated summary. I was responsible for the development of the React application, which is what the user sees, and also the API and its respective connections. I did not develop the way the PDF generation through AI is done, although I was reviewing and solving some problems in that process. Additionally, I handled the deployment of the API on AWS using Docker and Nginx.",
    },
  },
  {
    id: 3,
    url: "exams-app",
    images: [quiz],
    tags: [
      "Job",
      "DjangoRest",
      "PostgreSQL",
      "ReactJS",
      "TailwindCSS",
      "Zustand",
    ],
    github: "https://github.com/linyers/quiz-django-react",
    website: "",
    es: {
      title: "App de examenes",
      description:
        "Esta aplicación fue hecha para un cliente y sigue en mantenimiento. Se trata de una app de gestión de exámenes de secundaria, cada examen tiene información sobre el año, curso, asignatura, cuando empieza y finaliza el examen, además de sus respectivas preguntas y las respuestas de dichas preguntas. El profesor podrá crear, modificar y eliminar los exámenes, así como también las cuentas de los alumnos. Los alumnos podrán realizar los exámenes de forma intuitiva, ver cuánto tiempo les queda, y el resultado al finalizar el examen. Fue hecha con Django y DjangoRest para el backend y ReactJS para el frontend. Además, para la gestión del estado se usó la librería Zustand y para la autenticación de usuarios se usó JWT.",
    },
    en: {
      title: "Exams App",
      description:
        "This application was made for a client and is still under maintenance. It is a high school exam management app; each exam has information about the year, grade, subject, start and end time, as well as its respective questions and answers. The teacher can create, modify, and delete exams, as well as student accounts. Students can take exams intuitively, see how much time is left, and view the results upon finishing the exam. It was built with Django and DjangoRest for the backend, and ReactJS for the frontend. Additionally, Zustand was used for state management, and JWT for user authentication.",
    },
  },
  {
    id: 4,
    url: "cyber-cafe",
    images: [cyberCafe],
    tags: ["Personal Project", "Django", "JS", "Bootstrap"],
    github: "https://github.com/linyers/cyber-cafe-reservations",
    website: "",
    es: {
      title: "Cyber Café Reservas",
      description:
        "Esta es una aplicación para realizar reservas de dispositivos como PC, PlayStation, Nintendo y Xbox. Los usuarios pueden elegir el tipo de dispositivo que desean usar, especificar desde qué hora hasta qué hora quieren utilizarlo y seleccionar el dispositivo específico. Los usuarios pueden ver sus reservas y, para las reservas en curso, pueden ver en tiempo real cuánto tiempo les queda de uso del dispositivo. El administrador tiene la capacidad de añadir nuevos dispositivos y gestionar las reservas de los usuarios. Fue desarrollada con Django, JavaScript Vanilla y Bootstrap.",
    },
    en: {
      title: "Cyber Cafe Reservations",
      description:
        "This is an application for booking devices such as PCs, PlayStation, Nintendo, and Xbox. Users can choose the type of device they want to use, specify the start and end times for their usage, and select the specific device. Users can view their reservations, and for ongoing reservations, they can see in real-time how much usage time they have left on the device. The administrator has the ability to add new devices and manage user reservations. It was developed with Django, Vanilla JavaScript, and Bootstrap.",
    },
  },
  {
    id: 5,
    url: "lomitos-api",
    images: [lomitosAPI],
    tags: [
      "Personal Project",
      "DjangoRest",
      "PostgreSQL",
      "ReactJS",
      "TailwindCSS",
      "Docker",
      "Nginx",
    ],
    github: "https://github.com/linyers/lomitos-api",
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
    id: 6,
    url: "pomomon",
    images: [pomoMon],
    tags: ["Personal Project", "React", "Typescript", "Zustand", "TailwindCSS"],
    github: "https://github.com/linyers/pomomon",
    website: "https://pomomon.vercel.app",
    es: {
      title: "PomoMon",
      description:
        "PomoMon es una herramienta diseñada para mejorar la productividad y la gestión del tiempo mediante la técnica de Pomodoro. Se pueden configurar el tiempo de los pomodoros (tiempo de trabajo), los descansos y los descansos largos. También se puede elegir una alarma y su volumen para cuando termine la sesión. Esta aplicación se creó con React y TypeScript, además de bibliotecas como Zustand y TailwindCSS.",
    },
    en: {
      title: "PomoMon",
      description:
        "PomoMon is a tool designed to improve productivity and time management through the Pomodoro technique. You can configure the time for the pomodoros (work time), breaks, and long breaks. You can also choose an alarm and its volume for when the session ends. This application was created with React and TypeScript, as well as libraries such as Zustand and TailwindCSS.",
    },
  },
  {
    id: 7,
    url: "ecommerce",
    images: [ecommerce],
    tags: [
      "Personal Project",
      "DjangoRest",
      "PostgreSQL",
      "ReactJS",
      "TailwindCSS",
    ],
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
    id: 8,
    url: "linyers-page-v1",
    images: [linyersPageV1],
    tags: [
      "Personal Project",
      "DjangoRest",
      "PostgreSQL",
      "ReactJS",
      "Docker",
      "Nginx",
    ],
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
];
