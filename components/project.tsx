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
            <section className="bg-[#F5F5F5] max-w-[42rem] border border-[#d4d4d4] dark:border-[#5b5b5b2e] rounded-lg overflow-hidden relative sm:h-[23rem] hover:bg-[#F0F0F0] transition sm:group-even:pl-8 dark:bg-[#171717] dark:hover:bg-[#383838]">
                <div className="pt-4 pb-7 px-5 sm:pl-6 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem] gap-2 items-center justify-center">
                    <h3 className="text-2xl font-semibold text-center">
                        {title}
                    </h3>
                    <p className="text-md italic -mt-3 text-center">{type}</p>
                    <p className="leading-relaxed text-center">{description}</p>
                    <ul className="flex flex-wrap gap-2 justify-center">
                        {tags.map((tag, index) => (
                            <li
                                className="bg-black px-2 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
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
                            className="link-button"
                        >
                            Live
                        </Link>
                        <Link
                            href={githubLink}
                            target="_blank"
                            className="link-button"
                        >
                            Code
                        </Link>
                    </div>
                </div>

                <Image
                    src={imageUrl}
                    alt="Project I worked on"
                    quality={95}
                    className="project-images"
                />
            </section>
        </motion.div>
    );
}
