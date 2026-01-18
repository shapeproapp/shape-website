"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Dictionary } from "@/lib/dictionary";

interface HowItWorksProps {
    dict: Dictionary['howItWorks'];
}

export function HowItWorks({ dict }: HowItWorksProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const images = [
        "/assets/app-screens/nutrition-light.png",
        "/assets/app-screens/weekly-plan-light.png",
        "/assets/app-screens/home-light.png"
    ];

    return (
        <section className="py-16 sm:py-32 px-4 sm:px-6 border-t border-border">
            <div ref={ref} className="max-w-5xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-12 sm:mb-20"
                >
                    <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">{dict.header.subtitle}</p>
                    <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
                        {dict.header.title}
                    </h2>
                </motion.div>

                {/* Steps */}
                <div className="space-y-12 sm:space-y-24">
                    {dict.steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 + index * 0.2, duration: 0.8 }}
                            className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 sm:gap-16`}
                        >
                            {/* Text */}
                            <div className="flex-1 text-center md:text-left">
                                <span className="text-6xl sm:text-8xl font-black text-muted-foreground/20">{step.num}</span>
                                <h3 className="text-2xl sm:text-3xl font-bold -mt-4 mb-3">{step.title}</h3>
                                <p className="text-muted-foreground text-lg">{step.desc}</p>
                            </div>

                            {/* Phone */}
                            <div className="flex-1 flex justify-center">
                                <div className="relative w-48 sm:w-56">
                                    <div className="relative glass rounded-[36px] p-1.5 border border-border">
                                        <div className="relative aspect-[9/19.5] bg-card rounded-[30px] overflow-hidden">
                                            <Image src={images[index]} alt={step.title} fill className="object-cover" />
                                        </div>
                                    </div>
                                    {/* Glow */}
                                    <div className="absolute -inset-8 bg-foreground/5 rounded-full blur-3xl -z-10" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
