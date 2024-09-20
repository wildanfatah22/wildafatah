import exploreka from "../assets/projects/exploreka.png";
import explorin from "../assets/projects/explorin.png";
import trashapp from "../assets/projects/trashapp.png";
import scm from "../assets/projects/mrp.png";
import servisin from "../assets/projects/servisin.png";
import tiket from "../assets/projects/tiketwisatasurabaya.png";
import jjk from "../assets/projects/jjk.png";
import storyapp from "../assets/projects/storyapp.png";
import carrental from "../assets/projects/rental.png";
import bersukaria from "../assets/projects/bersukaria.png";
import newsapp from "../assets/projects/newsapp.png";

export const HERO_CONTENT =
  "I am a fresh graduate passionate about mobile development and machine learning. Besides coding, I enjoy reading books and playing games.";

export const ABOUT_CONTENT = `
  I'm a dedicated individual with a strong track record of delivering exceptional results in both personal and professional endeavors. My passion for technology, coupled with my strong organizational skills and leadership abilities, have enabled me to excel in various roles and projects.
  With a solid foundation in Machine Learning and Mobile Development, I've honed my skills through internships and active participation in organizations. My experience as a frontend developer in a financial company and involvement in the Bangkit Academy 2023 program have provided me with valuable hands-on experience and a deep understanding of industry best practices. I'm eager to leverage my technical expertise and problem-solving skills to contribute to innovative projects and drive positive change. My ability to collaborate effectively with teams, combined with my drive for continuous learning, makes me a valuable asset to any organization.
  Let us work together and achieve great things!
  `;

