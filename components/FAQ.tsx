"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { useInView } from "framer-motion";

const faqs = [
    {
        question: "Comment l'IA personnalise-t-elle mes programmes ?",
        answer: "Notre IA analyse vos réponses lors de l'onboarding (objectifs, niveau, disponibilité, zones ciblées) pour créer un plan 100% adapté. Elle s'ajuste ensuite en fonction de vos progrès et feedback."
    },
    {
        question: "Le scanner Food fonctionne-t-il avec tous les aliments ?",
        answer: "Oui ! Notre vision IA reconnaît des milliers d'aliments, des plats faits maison aux produits emballés. Elle identifie même les ingrédients individuels dans les plats composés."
    },
    {
        question: "Puis-je créer mes propres entraînements ?",
        answer: "Absolument ! Le Mode Créateur vous permet de construire vos séances de A à Z. Choisissez vos exercices, définissez les séries et reps, et sauvegardez vos routines personnalisées."
    },
    {
        question: "L'application fonctionne-t-elle hors ligne ?",
        answer: "Vos programmes et l'historique sont disponibles hors ligne. Seuls le scanner Food et la génération de nouveaux plans nécessitent une connexion pour l'analyse IA."
    },
    {
        question: "Comment annuler mon abonnement ?",
        answer: "Simple et sans engagement ! Rendez-vous dans les paramètres de votre compte App Store pour gérer ou annuler votre abonnement à tout moment."
    },
    {
        question: "Y a-t-il une garantie satisfait ou remboursé ?",
        answer: "Oui, pour l'abonnement annuel. Si vous n'êtes pas satisfait dans les 30 premiers jours, contactez-nous pour un remboursement complet, sans questions."
    }
];

function FAQItem({ faq, index, isOpen, onToggle }: {
    faq: typeof faqs[0];
    index: number;
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            className="border-b border-border last:border-0"
        >
            <button
                onClick={onToggle}
                className="w-full py-6 flex items-center justify-between gap-4 text-left group"
            >
                <span className="text-lg font-semibold group-hover:text-accent transition-colors">
                    {faq.question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? "bg-accent text-white" : "bg-secondary text-foreground"
                        }`}
                >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-muted-foreground leading-relaxed pr-12">
                            {faq.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-32 lg:py-40 relative overflow-hidden">
            <div ref={ref} className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        className="pill glass text-foreground inline-flex items-center gap-2 mb-8"
                    >
                        <HelpCircle className="w-4 h-4 text-accent" />
                        FAQ
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                        className="text-5xl sm:text-6xl font-black tracking-tight mb-6"
                    >
                        Questions
                        <br />
                        <span className="text-gradient-accent">fréquentes</span>
                    </motion.h2>
                </div>

                {/* FAQ List */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="rounded-3xl bg-card border border-border p-6 sm:p-8"
                >
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            faq={faq}
                            index={index}
                            isOpen={openIndex === index}
                            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </motion.div>

                {/* Contact CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <p className="text-muted-foreground">
                        Vous avez d'autres questions ?{" "}
                        <a href="mailto:support@shapefitness.app" className="text-accent font-semibold hover:underline">
                            Contactez-nous →
                        </a>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
