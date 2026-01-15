"use client";

import { Check, Crown, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const plans = [
    {
        name: "Mensuel",
        price: "14.99€",
        period: "/mois",
        features: ["Programmes IA illimités", "Scanner nutrition", "Coach IA 24/7"],
        popular: false,
    },
    {
        name: "Annuel",
        price: "6.99€",
        period: "/mois",
        billing: "83.88€ facturé annuellement",
        savings: "-50%",
        features: ["Tout le mensuel", "Accès prioritaire", "Badge fondateur"],
        popular: true,
    },
];

export function Pricing() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <section id="pricing" className="py-14 sm:py-20 px-4 sm:px-6">
            <div ref={ref} className="max-w-lg mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-8"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary rounded-full text-xs font-medium text-muted-foreground mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        Tarification
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                        Tarifs simples
                    </h2>
                </motion.div>

                <div className="space-y-4">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{
                                delay: 0.1 + index * 0.15,
                                duration: 0.6,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`relative rounded-2xl p-5 cursor-pointer transition-shadow ${plan.popular
                                    ? "bg-gradient-to-br from-foreground to-foreground/90 text-background shadow-premium-lg"
                                    : "bg-card border border-border shadow-premium"
                                }`}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.4 }}
                                    className="absolute -top-3 left-4"
                                >
                                    <div className="flex items-center gap-1 px-2.5 py-1 bg-gradient-to-r from-accent to-orange-500 text-white text-[10px] font-bold rounded-full shadow-lg">
                                        <Crown className="w-2.5 h-2.5" />
                                        POPULAIRE
                                    </div>
                                </motion.div>
                            )}

                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <p className={`text-xs mb-1 ${plan.popular ? "text-background/60" : "text-muted-foreground"}`}>
                                        {plan.name}
                                    </p>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-3xl font-black">{plan.price}</span>
                                        <span className={`text-sm ${plan.popular ? "text-background/60" : "text-muted-foreground"}`}>
                                            {plan.period}
                                        </span>
                                        {plan.savings && (
                                            <span className="ml-2 px-2 py-0.5 bg-green-500 text-white text-[10px] font-bold rounded-md">
                                                {plan.savings}
                                            </span>
                                        )}
                                    </div>
                                    {plan.billing && (
                                        <p className={`text-[10px] mt-1 ${plan.popular ? "text-background/50" : "text-muted-foreground"}`}>
                                            {plan.billing}
                                        </p>
                                    )}
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${plan.popular
                                            ? "bg-gradient-to-r from-accent to-orange-500 text-white shadow-lg"
                                            : "bg-foreground text-background"
                                        }`}
                                >
                                    Choisir
                                </motion.button>
                            </div>

                            {/* Features */}
                            <div className="flex flex-wrap gap-2">
                                {plan.features.map((f, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ delay: 0.3 + i * 0.05 }}
                                        className={`flex items-center gap-1.5 px-2 py-1 rounded-lg text-[10px] ${plan.popular ? "bg-background/10" : "bg-secondary"
                                            }`}
                                    >
                                        <Check className={`w-3 h-3 ${plan.popular ? "text-accent" : "text-foreground"}`} />
                                        <span className={plan.popular ? "text-background/80" : "text-foreground/80"}>
                                            {f}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 }}
                    className="text-center text-[10px] text-muted-foreground mt-6"
                >
                    🔒 Paiement sécurisé via App Store • Annulation facile à tout moment
                </motion.p>
            </div>
        </section>
    );
}
