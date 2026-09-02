import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { getAssetPath } from "@/utils/basePath";
import CustomCursor from "@/components/ui/CustomCursor";
import GrainOverlay from "@/components/ui/GrainOverlay";
import styles from "./page.module.css";

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className={styles.pageWrap}>
      <GrainOverlay />
      <CustomCursor />

      {/* Top Header Bar */}
      <header className={styles.headerBar}>
        <Link href="/#works" className={styles.backBtn}>
          ← BACK TO WORKS
        </Link>
        <Link href="/" className={styles.headerLogo}>
          AKBAR<span className={styles.dot}>.</span>
        </Link>
      </header>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroInner}>
          <div className={styles.badgeRow}>
            <span className={styles.numBadge}>{project.num}</span>
            <span className={styles.typeBadge}>{project.type}</span>
            <span className={styles.yearBadge}>{project.year}</span>
          </div>

          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.subtitle}>{project.subtitle}</p>

          <div className={styles.stackTags}>
            {project.stack.map((tech) => (
              <span key={tech} className="skill-tag">
                {tech}
              </span>
            ))}
          </div>

          <div className={styles.actionBtns}>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ background: "var(--white)", color: "var(--bg)", fontWeight: 700 }}
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
                GITHUB REPOSITORY ↗
              </a>
            )}
          </div>
        </div>

        {/* Project Mockup Banner */}
        <div className={styles.imageWrap}>
          <div
            className={styles.imageGlow}
            style={{ background: project.glowColor }}
          />
          <Image
            src={getAssetPath(project.img)}
            alt={project.title}
            fill
            style={{ objectFit: "cover" }}
            className={styles.bannerImg}
            priority
          />
          <div className={styles.scanline} />
        </div>
      </section>

      {/* Main Content Details */}
      <section className={styles.contentSection}>
        {/* Full Overview */}
        <div className={styles.sectionInner}>
          <div className={styles.columnLeft}>
            <h3 className={styles.sectionHeader}>PROJECT OVERVIEW</h3>
          </div>
          <div className={styles.columnRight}>
            <p className={styles.overviewText}>{project.fullOverview}</p>
          </div>
        </div>

        {/* Key Technical Highlights */}
        <div className={styles.sectionInner}>
          <div className={styles.columnLeft}>
            <h3 className={styles.sectionHeader}>TECHNICAL HIGHLIGHTS</h3>
          </div>
          <div className={styles.columnRight}>
            <ul className={styles.bulletList}>
              {project.bullets.map((bullet, idx) => (
                <li key={idx} className={styles.bulletItem}>
                  <span className={styles.bulletDot}>✦</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* System Features */}
        {project.features && (
          <div className={styles.sectionInner}>
            <div className={styles.columnLeft}>
              <h3 className={styles.sectionHeader}>SYSTEM FEATURES</h3>
            </div>
            <div className={styles.columnRight}>
              <div className={styles.featureGrid}>
                {project.features.map((feat, idx) => (
                  <div key={idx} className={styles.featureCard}>
                    <h4 className={styles.featTitle}>{feat.title}</h4>
                    <p className={styles.featDesc}>{feat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* System Achievements */}
        {project.achievements && (
          <div className={styles.sectionInner}>
            <div className={styles.columnLeft}>
              <h3 className={styles.sectionHeader}>KEY DELIVERABLES</h3>
            </div>
            <div className={styles.columnRight}>
              <div className={styles.achieveGrid}>
                {project.achievements.map((ach, idx) => (
                  <div key={idx} className={styles.achieveCard}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>{ach}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Project Navigation Footer */}
      <section className={styles.projectFooter}>
        <div className={styles.footerInner}>
          <Link href={`/projects/${prevProject.slug}`} className={styles.navLinkPrev}>
            <span className={styles.navSub}>← PREVIOUS PROJECT</span>
            <span className={styles.navTitle}>{prevProject.title}</span>
          </Link>

          <Link href={`/projects/${nextProject.slug}`} className={styles.navLinkNext}>
            <span className={styles.navSub}>NEXT PROJECT →</span>
            <span className={styles.navTitle}>{nextProject.title}</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
