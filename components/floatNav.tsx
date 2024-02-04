"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, {
    useState,
    useEffect,
    FC,
    Dispatch,
    SetStateAction,
} from "react";
import { FiMenu, FiX } from "react-icons/fi";
import clsx from "clsx";

interface MenuButtonProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

interface MenuProps {
    onCloseMenu: () => void;
}

interface MenuLinkProps {
    text: string;
    onCloseMenu: () => void;
}

export default function FloatingNav() {
    const [open, setOpen] = useState(false);
    const [isNavVisible, setNavVisible] = useState(true);

    const handleCloseMenu = () => {
        setOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 100;

            if (window.scrollY > scrollThreshold && isNavVisible) {
                setNavVisible(false);
            } else if (window.scrollY <= scrollThreshold && !isNavVisible) {
                setNavVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isNavVisible]);

    return (
        <motion.div
            className={clsx("z-[999] relative", {
                "pointer-events-none": isNavVisible,
            })}
            initial={{ opacity: 0 }}
            animate={{ opacity: isNavVisible ? 0 : 1 }}
            transition={{ duration: 1 }}
        >
            <motion.nav
                animate={open ? "open" : "closed"}
                initial="closed"
                className="sm:hidden fixed bg-gray-300 text-black/[0.7] shadow-lg flex items-center justify-between rounded-full bottom-3 z-[9999] left-[50%] -translate-x-[50%]"
            >
                <MenuButton setOpen={setOpen} open={open} />
                <Menu onCloseMenu={handleCloseMenu} />
            </motion.nav>
        </motion.div>
    );
}

const MenuButton: FC<MenuButtonProps> = ({ open, setOpen }) => {
    return (
        <div
            onClick={() => setOpen((pv) => !pv)}
            className="text-4xl rounded-full bg-black/[0.7] text-gray-300 dark:bg-gray-300 dark:text-black/[0.7] shadow-lg-custom"
        >
            <motion.button
                aria-label="Floating navigation menu for mobile devices."
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

const Menu: FC<MenuProps> = ({ onCloseMenu }) => {
    return (
        <motion.div
            variants={menuVariants}
            style={{ transformOrigin: "bottom", x: "-50%" }}
            className="p-8 font-semibold rounded-2xl bg-white shadow-lg absolute bottom-[125%] left-[50%] flex w-[calc(100vw_-_30px)] max-w-lg backdrop-blur-[0.1rem] bg-opacity-80"
        >
            <div className="flex flex-col gap-2 w-full items-center">
                <MenuLink text="Home" onCloseMenu={onCloseMenu} />
                <MenuLink text="About" onCloseMenu={onCloseMenu} />
                <MenuLink text="Projects" onCloseMenu={onCloseMenu} />
                <MenuLink text="Skills" onCloseMenu={onCloseMenu} />
                <MenuLink text="Experience" onCloseMenu={onCloseMenu} />
                <MenuLink text="Contact" onCloseMenu={onCloseMenu} />
            </div>
        </motion.div>
    );
};

const MenuLink: FC<MenuLinkProps> = ({ text, onCloseMenu }) => {
    const handleClick = () => {
        onCloseMenu();
    };
    return (
        <motion.a
            variants={menuLinkVariants}
            href={`#${text.toLowerCase()}`}
            rel="nofollow"
            className="text-3xl hover:text-indigo-500 transition-colors flex items-center gap-2"
            onClick={handleClick}
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
