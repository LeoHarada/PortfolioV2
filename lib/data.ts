import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Rocco from "@/public/rocco.png";
import LivingLetters from "@/public/livingletters.jpg";
import Ecommerce from "@/public/eccomerce.jpg";
import Blog from "@/public/blog.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Past work",
        location: "Beverly Hills, CA",
        description:
            "I worked as a Sales Manager for two luxury hotels based in Beverly Hills. I gained many skills throughout my experiences; including communication, problem solving, negotiation, time management, teamwork and leadership.",
        icon: React.createElement(CgWorkAlt),
        date: "2018 - 2023",
    },
    {
        title: "Graduated bootcamp",
        location: "Los Angeles, CA",
        description:
            "I graduated after 6 months of studying. I immediately continued my personal studies, building out my projects and porfolio website.",
        icon: React.createElement(LuGraduationCap),
        date: "April - August 2023",
    },
    {
        title: "Front-End Developer",
        location: "Santa Monica, CA",
        description:
            "I started working on my first freelance project for rap artist, Rocco808. I used basic JavaScript, HTML and CSS. Client has a following of 20K fans and has showcased his newly developed website to top talent agencies based in Japan.",
        icon: React.createElement(CgWorkAlt),
        date: "November - December 2023",
    },
    {
        title: "Full-Stack Developer",
        location: "Santa Monica, CA",
        description:
            "My second freelance project was with artist Dulcie Yamanaka. With 40K followers on Instagram, I built her an ecommerce site to sell her first product. I used React, Express.js, Node.js, MongoDB, Tailwind and Stripe.",
        icon: React.createElement(CgWorkAlt),
        date: "December 2023 - January 2024",
    },
    {
        title: "Full-Stack Developer",
        location: "Los Angeles, CA",
        description:
            "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, Node.js, TypeScript, Tailwind, PostgreSQL and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "present",
    },
] as const;

export const projectsData = [
    {
        title: "The Living Letters",
        type: "freelance",
        description:
            "Static ecommerce website for artist Dulcie Yamanaka. Her 40K Instagram followers are able to purchase her coloring book.",
        tags: ["React", "MongdoDB", "Node.js", "Expresss", "Tailwind"],
        imageUrl: LivingLetters,
        liveLink: "https://thelivinglettersart.com/",
        githubLink: "https://github.com/LeoHarada/LivingLetters",
    },
    {
        title: "Rocco808",
        type: "freelance",
        description:
            "Artist website for rapper Rocco808. With over 20K fans, admirers can now feel even closer to their favorite artist.",
        tags: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
        imageUrl: Rocco,
        liveLink: "https://rocco-808.com/",
        githubLink: "https://github.com/LeoHarada/Rocco808v2",
    },
    {
        title: "CoderHeaven Ecommerce",
        type: "project",
        description:
            "Ecommerce website for web developer essentials. Users can purchase, filter and upload products.",
        tags: ["React", "MongdoDB", "Node.js", "Expresss", "Tailwind"],
        imageUrl: Ecommerce,
        liveLink: "https://coder-heaven.vercel.app/",
        githubLink: "https://github.com/LeoHarada/CoderHeaven",
    },
    {
        title: "Personal Blog",
        type: "project",
        description:
            "A public web blog for my coding journey. Sign in through Github OAuth. Users can read, filter and upload articles.",
        tags: ["React", "PostgreSQL", "Next.js", "Prisma", "Tailwind"],
        imageUrl: Blog,
        liveLink: "https://leos-blo.vercel.app/",
        githubLink: "https://github.com/LeoHarada/leos-blo",
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Prisma",
    "Tailwind",
    "MongoDB",
    "Redux",
    "Express",
    "PostgreSQL",
    "Framer Motion",
] as const;
