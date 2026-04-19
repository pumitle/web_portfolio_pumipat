export type Project = {
  tag: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  repo: string;
  featured: boolean;
};

export const mockProjects: Project[] = [
  {
    tag: "Full Stack",
    title: "Job Sync",
    description:
      "Developed a job search platform featuring CV creation and attachment capabilities, along with a Back-office system for companies to manage applicants.",
    tech: ["Next.js", "TypeScript", "PostgreSQL","GO", "Docker" ,"Java Spring Boot" ,"Keycloak"],
    link: "https://jobsync-client-pre.extenditresource.com/home",
    repo: "#",
    featured: true,
  },
  {
    tag: "Full Stack",
    title: "Pet Matching Application Project",
    description:
      "This is a pet matching application that facilitates pet pairing through a request-based matching system. Users can view the locations of other users' pets and submit price proposals through a bidding system. The application includes an administrative system for managing pet data within the platform.",
    tech: ["Node.js", "Flutter", "MySQL", "Postman"],
    link: "#",
    repo: "#",
    featured: false,
  },
  {
    tag: "Backend",
    title: "Rider Delivery Application Project",
    description:
      "This is a delivery application that facilitates package pickup and delivery for customers via riders. Customers can monitor their delivery status in real-time, while riders can view incoming orders in real-time as well.",
    tech: ["Node.js", "Flutter", "MySQL", "Postman"],
    link: "#",
    repo: "#",
    featured: false,
  },

];
