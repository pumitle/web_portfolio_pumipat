export type Experience = {
  title: string;
  company: string;
  duration: string;
  description: string;
};

export const mockExperiences: Experience[] = [
  {
    title: "Full Stack Developer",
    company: "Extend IT Resources | Internship ",
    duration: "Dec2025 – Mar2026",
    description:
      "Migrated the back-end architecture from Go to Java Spring Boot, transitioning from a monolithic to a Microservices architecture to improve scalability and maintainability. Refactored and enhanced the front-end by resolving critical defects and developing new responsive pages using  React.",
  },
  {
    title: "Full Stack Developer",
    company: "MSU | Technical Projects",
    duration: "2025",
    description:
      "Developed and implemented RESTful APIs using Node.js to support application functionality, and successfully integrated these APIs with the Flutter front-end."
  },

  {
    title: "Backend Developer",
    company: "MSU | Technical Projects",
    duration: "2024 ",
    description:
      "Developed and implemented RESTful APIs using Node.js to support application functionality, and successfully integrated these APIs with the Flutter front-end.",
  },
];
