"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Dictionary } from "@/lib/dictionary";
import { useState, useEffect, useCallback } from "react";

interface ReviewTickerProps {
    dict: Dictionary['reviewTicker'];
}

function ReviewCard({ review, isActive }: { review: Dictionary['reviewTicker']['reviews'][0]; isActive?: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative bg-gradient-to-br from-secondary/60 to-secondary/30 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-white/5"
        >
            {/* Stars */}
            <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
            </div>

            {/* Review text */}
            <p className="text-foreground/90 leading-relaxed text-base sm:text-lg font-medium mb-6">
                "{review.text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-accent/20">
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

// Desktop Grid Card
function DesktopReviewCard({ review, index }: { review: Dictionary['reviewTicker']['reviews'][0]; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative bg-gradient-to-br from-secondary/50 to-secondary p-6 rounded-2xl hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 border border-white/5"
        >
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
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-accent/20">
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
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const reviewsCount = dict.reviews.length;

    const nextReview = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % reviewsCount);
    }, [reviewsCount]);

    const prevReview = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + reviewsCount) % reviewsCount);
    }, [reviewsCount]);

    // Auto-advance every 4 seconds
    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(nextReview, 4000);
        return () => clearInterval(interval);
    }, [isPaused, nextReview]);

    return (
        <section className="py-16 lg:py-32 bg-background relative overflow-hidden">
            {/* Subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-transparent to-secondary/30 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-10 lg:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 mb-4 lg:mb-6"
                    >
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 lg:w-6 lg:h-6 fill-accent text-accent" />
                            ))}
                        </div>
                        <span className="text-xl lg:text-2xl font-bold">{dict.rating}</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-3 lg:mb-4"
                    >
                        {dict.title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-base lg:text-lg max-w-md mx-auto"
                    >
                        {dict.subtitle}
                    </motion.p>
                </div>

                {/* Mobile: Animated Carousel */}
                <div
                    className="lg:hidden"
                    onTouchStart={() => setIsPaused(true)}
                    onTouchEnd={() => setIsPaused(false)}
                >
                    <div className="relative">
                        {/* Review Container */}
                        <AnimatePresence mode="wait">
                            <ReviewCard
                                key={currentIndex}
                                review={dict.reviews[currentIndex]}
                                isActive
                            />
                        </AnimatePresence>

                        {/* Navigation Arrows */}
                        <div className="flex justify-between items-center mt-6">
                            <button
                                onClick={prevReview}
                                className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors border border-white/5"
                                aria-label="Avis précédent"
                            >
                                <ChevronLeft className="w-5 h-5 text-foreground/70" />
                            </button>

                            {/* Progress Dots */}
                            <div className="flex gap-2">
                                {dict.reviews.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentIndex(i)}
                                        className="relative p-1"
                                        aria-label={`Avis ${i + 1}`}
                                    >
                                        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentIndex
                                                ? 'bg-accent scale-125'
                                                : 'bg-foreground/20 hover:bg-foreground/40'
                                            }`} />
                                        {i === currentIndex && (
                                            <motion.div
                                                className="absolute inset-0 flex items-center justify-center"
                                                initial={{ scale: 0.8, opacity: 0 }}
                                                animate={{ scale: 1.5, opacity: 0 }}
                                                transition={{ duration: 1, repeat: Infinity }}
                                            >
                                                <div className="w-2 h-2 rounded-full bg-accent/50" />
                                            </motion.div>
                                        )}
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={nextReview}
                                className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors border border-white/5"
                                aria-label="Avis suivant"
                            >
                                <ChevronRight className="w-5 h-5 text-foreground/70" />
                            </button>
                        </div>

                        {/* Swipe hint */}
                        <p className="text-center text-xs text-muted-foreground/60 mt-4">
                            Glissez ou appuyez pour naviguer
                        </p>
                    </div>
                </div>

                {/* Desktop: Grid Layout */}
                <div className="hidden lg:grid lg:grid-cols-3 gap-6">
                    {dict.reviews.map((review, index) => (
                        <DesktopReviewCard key={index} review={review} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
