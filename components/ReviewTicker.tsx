"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Dictionary } from "@/lib/dictionary";

interface ReviewTickerProps {
    dict: Dictionary['reviewTicker'];
}

function ReviewCard({ review, index }: { review: Dictionary['reviewTicker']['reviews'][0]; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative bg-gradient-to-br from-secondary/50 to-secondary p-6 rounded-2xl hover:shadow-xl transition-all duration-300"
        >
            {/* Quote icon */}
            <Quote className="absolute top-4 right-4 w-8 h-8 text-accent/20" />

            {/* Stars */}
            <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
            </div>

            {/* Review text */}
            <p className="text-foreground/90 leading-relaxed mb-6 text-sm">
                "{review.text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm">
                    {review.author.charAt(0)}
                </div>
                <div>
                    <p className="font-semibold text-sm">{review.author}</p>
                    <p className="text-xs text-muted-foreground">{review.handle}</p>
                </div>
            </div>
        </motion.div>
    );
}

export function ReviewTicker({ dict }: ReviewTickerProps) {
    return (
        <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
            {/* Subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-transparent to-secondary/30 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 mb-6"
                    >
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                            ))}
                        </div>
                        <span className="text-2xl font-bold">{dict.rating}</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl font-black tracking-tight mb-4"
                    >
                        {dict.title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-lg"
                    >
                        {dict.subtitle}
                    </motion.p>
                </div>

                {/* Reviews Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {dict.reviews.map((review, index) => (
                        <ReviewCard key={index} review={review} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
