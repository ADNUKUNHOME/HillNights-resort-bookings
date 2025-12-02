"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MotionDiv, MotionButton } from "@/components/lib/motion";
import { ToastContainer, toast } from 'react-toastify';

const notificationSound = typeof Audio !== "undefined"
    ? new Audio("/notificationEffect.wav")
    : null;

interface BookingFormData {
    name: string;
    email: string;
    phone: string;
    checkIn: string;
    checkOut: string;
    guests: number;
}

interface BookingSectionProps {
    isNight: boolean;
}

export default function BookingSection({ isNight }: BookingSectionProps) {
    const [formData, setFormData] = useState<BookingFormData>({
        name: "",
        email: "",
        phone: "",
        checkIn: "",
        checkOut: "",
        guests: 1,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    useEffect(() => {
        if (!notificationSound) return;
        notificationSound.volume = 0;
        notificationSound.play().catch(() => { });
        notificationSound.pause();
        notificationSound.currentTime = 0;
    }, []);

    const playNotificationSound = () => {
        if (!notificationSound) return;
        notificationSound.currentTime = 0;
        notificationSound.volume = 0.5;
        notificationSound.play().catch(() => { });
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        playNotificationSound();
        toast("✨ Booking flow coming soon!");
    };

    return (
        <section
            id="booking"
            className={`relative w-full py-20 ${isNight ? "text-white" : "text-gray-900"
                }`}
            aria-label="Booking & Inquiry Form"
        >
            {/* Background */}
            <div
                className={`absolute inset-0 ${isNight
                    ? "bg-gradient-to-br from-gray-900 via-blue-950 to-gray-800"
                    : "bg-gradient-to-br from-blue-50 via-cyan-100 to-white"
                    }`}
            />
            <div className="absolute inset-0 bg-grid-slate-100/10 pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <MotionDiv
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span
                        className={`px-6 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border ${isNight
                            ? "bg-white/10 border-white/20 text-white/80"
                            : "bg-black/10 border-black/20 text-black/80"
                            }`}
                    >
                        Booking & Inquiry
                    </span>
                    <h2 className="mt-6 text-4xl sm:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                        Reserve Your Luxury Stay
                    </h2>
                    <p
                        className={`mt-4 max-w-xl mx-auto ${isNight ? "text-white/70" : "text-gray-600"
                            }`}
                    >
                        Secure your dream holiday at HillNights. Quick booking with instant
                        confirmation.
                    </p>
                </MotionDiv>

                {/* Layout: form + side card */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    {/* FORM */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className={`rounded-3xl p-8 shadow-xl border backdrop-blur-lg ${isNight
                            ? "bg-gray-900/80 border-white/10"
                            : "bg-white/80 border-black/10"
                            }`}
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Name */}
                            <div>
                                <label className="block text-sm mb-2">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border bg-transparent backdrop-blur-sm"
                                    placeholder="Your Name"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border bg-transparent backdrop-blur-sm"
                                    placeholder="you@email.com"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-sm mb-2">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border bg-transparent backdrop-blur-sm"
                                    placeholder="+91 98765 43210"
                                />
                            </div>

                            {/* Guests */}
                            <div>
                                <label className="block text-sm mb-2">Guests</label>
                                <select
                                    name="guests"
                                    value={formData.guests}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border bg-transparent backdrop-blur-sm"
                                >
                                    {[1, 2, 3, 4, 5, 6].map((g) => (
                                        <option key={g} value={g}>
                                            {g} Guest{g > 1 && "s"}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Check-in */}
                            <div>
                                <label className="block text-sm mb-2">Check-in</label>
                                <input
                                    type="date"
                                    name="checkIn"
                                    value={formData.checkIn}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border bg-transparent backdrop-blur-sm"
                                />
                            </div>

                            {/* Check-out */}
                            <div>
                                <label className="block text-sm mb-2">Check-out</label>
                                <input
                                    type="date"
                                    name="checkOut"
                                    value={formData.checkOut}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border bg-transparent backdrop-blur-sm"
                                />
                            </div>
                        </div>

                        <MotionButton
                            type="submit"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="mt-8 w-full py-4 rounded-2xl font-semibold text-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                        >
                            Book Now
                        </MotionButton>
                    </motion.form>

                    {/* SIDE CARD */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className={`rounded-3xl p-8 shadow-xl backdrop-blur-lg border ${isNight
                            ? "bg-gradient-to-br from-pink-600/30 to-purple-700/30 border-white/10"
                            : "bg-gradient-to-br from-pink-50 to-purple-100 border-black/10"
                            }`}
                    >
                        <h3 className="text-2xl font-bold mb-4">
                            Why Book Direct With Us?
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li>✔ Best Price Guarantee</li>
                            <li>✔ Early Check-in & Late Check-out</li>
                            <li>✔ Complimentary Welcome Drink</li>
                            <li>✔ Exclusive Member Discounts</li>
                        </ul>
                        <div className="mt-6">
                            <img
                                src={`${isNight
                                    ? "https://i.insider.com/5c3e552710f0d00a9430668b?width=700"
                                    : "https://png.pngtree.com/png-clipart/20240921/original/pngtree-tropical-hotel-accurate-png-image_16062852.png"}`}
                                alt="Luxury Resort"
                                className="w-full rounded-2xl object-cover shadow-md"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
            <ToastContainer position="top-center" />
        </section>
    );
}
