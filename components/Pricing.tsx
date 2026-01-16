"use client";

import { Check, Crown } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Dictionary } from "@/lib/dictionary";

interface PricingProps {
    dict: Dictionary['pricing'];
}

export function Pricing({ dict }: PricingProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // We use the dict plans, but we need to map the popularity/logic
    // The dict structure matches the original structure
    // We can iterate dict.plans

    return (
        <section id="pricing" className="py-24 sm:py-32 px-4 sm:px-6 border-t border-border">
            <div ref={ref} className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-16"
                >
                    <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">{dict.header.subtitle}</p>
                    <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
                        {dict.header.title}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        {dict.header.desc}
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
                    {dict.plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.1 + index * 0.1, duration: 0.8 }}
                            className={`relative rounded-3xl p-6 sm:p-8 border transition-all ${plan.popular
                                ? "bg-foreground text-background border-foreground"
                                : "bg-card border-border hover:border-muted-foreground/50"
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <div className="flex items-center gap-1.5 px-3 py-1 bg-background text-foreground text-xs font-bold rounded-full">
                                        <Crown className="w-3 h-3" />
                                        {plan.recommended}
                                    </div>
                                </div>
                            )}

                            <div className="mb-6">
                                <p className={`text-sm mb-2 ${plan.popular ? "opacity-60" : "text-muted-foreground"}`}>
                                    {plan.name}
                                </p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl sm:text-5xl font-black">{plan.price}</span>
                                    <span className={`text-sm ${plan.popular ? "opacity-60" : "text-muted-foreground"}`}>
                                        {plan.period}
                                    </span>
                                </div>
                                {plan.billing && (
                                    <p className={`text-xs mt-1 ${plan.popular ? "opacity-50" : "text-muted-foreground"}`}>
                                        {plan.billing}
                                    </p>
                                )}
                                {plan.savings && (
                                    <span className={`inline-block mt-2 px-2 py-0.5 text-xs font-bold rounded ${plan.popular ? "bg-background text-foreground" : "bg-secondary"
                                        }`}>
                                        {plan.savings}
                                    </span>
                                )}
                            </div>

                            <ul className="space-y-3 mb-8">
                                {plan.features.map((f, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm">
                                        <Check className={`w-4 h-4 ${plan.popular ? "" : "text-muted-foreground"}`} />
                                        <span className={plan.popular ? "opacity-80" : "text-muted-foreground"}>{f}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular
                                ? "bg-background text-foreground hover:opacity-90"
                                : "bg-foreground text-background hover:opacity-90"
                                }`}>
                                {dict.button}
                            </button>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6 }}
                    className="text-center text-sm text-muted-foreground mt-8"
                >
                    {dict.footer}
                </motion.p>
            </div>
        </section>
    );
}
