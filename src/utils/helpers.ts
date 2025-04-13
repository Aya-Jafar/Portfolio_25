export const scrollToSection = (sectionId: string) => {
  const currentPath = window.location.pathname;

  if (currentPath !== "/") {
    window.location.href = `/#${sectionId}`;
    return;
  }

  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export const getTitleFontSize = (title: string) => {
  const length = title.length;
  if (length <= 13) {
    return "1.8rem"; // Larger size for shorter titles
  } else if (length <= 30) {
    return "1.5rem"; // Medium size for medium titles
  } else {
    return "1rem"; // Smaller size for longer titles
  }
};

export const getSubTitleFontSize = (title: string) => {
  const length = title.length;
  // if (length <= 50) {
  //   return "1.2rem";
  // } else
   if (length <= 30) {
    return "1.3rem";
  } else {
    return "1rem";
  }
};

export const truncateText = (text: string, maxLength: number = 20) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
};
