"use client";

import { useTheme } from "./ThemeProvider";
import { FaSun, FaMoon, FaDownload } from "react-icons/fa";
import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
            <div className={styles.inner}>
                <a href="#home" className={styles.logo}>
                    KP
                </a>

                <div className={styles.links}>
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className={styles.link}>
                            {link.label}
                        </a>
                    ))}
                    <a href="/Ketan_Pal_Resume.pdf" download="Ketan_Pal_Resume.pdf" className={styles.resumeButton}>
                        <span>Resume</span>
                        <FaDownload size={12} />
                    </a>
                </div>

                <button
                    onClick={toggleTheme}
                    className={styles.themeToggle}
                    aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                >
                    <span className={styles.toggleIcon}>
                        {theme === "dark" ? <FaSun size={16} /> : <FaMoon size={16} />}
                    </span>
                </button>
            </div>
        </nav>
    );
}
