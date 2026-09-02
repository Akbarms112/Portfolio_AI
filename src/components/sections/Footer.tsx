import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.logo}>AKBAR<span className={styles.dot}>.</span></span>
          <span className={styles.copy}>© 2026 Akbar Ali — AI Engineer &amp; Python Developer.</span>
        </div>
        <span className={styles.location}>📍 Bangalore, India</span>
      </div>
    </footer>
  );
}
