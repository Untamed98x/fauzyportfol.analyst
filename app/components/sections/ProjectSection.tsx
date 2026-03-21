// app/components/sections/ProjectSection.tsx
"use client";

import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SpotlightCard from "@/app/components/SpotlightCard/SpotlightCard";
import GradientText from "@/app/components/GradientText/GradientText";
import { TIMELINE_DATA } from "@/app/data/timeline";
import { TimelineContent } from "./TimelineContent";
import type { NotionProject } from "@/app/lib/notion";

const ScrollVelocity = dynamic(
    () => import("@/app/components/ScrollVelocity/ScrollVelocity"),
    { ssr: false }
    );
    const Timeline = dynamic(
    () => import("@/app/components/Timeline/Timeline").then((m) => m.Timeline),
    { ssr: false }
    );

    const timelineData = TIMELINE_DATA.map((entry) => ({
    title: entry.year,
    content: <TimelineContent entry={entry} />,
    }));

    const CV_LINK =
    "https://drive.google.com/file/d/123vUTdVxQ9LwOFwezuILq5FezI2nUvFR/view";

    // ✅ Terima projects sebagai props dari server component
    interface ProjectSectionProps {
    projects: NotionProject[];
    }

    export function ProjectSection({ projects }: ProjectSectionProps) {
    return (
        <section className="relative w-full mt-16">
        <ScrollVelocity
            texts={["My Journey", "Scroll Down", "Drag And Drop"]}
            className="custom-scroll-text text-white bg-black"
        />

        {/* Projects */}
        <div id="project" className="container mx-auto text-white mt-8">
            <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(0, 229, 255, 0.2)"
            >
            <GradientText
                colors={["#ff6a00", "#ff9500", "#ffd500"]}
                animationSpeed={3}
                showBorder={false}
                className="px-8 py-6 rounded-lg border"
            >
                <a href={CV_LINK} target="_blank" rel="noopener noreferrer">
                See My Projects!
                </a>
            </GradientText>
            </SpotlightCard>

            {/* Swiper carousel */}
            <div className="mt-8">
            {projects.length === 0 ? (
                <p className="text-white/50 text-center py-12">
                No projects found. Add some in Notion!
                </p>
            ) : (
                <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={30}
                slidesPerView={1}
                >
                {projects.map((project) => (
                    <SwiperSlide key={project.id}>
                    <div className="flex flex-col items-center pb-10">
                        <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <img
                            src={project.image}
                            alt={project.title}
                            loading="lazy"
                            decoding="async"
                            className="rounded-lg shadow-lg w-full h-auto max-h-96 object-cover"
                        />
                        </a>
                        <h3 className="text-lg font-bold mt-4">{project.title}</h3>
                        {project.tags.length > 0 && (
                        <div className="flex gap-2 mt-2 flex-wrap justify-center">
                            {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/80"
                            >
                                {tag}
                            </span>
                            ))}
                        </div>
                        )}
                    </div>
                    </SwiperSlide>
                ))}
                </Swiper>
            )}
            </div>
        </div>

        {/* Timeline */}
        <Timeline data={timelineData} />
        </section>
    );
    }