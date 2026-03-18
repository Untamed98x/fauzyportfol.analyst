// components/ImageSwiper.tsx
"use client";

import { swiperImages } from "./components/project/dataProjects";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

export default function ImageSwiper() {
return (
    <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        className="w-full max-w-xl"
    >
        {swiperImages.map((item) => (
        <SwiperSlide key={item.id}>
            <div className="rounded-xl overflow-hidden shadow-lg">
            <Link href={item.link} target="_blank">
                <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={500}
                className="object-cover w-full h-auto"
                />
                <div className="p-4 text-center font-semibold">
                {item.title}
                </div>
            </Link>
            </div>
        </SwiperSlide>
            ))}
    </Swiper>
    );
}
