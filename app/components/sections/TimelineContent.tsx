// app/components/sections/TimelineContent.tsx
// Ini pengganti JSX yang dulu inline di timelineData
// Terpisah dari data supaya bisa di-style & di-test sendiri

import type { TimelineEntry } from "@/app/data/timeline";

interface TimelineContentProps {
    entry: TimelineEntry;
    }

    export function TimelineContent({ entry }: TimelineContentProps) {
    return (
        <div>
        {entry.paragraphs.map((text, i) => (
            <p
            key={i}
            className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200"
            >
            {text}
            </p>
        ))}

        {entry.images && entry.images.length > 0 && (
            <div className="grid grid-cols-2 gap-4">
            {entry.images.map((img) => (
                <img
                key={img.alt}
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60"
                />
            ))}
            </div>
        )}
        </div>
    );
}
