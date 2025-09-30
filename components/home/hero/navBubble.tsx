"use client";

import React from "react";
import { MotionButton, MotionDiv } from "@/components/lib/motion";

type VoidFn = () => void;

export default function NavBubble({
    label,
    icon,
    onClick,
    alwaysShowLabel = false,
}: {
    label: string;
    icon: React.ReactNode;
    onClick: VoidFn;
    alwaysShowLabel?: boolean;
}) {
    const buttonVariants = alwaysShowLabel
        ? { initial: { width: "11rem" }, hover: { width: "11rem" } }
        : { initial: { width: "3.5rem" }, hover: { width: "11rem" } };

    const labelVariants = alwaysShowLabel
        ? { initial: { opacity: 1, x: 0 }, hover: { opacity: 1, x: 0 } }
        : { initial: { opacity: 0, x: -10 }, hover: { opacity: 1, x: 0 } };

    return (
        <MotionButton
            whileHover="hover"
            initial="initial"
            variants={buttonVariants}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            onClick={onClick}
            className="flex items-center rounded-full hover:bg-black/10 backdrop-blur-sm border hover:border-black/20 py-2 pr-4 pl-2 text-sm text-white shadow group"
            type="button"
        >
            <div className="flex-shrink-0 w-9 h-9 rounded-full bg-black/20 flex items-center justify-center">
                {icon}
            </div>

            <MotionDiv
                variants={labelVariants}
                transition={{ duration: 0.25 }}
                className="ml-3 flex flex-col text-left whitespace-nowrap"
                aria-hidden={false}
            >
                <span className="text-xs font-medium">{label}</span>
                <span className="text-[10px] text-white/70">Explore</span>
            </MotionDiv>
        </MotionButton>
    );
}
