import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/sectionDivider";
import Skills from "@/components/skills";
import Hero from "@/components/hero";

export default function Home() {
    return (
        <>
            <Hero />
            <main className="flex flex-col items-center px-4 pt-32">
                <Intro />
                <SectionDivider />
                <About />
                <Projects />
                <Skills />
                <Experience />
                <Contact />
            </main>
        </>
    );
}
