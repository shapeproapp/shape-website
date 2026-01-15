"use client";

import { Check, Crown } from "lucide-react";
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
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-2xl sm:text-3xl font-black tracking-tight text-center mb-8"
                >
                    Tarifs simples
                </motion.h2>

                <div className="space-y-4">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.1 + index * 0.15, duration: 0.6 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`relative rounded-2xl p-5 cursor-pointer ${plan.popular
                                    ? "bg-foreground text-background"
                                    : "bg-card border border-border"
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-3 left-4">
                                    <div className="flex items-center gap-1 px-2.5 py-1 bg-background text-foreground text-[10px] font-bold rounded-full">
                                        <Crown className="w-2.5 h-2.5" />
                                        POPULAIRE
                                    </div>
                                </div>
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
                                            <span className="ml-2 px-2 py-0.5 bg-background text-foreground text-[10px] font-bold rounded-md">
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
                                    className={`px-4 py-2.5 rounded-xl text-xs font-bold ${plan.popular
                                            ? "bg-background text-foreground"
                                            : "bg-foreground text-background"
                                        }`}
                                >
                                    Choisir
                                </motion.button>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {plan.features.map((f, i) => (
                                    <div
                                        key={i}
                                        className={`flex items-center gap-1.5 px-2 py-1 rounded-lg text-[10px] ${plan.popular ? "bg-background/10" : "bg-secondary"
                                            }`}
                                    >
                                        <Check className={`w-3 h-3 ${plan.popular ? "text-background" : "text-foreground"}`} />
                                        <span className={plan.popular ? "text-background/80" : "text-foreground/80"}>
                                            {f}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <p className="text-center text-[10px] text-muted-foreground mt-6">
                    🔒 Paiement sécurisé via App Store
                </p>
            </div>
        </section>
    );
}
