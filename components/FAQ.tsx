"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
    { q: "Comment l'IA crée mes programmes ?", a: "Elle analyse vos objectifs, équipement et niveau pour créer un programme 100% personnalisé." },
    { q: "Le scanner est-il précis ?", a: "Le Food AI estime les calories et macros à partir de vos photos. Parfait pour le suivi quotidien." },
    { q: "Puis-je annuler ?", a: "Oui, annulez à tout moment depuis votre compte Apple. Aucun engagement." },
];

export function FAQ() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section id="faq" className="py-12 sm:py-16 bg-secondary/50 px-4 sm:px-6">
            <div className="max-w-lg mx-auto">
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-center mb-6">
                    Questions fréquentes
                </h2>

                <div className="bg-background rounded-xl border border-border divide-y divide-border">
                    {faqs.map((faq, i) => (
                        <div key={i}>
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full p-3 sm:p-4 flex items-center justify-between text-left"
                            >
                                <span className="text-xs sm:text-sm font-medium pr-2">{faq.q}</span>
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                                    {open === i ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                                </div>
                            </button>
                            <AnimatePresence>
                                {open === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="px-3 sm:px-4 pb-3 sm:pb-4 text-xs text-muted-foreground">
                                            {faq.a}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
