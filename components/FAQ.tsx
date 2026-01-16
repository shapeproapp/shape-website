"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Dictionary } from "@/lib/dictionary";

interface FAQProps {
    dict: Dictionary['faq'];
}

export function FAQ({ dict }: FAQProps) {
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
                    <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">{dict.header.subtitle}</p>
                    <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
                        {dict.header.title}
                    </h2>
                </motion.div>

                {/* Questions */}
                <div className="space-y-2">
                    {dict.items.map((faq, i) => (
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
