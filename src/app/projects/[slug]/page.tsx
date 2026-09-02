import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import GrainOverlay from "@/components/ui/GrainOverlay";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollObserver from "@/components/ui/ScrollObserver";
import styles from "./page.module.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: PageProps) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className={styles.pageWrap}>
      <ScrollObserver />
      <GrainOverlay />
      <CustomCursor />

      {/* Header Bar */}
      <header className={styles.headerBar}>
        <Link href="/#works" className={styles.backBtn}>
          ← BACK TO PROJECTS
        </Link>
        <div className={styles.headerLogo}>
          AKBAR<span className={styles.dot}>.</span>
        </div>
      </header>

      {/* Project Hero Banner */}
      <section className={styles.heroSection}>
        <div className={styles.heroInner}>
          <div className={`${styles.badgeRow} reveal-up`}>
            <span className={styles.numBadge}>{project.num}</span>
            <span className={styles.typeBadge}>{project.type}</span>
            <span className={styles.yearBadge}>{project.year}</span>
          </div>

          <h1 className={`${styles.title} reveal-up delay-100`}>{project.title}</h1>
          <p className={`${styles.subtitle} reveal-up delay-200`}>{project.subtitle}</p>

          <div className={`${styles.stackTags} reveal-up delay-300`}>
            {project.stack.map((tech) => (
              <span key={tech} className="skill-tag">
                {tech}
              </span>
            ))}
          </div>

          <div className={`${styles.actionBtns} reveal-up delay-400`}>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ background: "var(--white)", color: "var(--bg)", fontWeight: 600 }}
              >
                LIVE DEMO ↗
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                VIEW GITHUB REPO ↗
              </a>
            )}
          </div>
        </div>

        {/* Project Feature Banner Image */}
        <div className={`${styles.imageWrap} reveal-scale delay-200`} style={{ borderColor: project.cornerColor + "55" }}>
          <div className={styles.imageGlow} style={{ background: project.glowColor }} />
          <Image
            src={project.img}
            alt={project.title}
            fill
            priority
            style={{ objectFit: "cover" }}
            className={styles.bannerImg}
          />
          <div className={styles.scanline} />
        </div>
      </section>

      {/* Deep Overview */}
      <section className={styles.contentSection}>
        <div className={`${styles.sectionInner} reveal-up`}>
          <div className={styles.columnLeft}>
            <h2 className={styles.sectionHeader}>FULL OVERVIEW</h2>
          </div>
          <div className={styles.columnRight}>
            <p className={styles.overviewText}>{project.fullOverview}</p>
          </div>
        </div>

        {/* Technical Highlights / Bullets */}
        <div className={`${styles.sectionInner} reveal-up`} style={{ marginTop: "4rem" }}>
          <div className={styles.columnLeft}>
            <h2 className={styles.sectionHeader}>KEY TECHNICAL HIGHLIGHTS</h2>
          </div>
          <div className={styles.columnRight}>
            <ul className={styles.bulletList}>
              {project.bullets.map((bullet, idx) => (
                <li key={idx} className={styles.bulletItem}>
                  <span className={styles.bulletDot}>▹</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Core Features Cards */}
        {project.features && project.features.length > 0 && (
          <div className={`${styles.sectionInner} reveal-up`} style={{ marginTop: "5rem" }}>
            <div className={styles.columnLeft}>
              <h2 className={styles.sectionHeader}>CORE ARCHITECTURE FEATURES</h2>
            </div>
            <div className={styles.columnRight}>
              <div className={styles.featureGrid}>
                {project.features.map((feat, i) => (
                  <div key={i} className={`${styles.featureCard} reveal-scale delay-${(i % 2 + 1) * 100}`}>
                    <h3 className={styles.featTitle}>{feat.title}</h3>
                    <p className={styles.featDesc}>{feat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Architecture Details */}
        {project.architecture && (
          <div className={`${styles.sectionInner} reveal-up`} style={{ marginTop: "5rem" }}>
            <div className={styles.columnLeft}>
              <h2 className={styles.sectionHeader}>SYSTEM ARCHITECTURE</h2>
            </div>
            <div className={styles.columnRight}>
              <div className={styles.archBox}>
                <p className={styles.archSummary}>{project.architecture.summary}</p>
                <ul className={styles.archList}>
                  {project.architecture.points.map((pt, i) => (
                    <li key={i} className={styles.archPoint}>
                      <span className={styles.archIcon}>⚡</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Achievements */}
        {project.achievements && project.achievements.length > 0 && (
          <div className={`${styles.sectionInner} reveal-up`} style={{ marginTop: "5rem" }}>
            <div className={styles.columnLeft}>
              <h2 className={styles.sectionHeader}>KEY ACHIEVEMENTS</h2>
            </div>
            <div className={styles.columnRight}>
              <div className={styles.achieveGrid}>
                {project.achievements.map((ach, i) => (
                  <div key={i} className={`${styles.achieveCard} reveal-up delay-${(i + 1) * 100}`}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>{ach}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Bottom Next/Prev Navigation */}
      <footer className={`${styles.projectFooter} reveal-up`}>
        <div className={styles.footerInner}>
          <Link href={`/projects/${prevProject.slug}`} className={styles.navLinkPrev}>
            <span className={styles.navSub}>PREVIOUS PROJECT</span>
            <span className={styles.navTitle}>← {prevProject.title}</span>
          </Link>
          <Link href={`/projects/${nextProject.slug}`} className={styles.navLinkNext}>
            <span className={styles.navSub}>NEXT PROJECT</span>
            <span className={styles.navTitle}>{nextProject.title} →</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}
