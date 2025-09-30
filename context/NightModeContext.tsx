"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type NightModeContextType = {
    isNight: boolean;
    setIsNight: React.Dispatch<React.SetStateAction<boolean>>;
};

const NightModeContext = createContext<NightModeContextType | undefined>(
    undefined
);

export function NightModeProvider({ children }: { children: ReactNode }) {
    const [isNight, setIsNight] = useState(true);

    return (
        <NightModeContext.Provider value={{ isNight, setIsNight }}>
            {children}
        </NightModeContext.Provider>
    );
}

export function useNightMode() {
    const context = useContext(NightModeContext);
    if (!context) {
        throw new Error("useNightMode must be used within a NightModeProvider");
    }
    return context;
}
