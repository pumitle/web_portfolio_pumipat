export type Education = {
  degree: string;
  institution: string;
  duration: string;
  gpax: string;
  tags: string[];
};

export const mockEducations: Education[] = [
  {
    degree: "B.Sc. Computer Science",
    institution: "Mahasarakham University",
    duration: "2022 – 2025",
    gpax: "3.26",
    tags: ["Algorithms", "Networks", "Databases" ,"Software Engineering", "Data Science","Web Development" ,"Mobile Development"],
  },
];
