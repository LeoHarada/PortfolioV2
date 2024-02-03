import { Metadata } from "next";
import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/activeSectionContext";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/switchTheme";
import ThemeContextProvider from "@/context/contextTheme";
import { Toaster } from "react-hot-toast";
import FloatingNav from "@/components/floatNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Leo Harada | Personal Portfolio",
    description:
        "Leo Harada is a full-stack software engineer with a focus on front-end development.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="!scroll-smooth">
            <body
                className={`${inter.className} bg-gray-50 text-gray-950 relative dark:bg-neutral-950 dark:text-gray-50 dark:text-opacity-90`}
            >
                <ThemeContextProvider>
                    <ActiveSectionContextProvider>
                        <FloatingNav />
                        <Header />
                        {children}
                        <Footer />

                        <Toaster position="top-right" />
                        <ThemeSwitch />
                    </ActiveSectionContextProvider>
                </ThemeContextProvider>
            </body>
        </html>
    );
}
