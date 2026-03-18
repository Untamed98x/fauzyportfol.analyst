// app/components/layout/Header.tsx
// Dipecah dari page.tsx supaya header bisa di-reuse & di-test sendiri
// GooeyNav ada di sini, bukan nempel di page

"use client";

import dynamic from "next/dynamic";
import { NAV_ITEMS } from "@/app/constants/nav";

const GooeyNav = dynamic(() => import("@/app/components/GooeyNav/GooeyNav").then(m => m.default), { ssr: false });

    export function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50">
        <div className="bg-black h-9" />
        <div
            className="bg-black flex justify-start gap-8 px-4"
            style={{ height: "60px" }}
        >
            <div className="flex items-start h-full">
            <GooeyNav
                items={NAV_ITEMS}
                particleCount={10}
                particleDistances={[30, 5]}
                particleR={20}
            />
            </div>
        </div>
        </header>
    );
}
