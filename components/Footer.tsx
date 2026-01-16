"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Twitter, Instagram } from "lucide-react";
import { useState, useEffect } from "react";

type Platform = "ios" | "android" | "desktop";

function detectPlatform(): Platform {
    if (typeof window === "undefined") return "desktop";
    const userAgent = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(userAgent)) return "ios";
    if (/android/.test(userAgent)) return "android";
    return "desktop";
}

export function Footer() {
    const [platform, setPlatform] = useState<Platform>("desktop");

    useEffect(() => {
        setPlatform(detectPlatform());
    }, []);

    const storeUrl = platform === "android"
        ? "https://play.google.com"
        : "https://apps.apple.com";

    const storeIcon = platform === "android" ? (
        <svg className="w-6 h-6" viewBox="0 0 512 512">
            <path fill="#4DB6AC" d="M270.1 255.9L46.2 478.6c-3.6-6.8-5.7-14.5-5.7-22.5V55.9c0-8 2.1-15.7 5.7-22.5l223.9 222.5z" />
            <path fill="#DCE775" d="M306.8 292.4l-36.7-36.5L46.2 33.4c9.1-14.6 25-24.4 43.1-24.4c8.8 0 17.3 2.4 24.8 6.8l192.7 276.6z" />
            <path fill="#D32F2F" d="M306.8 219.5L114.1 496.1c-7.5 4.5-16 6.8-24.8 6.8c-18.1 0-34-9.7-43.1-24.4L270.1 255.9l36.7-36.4z" />
            <path fill="#FBC02D" d="M466.5 255.9c0 18.7-10.1 35.3-26 44.6L354 351.3l-47.2-95.4l47.2-95.4l86.5 50.8c15.9 9.3 26 25.9 26 44.6z" />
        </svg>
    ) : (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
    );

    return (
        <footer className="border-t border-border">
            {/* CTA Section */}
            <div className="py-24 sm:py-32 px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
                        Prêt à transformer
                        <br />
                        <span className="text-gradient">votre corps ?</span>
                    </h2>
                    <p className="text-lg text-muted-foreground mb-10 max-w-md mx-auto">
                        Rejoignez des milliers d'utilisateurs qui ont déjà adopté SHAPE.
                    </p>
                    <motion.a
                        href={storeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-bold text-lg"
                    >
                        {storeIcon}
                        Télécharger gratuitement
                        <ArrowRight className="w-5 h-5" />
                    </motion.a>
                </motion.div>
            </div>

            {/* Bottom */}
            <div className="border-t border-border py-8 px-4 sm:px-6">
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
                    {/* Logo & Copyright */}
                    <div className="flex items-center gap-6">
                        <span className="text-xl font-black">SHAPE</span>
                        <span className="text-sm text-muted-foreground">© 2025</span>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <Link href="#features" className="hover:text-foreground transition-colors">Fonctionnalités</Link>
                        <Link href="#pricing" className="hover:text-foreground transition-colors">Tarifs</Link>
                        <Link href="#faq" className="hover:text-foreground transition-colors">FAQ</Link>
                    </div>

                    {/* Legal & Social */}
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <Link href="/privacy" className="hover:text-foreground transition-colors">Confidentialité</Link>
                            <Link href="/terms" className="hover:text-foreground transition-colors">Conditions</Link>
                        </div>
                        <div className="flex items-center gap-3">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-muted transition-colors">
                                <Twitter className="w-3.5 h-3.5 text-muted-foreground" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-muted transition-colors">
                                <Instagram className="w-3.5 h-3.5 text-muted-foreground" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

