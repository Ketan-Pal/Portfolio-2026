import { FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";
import styles from "./LandingSection.module.css";

export default function LandingSection() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.name}>Ketan Pal</h1>
                <p className={styles.summary}>
                    Software Engineer specializing in scalable web applications and efficient frontend solutions.
                </p>

                <div className={styles.socialContainer}>
                    <a
                        href="https://www.linkedin.com/in/ketan-pal/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin size={30} />
                    </a>
                    <a
                        href="https://github.com/Ketan-Pal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                        aria-label="GitHub"
                    >
                        <FaGithub size={30} />
                    </a>
                </div>
            </div>
            <div className={styles.imageWrapper}>
                <div className={styles.imageContainer}>
                    <Image
                        src="/hero.jpeg"
                        alt="Software Engineer"
                        width={600}
                        height={600}
                        className={styles.heroImage}
                        priority
                    />
                </div>
            </div>
        </section >
    );
}
