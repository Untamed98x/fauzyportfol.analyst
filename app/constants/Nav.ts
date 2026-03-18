// app/constants/nav.ts
// Semua nav items dipusatin di sini
// Kalau mau tambahin halaman baru, cukup edit file ini aja

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "#CV" },
  { label: "Projects", href: "#project" },
] as const;

export type NavItem = (typeof NAV_ITEMS)[number];