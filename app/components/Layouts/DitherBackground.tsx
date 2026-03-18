// app/components/layout/DitherBackground.tsx
// Background diisolasi supaya kalau mau ganti efek, cukup edit sini

"use client";

import dynamic from "next/dynamic";

const Dither = dynamic(() => import("@/app/components/Dither/Dither"), {
    ssr: false,
    });

    export function DitherBackground() {
    return (
        <div className="absolute inset-0 -z-10 w-full h-full">
        <Dither
            waveColor={[0.5, 0.5, 0.5]}
            disableAnimation={false}
            enableMouseInteraction={true}
            mouseRadius={0.3}
            colorNum={4}
            waveAmplitude={0.3}
            waveFrequency={3}
            waveSpeed={0.001}
        />
        </div>
    );
}
