"use client";

import { Check, Crown } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const plans = [
    {
        name: "Mensuel",
        price: "14.99€",
        features: ["Programmes IA", "Scanner nutrition", "Coach 24/7"],
        popular: false,
    },
    {
        name: "Annuel",
        price: "6.99€",
        billing: "/mois • 83.88€/an",
        savings: "-50%",
        features: ["Tout le mensuel", "Accès prioritaire", "Badge fondateur"],
        popular: true,
    },
];

export function Pricing() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section id="pricing" className="py-12 sm:py-16 px-4 sm:px-6">
            <div ref={ref} className="max-w-lg mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-2xl sm:text-3xl font-black tracking-tight text-center mb-6"
                >
                    Tarifs simples
                </motion.h2>

                <div className="space-y-3">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.1 + index * 0.1 }}
                            className={`relative rounded-2xl p-4 ${plan.popular ? "bg-foreground text-background" : "bg-secondary"}`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-2.5 left-4">
                                    <div className="flex items-center gap-1 px-2 py-0.5 bg-accent text-white text-[10px] font-bold rounded-full">
                                        <Crown className="w-2.5 h-2.5" />
                                        POPULAIRE
                                    </div>
                                </div>
                            )}

                            <div className="flex items-center justify-between mb-3">
                                <div>
                                    <p className={`text-xs mb-0.5 ${plan.popular ? "text-background/60" : "text-muted-foreground"}`}>{plan.name}</p>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-2xl font-black">{plan.price}</span>
                                        {plan.savings && <span className="px-1.5 py-0.5 bg-green-500 text-white text-[10px] font-bold rounded">{plan.savings}</span>}
                                    </div>
                                    {plan.billing && <p className={`text-[10px] ${plan.popular ? "text-background/50" : "text-muted-foreground"}`}>{plan.billing}</p>}
                                </div>

                                <button className={`px-4 py-2 rounded-xl text-xs font-bold ${plan.popular ? "bg-accent text-white" : "bg-foreground text-background"}`}>
                                    Choisir
                                </button>
                            </div>

                            <div className="flex flex-wrap gap-x-3 gap-y-1">
                                {plan.features.map((f, i) => (
                                    <div key={i} className="flex items-center gap-1 text-[10px]">
                                        <Check className={`w-3 h-3 ${plan.popular ? "text-accent" : "text-foreground"}`} />
                                        <span className={plan.popular ? "text-background/70" : "text-foreground/70"}>{f}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <p className="text-center text-[10px] text-muted-foreground mt-4">
                    🔒 Paiement sécurisé • Annulation facile
                </p>
            </div>
        </section>
    );
}
