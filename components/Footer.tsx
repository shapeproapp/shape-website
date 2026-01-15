"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-foreground text-background py-10 sm:py-14 px-4 sm:px-6">
            <div className="max-w-2xl mx-auto">
                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h3 className="text-xl sm:text-2xl font-black mb-3">
                        Prêt à transformer votre corps ?
                    </h3>
                    <p className="text-background/60 text-sm mb-5">
                        Téléchargez SHAPE gratuitement et commencez dès aujourd'hui.
                    </p>
                    <motion.a
                        href="https://apps.apple.com"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-accent to-orange-500 text-white rounded-xl font-bold text-sm shadow-lg"
                    >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                        </svg>
                        Télécharger
                        <ArrowRight className="w-4 h-4" />
                    </motion.a>
                </motion.div>

                {/* Divider */}
                <div className="h-px bg-background/10 mb-8" />

                {/* Bottom */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <span className="text-lg font-black">SHAPE</span>
                        <span className="text-background/40 text-xs">© 2025</span>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-background/60">
                        <Link href="#features" className="hover:text-background transition-colors">Fonctionnalités</Link>
                        <Link href="#pricing" className="hover:text-background transition-colors">Tarifs</Link>
                        <Link href="#faq" className="hover:text-background transition-colors">FAQ</Link>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-background/40">
                        <Link href="/privacy" className="hover:text-background transition-colors">Confidentialité</Link>
                        <Link href="/terms" className="hover:text-background transition-colors">Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
