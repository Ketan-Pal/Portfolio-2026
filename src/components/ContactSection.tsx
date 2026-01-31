import styles from "./ContactSection.module.css";

export default function ContactSection() {
    return (
        <section className={styles.section} id="contact">
            <div className={styles.container}>
                <h2 className={styles.heading}>Let&apos;s Connect</h2>
                <p className={styles.text}>
                    Open for opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                </p>
                <a href="mailto:ketanpal2002@gmail.com" className={styles.button}>
                    Say Hello
                </a>
            </div>
        </section>
    );
}
