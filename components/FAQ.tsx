"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        q: "Comment l'IA crée mes programmes ?",
        a: "Notre IA analyse vos objectifs, équipement disponible et niveau d'expérience pour générer un programme 100% personnalisé. Elle s'adapte continuellement à votre progression."
    },
    {
        q: "Le scanner nutrition est-il précis ?",
        a: "Le Food AI utilise une technologie de vision par ordinateur avancée pour identifier les aliments et estimer calories et macros avec une précision optimale."
    },
    {
        q: "Puis-je annuler mon abonnement ?",
        a: "Oui ! Vous pouvez annuler à tout moment depuis les paramètres de votre compte Apple. L'accès reste actif jusqu'à la fin de votre période payée."
    },
    {
        q: "L'app fonctionne-t-elle hors ligne ?",
        a: "Vos programmes sont téléchargés localement pour vous permettre de vous entraîner sans connexion. Le scanner food nécessite internet pour l'analyse IA."
    },
    {
        q: "Comment contacter le support ?",
        a: "Vous pouvez nous contacter à tout moment via l'email hello@shapefitness.app. Nous répondons généralement sous 24h."
    },
];

export function FAQ() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 sm:py-32 px-4 sm:px-6 border-t border-border">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">FAQ</p>
                    <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
                        Questions fréquentes
                    </h2>
                </motion.div>

                {/* Questions */}
                <div className="space-y-2">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="border border-border rounded-2xl overflow-hidden"
                        >
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full p-5 sm:p-6 flex items-center justify-between text-left hover:bg-secondary/50 transition-colors"
                            >
                                <span className="font-medium pr-4">{faq.q}</span>
                                <motion.div
                                    animate={{ rotate: open === i ? 45 : 0 }}
                                    className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary border border-border flex items-center justify-center"
                                >
                                    <Plus className="w-4 h-4 text-muted-foreground" />
                                </motion.div>
                            </button>
                            <AnimatePresence>
                                {open === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-muted-foreground leading-relaxed">
                                            {faq.a}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
