import Header from "@/components/Header";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/sections/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import GrainOverlay from "@/components/ui/GrainOverlay";
import ScrollObserver from "@/components/ui/ScrollObserver";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Experience & Journey | Akbar Ali - AI Engineer",
  description: "Detailed professional experience, career roles, and technical achievements of Akbar Ali.",
};

export default function ExperiencePage() {
  return (
    <>
      <ScrollObserver />
      <GrainOverlay />
      <CustomCursor />
      <Header />
      <main className={styles.pageWrap}>
        <div className={styles.topBar}>
          <Link href="/" className={styles.backBtn}>
            ← BACK TO HOME
          </Link>
        </div>
        <Experience />
      </main>
      <Footer />
    </>
  );
}
