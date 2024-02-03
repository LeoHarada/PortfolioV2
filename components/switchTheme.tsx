"use client";
import { useTheme } from "../context/contextTheme";
import React, { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { motion } from "framer-motion";
import clsx from "clsx";

const TOGGLE_CLASSES =
    "text-sm font-medium flex items-center px-3 py-3  transition-colors relative z-10";

export default function SwitchTheme() {
    const { theme, toggleTheme } = useTheme();
    const [isThemeVisible, setThemeVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 100;

            if (window.scrollY > scrollThreshold && isThemeVisible) {
                setThemeVisible(false);
            } else if (window.scrollY <= scrollThreshold && !isThemeVisible) {
                setThemeVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isThemeVisible]);

    return (
        <motion.div
            className={clsx("z-[999] relative", {
                "pointer-events-none": isThemeVisible,
            })}
            initial={{ opacity: 0 }}
            animate={{ opacity: isThemeVisible ? 0 : 1 }}
            transition={{ duration: 1 }}
        >
            <div className="fixed bottom-5 right-8 bg-white bg-opacity-80 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950">
                <div className="relative flex w-fit items-center rounded-full">
                    <button
                        aria-label="Button to toggle light theme to dark theme."
                        className={`${TOGGLE_CLASSES} ${
                            theme === "light" ? "text-white" : "text-slate-300"
                        }`}
                        onClick={toggleTheme}
                    >
                        <FiMoon className="relative z-10 text-lg " />
                        <span className="relative z-10"></span>
                    </button>
                    <button
                        aria-label="Button to toggle dark theme to light theme."
                        className={`${TOGGLE_CLASSES} ${
                            theme === "dark" ? "text-white" : "text-slate-800"
                        }`}
                        onClick={toggleTheme}
                    >
                        <FiSun className="relative z-10 text-lg" />
                        <span className="relative z-10"></span>
                    </button>
                    <div
                        className={`absolute inset-0 z-0 flex ${
                            theme === "dark" ? "justify-end" : "justify-start"
                        }`}
                    >
                        <motion.span
                            layout
                            transition={{
                                type: "spring",
                                damping: 15,
                                stiffness: 250,
                            }}
                            className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
