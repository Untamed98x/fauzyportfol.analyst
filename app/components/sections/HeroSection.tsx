// app/components/sections/HeroSection.tsx
// Semua konten hero (Lanyard, nama, deskripsi, CTA buttons) ada di sini
// page.tsx tinggal render <HeroSection /> aja

"use client";

import dynamic from "next/dynamic";
import Magnet from "@/app/components/Magnet/Magnet";
import GradientText from "@/app/components/GradientText/GradientText";
import RotatingText from "@/app/components/RotatingText/RotatingText";
import SplitText from "@/app/components/SplitText/SplitText";
import BlurText from "@/app/components/BlurText/BlurText";

const Lanyard = dynamic(() => import("@/app/components/Lanyard/Lanyard"), {
    ssr: false,
    loading: () => <div className="h-[500px]" />, // placeholder biar layout gak loncat
    });

    const ROTATING_TEXTS = [
    "A Data Gardener",
    "Visual Catcher",
    "Logic Weaver",
    "Python Coders!",
    ];

    const CONTACT_HREF = "https://wa.me/6285156964766?text=Hello";
    const LINKEDIN_HREF = "https://www.linkedin.com/in/muhammad-fauzy-741943203";

    export function HeroSection() {
    return (
        <section className="container mx-auto px-4 pt-32 pb-12 min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* 3D Lanyard */}
            <div className="md:col-span-6 flex justify-center">
            <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
            </div>

            {/* Text content */}
            <div className="md:col-span-6 flex items-center">
            <div className="flex flex-col gap-6 px-4 py-8">
                {/* Greeting + rotating text */}
                <div className="flex items-center gap-4 flex-wrap">
                <h1 className="text-2xl text-[#F8F8FF] font-bold">
                    <Magnet padding={50} disabled={false} magnetStrength={50}>
                    <p>Hello to my Portfolio Project for,!</p>
                    </Magnet>
                </h1>

                <RotatingText
                    texts={ROTATING_TEXTS}
                    mainClassName="px-3 py-1 bg-[orange] text-[#F8F8FF] justify-center rounded-lg text-2xl font-bold inline-flex overflow-hidden"
                    staggerFrom="last"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                />
                </div>

                {/* Name */}
                <SplitText
                text="My Name is Muhammad Fauzy"
                className="text-4xl md:text-6xl font-extrabold text-[#F8F8FF] text-center md:text-left"
                delay={70}
                animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                threshold={0.2}
                rootMargin="-50px"
                />

                {/* Bio */}
                <BlurText
                text="With a background in Accounting and a passion for the arts—especially photography—I see data not just as numbers, but as stories waiting to grow."
                delay={50}
                animateBy="words"
                direction="top"
                className="text-base md:text-2xl text-white font-semibold"
                />

                {/* CTA Buttons */}
                <div className="flex flex-col gap-4 mt-4">
                <Magnet>
                    <GradientText
                    colors={["#ff6a00", "#ff9500", "#ffd500"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="px-8 py-6 rounded-lg border"
                    >
                    <a href={CONTACT_HREF} target="_blank" rel="noopener noreferrer">
                        Contact Me!
                    </a>
                    </GradientText>
                </Magnet>

                <GradientText
                    colors={["#ff6a00", "#ff9500", "#ffd500"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="px-8 py-6 rounded-lg border"
                >
                    <a href={LINKEDIN_HREF} target="_blank" rel="noopener noreferrer">
                    Connect with Linkedin!
                    </a>
                </GradientText>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
}
