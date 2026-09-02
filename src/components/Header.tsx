"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";

const navLinks = [
  { label: "ABOUT", path: "/#about", isHash: true, target: "about" },
  { label: "EXPERIENCE", path: "/experience", isHash: false },
  { label: "PROJECTS", path: "/#works", isHash: true, target: "works" },
  { label: "SKILLS", path: "/#skills", isHash: true, target: "skills" },
  { label: "CONTACT", path: "/#contact", isHash: true, target: "contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);

    // Default to "dark" unless explicitly saved as "light" by user toggle
    const saved = localStorage.getItem("portfolio_theme");
    const activeTheme = saved === "light" ? "light" : "dark";
    setTheme(activeTheme);
    document.documentElement.setAttribute("data-theme", activeTheme);

    return () => window.removeEventListener("scroll", handler);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("portfolio_theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  const handleNavClick = (link: typeof navLinks[0]) => {
    setMenuOpen(false);
    if (link.isHash && pathname === "/") {
      document.getElementById(link.target!)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <Link href="/" className={styles.logo}>
          AKBAR<span className={styles.dot}>.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.navDesktop}>
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.path}
              className={styles.navBtn}
              onClick={() => handleNavClick(l)}
            >
              <span className={styles.navBtnText}>{l.label}</span>
            </Link>
          ))}
        </nav>

        <div className={styles.right}>
          {/* Theme Switcher Toggle */}
          <button
            onClick={toggleTheme}
            className={styles.themeToggleBtn}
            aria-label="Toggle Theme Mode"
            title={`Switch to ${theme === "dark" ? "Light" : "Dark Cyber"} Mode`}
          >
            {theme === "dark" ? (
              <span className={styles.themeIcon}>☀️ LIGHT</span>
            ) : (
              <span className={styles.themeIcon}>🌙 DARK</span>
            )}
          </button>

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
            <Link
              key={l.label}
              href={l.path}
              className={styles.mobileNavBtn}
              onClick={() => handleNavClick(l)}
            >
              <span>{l.label}</span>
              <span className={styles.drawerArrow}>↗</span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
