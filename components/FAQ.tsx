"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        q: "Comment l'IA crée mes programmes ?",
        a: "Notre IA analyse vos objectifs, équipement disponible et niveau d'expérience pour générer un programme 100% personnalisé. Elle s'adapte à votre progression."
    },
    {
        q: "Le scanner nutrition est-il précis ?",
        a: "Le Food AI utilise la vision par ordinateur pour identifier les aliments et estimer calories et macros. C'est une estimation fiable, parfaite pour le suivi quotidien."
    },
    {
        q: "Puis-je annuler mon abonnement ?",
        a: "Oui ! Annulez à tout moment depuis les paramètres de votre compte Apple. L'accès reste actif jusqu'à la fin de la période payée."
    },
    {
        q: "L'app fonctionne-t-elle hors ligne ?",
        a: "Vos programmes sont téléchargés localement pour vous entraîner sans connexion. Le scanner food nécessite internet pour l'analyse IA."
    },
];

export function FAQ() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section id="faq" className="py-14 sm:py-20 bg-gradient-to-b from-secondary/30 to-background px-4 sm:px-6">
            <div className="max-w-lg mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary rounded-full text-xs font-medium text-muted-foreground mb-3">
                        <HelpCircle className="w-3 h-3" />
                        FAQ
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                        Questions fréquentes
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-card rounded-2xl border border-border shadow-premium overflow-hidden"
                >
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 + i * 0.05 }}
                            className={i !== faqs.length - 1 ? "border-b border-border" : ""}
                        >
                            <motion.button
                                onClick={() => setOpen(open === i ? null : i)}
                                whileTap={{ scale: 0.99 }}
                                className="w-full p-4 flex items-center justify-between text-left hover:bg-secondary/50 transition-colors"
                            >
                                <span className="text-sm font-medium pr-4">{faq.q}</span>
                                <motion.div
                                    animate={{ rotate: open === i ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex-shrink-0 w-7 h-7 rounded-full bg-secondary flex items-center justify-center"
                                >
                                    {open === i ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                                </motion.div>
                            </motion.button>
                            <AnimatePresence>
                                {open === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <p className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">
                                            {faq.a}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-center text-sm text-muted-foreground mt-6"
                >
                    D'autres questions ?{" "}
                    <a href="mailto:hello@shapefitness.app" className="text-accent hover:underline font-medium">
                        Contactez-nous
                    </a>
                </motion.p>
            </div>
        </section>
    );
}
