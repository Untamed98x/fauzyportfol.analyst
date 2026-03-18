// app/page.tsx
// Versi bersih setelah refactor
// page.tsx cuma jadi orchestrator — gak ada data, gak ada logic

"use client";

import { DitherBackground } from "./components/layout/DitherBackground";
import { Header } from "./components/layout/Header";
import { HeroSection } from "./components/sections/HeroSection";
import { ProjectSection } from "./components/sections/ProjectSection";
import { CVSection } from "./components/sections/CVSection";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <DitherBackground />
      <Header />

      <div className="container mx-auto px-4 py-12 min-h-screen">
        <HeroSection />
        <ProjectSection />
        <CVSection />
      </div>
    </div>
  );
}