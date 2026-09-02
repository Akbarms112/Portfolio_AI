"use client";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";

const navLinks = [
  { label: "ABOUT", target: "about" },
  { label: "WORKS", target: "works" },
  { label: "SKILLS", target: "skills" },
  { label: "CONTACT", target: "contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          AKBAR<span className={styles.dot}>.</span>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.navDesktop}>
          {navLinks.map((l) => (
            <button key={l.target} className={styles.navBtn} onClick={() => scrollTo(l.target)}>
              <span className={styles.navBtnText}>{l.label}</span>
            </button>
          ))}
        </nav>

        <div className={styles.right}>
          <div className={styles.statusBox}>
            <span className={styles.statusDot} />
            <span className={styles.statusText}>Available for work</span>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerActive : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`${styles.mobileDrawer} ${menuOpen ? styles.drawerOpen : ""}`}>
        <nav className={styles.mobileNavList}>
          {navLinks.map((l) => (
            <button key={l.target} className={styles.mobileNavBtn} onClick={() => scrollTo(l.target)}>
              <span>{l.label}</span>
              <span className={styles.drawerArrow}>↗</span>
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}
