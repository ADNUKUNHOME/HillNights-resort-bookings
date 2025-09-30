// components/home/experiences/desktopGrid.tsx
"use client";

import { MotionDiv, MotionImg } from "@/components/lib/motion";
import { Variants, useAnimation } from "framer-motion";
import { Experience } from "@/types/experiences";

const CARD_VARIANTS: Variants = {
    hidden: {
        opacity: 0,
        y: 60,
        scale: 0.9,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

const HOVER_CARD_VARIANTS: Variants = {
    rest: {
        scale: 1,
        y: 0,
        transition: { duration: 0.3 },
    },
    hover: {
        scale: 1.05,
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" },
    },
};

type Controls = ReturnType<typeof useAnimation>;

interface DesktopGridProps {
    isNight: boolean;
    filteredExperiences: Experience[];
    setSelectedExperience: (experience: Experience) => void;
    controls: Controls;
    getDifficultyColor: (difficulty: string) => string;
}

const DesktopGrid = ({
    isNight,
    filteredExperiences,
    setSelectedExperience,
    controls,
    getDifficultyColor,
}: DesktopGridProps): React.ReactElement => {
    return (
        <MotionDiv
            initial="hidden"
            animate={controls}
            variants={{
                visible: {
                    transition: {
                        staggerChildren: 0.15,
                    },
                },
            }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
            {filteredExperiences.map((experience) => (
                <MotionDiv
                    key={experience.id}
                    variants={CARD_VARIANTS}
                    whileHover="hover"
                    initial="hidden"
                    animate="visible"
                    className="group cursor-pointer"
                    onClick={() => setSelectedExperience(experience)}
                >
                    <MotionDiv
                        variants={HOVER_CARD_VARIANTS}
                        className={`relative rounded-3xl overflow-hidden backdrop-blur-sm border shadow-2xl ${isNight
                            ? "bg-white/5 border-white/10"
                            : "bg-black/5 border-black/10"
                            }`}
                    >
                        {/* Image Container */}
                        <div className="relative h-80 overflow-hidden">
                            <MotionImg
                                src={experience.image}
                                alt={experience.title}
                                className="w-full h-full object-cover"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                            />

                            {/* Gradient Overlay */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-t ${isNight
                                    ? "from-black/80 via-black/20 to-transparent"
                                    : "from-white/80 via-white/20 to-transparent"
                                    }`}
                            />

                            {/* Category Badge */}
                            <div
                                className={`absolute top-4 left-4 px-3 py-1 rounded-full backdrop-blur-sm border ${isNight
                                    ? "bg-white/20 border-white/30 text-white"
                                    : "bg-black/20 border-black/30 text-black"
                                    }`}
                            >
                                <span className="text-sm font-medium">
                                    {experience.category}
                                </span>
                            </div>

                            {/* Difficulty Badge */}
                            <div
                                className={`absolute top-4 right-4 px-3 py-1 rounded-full border text-sm font-medium ${getDifficultyColor(
                                    experience.difficulty
                                )}`}
                            >
                                {experience.difficulty}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-3">
                                <h3
                                    className={`text-2xl font-bold ${isNight ? "text-white" : "text-gray-900"
                                        }`}
                                >
                                    {experience.title}
                                </h3>
                                <div
                                    className={`text-lg font-bold ${isNight ? "text-cyan-400" : "text-blue-600"
                                        }`}
                                >
                                    {experience.price}
                                </div>
                            </div>

                            <p
                                className={`mb-4 ${isNight ? "text-white/70" : "text-gray-700"
                                    }`}
                            >
                                {experience.description}
                            </p>

                            <div className="flex justify-between items-center mb-4">
                                <div
                                    className={`flex items-center gap-1 ${isNight ? "text-white/60" : "text-gray-600"
                                        }`}
                                >
                                    <span>⏱️</span>
                                    <span className="text-sm">{experience.duration}</span>
                                </div>
                            </div>

                            {/* Highlights */}
                            <div className="flex flex-wrap gap-2">
                                {experience.highlights.map((highlight, idx) => (
                                    <span
                                        key={idx}
                                        className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border ${isNight
                                            ? "bg-white/10 border-white/20 text-white/90"
                                            : "bg-black/10 border-black/20 text-black/90"
                                            }`}
                                    >
                                        {highlight}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Hover Effect */}
                        <div
                            className={`absolute inset-0 rounded-3xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isNight ? "border-cyan-400/50" : "border-blue-500/50"
                                }`}
                        />
                    </MotionDiv>
                </MotionDiv>
            ))}
        </MotionDiv>
    );
};

export default DesktopGrid;
