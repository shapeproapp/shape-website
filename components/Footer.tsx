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
        <svg className="w-6 h-6" viewBox="0 0 24 24">
            <path fill="#EA4335" d="M3.22 2.62c-.23.24-.38.58-.38 1v16.76c0 .42.15.76.38 1l.05.05 9.4-9.4v-.06L3.27 2.57l-.05.05z" />
            <path fill="#FBBC04" d="M16.41 15.31l-3.14-3.14v-.06l3.14-3.14.07.04 3.73 2.12c1.06.6 1.06 1.59 0 2.2l-3.73 2.12-.07-.04z" />
            <path fill="#34A853" d="M16.48 15.35L13.27 12.14 3.22 22.19c.35.37.93.39 1.59.02l11.67-6.86z" />
            <path fill="#4285F4" d="M16.48 8.97L4.81 2.11c-.66-.37-1.24-.35-1.59.02l9.4 9.41 3.86-3.57z" />
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

