"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import styles from "./ProjectsSection.module.css";

const categories = ["Development", "Testing", "Data Analytics", "DevOps"];

const projectsData = [
    // ---- Development ----
    {
        title: "Consumer Consent Service",
        category: "Development",
        description:
            "Modernized legacy Java 8 codebase to newer Java version. Migrated database from MongoDB to PostgreSQL ensuring stable production rollout with SLA-compliant performance.",
        tech: ["Java", "Spring Boot", "PostgreSQL", "MongoDB"],
        link: "#",
    },
    {
        title: "MY Data — GDPR Compliance",
        category: "Development",
        description:
            "Resolved high-severity production vulnerability within 48 hours. Built in-house catalog portal with cross-project integration, replacing manual Excel-based processes.",
        tech: ["Java", "Spring Boot", "Microservices"],
        link: "#",
    },
    {
        title: "Linkedin Apply Bot",
        category: "Development",
        description: "definately not gonna explain this one :)",
        tech: ["Puppeteer", "TypeScript", "PostgreSQL"],
        link: "https://github.com/Ketan-Pal/Linked-in-apply-bot",
    },
    {
        title: "Custom - DBMS",
        category: "Development",
        description:
            "Making my own database management system to understand the inner workings of databases.",
        tech: ["Java", "PostgreSQL", "MySQL", "Oracle", "SQLite"],
        link: "https://github.com/Ketan-Pal/Custom-DBMS",
    },
    {
        title: "Portfolio 2026",
        category: "Development",
        description:
            "High-performance personal website with dual theme system, glassmorphism effects, and scroll animations.",
        tech: ["Next.js", "TypeScript", "CSS Modules"],
        link: "#",
    },

    // ---- Testing ----
    {
        title: "Automated Test Suite",
        category: "Testing",
        description:
            "End-to-end testing framework ensuring 99.9% reliability across microservices with comprehensive test coverage.",
        tech: ["JUnit", "TestNG", "Selenium", "CI/CD"],
        link: "#",
    },
    {
        title: "Security Vulnerability Resolution",
        category: "Testing",
        description:
            "Identified and resolved critical production security vulnerabilities. Completed full development and testing cycle within 48 hours of identification.",
        tech: ["Checkmarx", "Blackduck", "SonarQube"],
        link: "#",
    },

    // ---- Data Analytics ----
    {
        title: "Data Retention Automation",
        category: "Data Analytics",
        description:
            "Created data retention policy batch jobs to ensure policy-compliant lifecycle management of sensitive consumer data.",
        tech: ["Java", "Spring Batch", "PostgreSQL"],
        link: "#",
    },
    {
        title: "Data Modeling & Migration",
        category: "Data Analytics",
        description:
            "Converted unstructured MongoDB data into relational tables to improve integrity, queryability, and reporting capabilities.",
        tech: ["PostgreSQL", "SQL", "Data Modeling"],
        link: "#",
    },

    // ---- DevOps ----
    {
        title: "CI/CD Pipeline",
        category: "DevOps",
        description:
            "Configured and maintained continuous integration and deployment pipelines for microservices architecture with automated quality gates.",
        tech: ["Jenkins", "Cloud Foundry", "Maven"],
        link: "#",
    },
    {
        title: "Code Quality & Security",
        category: "DevOps",
        description:
            "Integrated static analysis and security scanning tools into the development workflow, maintaining code quality standards across teams.",
        tech: ["SonarQube", "Blackduck", "Checkmarx", "Git"],
        link: "#",
    },
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
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Sliding Pill Tab Filter */}
                <div className={styles.expertiseWrapper}>
                    <h2 className={styles.expertiseTitle}>My Expertise</h2>
                    <div className={styles.tabContainer} ref={tabContainerRef}>
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
                                className={`${styles.filterButton} ${
                                    activeCategory === category ? styles.active : ""
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
