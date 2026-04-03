"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import styles from "./ProjectsSection.module.css";

const categories = ["Development", "Testing", "Data Analytics", "DevOps"];

const projectsData = [
    {
        title: "E-Commerce Dashboard",
        category: "Development",
        description: "A comprehensive dashboard for managing inventory and sales analytics.",
        tech: ["Next.js", "TypeScript", "PostgreSQL"],
        link: "#"
    },
    {
        title: "Linkedin Apply Bot",
        category: "Development",
        description: "definately not gonna explain this one :)",
        tech: ["Puppeteer", "Typescript", "PostgreSQL"],
        link: "https://github.com/Ketan-Pal/Linked-in-apply-bot"
    },
    {
        title: "Custom - DBMS",
        category: "Development",
        description: "Making my own database management system to understand the inner workings of databases.",
        tech: ["java", "postgresql", "mysql", "oracle", "sqlite"],
        link: "https://github.com/Ketan-Pal/Custom-DBMS"
    },
    {
        title: "Automated Test Suite",
        category: "Testing",
        description: "End-to-end testing framework ensuring 99.9% reliability.",
        tech: ["Cypress", "Jest", "CI/CD"],
        link: "#"
    },
    {
        title: "Sales Data Pipeline",
        category: "Data Analytics",
        description: "Real-time data processing pipeline for sales visualization.",
        tech: ["Python", "Pandas", "Tableau"],
        link: "#"
    },
    {
        title: "Kubernetes Cluster",
        category: "DevOps",
        description: "Scalable infrastructure setup with automated scaling policies.",
        tech: ["K8s", "Docker", "Terraform"],
        link: "#"
    },
    {
        title: "Portfolio 2024",
        category: "Development",
        description: "High-performance personal website with advanced animations.",
        tech: ["Next.js", "Framer Motion"],
        link: "#"
    }
];

export default function ProjectsSection() {
    const [activeCategory, setActiveCategory] = useState("Development");
    const tabContainerRef = useRef<HTMLDivElement>(null);
    const tabRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
    const [indicatorStyle, setIndicatorStyle] = useState<{ left: string; width: string }>({
        left: "0px",
        width: "0px",
    });

    const updateIndicator = useCallback(() => {
        const activeTab = tabRefs.current.get(activeCategory);
        const container = tabContainerRef.current;
        if (activeTab && container) {
            const containerRect = container.getBoundingClientRect();
            const tabRect = activeTab.getBoundingClientRect();
            setIndicatorStyle({
                left: `${tabRect.left - containerRect.left}px`,
                width: `${tabRect.width}px`,
            });
        }
    }, [activeCategory]);

    useEffect(() => {
        updateIndicator();
        window.addEventListener("resize", updateIndicator);
        return () => window.removeEventListener("resize", updateIndicator);
    }, [updateIndicator]);

    const filteredProjects = projectsData.filter(
        (project) => project.category === activeCategory
    );

    return (
        <section className={styles.section} id="projects">
            <div className={styles.container}>

                {/* Sliding Pill Tab Filter */}
                <div className={styles.expertiseWrapper}>
                    <h2 className={styles.expertiseTitle}>My Expertise</h2>
                    <div className={styles.tabContainer} ref={tabContainerRef}>
                        {/* The sliding pill */}
                        <div
                            className={styles.tabIndicator}
                            style={{
                                left: indicatorStyle.left,
                                width: indicatorStyle.width,
                            }}
                        />
                        {categories.map((category) => (
                            <button
                                key={category}
                                ref={(el) => {
                                    if (el) tabRefs.current.set(category, el);
                                }}
                                onClick={() => setActiveCategory(category)}
                                className={`${styles.filterButton} ${activeCategory === category ? styles.active : ""
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.grid} key={activeCategory}>
                    {filteredProjects.map((project, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <span className={styles.categoryTag}>{project.category}</span>
                                <h3 className={styles.title}>{project.title}</h3>
                            </div>
                            <p className={styles.description}>{project.description}</p>
                            <div className={styles.techStack}>
                                {project.tech.map((t) => (
                                    <span key={t} className={styles.tech}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
