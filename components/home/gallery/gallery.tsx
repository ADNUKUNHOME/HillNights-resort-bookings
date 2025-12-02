"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { GALLERY } from "@/constants/gallery";
import { GalleryImage } from "@/types/gallery";
import { MotionDiv, MotionButton } from "@/components/lib/motion";

interface GalleryProps {
    isNight: boolean;
}

const FILTERS = ["All", "Interiors", "Exteriors", "Pool", "Dining", "Virtual"] as const;

const CARD_VARIANTS: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06 } })
};

export default function Gallery({ isNight }: GalleryProps) {
    const [activeFilter, setActiveFilter] = useState<typeof FILTERS[number]>("All");
    const [visibleImages, setVisibleImages] = useState<GalleryImage[]>(GALLERY);
    const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    // keyboard navigation for lightbox
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (!lightboxOpen) return;
            if (e.key === "ArrowRight") setCurrentIndex((i) => (i + 1) % visibleImages.length);
            if (e.key === "ArrowLeft") setCurrentIndex((i) => (i - 1 + visibleImages.length) % visibleImages.length);
            if (e.key === "Escape") setLightboxOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [lightboxOpen, visibleImages.length]);

    useEffect(() => {
        setVisibleImages(
            activeFilter === "All" ? GALLERY : GALLERY.filter((g) => g.category === activeFilter)
        );
        // reset lightbox index if filter changes
        setCurrentIndex(0);
    }, [activeFilter]);

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
        // lock scroll
        document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = "";
    };

    const gotoNext = () => setCurrentIndex((i) => (i + 1) % visibleImages.length);
    const gotoPrev = () => setCurrentIndex((i) => (i - 1 + visibleImages.length) % visibleImages.length);

    return (
        <section
            aria-label="Resort Photo Gallery and Virtual Tour"
            className={`relative w-full py-16 overflow-hidden ${isNight ? "text-white" : "text-gray-900"}`}
        >
            {/* Subtle background accent - complements accommodations bg */}
            <div
                className={`absolute inset-0 pointer-events-none ${isNight ? "bg-gradient-to-br from-gray-900/60 via-blue-950/30 to-transparent" : "bg-gradient-to-br from-[#93C572] via-cyan-50 to-[#93C572]"
                    }`}
            />

            <div className="relative z-20 mx-auto max-w-7xl px-6">
                {/* Header */}
                <MotionDiv
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
                    className="text-center mb-8"
                >
                    <div className={`inline-block px-5 py-1 rounded-full backdrop-blur-sm border mb-4 ${isNight ? "bg-white/6 border-white/15 text-white/80" : "bg-black/6 border-black/10 text-black/80"}`}>
                        <span className="text-sm font-semibold">Photos & Tours</span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                        Explore the Property — See it to Believe it
                    </h3>

                    <p className={`max-w-2xl mx-auto text-sm sm:text-base ${isNight ? "text-white/70" : "text-gray-700"}`}>
                        High-resolution photos, immersive 360° walkthrough, and curated views that sell the experience.
                    </p>
                </MotionDiv>

                {/* Filters */}
                <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
                    {FILTERS.map((f) => (
                        <MotionButton
                            key={f}
                            onClick={() => setActiveFilter(f)}
                            className={`px-4 py-2 rounded-2xl border font-medium transition-all duration-250 ${isNight ? "text-white/90 border-white/12" : "text-gray-900 border-black/10"} ${activeFilter === f ? "scale-105 ring-2 ring-offset-2 ring-opacity-20" : "hover:scale-102"}`}
                        >
                            {f}
                        </MotionButton>
                    ))}
                </div>

                {/* Grid / Masonry-like layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visibleImages.map((img, idx) => (
                        <motion.article
                            key={img.id}
                            custom={idx}
                            initial="hidden"
                            animate="visible"
                            variants={CARD_VARIANTS}
                            whileHover={{ scale: 1.02 }}
                            className={`relative rounded-2xl overflow-hidden shadow-lg border backdrop-blur-sm transition-shadow duration-300 ${isNight ? "bg-gray-900/70 border-white/8" : "bg-white/80 border-black/8"}`}
                        >
                            {/* 360 card gets unique treatment */}
                            {img.is360 ? (
                                <div
                                    className="relative w-full h-56 sm:h-64 cursor-pointer"
                                    onClick={() => openLightbox(idx)}
                                >
                                    <img src={img.src} alt={img.alt ?? img.title} className="w-full h-full object-cover filter saturate-95" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="px-4 py-2 rounded-full bg-black/50 text-white backdrop-blur-sm flex items-center gap-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A2 2 0 0122 9.618V14.38a2 2 0 01-2.447 1.894L15 14v-4zM4 6v12" />
                                            </svg>
                                            <span className="text-sm font-semibold">360° Virtual Tour</span>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <button
                                    onClick={() => openLightbox(idx)}
                                    className="relative w-full block focus:outline-none"
                                    aria-label={`Open ${img.title}`}
                                >
                                    <img
                                        src={img.src}
                                        alt={img.alt ?? img.title}
                                        className="w-full h-56 sm:h-64 object-cover transform transition-transform duration-500 hover:scale-105"
                                        loading="lazy"
                                    />
                                </button>
                            )}

                            <div className="p-4">
                                <div className="flex items-start justify-between gap-2">
                                    <div>
                                        <h4 className={`text-sm sm:text-base font-semibold ${isNight ? "text-white" : "text-gray-900"}`}>
                                            {img.title}
                                        </h4>
                                        <p className={`text-xs ${isNight ? "text-white/70" : "text-gray-600"}`}>{img.category}</p>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <MotionButton
                                            onClick={() => openLightbox(idx)}
                                            whileHover={{ scale: 1.03 }}
                                            className={`px-3 py-1 rounded-lg text-xs font-medium border ${isNight ? "bg-white/5 border-white/12 text-white" : "bg-black/3 border-black/10 text-gray-900"}`}
                                        >
                                            View
                                        </MotionButton>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* CTA: View full gallery or request professional photos */}
                <div className="mt-8 flex items-center justify-center gap-4">
                    <MotionButton
                        whileHover={{ scale: 1.03 }}
                        className={`px-6 py-3 rounded-2xl font-semibold ${isNight ? "bg-gradient-to-r from-indigo-500 to-blue-600 text-white" : "bg-gradient-to-r from-blue-500 to-cyan-400 text-white"}`}
                        onClick={() => {
                            // example: scroll to top of gallery or open first image
                            if (visibleImages.length) openLightbox(0);
                        }}
                    >
                        View Full Tour
                    </MotionButton>

                    <MotionButton
                        whileHover={{ scale: 1.02 }}
                        className={`px-5 py-2 rounded-xl border ${isNight ? "text-white/80 border-white/10" : "text-gray-900 border-black/10"}`}
                        onClick={() => alert("Contact us to request a professional photo & 360 shoot (demo).")}
                    >
                        Request Pro Photos
                    </MotionButton>
                </div>
            </div>

            {/* LIGHTBOX */}
            {lightboxOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
                    <div className="relative max-w-5xl w-full mx-auto">
                        {/* close button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white backdrop-blur-sm"
                            aria-label="Close gallery"
                        >
                            ✕
                        </button>

                        {/* Left/Right nav */}
                        <button
                            onClick={gotoPrev}
                            className="absolute left-2 top-1/2 -translate-y-1/2 z-40 p-2 rounded-full bg-black/40 text-white backdrop-blur-sm"
                            aria-label="Previous"
                        >
                            ‹
                        </button>
                        <button
                            onClick={gotoNext}
                            className="absolute right-2 top-1/2 -translate-y-1/2 z-40 p-2 rounded-full bg-black/40 text-white backdrop-blur-sm"
                            aria-label="Next"
                        >
                            ›
                        </button>

                        {/* Main content */}
                        <div className="bg-transparent rounded-2xl overflow-hidden border">
                            {/* If current is 360, show video placeholder (you can replace with iframe/actual 360 viewer) */}
                            {visibleImages[currentIndex]?.is360 ? (
                                <div className="w-full h-96 sm:h-[560px] bg-black flex items-center justify-center">
                                    {/* Placeholder with play button */}
                                    <div className="text-center p-6">
                                        <div className="mb-4">
                                            <img
                                                src={visibleImages[currentIndex].src}
                                                alt="360 preview"
                                                className="w-full max-h-[420px] object-cover rounded-lg"
                                            />
                                        </div>

                                        <MotionButton
                                            onClick={() => alert("This would open an embedded 360° viewer or video.")}
                                            whileHover={{ scale: 1.03 }}
                                            className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                                        >
                                            ▶ Start 360° Tour
                                        </MotionButton>
                                        <p className="mt-3 text-sm text-white/70">360° walkthrough placeholder — replace with your hosted 360 viewer link (e.g., Kuula, Matterport).</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="w-full bg-black flex items-center justify-center">
                                    <img
                                        src={visibleImages[currentIndex]?.src}
                                        alt={visibleImages[currentIndex]?.alt ?? visibleImages[currentIndex]?.title}
                                        className="w-full max-h-[80vh] object-contain"
                                    />
                                </div>
                            )}

                            {/* Title + thumbs */}
                            <div className={`p-4 ${isNight ? "bg-gray-900/95 text-white" : "bg-white/95 text-gray-900"}`}>
                                <div className="flex items-center justify-between mb-3">
                                    <div>
                                        <h4 className="font-semibold text-lg">{visibleImages[currentIndex]?.title}</h4>
                                        <p className="text-sm opacity-70">{visibleImages[currentIndex]?.category}</p>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <span className="text-sm opacity-60">{`${currentIndex + 1}/${visibleImages.length}`}</span>
                                    </div>
                                </div>

                                {/* Thumbnails */}
                                <div className="overflow-x-auto py-2 -mx-4 px-4">
                                    <div className="flex gap-2 items-center">
                                        {visibleImages.map((thumb, tIdx) => (
                                            <button
                                                key={thumb.id}
                                                onClick={() => setCurrentIndex(tIdx)}
                                                className={`flex-none rounded-lg overflow-hidden border ${tIdx === currentIndex ? "ring-2 ring-offset-2" : "opacity-80"} ${isNight ? "border-white/10" : "border-black/10"}`}
                                            >
                                                <img src={thumb.thumb ?? thumb.src} alt={thumb.alt ?? thumb.title} className="w-24 h-16 object-cover" />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
