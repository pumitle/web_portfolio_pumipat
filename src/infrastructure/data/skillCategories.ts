export type SkillCategory = {
  iconType: string; // "frontend" | "backend" | "database" | "devops"
  color: "cyan" | "orange";
  title: string;
  description: string;
};

/**
 * Skill categories data for the About section
 */
export const mockSkillCategories: SkillCategory[] = [
  {
    iconType: "frontend",
    color: "cyan",
    title: "Frontend",
    description: "React, Next.js, Flutter, immersive animations, responsive layouts.",
  },
  {
    iconType: "backend",
    color: "orange",
    title: "Backend",
    description: "Node.js, Spring Boot, NestJS, Go, scalable APIs, microservices, auth.",
  },
  {
    iconType: "database",
    color: "cyan",
    title: "Database",
    description: "PostgreSQL, MySQL, schema design, caching.",
  },
  {
    iconType: "devops",
    color: "orange",
    title: "DevOps",
    description: "Docker, CI/CD pipelines, deployment.",
  },
];
