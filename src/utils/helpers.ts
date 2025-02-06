export const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start", // scrolls to the top of the section
    });
  }
};


export const getTitleFontSize = (title: string) => {
  const length = title.length;
  if (length <= 20) {
    return "2rem"; // Larger size for shorter titles
  } else if (length <= 30) {
    return "1.5rem"; // Medium size for medium titles
  } else {
    return "1rem"; // Smaller size for longer titles
  }
};
