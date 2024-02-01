"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "../lib/hooks";
import { useActiveSectionContext } from "../context/activeSectionContext";
import { FiLogIn } from "react-icons/fi";

export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <section
            ref={ref}
            id="home"
            className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
        >
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2,
                        }}
                    >
                        <Image
                            src="/selfie.png"
                            alt="selfie portrait"
                            width="192"
                            height="192"
                            quality="95"
                            priority={true}
                            className="h-[16rem] w-[16rem] rounded-full object-cover border-[0.5rem] border-white shadow-2xl"
                        />
                    </motion.div>

                    <motion.span
                        className="absolute bottom-0 right-0 text-7xl"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7,
                        }}
                    >
                        👋
                    </motion.span>
                </div>
            </div>

            <motion.h1
                className="mb-10 mt-6 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold text-[#ff335f]">
                    Aloha, I'm Leo.
                </span>{" "}
                A <span className="font-bold">full-stack developer</span> with a
                focus on <span className="font-bold">front-end</span> stacks. I
                thrive on infusing{" "}
                <div className="relative inline-block group">
                    <span className="transition-all duration-300 ease-in-out group-hover:scale-x-100">
                        interactive
                    </span>
                    <span className="absolute left-0 right-0 bottom-0 z-[-1] h-5 bg-gray-200 dark:bg-gray-600"></span>
                    <span className="absolute left-0 right-0 bottom-0 z-[-1] h-5 bg-violet-400 transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </div>{" "}
                elements &{" "}
                <div className="relative inline-block group">
                    <span className="transition-all duration-300 ease-in-out group-hover:scale-x-100">
                        playful
                    </span>
                    <span className="absolute left-0 right-0 bottom-0 z-[-1] h-5 bg-gray-200 dark:bg-gray-600"></span>
                    <span className="absolute left-0 right-0 bottom-0 z-[-1] h-5 bg-green-400 transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </div>{" "}
                themes into my web designs, creating digital{" "}
                <div className="relative inline-block group">
                    <span className="transition-all duration-300 ease-in-out group-hover:scale-x-100">
                        experiences
                    </span>
                    <span className="absolute left-0 right-0 bottom-0 z-[-1] h-5 bg-gray-200 dark:bg-gray-600"></span>
                    <span className="absolute left-0 right-0 bottom-0 z-[-1] h-5 bg-blue-400 transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </div>{" "}
                that leave a lasting impression .
            </motion.h1>

            <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                <Link
                    href="#contact"
                    onClick={() => {
                        setActiveSection("Contact");
                        setTimeOfLastClick(Date.now());
                    }}
                    className={`
        relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] 
        border-violet-400 px-4 py-2 font-semibold
        text-violet-400 transition-all duration-500
        
        before:absolute before:inset-0
        before:-z-10 before:translate-x-[150%]
        before:translate-y-[150%] before:scale-[2.5]
        before:rounded-[100%] before:bg-violet-400
        before:transition-transform before:duration-1000
        before:content-[""]

        hover:scale-105 hover:text-neutral-900
        hover:before:translate-x-[0%]
        hover:before:translate-y-[0%]
        active:scale-95`}
                >
                    <span>Contact me</span>
                    <FiLogIn />
                </Link>
                <a
                    href="/CV.pdf"
                    download
                    className={`
        relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] 
        border-violet-400 px-4 py-2 font-semibold
        text-violet-400 transition-all duration-500
        
        before:absolute before:inset-0
        before:-z-10 before:translate-x-[150%]
        before:translate-y-[150%] before:scale-[2.5]
        before:rounded-[100%] before:bg-violet-400
        before:transition-transform before:duration-1000
        before:content-[""]

        hover:scale-105 hover:text-neutral-900
        hover:before:translate-x-[0%]
        hover:before:translate-y-[0%]
        active:scale-95`}
                >
                    <span>Download CV</span>
                    <HiDownload />
                </a>

                <a
                    className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-gray-200"
                    href="https://www.linkedin.com/in/leoharada/"
                    target="_blank"
                >
                    <BsLinkedin />
                </a>

                <a
                    className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-gray-200"
                    href="https://github.com/LeoHarada"
                    target="_blank"
                >
                    <FaGithubSquare />
                </a>
            </motion.div>
        </section>
    );
}
