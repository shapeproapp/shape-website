"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        question: "Comment l'IA crée-t-elle mes programmes ?",
        answer: "Notre IA analyse vos objectifs, équipement disponible et niveau d'expérience pour créer un programme 100% personnalisé. Elle s'adapte aussi à votre progression."
    },
    {
        question: "Le scanner nutrition est-il précis ?",
        answer: "Le Food AI analyse vos photos de repas et estime les calories et macros. C'est une estimation basée sur l'IA, parfaite pour le suivi quotidien."
    },
    {
        question: "Puis-je annuler à tout moment ?",
        answer: "Oui ! Vous pouvez annuler votre abonnement à tout moment depuis les paramètres de votre compte Apple. Aucun engagement."
    },
    {
        question: "L'app fonctionne-t-elle sans internet ?",
        answer: "Vos programmes sont téléchargés localement, donc vous pouvez vous entraîner sans connexion. Le scanner food nécessite internet."
    },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="border-b border-border last:border-0"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-4 sm:py-5 flex items-center justify-between text-left"
            >
                <span className="font-semibold text-sm sm:text-base pr-4">{faq.question}</span>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-4 sm:pb-5 text-sm text-muted-foreground pr-12">
                            {faq.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export function FAQ() {
    return (
        <section id="faq" className="py-16 sm:py-24 bg-secondary/30">
            <div className="max-w-2xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">
                        Questions fréquentes
                    </h2>
                </div>

                {/* FAQ List */}
                <div className="bg-background rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-border">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} faq={faq} index={index} />
                    ))}
                </div>

                {/* Contact */}
                <p className="text-center text-sm text-muted-foreground mt-6">
                    D'autres questions ?{" "}
                    <a href="mailto:hello@shapefitness.app" className="text-accent hover:underline">
                        Contactez-nous
                    </a>
                </p>
            </div>
        </section>
    );
}
