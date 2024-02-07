"use client";
import React from "react";
import SectionHeading from "./sectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "../lib/hooks";

export default function About() {
    const { ref } = useSectionInView("About", 0.2);

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                After a successful career in{" "}
                <span className="font-bold">Luxury Hotel Sales</span>, I decided
                to pursue my passion for programming. I enrolled in a coding
                bootcamp and learned{" "}
                <span className="font-bold">full-stack web development</span>.{" "}
                <span className="italic">My favorite part of programming</span>{" "}
                is the problem-solving aspect. I{" "}
                <span className="underline">love</span> the feeling of finally
                figuring out a solution to a problem. My core stack is{" "}
                <span className="font-bold">
                    React, Next.js, Node.js, MongoDB, Tailwind
                </span>
                . I am also familiar with{" "}
                <span className="font-bold">TypeScript and PostgreSQL</span>. I
                am always looking to learn new technologies. I am currently
                looking for a{" "}
                <span className="font-bold">full-time position</span> as a
                software developer.
            </p>

            <p>
                <span className="italic">When I'm not coding</span>, I enjoy
                playing video games, taking boxing classes, and watching NBA
                games. I love <span className="font-bold">staying active</span>
                as a former{" "}
                <span className="font-bold">Division 1 Athlete</span> at{" "}
                <span className="font-bold">
                    University of California, Irvine
                </span>
                .
            </p>
        </motion.section>
    );
}
