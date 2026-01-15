"use client";

import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-foreground text-background py-8 sm:py-10 px-4 sm:px-6">
            <div className="max-w-lg mx-auto">
                {/* Top */}
                <div className="flex items-center justify-between mb-6">
                    <span className="text-xl font-black">SHAPE</span>
                    <a
                        href="https://apps.apple.com"
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-background text-foreground rounded-full text-xs font-bold"
                    >
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                        </svg>
                        Télécharger
                    </a>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-background/60 mb-6">
                    <Link href="#features" className="hover:text-background">Fonctionnalités</Link>
                    <Link href="#pricing" className="hover:text-background">Tarifs</Link>
                    <Link href="#faq" className="hover:text-background">FAQ</Link>
                    <a href="mailto:hello@shapefitness.app" className="hover:text-background">Contact</a>
                </div>

                {/* Bottom */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] text-background/40 pt-4 border-t border-background/10">
                    <p>© 2025 SHAPE</p>
                    <div className="flex gap-3">
                        <Link href="/privacy" className="hover:text-background">Confidentialité</Link>
                        <Link href="/terms" className="hover:text-background">Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
