// components/home/experiences/experiencesDesktop.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { MotionButton, MotionDiv } from "@/components/lib/motion";
import { EXPERIENCES } from "@/constants/experiences";
import { Experience } from "@/types/experiences";
import DesktopBg from "./desktopBg";
import DesktopGrid from "./desktopGrid";


const CATEGORY_VARIANTS: Variants = {
    inactive: {
        scale: 1,
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        borderColor: "rgba(255, 255, 255, 0.1)",
        transition: { duration: 0.3 }
    },
    active: {
        scale: 1.02,
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        borderColor: "rgba(255, 255, 255, 0.3)",
        transition: { duration: 0.3 }
    }
};


interface ExperiencesDesktopProps {
    isNight: boolean;
}

export default function ExperiencesDesktop({ isNight }: ExperiencesDesktopProps): React.ReactElement {
    const [activeCategory, setActiveCategory] = useState<string>("All");
    const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.1 });

    const categories = ["All", "Adventure", "Cultural", "Relaxation", "Wildlife"];

    const filteredExperiences = activeCategory === "All"
        ? EXPERIENCES
        : EXPERIENCES.filter(exp => exp.category === activeCategory);

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [controls, isInView]);

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case "Easy": return "bg-green-500/20 text-green-300 border-green-500/30";
            case "Moderate": return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
            case "Challenging": return "bg-red-500/20 text-red-300 border-red-500/30";
            default: return "bg-gray-500/20 text-gray-300 border-gray-500/30";
        }
    };

    return (
        <section
            ref={ref}
            aria-label="HillNights Experiences"
            className={`relative w-full min-h-screen py-20 overflow-hidden ${isNight ? "text-white" : "text-gray-900"
                }`}
        >
            <DesktopBg isNight={isNight} />
            <div className="relative z-20 mx-auto max-w-7xl px-6">
                {/* Section Header */}
                <MotionDiv
                    initial={{ opacity: 0, y: 30 }}
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                    }}
                    className="text-center mb-16"
                >
                    <MotionDiv
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className={`inline-block px-6 py-2 rounded-full backdrop-blur-sm border mb-6 ${isNight
                            ? "bg-white/10 border-white/20 text-white/80"
                            : "bg-black/10 border-black/20 text-black/80"
                            }`}
                    >
                        <span className="text-sm font-semibold">Curated Experiences</span>
                    </MotionDiv>

                    <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Unforgettable Moments
                    </h2>

                    <p className={`text-xl max-w-2xl mx-auto ${isNight ? "text-white/70" : "text-black/70"
                        }`}>
                        Discover handpicked adventures that transform your stay into lasting memories
                    </p>
                </MotionDiv>

                {/* Category Filter */}
                <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
                    }}
                    className="flex justify-center gap-4 mb-12 flex-wrap"
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            variants={CATEGORY_VARIANTS}
                            initial="inactive"
                            animate={activeCategory === category ? "active" : "inactive"}
                            whileHover="active"
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-3 rounded-2xl backdrop-blur-sm border font-medium transition-all duration-300 ${isNight
                                ? "text-white/90 border-white/15"
                                : "text-black/90 border-black/15"
                                }`}
                        >
                            {category}
                        </motion.button>
                    ))}
                </MotionDiv>

                {/* Experiences Grid */}
                <DesktopGrid
                    isNight={isNight}
                    filteredExperiences={filteredExperiences}
                    setSelectedExperience={setSelectedExperience}
                    controls={controls}
                    getDifficultyColor={getDifficultyColor}
                />

                {/* CTA Section */}
                <MotionDiv
                    initial={{ opacity: 0, y: 30 }}
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.8 } }
                    }}
                    className="text-center mt-16"
                >
                    <MotionButton
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-8 py-4 rounded-2xl font-bold text-lg backdrop-blur-sm border ${isNight
                            ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-cyan-400/30"
                            : "bg-gradient-to-r from-blue-500 to-cyan-400 text-white border-blue-400/30"
                            } shadow-2xl`}
                    >
                        View All Experiences
                    </MotionButton>
                </MotionDiv>
            </div>

            {/* Experience Detail Modal */}
            {selectedExperience && (
                <MotionDiv
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                    onClick={() => setSelectedExperience(null)}
                >
                    <MotionDiv
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className={`relative max-w-2xl w-full rounded-3xl overflow-hidden backdrop-blur-sm border ${isNight
                            ? "bg-gray-900/90 border-white/20"
                            : "bg-white/90 border-black/20"
                            }`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal content would go here */}
                        <div className="p-6">
                            <h3 className={`text-3xl font-bold mb-4 ${isNight ? "text-white" : "text-gray-900"
                                }`}>
                                {selectedExperience.title}
                            </h3>
                            <p className={`mb-4 ${isNight ? "text-white/70" : "text-gray-700"}`}>
                                {selectedExperience.description}
                            </p>
                            <button
                                onClick={() => setSelectedExperience(null)}
                                className={`px-6 py-2 rounded-full backdrop-blur-sm border ${isNight
                                    ? "bg-white/20 border-white/30 text-white"
                                    : "bg-black/20 border-black/30 text-black"
                                    }`}
                            >
                                Close
                            </button>
                        </div>
                    </MotionDiv>
                </MotionDiv>
            )}
        </section>
    );
}