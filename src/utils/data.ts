export const allProjects = [
  {
    path: "/project/AI Artistry",
    img: "../../src/assets/projects/ai-art.png",
    title: "AI Artistry",
    subtitle:
      "React.js , Django , Websockets, Firebase , Gemini API, huggingface",
    // extraStyle: "-bottom-10 -right-10 bg-[#EC5C87]",

    description: `
     Art generation image web app with <span style="font-weight: bold;">React.js</span>,
        <span style="font-weight: bold;">Firebase</span> for data storage and authentication, and
        <span style="font-weight: bold;"> Django </span> for extra AI features with <span style="font-weight: bold;">Gemini</span>
    `,
    features: [
      "🖼️ AI image generation (Huggingface Lykon/art-diffusion-xl-0.9)",
      "🤖 Real-time chatbot for brainstorming with Django & Gemini",
      "🔒 Secure authentication via Firebase",
      "☁️ Cloud storage with post, comment, and interaction features",
      "👩‍🎨 Get artist names with similar styles using Gemini",
    ],
    githubLink: "https://github.com/Aya-Jafar/AI-ARTISTRY",
    activeLink: "https://ai-artistry-01.netlify.app/",
    extraImages: [
      "../../src/assets/projects/ai-art-2.png",
      "../../src/assets/projects/imagine.jpg",
    ],
  },
  {
    path: "/project/Heal Tech.AI",
    img: "../../src/assets/projects/heal-ai.png",
    title: "Heal Tech.AI",
    subtitle: "React.js , Typescript , Django , Firebase, Jest",
    description: `
  <span style="font-weight: bold;">React</span> web application designed to provide AI-powered medical services. It leverages a <span style="font-weight: bold;">Django</span> API backend and integrates with <span style="font-weight: bold;">Firebase</span> for seamless data management and authentication.
`,

    features: [
      "🤖 AI Medical Services with ML algorithms.",
      "🔐 Secure login via Firebase.",
      "⚙️ Scalable Django API backend.",
      "🔄 Real-time data sync with Firebase.",
    ],
    githubLink: "https://github.com/Aya-Jafar/Heal-Tech.AI-remake",
    activeLink: "https://heal-tech-ai.netlify.app/",
    extraImages: [
      "../../src/assets/projects/heal1.png",
      "../../src/assets/projects/heal2.png",
    ],
  },
  {
    path: "/project/Sound Shop",
    img: "../../src/assets/projects/Medium Banner Landscape Design.png",
    title: "Sound Shop",
    subtitle: "React.js , Django, bootstrap",
    description:
      "React and Django e-commerce web app for music instruments with Paypal integration",

    extraImages: [
      "../../src/assets/projects/sound1.png",
      "../../src/assets/projects/sound2.png",
    ],
    features: [
      "🛒 E-commerce for music instruments with PayPal integration.",
      "⚙️ Django backend for product and transaction management.",
      "🎨 Responsive design with Bootstrap.",
      "🔒 Secure user authentication for orders.",
    ],
    githubLink: "https://github.com/Aya-Jafar/SoundShop-web-app",

    // extraStyle: "-bottom-10 -right-10 bg-[#EC5C87]",
  },

  {
    path: "/project/Resturant website",
    img: "../../src/assets/projects/res.png",
    title: "Resturant website",
    subtitle: "html,css , vanilla js",
    description:
      "A simple and responsive website for a restaurant, showcasing the menu and providing contact information.",

    features: [
      "🍽️ Menu display with detailed item descriptions.",
      "📱 Mobile-responsive design for all devices.",
      "💬 Contact form for customer inquiries.",
      "🌐 Smooth navigation and fast load times.",
    ],

    githubLink: "https://github.com/Aya-Jafar/resturant-site-ui",
    extraImages: [
      "../../src/assets/projects/res1.png",
      "../../src/assets/projects/res2.png",
    ],
    // extraStyle: "-bottom-10 -right-10 bg-[#EC5C87]",
  },
  {
    path: "/project/Little Lemon",
    img: "../../src/assets/projects/little-lemon.png",
    title: "Little Lemon",
    subtitle: "React.js",
    description:
      "A modern restaurant web app built with React.js, providing a seamless food ordering experience with an elegant UI.",

    githubLink: "https://github.com/Aya-Jafar/meta-frontend-capstone",
    features: [
      "🍽️ Static restaurant website with an elegant UI.",
      "📱 Fully responsive for all devices.",
      "🎨 Styled with modern CSS for a smooth user experience.",
    ],

    extraImages: [
      "../../src/assets/projects/lemon1.png",
      "../../src/assets/projects/lemon2.png",
    ],

    // extraStyle: "-bottom-10 -right-10 bg-[#EC5C87]",
  },
  {
    path: "/project/Favourite cartoon",
    img: "../../src/assets/projects/cartoon.png",
    title: "Favourite cartoon",
    description:
      "A fun static React web page showcasing a favorite cartoon with engaging visuals and animations.",
    subtitle: "React.js",

    features: [
      "🎨 Visually appealing cartoon showcase.",
      "⚡ Built with React.js for a smooth experience.",
      "📱 Fully responsive for all screen sizes.",
    ],

    extraImages: [
      "../../src/assets/projects/cartoon1.png",
      "../../src/assets/projects/cartoon2.png",
    ],

    githubLink: "https://github.com/Aya-Jafar/favourite-cartoon-app",
  },

  {
    path: "/project/Book library",
    img: "../../src/assets/projects/books.png",
    title: "Book library",
    subtitle: "React.js",

    description:
      "React-based book library showcasing a collection of books with a clean and responsive design integrated with google books api.",

    features: [
      "📚 Displays a collection of books in an organized layout with search functionality.",
      "🎨 Random color generation for each book.",
      "📱 Fully responsive design for all devices.",
    ],
    githubLink: "https://github.com/Aya-Jafar/books-library-react-app",

    extraImages: [
      "../../src/assets/projects/books1.png",
      "../../src/assets/projects/books2.png",
    ],
  },
];

export const getProjectData = (projectName: string) => {
  return allProjects.find((project) => project.title === projectName);
};

export const artworks = [
  {
    link: "https://www.instagram.com/p/CKEjbIQFOSE/?img_index=1",
  },
  {
    link: "https://www.instagram.com/p/CJHI0hKlnd6/?img_index=1",
  },
  {
    link: "https://www.instagram.com/p/CJHI0hKlnd6/?img_index=1",
  },
];
