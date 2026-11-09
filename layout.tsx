import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Campus Xchange — The Student Skill Economy", description: "Teach a skill, earn time credits, and learn from another student." };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
