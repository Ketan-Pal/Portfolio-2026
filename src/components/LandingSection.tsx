import Image from "next/image";
import styles from "./LandingSection.module.css";

export default function LandingSection() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.name}>Ketan</h1>
                <p className={styles.summary}>
                    Software Engineer specializing in scalable web applications and efficient frontend solutions.
                </p>
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
        </section>
    );
}
