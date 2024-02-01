"use client";
import React, { useEffect, useState } from "react";
import { useAnimate } from "framer-motion";

export default function Hero() {
    const [scope, animate] = useAnimate();

    const [size, setSize] = useState({ columns: 0, rows: 0 });

    useEffect(() => {
        generateGridCount();
        window.addEventListener("resize", generateGridCount);

        return () => window.removeEventListener("resize", generateGridCount);
    }, []);

    const generateGridCount = () => {
        const columns = Math.floor(document.body.clientWidth / 175);
        const rows = Math.floor(document.body.clientHeight / 175);

        setSize({
            columns,
            rows,
        });
    };

    const handleMouseLeave = (e) => {
        // @ts-ignore
        const id = `#${e.target.id}`;
        animate(
            id,
            { background: "rgba(129, 140, 248, 0)" },
            { duration: 1.5 }
        );
    };

    const handleMouseEnter = (e) => {
        // @ts-ignore
        const id = `#${e.target.id}`;
        animate(
            id,
            { background: "rgba(129, 140, 248, 1)" },
            { duration: 0.15 }
        );
    };

    return (
        <section className="bg-neutral-950 relative">
            <div
                ref={scope}
                className="grid h-screen w-full grid-cols-[repeat(auto-fit,_minmax(75px,_1fr))] grid-rows-[repeat(auto-fit,_minmax(75px,_1fr))]"
            >
                {[...Array(size.rows * size.columns)].map((_, i) => (
                    <div
                        key={i}
                        id={`square-${i}`}
                        onMouseLeave={handleMouseLeave}
                        onMouseEnter={handleMouseEnter}
                        className="h-full w-full border-[1px] border-neutral-900"
                    />
                ))}
            </div>
            <div className="pointer-events-none absolute top-0 right-0 left-0 bottom-0 flex flex-col items-center justify-center p-8">
                <h1 className="text-center text-7xl font-black uppercase text-white sm:text-8xl md:text-9xl">
                    Leo Harada
                </h1>
                <h3 className="text-center text-2xl font-black text-white sm:text-3xl md:text-4xl">
                    Frontend Developer
                </h3>
                <p className="mb-6 mt-4 max-w-3xl text-center text-lg font-light text-neutral-400 md:text-xl">
                    Welcome to my World of Innovative and Interactive Web
                    Creations.
                </p>
            </div>
        </section>
    );
}
