// ...existing code...
"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { swiperImages } from "./project/dataProjects";
import SpotlightCard from "./components/SpotlightCard/SpotlightCard";
import GradientText from "./components/GradientText/GradientText";
import Magnet from "./components/Magnet/Magnet";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";

// dynamic (client-only) imports to reduce initial bundle
const Dither = dynamic(() => import("./components/Dither/Dither"), { ssr: false });
const Lanyard = dynamic(() => import("./components/Lanyard/Lanyard"), { ssr: false });
const Timeline = dynamic(() => import("./components/Timeline/Timeline"), { ssr: false });
const ScrollVelocity = dynamic(() => import("./components/ScrollVelocity/ScrollVelocity"), { ssr: false });
const GooeyNav = dynamic(() => import("./components/GooeyNav/GooeyNav"), { ssr: false });

/* static config/data moved outside component */
const settings = { items: 1, controls: true, nav: true, autoplay: true };

const itemnav = [
  { label: "Home", href: "/" },
  { label: "About", href: "#CV" },
  { label: "Projects", href: "#project" },
];

const timelineData = [
  {
    title: "2025",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Transition from excel base into more code language try focus on python coders!
        </p>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          While i feel amaze by automation i seek opportunity to learn data as OS...
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1560250056-07ba64664864?q=80&w=2902&auto=format&fit=crop"
            alt="Sales Associate"
            loading="lazy"
            decoding="async"
            className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60"
          />
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
            alt="Learn Data"
            loading="lazy"
            decoding="async"
            className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  // keep other items minimal to speed render
];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // run only on client
  }, []);

  if (!mounted) return null; // avoid SSR/client mismatch for client-only features

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* background (client-only) */}
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

      {/* fixed header + nav */}
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="bg-black h-9" />
        <div className="bg-black flex justify-start gap-8 px-4" style={{ height: "60px" }}>
          <div className="flex items-start h-full">
            <GooeyNav items={itemnav} particleCount={10} particleDistances={[30, 5]} particleR={20} />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-6 flex justify-center">
            <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
          </div>

          <div className="md:col-span-6 flex items-center">
            <div className="flex flex-col gap-6 px-4 py-8">
              <div className="flex items-center gap-4 flex-wrap">
                <h1 className="text-2xl text-[#F8F8FF] font-bold">
                  <Magnet padding={50} disabled={false} magnetStrength={50}>
                    <p>Hello to my Portfolio Project for,!</p>
                  </Magnet>
                </h1>

                <RotatingText
                  texts={["A Data Gardener", "Visual Catcher", "Logic Weaver", "Python Coders!"]}
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

              <SplitText
                text="My Name is Muhammad Fauzy"
                className="text-4xl md:text-6xl font-extrabold text-[#F8F8FF] text-center md:text-left"
                delay={70}
                animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                threshold={0.2}
                rootMargin="-50px"
              />

              <BlurText
                text="With a background in Accounting and a passion for the arts—especially photography—I see data not just as numbers, but as stories waiting to grow."
                delay={50}
                animateBy="words"
                direction="top"
                className="text-base md:text-2xl text-white font-semibold"
              />

              <div className="flex flex-col gap-4 mt-4">
                <Magnet>
                  <GradientText colors={["#ff6a00", "#ff9500", "#ffd500"]} animationSpeed={3} showBorder={false} className="px-8 py-6 rounded-lg border">
                    <a href="https://wa.me/6285156964766?text=Hello" target="_blank" rel="noopener noreferrer">
                      Contact Me!
                    </a>
                  </GradientText>
                </Magnet>

                <GradientText colors={["#ff6a00", "#ff9500", "#ffd500"]} animationSpeed={3} showBorder={false} className="px-8 py-6 rounded-lg border">
                  <a href="https://www.linkedin.com/in/muhammad-fauzy-741943203" target="_blank" rel="noopener noreferrer">
                    Connect with Linkedin!
                  </a>
                </GradientText>
              </div>
            </div>
          </div>
        </div>

        {/* SCROLL / PROJECTS */}
        <div className="relative w-full mt-16">
          <ScrollVelocity texts={["My Journey", "Scroll Down", "Drag And Drop"]} className="custom-scroll-text text-white bg-black" />

          <div id="project" className="container mx-auto text-white mt-8">
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
              <GradientText colors={["#ff6a00", "#ff9500", "#ffd500"]} animationSpeed={3} showBorder={false} className="px-8 py-6 rounded-lg border">
                <a href="https://drive.google.com/file/d/123vUTdVxQ9LwOFwezuILq5FezI2nUvFR/view" target="_blank" rel="noopener noreferrer">
                  See My Projects!
                </a>
              </GradientText>
            </SpotlightCard>

            <div className="mt-8">
              <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} spaceBetween={30} slidesPerView={1}>
                {swiperImages.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="flex flex-col items-center">
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <img src={item.image} alt={item.title} loading="lazy" decoding="async" className="rounded-lg shadow-lg w-full h-auto" />
                      </a>
                      <h3 className="text-lg font-bold mt-4">{item.title}</h3>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <Timeline data={timelineData} />
        </div>

        {/* CV */}
        <ScrollVelocity texts={["See My CV!"]} className="custom-scroll-text text-white bg-black" />
        <div id="CV" className="mt-8">
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <Magnet>
              <GradientText colors={["#ff6a00", "#ff9500", "#ffd500"]} animationSpeed={3} showBorder={false} className="px-8 py-6 rounded-lg border">
                <a href="https://drive.google.com/file/d/123vUTdVxQ9LwOFwezuILq5FezI2nUvFR/view" target="_blank" rel="noopener noreferrer">
                  See My CV!
                </a>
              </GradientText>
            </Magnet>
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
}