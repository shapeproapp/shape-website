"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Dictionary } from "@/lib/dictionary";

type Platform = "ios" | "android" | "desktop";

function detectPlatform(): Platform {
    if (typeof window === "undefined") return "desktop";
    const userAgent = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(userAgent)) return "ios";
    if (/android/.test(userAgent)) return "android";
    return "desktop";
}

interface NavbarProps {
    dict: Dictionary['navbar'];
}

export function Navbar({ dict }: NavbarProps) {
    const [scrolled, setScrolled] = useState(false);
    const [platform, setPlatform] = useState<Platform>("desktop");

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setPlatform(detectPlatform());
    }, []);

    const storeUrl = platform === "android"
        ? "https://play.google.com"
        : "https://apps.apple.com";

    const storeIcon = platform === "android" ? (
        <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path fill="#EA4335" d="M3.22 2.62c-.23.24-.38.58-.38 1v16.76c0 .42.15.76.38 1l.05.05 9.4-9.4v-.06L3.27 2.57l-.05.05z" />
            <path fill="#FBBC04" d="M16.41 15.31l-3.14-3.14v-.06l3.14-3.14.07.04 3.73 2.12c1.06.6 1.06 1.59 0 2.2l-3.73 2.12-.07-.04z" />
            <path fill="#34A853" d="M16.48 15.35L13.27 12.14 3.22 22.19c.35.37.93.39 1.59.02l11.67-6.86z" />
            <path fill="#4285F4" d="M16.48 8.97L4.81 2.11c-.66-.37-1.24-.35-1.59.02l9.4 9.41 3.86-3.57z" />
        </svg>
    ) : (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
    );

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "bg-background/80 backdrop-blur-xl border-b border-border"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <span className="text-xl sm:text-2xl font-black tracking-tight">
                        SHAPE
                    </span>
                </Link>

                {/* Nav Links - Desktop */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {dict.features}
                    </Link>
                    <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {dict.pricing}
                    </Link>
                    <Link href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {dict.faq}
                    </Link>
                </div>

                {/* CTA Button */}
                <Link
                    href={storeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full text-sm font-bold hover:opacity-90 transition-all"
                >
                    {storeIcon}
                    <span className="hidden sm:inline">{dict.download}</span>
                    <span className="sm:hidden">{dict.downloadApp}</span>
                </Link>
            </div>
        </motion.nav>
    );
}
