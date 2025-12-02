"use client";

import React, { useState, useRef, useEffect } from "react";
import { useAnimation, useInView, Variants } from "framer-motion";
import { ROOMS } from "@/constants/rooms";
import { Room } from "@/types/rooms";
import { MotionButton, MotionDiv } from "@/components/lib/motion";

const CATEGORY_VARIANTS: Variants = {
    inactive: { scale: 1, opacity: 0.7, transition: { duration: 0.3 } },
    active: { scale: 1.05, opacity: 1, transition: { duration: 0.3 } }
};

interface AccommodationsProps {
    isNight: boolean;
}

export default function Accommodations({ isNight }: AccommodationsProps) {
    const [activeCategory, setActiveCategory] = useState<string>("All");
    const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.15 });

    const categories = ["All", "Villa", "Cottage", "Tent", "Luxury"];

    const filteredRooms =
        activeCategory === "All"
            ? ROOMS
            : ROOMS.filter((room) => room.category === activeCategory);

    useEffect(() => {
        if (isInView) controls.start("visible");
    }, [controls, isInView]);

    return (
        <section
            ref={ref}
            aria-label="HillNights Accommodations"
            className={`relative w-full min-h-screen py-20 overflow-hidden ${isNight ? "text-white" : "text-gray-900"
                }`}
        >
            {/* Background */}
            <div
                className={`absolute inset-0 ${isNight
                    ? "bg-gradient-to-br from-gray-900 via-blue-950 to-gray-800"
                    : "bg-gradient-to-br from-blue-50 via-cyan-100 to-white"
                    }`}
            />

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
                        <span className="text-sm font-semibold">Our Accommodations</span>
                    </MotionDiv>

                    <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                        Stay in Luxury & Comfort
                    </h2>

                    <p
                        className={`text-xl max-w-2xl mx-auto ${isNight ? "text-white/70" : "text-black/70"
                            }`}
                    >
                        Handpicked stays designed to give you unforgettable memories.
                    </p>
                </MotionDiv>

                {/* Category Filter */}
                <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.6, delay: 0.2 }
                        }
                    }}
                    className="flex justify-center gap-3 mb-12 flex-wrap"
                >
                    {categories.map((category) => (
                        <MotionButton
                            key={category}
                            variants={CATEGORY_VARIANTS}
                            initial="inactive"
                            animate={activeCategory === category ? "active" : "inactive"}
                            whileHover="active"
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-2 rounded-xl backdrop-blur-sm border font-medium transition-all duration-300 ${isNight
                                ? "text-white/90 border-white/15 hover:bg-white/10"
                                : "text-black/90 border-black/15 hover:bg-black/5"
                                }`}
                        >
                            {category}
                        </MotionButton>
                    ))}
                </MotionDiv>

                {/* Rooms Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredRooms.map((room) => (
                        <MotionDiv
                            key={room.id}
                            initial={{ opacity: 0, y: 40 }}
                            animate={controls}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.5, delay: room.id * 0.1 }
                                }
                            }}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            className={`rounded-3xl overflow-hidden shadow-xl border backdrop-blur-sm transition-all duration-300 ${isNight
                                ? "bg-gray-900/70 border-white/10 hover:shadow-pink-500/20"
                                : "bg-white/70 border-black/10 hover:shadow-purple-400/20"
                                }`}
                        >
                            <div className="relative">
                                <img
                                    src={room.image}
                                    alt={room.name}
                                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                                />
                                <span className="absolute top-4 left-4 px-4 py-1 rounded-full text-sm font-medium bg-black/60 text-white">
                                    {room.category}
                                </span>
                            </div>

                            <div className="p-6">
                                <h3
                                    className={`text-2xl font-bold mb-3 ${isNight ? "text-white" : "text-gray-900"
                                        }`}
                                >
                                    {room.name}
                                </h3>
                                <p
                                    className={`mb-3 line-clamp-2 ${isNight ? "text-white/70" : "text-gray-600"
                                        }`}
                                >
                                    {room.description}
                                </p>

                                <div className="flex items-center justify-between mb-4">
                                    <span
                                        className={`text-lg font-semibold ${isNight ? "text-pink-300" : "text-pink-600"
                                            }`}
                                    >
                                        {room.pricePerNight}
                                    </span>
                                    <span className="text-sm opacity-70">
                                        Capacity: {room.capacity}
                                    </span>
                                </div>

                                <div className="flex gap-2 flex-wrap">
                                    {room.amenities.slice(0, 3).map((amenity, index) => (
                                        <span
                                            key={index}
                                            className={`px-3 py-1 text-xs rounded-full border ${isNight
                                                ? "bg-white/10 border-white/20 text-white/70"
                                                : "bg-black/5 border-black/10 text-gray-700"
                                                }`}
                                        >
                                            {amenity}
                                        </span>
                                    ))}
                                </div>

                                <MotionButton
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 1.01 }}
                                    onClick={() => setSelectedRoom(room)}
                                    className={`mt-5 w-full px-5 py-3 rounded-xl font-semibold backdrop-blur-sm border transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg ${isNight
                                        ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white border-pink-400/30 hover:from-pink-400 hover:to-purple-500"
                                        : "bg-gradient-to-r from-purple-500 to-pink-400 text-white border-purple-400/30 hover:from-purple-400 hover:to-pink-500"
                                        }`}
                                >
                                    View Details
                                </MotionButton>
                            </div>
                        </MotionDiv>
                    ))}
                </div>

                {/* Room Detail Modal */}
                {selectedRoom && (
                    <MotionDiv
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
                        onClick={() => setSelectedRoom(null)}
                    >
                        <MotionDiv
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className={`relative max-w-2xl w-full rounded-3xl overflow-hidden backdrop-blur-lg border ${isNight
                                ? "bg-gray-900/95 border-white/20"
                                : "bg-white/95 border-black/20"
                                }`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedRoom.image}
                                alt={selectedRoom.name}
                                className="w-full h-72 object-cover hidden md:block"
                            />
                            <div className="p-6">
                                <h3
                                    className={`text-3xl font-bold mb-3 ${isNight ? "text-white" : "text-gray-900"
                                        }`}
                                >
                                    {selectedRoom.name}
                                </h3>
                                <p
                                    className={`mb-4 ${isNight ? "text-white/70" : "text-gray-700"
                                        }`}
                                >
                                    {selectedRoom.description}
                                </p>

                                <div className="flex gap-3 flex-wrap mb-5">
                                    {selectedRoom.amenities.map((amenity, index) => (
                                        <span
                                            key={index}
                                            className={`px-4 py-2 text-sm rounded-full border ${isNight
                                                ? "bg-white/10 border-white/20 text-white/80"
                                                : "bg-black/5 border-black/20 text-gray-700"
                                                }`}
                                        >
                                            {amenity}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between">
                                    <span
                                        className={`text-xl font-bold ${isNight ? "text-pink-300" : "text-pink-600"
                                            }`}
                                    >
                                        {selectedRoom.pricePerNight}
                                    </span>
                                    <button
                                        onClick={() => alert("Booking flow coming soon!")}
                                        className={`px-6 py-3 rounded-xl font-semibold backdrop-blur-sm border transition-all duration-300 transform hover:scale-[1.05] hover:shadow-xl ${isNight
                                            ? "bg-gradient-to-r from-green-500 to-teal-600 text-white border-green-400/30 hover:from-green-400 hover:to-teal-500"
                                            : "bg-gradient-to-r from-teal-500 to-green-400 text-white border-teal-400/30 hover:from-teal-400 hover:to-green-500"
                                            }`}
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </MotionDiv>
                    </MotionDiv>
                )}
            </div>
        </section>
    );
}
