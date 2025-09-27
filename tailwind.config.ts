// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Custom gradient colors for day/night transition
                nightSkyStart: '#0F172A', // Dark blue, almost black
                nightSkyEnd: '#1E3A8A',   // Medium-dark blue
                sunriseStart: '#FDBA74',  // Light orange
                sunriseEnd: '#FB923C',    // Orange
                daySkyStart: '#BFDBFE',   // Light blue
                daySkyEnd: '#60A5FA',     // Medium blue
                hillNightsPrimary: '#A78BFA', // A pleasant purple for accents
                hillNightsSecondary: '#8B5CF6', // A slightly darker purple
                hillNightsText: '#E2E8F0', // Off-white for readability
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            keyframes: {
                // Custom keyframes for gradient animation
                nightToSunrise: {
                    '0%': { background: 'linear-gradient(to bottom right, var(--tw-colors-nightSkyStart), var(--tw-colors-nightSkyEnd))' },
                    '100%': { background: 'linear-gradient(to bottom right, var(--tw-colors-sunriseStart), var(--tw-colors-sunriseEnd))' },
                },
                sunriseToDay: {
                    '0%': { background: 'linear-gradient(to bottom right, var(--tw-colors-sunriseStart), var(--tw-colors-sunriseEnd))' },
                    '100%': { background: 'linear-gradient(to bottom right, var(--tw-colors-daySkyStart), var(--tw-colors-daySkyEnd))' },
                },
                dayToNight: {
                    '0%': { background: 'linear-gradient(to bottom right, var(--tw-colors-daySkyStart), var(--tw-colors-daySkyEnd))' },
                    '100%': { background: 'linear-gradient(to bottom right, var(--tw-colors-nightSkyStart), var(--tw-colors-nightSkyEnd))' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                bounceVertical: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            },
            animation: {
                'gradient-change': 'nightToSunrise 8s ease-in-out forwards', // Example, will be dynamic
                'fade-in': 'fadeIn 1s ease-out forwards',
                'bounce-v': 'bounceVertical 1.5s infinite',
            },
        },
    },
    plugins: [],
};

export default config;