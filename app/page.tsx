// app/page.tsx
// Versi bersih setelah refactor
// page.tsx cuma jadi orchestrator — gak ada data, gak ada logic

// "use client";

import { DitherBackground } from "./components/Layouts/DitherBackground";
import { Header } from "./components/Layouts/Header";
import { HeroSection } from "./components/sections/HeroSection";
import ProjectSectionWrapper from "./components/sections/ProjectSectionWrapper";
import { CVSection } from "./components/sections/CVSection";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <DitherBackground />
      <Header />

      <div className="container mx-auto px-4 py-12 min-h-screen">
        <HeroSection />
        <ProjectSectionWrapper />
        <CVSection />
      </div>
    </div>
  );
}