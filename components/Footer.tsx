"use client";

import Link from "next/link";
import { Instagram, Twitter, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-foreground text-background py-12 sm:py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-10">
                    {/* Brand */}
                    <div className="col-span-2 sm:col-span-1">
                        <span className="text-2xl sm:text-3xl font-black tracking-tighter block mb-3">
                            SHAPE
                        </span>
                        <p className="text-background/60 text-sm mb-4">
                            L'app fitness propulsée par l'IA.
                        </p>
                        <a
                            href="https://apps.apple.com"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-background text-foreground rounded-full text-sm font-bold"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                            </svg>
                            Télécharger
                        </a>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="font-bold text-xs uppercase tracking-wider text-background/40 mb-3">
                            Navigation
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#features" className="text-background/70 hover:text-background transition-colors">Fonctionnalités</Link></li>
                            <li><Link href="#pricing" className="text-background/70 hover:text-background transition-colors">Tarifs</Link></li>
                            <li><Link href="#faq" className="text-background/70 hover:text-background transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-xs uppercase tracking-wider text-background/40 mb-3">
                            Contact
                        </h4>
                        <a href="mailto:hello@shapefitness.app" className="text-background/70 hover:text-background transition-colors flex items-center gap-2 text-sm">
                            <Mail className="w-4 h-4" />
                            Email
                        </a>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-bold text-xs uppercase tracking-wider text-background/40 mb-3">
                            Social
                        </h4>
                        <div className="flex gap-3">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                                <Twitter className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-6 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-background/40">
                    <p>© {new Date().getFullYear()} SHAPE</p>
                    <div className="flex gap-4">
                        <Link href="/privacy" className="hover:text-background transition-colors">Confidentialité</Link>
                        <Link href="/terms" className="hover:text-background transition-colors">Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
