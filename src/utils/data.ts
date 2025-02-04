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
      "🖼️ AI-powered image generation with huggingface (Lykon/art-diffusion-xl-0.9 model)",
      "🤖 Real time Chatbot to brainstorm prompts with Django and Gemini",
      "🔒 Secure authentication with Firebase",
      "☁️ Cloud-based data storage with ability for users to post,comment,save and interact with the previously generated images",
      "👩‍🎨 Additional feature with Gemini to get artists names with similar style to the generated image",
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
    // extraStyle: "-bottom-10 -right-10 bg-[#EC5C87]",
  },
  {
    path: "/project/Sound Shop",
    img: "../../src/assets/projects/Medium Banner Landscape Design.png",
    title: "Sound Shop",
    subtitle: "React.js , Django, bootstrap",
    // extraStyle: "-bottom-10 -right-10 bg-[#EC5C87]",
  },

  {
    path: "/project/Sound Shop",
    img: "../../src/assets/projects/res.png",
    title: "Resutant Website",
    subtitle: "html,css , vanilla js",
    // extraStyle: "-bottom-10 -right-10 bg-[#EC5C87]",
  },

  {
    path: "/project/Book Shop",
    img: "../../src/assets/projects/books.png",
    title: "Book library",
    subtitle: "React.js",
    // extraStyle: "-bottom-10 -right-10 bg-[#EC5C87]",
  },

  {
    path: "/project/Book Shop",
    img: "../../src/assets/projects/cartoon.png",
    title: "Book library",
    subtitle: "React.js",
    // extraStyle: "-bottom-10 -right-10 bg-[#EC5C87]",
  },

  {
    path: "/project/Book Shop",
    img: "../../src/assets/projects/little-lemon.png",
    title: "Little-lemon",
    subtitle: "React.js",
    // extraStyle: "-bottom-10 -right-10 bg-[#EC5C87]",
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