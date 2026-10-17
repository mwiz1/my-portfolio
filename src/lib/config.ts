// ✏️ Edit this file only — every component reads from here.
export const PROFILE = {
  name: "Your Name",
  title: "Information Technology Specialist",
  subtitle: "Software & Systems Developer",
  github: "https://github.com/your-username",
  linkedin: "https://www.linkedin.com/in/your-username",
  cv: "/cv.pdf", // put your PDF at public/cv.pdf
};

export type ProjectCategory = "web" | "data";

export interface Project {
  id: string;
  title: string;
  titleAr?: string;
  category: ProjectCategory;
  description: string;
  tags: string[];
  live?: string;
  github?: string;
  featured?: boolean;
}

// ➕ Add a new project = add one object here. It appears in the grid automatically.
export const PROJECTS: Project[] = [
  {
    id: "trippie",
    title: "Trippie",
    titleAr: "تربي",
    category: "web",
    featured: true,
    description:
      "End-to-end digital tourism and booking engine with custom itinerary planning and workflow automation.",
    tags: ["Node.js", "SQL / Database Design", "Systems Analysis", "REST APIs"],
    live: "#",
    github: "#",
  },
  {
    id: "bi-dashboards",
    title: "Data Analytics & BI Dashboards",
    category: "data",
    description:
      "Interactive statistical analysis, KPI tracking, and automated data processing.",
    tags: ["Power BI", "Python", "SQL"],
    live: "#",
    github: "#",
  },
  {
    id: "slot-1",
    title: "Next project",
    category: "web",
    description: "Graduation or personal project. Add title, description and links in src/lib/config.ts.",
    tags: ["Add stack"],
  },
  {
    id: "slot-2",
    title: "Next data project",
    category: "data",
    description: "Another analysis, dashboard or notebook goes here.",
    tags: ["Add stack"],
  },
];
