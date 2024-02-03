"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function FloatingNav() {
    const [open, setOpen] = useState(false);

    return (
        <motion.nav
            animate={open ? "open" : "closed"}
            initial="closed"
            className="sm:hidden fixed bg-gray-300 text-black/[0.7] shadow-lg flex items-center justify-between rounded-full top-[90%] z-[9999] left-[50%] -translate-x-[50%]"
        >
            <MenuButton setOpen={setOpen} open={open} />
            <Menu />
        </motion.nav>
    );
}

const MenuButton = ({ open, setOpen }) => {
    return (
        <div
            onClick={() => setOpen((pv) => !pv)}
            className="text-4xl rounded-full bg-black/[0.7] text-gray-300 dark:bg-gray-300 dark:text-black/[0.7]"
        >
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-4"
            >
                <AnimatePresence mode="wait">
                    {open ? (
                        <motion.span
                            key="icon-1"
                            className="block"
                            variants={iconVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.125, ease: "linear" }}
                        >
                            <FiX />
                        </motion.span>
                    ) : (
                        <motion.span
                            key="icon-2"
                            className="block"
                            variants={iconVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.125, ease: "linear" }}
                        >
                            <FiMenu />
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    );
};

const Menu = () => {
    return (
        <motion.div
            variants={menuVariants}
            style={{ transformOrigin: "bottom", x: "-50%" }}
            className="p-8 font-semibold rounded-2xl bg-gray-300 shadow-lg absolute bottom-[125%] left-[50%] flex w-[calc(100vw_-_30px)] max-w-lg backdrop-blur-[0.5rem] bg-opacity-80"
        >
            <div className="flex flex-col gap-2 w-full items-center">
                <MenuLink text="Home" />
                <MenuLink text="About" />
                <MenuLink text="Projects" />
                <MenuLink text="Skills" />
                <MenuLink text="Experience" />
                <MenuLink text="Contact" />
            </div>
        </motion.div>
    );
};

const MenuLink = ({ text }) => {
    return (
        <motion.a
            variants={menuLinkVariants}
            href={`#${text.toLowerCase()}`}
            rel="nofollow"
            className="text-3xl hover:text-indigo-500 transition-colors flex items-center gap-2"
        >
            {text}
        </motion.a>
    );
};

const iconVariants = {
    initial: { rotate: 180, opacity: 0 },
    animate: { rotate: 0, opacity: 1 },
    exit: { rotate: -180, opacity: 0 },
};

const menuVariants = {
    open: {
        scale: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.05,
        },
    },
    closed: {
        scale: 0,
        transition: {
            when: "afterChildren",
            staggerChildren: 0.05,
        },
    },
};

const menuLinkVariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: -15,
        opacity: 0,
    },
};
