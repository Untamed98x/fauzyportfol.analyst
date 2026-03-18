// app/components/sections/CVSection.tsx

"use client";

import dynamic from "next/dynamic";
import SpotlightCard from "@/app/components/SpotlightCard/SpotlightCard";
import GradientText from "@/app/components/GradientText/GradientText";
import Magnet from "@/app/components/Magnet/Magnet";

const ScrollVelocity = dynamic(
    () => import("@/app/components/ScrollVelocity/ScrollVelocity"),
    { ssr: false }
    );

    const CV_LINK =
    "https://drive.google.com/file/d/123vUTdVxQ9LwOFwezuILq5FezI2nUvFR/view";

    export function CVSection() {
    return (
        <section id="CV" className="mt-8">
        <ScrollVelocity
            texts={["See My CV!"]}
            className="custom-scroll-text text-white bg-black"
        />

        <div className="mt-8">
            <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(0, 229, 255, 0.2)"
            >
            <Magnet>
                <GradientText
                colors={["#ff6a00", "#ff9500", "#ffd500"]}
                animationSpeed={3}
                showBorder={false}
                className="px-8 py-6 rounded-lg border"
                >
                <a href={CV_LINK} target="_blank" rel="noopener noreferrer">
                    See My CV!
                </a>
                </GradientText>
            </Magnet>
            </SpotlightCard>
        </div>
        </section>
    );
}
