"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "../context/activeSectionContext";

export default function Header() {
    const { activeSection, setActiveSection, setTimeOfLastClick } =
        useActiveSectionContext();

    const [isHeaderVisible, setHeaderVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 100;

            if (window.scrollY > scrollThreshold && isHeaderVisible) {
                setHeaderVisible(false);
            } else if (window.scrollY <= scrollThreshold && !isHeaderVisible) {
                setHeaderVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isHeaderVisible]);

    return (
        <motion.header
            className={clsx("z-[999] relative", {
                "pointer-events-none": isHeaderVisible,
            })}
            initial={{ opacity: 0 }}
            animate={{ opacity: isHeaderVisible ? 0 : 1 }}
            transition={{ duration: 1 }}
        >
            <motion.div
                className="hidden sm:block fixed left-1/2 border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] top-6 h-12 w-[36rem] rounded-full dark:bg-gray-900 dark:border-black/40 dark:bg-opacity-75"
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
            ></motion.div>

            <nav className="hidden sm:flex fixed left-1/2 h-11 -translate-x-1/2 top-[1.7rem]">
                <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-700 sm:w-[initial] sm:flex-nowrap sm:gap-5">
                    {links.map((link) => (
                        <motion.li
                            className="h-3/4 flex items-center justify-center relative"
                            key={link.hash}
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <Link
                                className={clsx(
                                    "flex w-full items-center justify-center px-3 hover:text-violet-300 transition dark:text-gray-200 dark:hover:text-violet-300",
                                    {
                                        "text-gray-950 dark:text-gray-100":
                                            activeSection === link.name,
                                    }
                                )}
                                href={link.hash}
                                onClick={() => {
                                    setActiveSection(link.name);
                                    setTimeOfLastClick(Date.now());
                                }}
                            >
                                {link.name}

                                {link.name === activeSection && (
                                    <motion.span
                                        className="bg-violet-300 rounded-full absolute inset-0 -z-10"
                                        layoutId="activeSection"
                                        transition={{
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 30,
                                        }}
                                    ></motion.span>
                                )}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </motion.header>
    );
}