export const EXPERIENCES = [
  {
    year: "Feb 2024 - Aug 2024",
    role: "Back-End Java Engineer Student",
    company: "SYNRGY Academy",
    description: [
      `Implemented RESTful APIs and integrated with PostgreSQL databases.`,
    ],
    technologies: ["Java", "Spring", "Spring Boot", "Postgres"],
  },
  {
    year: "Aug 2023 - Jan 2024",
    role: "Android Engineer Student",
    company: "SYNRGY Academy",
    description: [
      `Developed user interfaces for android applications using Kotlin. Worked closely with backend developers to integrate frontend components. Implemented responsive designs and optimized frontend performance.`,
    ],
    technologies: ["Kotlin", "Retrofit", "Android Studio"],
  },
  {
    year: "Aug 2023 - Jan 2024",
    role: "Mobile Development Cohort",
    company: "Bangkit Academy led By Google, Tokopedia, Gojek, & Traveloka",
    description: [
      `- Led a team of developers in creating "Explorin," a travel recommendation application that utilizes machine learning for personalized recommendations.`,
      `- Demonstrated proficiency in Kotlin, MVVM architecture, Retrofit, and Kotlin Coroutines to build efficient and user-friendly mobile applications.`,
    ],
    technologies: ["Kotlin", "Retrofit", "Android Studio"],
  },
  {
    year: "Feb 2023 - Jul 2023",
    role: "Machine Learning Cohort",
    company: "Bangkit Academy led By Google, Tokopedia, Gojek, & Traveloka",
    description: [
      `- Led a team of developers in creating "Exploreka," a travel recommendation system that leverages machine learning to provide personalized recommendations.`,
      `- Successfully managed resources, made data-driven decisions, and fostered a collaborative team environment throughout the capstone project.`,
    ],
    technologies: ["Python", "TensorFlow", "Numpy", "FastAPI"],
  },
  {
    year: "Jan 2023 - Mar 2023",
    role: "IT Governance Analyst",
    company: "Dinas Komunikasi dan Informatika Provinsi Jawa Timur",
    description: [
      `- Implemented an IT Balanced Scorecard framework to evaluate the effectiveness of the Kominfo helpdesk application in supporting business processes`,
      `- Analyzed key performance indicators (KPIs) to measure application performance, identify areas for improvement, and ensure alignment with organizational goals.`,
    ],
    technologies: ["Analyst", "IT-BSC", "KPI"],
  },
  {
    year: "Aug 2022 - Dec 2022",
    role: "Front-End Developer",
    company: "Astra Credit Companies (ACC)",
    description: [
      `- Demonstrated proficiency in OutSystems development by successfully integrating the backend REST API into a functional front-end website for the car rental application.`,
      `- Utilized OutSystems' low-code capabilities to rapidly develop the front-end interface, ensuring a user-friendly and intuitive experience for customers.`,
    ],
    technologies: ["OutSystems"],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Waste Classification App",
    desc: "is a Kotlin-based Android application designed to help users classify types of waste through image processing using machine learning technology. This application is equipped with a TensorFlow Lite model that has been trained to detect various types of waste.",
    tools: ["Kotlin", "Android Studio", "TfLite"],
    image: trashapp,
    category: "mobile",
    url: "https://github.com/wildanfatah22/TrashApp",
    domain: "",
  },
  {
    id: 2,
    title: "Waste Classification Machine Learning",
    desc: "The project implements a waste classification system using a pre-trained DenseNet169 model. The model is capable of classifying images into six categories: plastic, paper, organic matter, metal, glass, and cardboard.",
    tools: ["TensorFlow", "Python"],
    image: trashapp,
    category: "ml",
    url: "https://colab.research.google.com/drive/1vt_ftI_qm9c_7rR8zP-vMmDYGOmKOfj1?usp=sharing",
    domain: "",
  },
  {
    id: 3,
    title: "Explorin App",
    desc: "The Explorin app is a platform innovative travel application tailored to Indonesia, aimed at providing users with personalized recommendations of tourist attractions and hidden attractions based on their personal interests and preferences.",
    tools: ["Kotlin", "Android Studio", "Retrofit"],
    image: explorin,
    category: "mobile",
    url: "https://github.com/CH2-PS484-Capstone/mobile-development",
    domain: "",
  },
  {
    id: 4,
    title: "Itinerary Recommendation for Exploreka App",
    desc: "Exploreka leverages machine learning for personalized recommendations. It uses both content-based and collaborative filtering techniques to suggest tailored tourist destinations, activities, and accommodations. Additionally, a decision support system assists users in making informed choices.",
    tools: ["TensorFlow", "Python"],
    image: exploreka,
    category: "ml",
    url: "https://github.com/Exploreka/Machine-Learning",
    domain: "",
  },
  {
    id: 5,
    title: "News App",
    desc: "News app is an Android project built using Kotlin, Jetpack Compose, and follows Clean Architecture with the MVVM pattern. This app consumes news data from the News API to display the latest news to users.",
    tools: ["Kotlin", "Android Studio", "Retrofit"],
    image: newsapp,
    category: "mobile",
    url: "https://github.com/wildanfatah22/NewsAppCompose",
    domain: "",
  },
  {
    id: 6,
    title: "Story App",
    desc: "This Story is an Android project built using Kotlin. It was created to fulfill the final coding project in Belajar Pengembangan Aplikasi Android Intermediate",
    tools: ["Kotlin", "Android Studio", "Retrofit"],
    image: storyapp,
    category: "mobile",
    url: "https://github.com/wildanfatah22/StoryApp",
    domain: "",
  },
  {
    id: 7,
    title: "JEJAKKAKI",
    desc: "Jejak Kaki is an app that invites you to explore the stunning natural wonders of Indonesia. With Jejak Kaki, you can explore various national parks from Sabang to Merauke, get up close and personal with endemic wildlife inhabiting Indonesia's forests, and enjoy the beauty of the Indonesian nature from your mobile screen.",
    tools: ["Kotlin", "Android Studio"],
    image: jjk,
    category: "mobile",
    url: "https://github.com/wildanfatah22/JEJAKKAKI",
    domain: "",
  },
  {
    id: 8,
    title: "Exploreka App Design",
    desc: "The Exploreka app is a platform designed to help users find and plan their travel journeys, including a range of available travel packages. The app provides up-to-date information on tourist destinations, activities, and accommodations.",
    tools: ["Figma"],
    image: exploreka,
    category: "uiux",
    url: "https://www.figma.com/design/nQA5Va5Z3JbRo6hQLWRSgt/Exploreka-Design-Apps?node-id=1-5260&t=eU0Ll3MitwzZdHX8-1",
    domain: "",
  },
  {
    id: 8,
    title: "Explorin App Design",
    desc: "The Explorin app is a platform innovative travel application tailored to Indonesia, aimed at providing users with personalized recommendations of tourist attractions and hidden attractions based on their personal interests and preferences",
    tools: ["Figma"],
    image: explorin,
    category: "uiux",
    url: "https://www.figma.com/design/QOrkthiChb2GPKIPWfQGg9/App-Design?node-id=0-1&t=Khwv2B23KQjr3eqI-1",
    domain: "",
  },
  {
    id: 9,
    title: "ServisIn App Design",
    desc: "ServisIn is a specialized application designed to facilitate users in calling and finding home service professionals. With ServisIn, users can easily find and contact nearby service providers who are suitable for their repair or home service needs.",
    tools: ["Figma"],
    image: servisin,
    category: "uiux",
    url: "https://www.figma.com/design/xSicUdeI456fdhmjt5QAFg/ServisIn?node-id=0-1&t=EgiFDGMuZAswstpv-1",
    domain: "",
  },
  {
    id: 10,
    title: "Simple Supply Chain Management Website",
    desc: "This web application is designed to help manage a supply chain in a simple manner. Using native PHP, this application allows users to track inventory, manage orders, and monitor shipments.",
    tools: ["PHP"],
    image: scm,
    category: "website",
    url: "https://github.com/wildanfatah22/FPMRP",
    domain: "",
  },
  {
    id: 11,
    title: "Simple Car Rental Website",
    desc: "This web application is a simple car rental system built using PHP. It allows users to browse available cars, make reservations, and manage their rental history.",
    tools: ["PHP"],
    image: carrental,
    category: "website",
    url: "https://github.com/wildanfatah22/rentalmobil.git",
    domain: "",
  },
  {
    id: 12,
    title: "Bersukaria Website Design",
    desc: "The website Bersukaria is a platform that promotes happiness and well-being through various means and resources. It is designed to provide visitors with a positive and uplifting online experience. The name Bersukaria is derived from the Indonesian word bersukacita, which means to rejoice or to celebrate joyfully.",
    tools: ["Figma"],
    image: bersukaria,
    category: "uiux",
    url: "https://www.figma.com/design/vBlDd2IBU0r3BDmIC3xvqR/Bersukaria?node-id=0-1&t=5vnAXenb8zL4ba4r-1",
    domain: "",
  },
  {
    id: 13,
    title: "Simple Car Rental Website Design",
    desc: "This web application is a simple car rental system built using PHP. It allows users to browse available cars, make reservations, and manage their rental history.",
    tools: ["Figma"],
    image: carrental,
    category: "website",
    url: "https://www.figma.com/design/G5Uwo3GLWZu9eOJdgceT3c/RENTAL-MOBIL?node-id=0-1&t=rHRigAOoQjqN9jnK-1",
    domain: "",
  },
  {
    id: 14,
    title: "Re-design Tiket Wisata Surabaya Website",
    desc: "The Surabaya Tourist Tickets website redesign, built with Figma, aims to create a modern, user-friendly interface, improving the booking experience for visitors exploring and purchasing tickets for top attractions. Additionally, the catering website offers a wide selection of freshly prepared meals for events, with personalized menus and professional delivery services.",
    tools: ["Figma"],
    image: tiket,
    category: "website",
    url: "https://www.figma.com/design/G5Uwo3GLWZu9eOJdgceT3c/RENTAL-MOBIL?node-id=0-1&t=rHRigAOoQjqN9jnK-1",
    domain: "",
  },
];

export const CONTACT = {
  email: "awildanfatahillah@gmail.com",
  linkedIn: "wildanfatahh22",
};
