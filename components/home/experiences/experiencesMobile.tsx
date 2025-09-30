// components/home/experiences/experiencesMobile.tsx
"use client";

import React, { useState } from "react";
import { MotionButton, MotionDiv } from "@/components/lib/motion";

// Reuse the same EXPERIENCES data from desktop version
const EXPERIENCES = [
    {
        id: 1,
        title: "Night Safari Trek",
        description: "Guided wildlife spotting under the moonlight with expert local trackers",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        duration: "3-4 hours",
        difficulty: "Moderate",
        price: "₹1,299",
        category: "Adventure",
        highlights: ["Wildlife Spotting", "Moonlight Trek", "Expert Guides"]
    },
    {
        id: 2,
        title: "Sunrise Yoga & Meditation",
        description: "Begin your day with peaceful yoga sessions overlooking misty valleys",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        duration: "2 hours",
        difficulty: "Easy",
        price: "₹899",
        category: "Relaxation",
        highlights: ["Mountain Views", "Professional Instructor", "All Levels Welcome"]
    },
    {
        id: 3,
        title: "Traditional Tribal Dinner",
        description: "Authentic local cuisine prepared by indigenous communities with cultural performances",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        duration: "3 hours",
        difficulty: "Easy",
        price: "₹1,599",
        category: "Cultural",
        highlights: ["Local Cuisine", "Cultural Show", "Community Interaction"]
    },
    {
        id: 4,
        title: "Waterfall Rappelling",
        description: "Adrenaline-pumping descent down majestic waterfalls with safety gear and guides",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        duration: "4-5 hours",
        difficulty: "Challenging",
        price: "₹2,199",
        category: "Adventure",
        highlights: ["Professional Gear", "Safety Training", "Photography Included"]
    }
];

interface ExperiencesMobileProps {
    isNight: boolean;
}

export default function ExperiencesMobile({ isNight }: ExperiencesMobileProps): React.ReactElement {
    const [activeCategory, setActiveCategory] = useState<string>("All");

    const categories = ["All", "Adventure", "Cultural", "Relaxation", "Wildlife"];

    const filteredExperiences = activeCategory === "All"
        ? EXPERIENCES
        : EXPERIENCES.filter(exp => exp.category === activeCategory);

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
            aria-label="HillNights Experiences"
            className={`relative w-full py-12 overflow-hidden ${isNight ? "text-white" : "text-gray-900"
                }`}
        >
            {/* Background */}
            <div className="absolute inset-0 -z-20">
                <MotionDiv
                    className="absolute inset-0"
                    style={{
                        background: isNight
                            ? "linear-gradient(180deg, #082028 0%, #0b2340 50%, #071229 100%)"
                            : "linear-gradient(180deg, #eafaf8 0%, #c7e9ff 50%, #8fd3ff 100%)"
                    }}
                />
            </div>

            <div className="relative z-20 mx-auto max-w-7xl px-4">
                {/* Header */}
                <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8"
                >
                    <div className={`inline-block px-4 py-1 rounded-full backdrop-blur-sm border mb-4 ${isNight
                        ? "bg-white/10 border-white/20 text-white/80"
                        : "bg-black/10 border-black/20 text-black/80"
                        }`}>
                        <span className="text-xs font-semibold">Curated Experiences</span>
                    </div>

                    <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Unforgettable Moments
                    </h2>

                    <p className={`text-base ${isNight ? "text-white/70" : "text-black/70"}`}>
                        Discover handpicked adventures that transform your stay
                    </p>
                </MotionDiv>

                {/* Category Filter - Horizontal Scroll */}
                <div className="mb-8 overflow-x-auto pb-2 scrollbar-none">
                    <div className="flex gap-2 min-w-max">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 py-2 rounded-xl backdrop-blur-sm border font-medium whitespace-nowrap transition-all ${activeCategory === category
                                    ? isNight
                                        ? "bg-white/20 border-white/30 text-white"
                                        : "bg-black/20 border-black/30 text-black"
                                    : isNight
                                        ? "bg-white/10 border-white/15 text-white/80"
                                        : "bg-black/10 border-black/15 text-black/80"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Experiences List */}
                <div className="space-y-6">
                    {filteredExperiences.map((experience, index) => (
                        <MotionDiv
                            key={experience.id}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`rounded-2xl overflow-hidden backdrop-blur-sm border ${isNight
                                ? "bg-white/5 border-white/10"
                                : "bg-black/5 border-black/10"
                                }`}
                        >
                            <div className="flex">
                                {/* Image */}
                                <div className="w-1/3 relative">
                                    <img
                                        src={experience.image}
                                        alt={experience.title}
                                        className="w-full h-32 object-cover"
                                    />
                                    <div className={`absolute top-2 left-2 px-2 py-1 rounded-full text-xs ${getDifficultyColor(experience.difficulty)
                                        }`}>
                                        {experience.difficulty}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="w-2/3 p-3">
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className={`font-bold text-sm ${isNight ? "text-white" : "text-gray-900"
                                            }`}>
                                            {experience.title}
                                        </h3>
                                        <div className={`text-sm font-bold ${isNight ? "text-cyan-400" : "text-blue-600"
                                            }`}>
                                            {experience.price}
                                        </div>
                                    </div>

                                    <p className={`text-xs mb-2 ${isNight ? "text-white/70" : "text-gray-700"
                                        }`}>
                                        {experience.description}
                                    </p>

                                    <div className={`text-xs ${isNight ? "text-white/60" : "text-gray-600"
                                        }`}>
                                        ⏱️ {experience.duration}
                                    </div>
                                </div>
                            </div>
                        </MotionDiv>
                    ))}
                </div>

                {/* CTA */}
                <MotionButton
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    whileTap={{ scale: 1.1 }}
                    className={`px-6 py-3 mb-16 mt-8 rounded-xl font-bold backdrop-blur-sm border w-full ${isNight
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-cyan-400/30"
                        : "bg-gradient-to-r from-blue-500 to-cyan-400 text-white border-blue-400/30"
                        }`}
                >
                    View All Experiences
                </MotionButton>
            </div>
        </section>
    );
}