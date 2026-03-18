// app/data/timeline.ts
// Data timeline TANPA JSX — murni plain object
// JSX-nya ada di components/sections/TimelineContent.tsx

export interface TimelineImage {
    src: string;
    alt: string;
    }

    export interface TimelineEntry {
    id: string;
    year: string;
    paragraphs: string[];
    images?: TimelineImage[];
    }

    export const TIMELINE_DATA: TimelineEntry[] = [
    {
        id: "2025",
        year: "2025",
        paragraphs: [
        "Transition from excel base into more code language try focus on python coders!",
        "While i feel amaze by automation i seek opportunity to learn data as OS...",
        ],
        images: [
        {
            src: "https://images.unsplash.com/photo-1560250056-07ba64664864?q=80&w=2902&auto=format&fit=crop",
            alt: "Sales Associate",
        },
        {
            src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
            alt: "Learn Data",
        },
        ],
    },
    // Tambahin entry baru di sini tanpa perlu sentuh page.tsx
];