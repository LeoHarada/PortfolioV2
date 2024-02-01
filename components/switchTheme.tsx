"use client";
import { useTheme } from "../context/contextTheme";
import React from "react";
// import { BsMoon, BsSun } from "react-icons/bs";
import { FiMoon, FiSun } from "react-icons/fi";
import { motion } from "framer-motion";

const TOGGLE_CLASSES =
    "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

export default function SwitchTheme() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="fixed bottom-5 right-8 bg-white bg-opacity-80 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950">
            <div className="relative flex w-fit items-center rounded-full">
                <button
                    className={`${TOGGLE_CLASSES} ${
                        theme === "light" ? "text-white" : "text-slate-300"
                    }`}
                    onClick={toggleTheme}
                >
                    <FiMoon className="relative z-10 text-lg md:text-sm" />
                    <span className="relative z-10">Light</span>
                </button>
                <button
                    className={`${TOGGLE_CLASSES} ${
                        theme === "dark" ? "text-white" : "text-slate-800"
                    }`}
                    onClick={toggleTheme}
                >
                    <FiSun className="relative z-10 text-lg md:text-sm" />
                    <span className="relative z-10">Dark</span>
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
    );
}
