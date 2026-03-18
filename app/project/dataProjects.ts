// app/data/projects.ts
// Data project dipindah ke sini dari project/dataProjects.ts
// Struktur diperkaya dengan 'tags' dan 'featured' flag

export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
    tags?: string[];
    featured?: boolean;
    }

    export const PROJECTS: Project[] = [
    {
        id: 1,
        title: "Portfolio App",
        description: "A Next.js + Tailwind project",
        image: "/images/project1.png",
        link: "https://github.com/yourusername/project1",
        tags: ["Next.js", "Tailwind"],
        featured: true,
    },
    {
        id: 2,
        title: "Data Dashboard",
        description: "Analytics with charts",
        image: "/images/project2.png",
        link: "https://github.com/yourusername/project2",
        tags: ["Python", "Charts"],
    },
    {
        id: 3,
        title: "Landing Page",
        description: "Responsive design project",
        image: "/images/project3.png",
        link: "https://yourportfolio.com/landing",
        tags: ["HTML", "CSS"],
    },
];