"use client";
import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
    title,
    type,
    description,
    tags,
    imageUrl,
    liveLink,
    githubLink,
}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgess,
                opacity: opacityProgess,
            }}
            className="group mb-3 sm:mb-8 last:mb-0"
        >
            <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden relative sm:h-[23rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                <div className="pt-4 pb-7 px-5 sm:pl-6 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem] gap-2 items-center justify-center">
                    <h3 className="text-2xl font-semibold text-center">
                        {title}
                    </h3>
                    <p className="text-md italic -mt-3 text-gray-700 dark:text-white/70 text-center">
                        {type}
                    </p>
                    <p className="leading-relaxed text-gray-700 dark:text-white/70 text-center">
                        {description}
                    </p>
                    <ul className="flex flex-wrap gap-2 justify-center">
                        {tags.map((tag, index) => (
                            <li
                                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                                key={index}
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-wrap gap-1 mt-4">
                        <Link
                            href={liveLink}
                            target="_blank"
                            className={`
        relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] 
        border-black/[0.7] dark:border-white/70 px-4 py-2 font-semibold
        text-black/[0.7] dark:text-white/70 transition-all duration-300
        
        before:absolute before:inset-0
        before:-z-10 before:translate-x-[150%]
        before:translate-y-[150%] before:scale-[2.5]
        before:rounded-[100%] before:bg-black/[0.7] before:dark:bg-white/70
        before:transition-transform before:duration-700
        before:content-[""]

        hover:text-white hover:dark:text-black/[0.7]
        hover:before:translate-x-[0%]
        hover:before:translate-y-[0%]
        active:scale-95`}
                        >
                            Live
                        </Link>
                        <Link
                            href={githubLink}
                            target="_blank"
                            className={`
        relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] 
        border-black/[0.7] dark:border-white/70 px-4 py-2 font-semibold
        text-black/[0.7] dark:text-white/70 transition-all duration-300
        
        before:absolute before:inset-0
        before:-z-10 before:translate-x-[150%]
        before:translate-y-[150%] before:scale-[2.5]
        before:rounded-[100%] before:bg-black/[0.7] before:dark:bg-white/70
        before:transition-transform before:duration-700
        before:content-[""]

        hover:text-white hover:dark:text-black/[0.7]
        hover:before:translate-x-[0%]
        hover:before:translate-y-[0%]
        active:scale-95`}
                        >
                            Code
                        </Link>
                    </div>
                </div>

                <Image
                    src={imageUrl}
                    alt="Project I worked on"
                    quality={95}
                    className="absolute hidden sm:block top-12 -right-40 w-[28.25rem] rounded-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
                />
            </section>
        </motion.div>
    );
}
