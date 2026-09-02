"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projects } from "@/data/projects";
import { getAssetPath } from "@/utils/basePath";
import styles from "./Works.module.css";

export default function Works() {
  const [active, setActive] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const switchProject = (newIdx: number) => {
    if (newIdx === active || isSpinning || newIdx < 0 || newIdx >= projects.length) return;
    setIsSpinning(true);

    setTimeout(() => {
      setActive(newIdx);
    }, 300);

    setTimeout(() => {
      setIsSpinning(false);
    }, 650);
  };

  const p = projects[active];

  const collabs = [
    "SMILODATA", "·", "LANGGRAPH", "·", "QDRANT CLOUD", "·", "HUGGING FACE", "·", 
    "FASTAPI", "·", "NANGO MCP", "·", "AWS", "·", "PIPECAT WEBRTC", "·", 
    "VERCEL", "·", "REDIS", "·", "MONGODB", "·"
  ];

  return (
    <section className={styles.works} id="works">
      {/* Collab / Ecosystem Strip */}
      <div className={`${styles.collabStrip} reveal-up`}>
        <div className={styles.collabLabel}>PRODUCTION PLATFORMS &amp; ECOSYSTEMS</div>
        <div className="marquee-wrap">
          <div className={`marquee-track ${styles.collabTrack}`}>
            {collabs.map((c, i) => (
              <span key={i} className={styles.collabName}>{c}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Header */}
      <div className={`${styles.header} reveal-up delay-100`}>
        <h2 className={styles.sectionTitle}>PROJECTS</h2>
        <p className={styles.subtitle}>
          A curated selection of production Generative AI, RAG architectures, and Voice AI platforms.
        </p>
      </div>

      {/* Main Showcase Grid */}
      <div className={styles.showcase}>
        {/* Left Project Selector Sidebar */}
        <div className={styles.sidebarTrack}>
          {projects.map((proj, i) => {
            const isActive = i === active;

            return (
              <button
                key={proj.id}
                className={`${styles.thumbItem} ${isActive ? styles.thumbActive : ""}`}
                onClick={() => switchProject(i)}
              >
                <span className={styles.thumbNum}>{proj.num}.</span>
                <span className={styles.thumbImgWrap}>
                  <Image src={getAssetPath(proj.img)} alt={proj.title} fill style={{ objectFit: "cover" }} />
                </span>
                <span className={styles.thumbTitle}>{proj.title}</span>
                {isActive && <span className={styles.activeIndicator}>›</span>}
              </button>
            );
          })}
        </div>

        {/* Center Cyberpunk Card Area */}
        <div className={styles.centerArea}>
          {/* Dynamic Aura Energy Cloud */}
          <div
            className={`${styles.auraCloud} ${isSpinning ? styles.auraSpinPulse : ""}`}
            style={{
              background: `radial-gradient(circle 280px at 50% 50%, ${p.glowColor} 0%, rgba(6,6,8,0) 80%)`,
            }}
          />

          {/* Floating Particle Orbs */}
          <div className={styles.particleField}>
            <div className={`${styles.particle} ${styles.p1}`} style={{ borderColor: p.cornerColor }} />
            <div className={`${styles.particle} ${styles.p2}`} style={{ borderColor: p.cornerColor }} />
            <div className={`${styles.particle} ${styles.p3}`} style={{ borderColor: p.cornerColor }} />
          </div>

          <Link href={`/projects/${p.slug}`} className={styles.cardLink} title="Click for Full Case Study Page">
            <div
              className={`${styles.cyberCard} ${isSpinning ? styles.spinActive : ""}`}
              style={{ borderColor: p.cornerColor }}
              data-tilt
            >
              {/* HUD Brackets */}
              <div className={styles.hudCorners}>
                <div className={`${styles.fc} ${styles.tl}`} style={{ borderColor: p.cornerColor }} />
                <div className={`${styles.fc} ${styles.tr}`} style={{ borderColor: p.cornerColor }} />
                <div className={`${styles.fc} ${styles.bl}`} style={{ borderColor: p.cornerColor }} />
                <div className={`${styles.fc} ${styles.br}`} style={{ borderColor: p.cornerColor }} />
              </div>

              {/* Card Image */}
              <div className={styles.cardImgContainer}>
                <Image
                  src={getAssetPath(p.img)}
                  alt={p.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className={styles.mainCardImg}
                  priority
                />
                <div className={styles.cardScanlines} />
              </div>

              {/* Card Label */}
              <div className={styles.cardFooterLabel}>
                <span>{p.title}</span>
                <span className={styles.arrowIcon}>↗</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Right Info Panel */}
        <div className={`${styles.infoPanel} ${isSpinning ? styles.infoFade : ""}`}>
          <div className={styles.infoHeaderTag}>PROJECT INFO</div>
          <h3 className={styles.projectMainTitle}>{p.title}</h3>
          <p className={styles.infoDescText}>{p.desc}</p>

          <div className={styles.metaTable}>
            <div className={styles.metaRow}>
              <span className={styles.metaKey}>YEAR</span>
              <span className={styles.metaVal}>{p.year}</span>
            </div>
            <div className={styles.metaRow}>
              <span className={styles.metaKey}>TYPE</span>
              <span className={styles.metaVal}>{p.type}</span>
            </div>
            <div className={styles.metaRow}>
              <span className={styles.metaKey}>STACK</span>
              <span className={styles.metaVal}>{p.stack.join(" · ")}</span>
            </div>
          </div>

          <div className={styles.actionRow}>
            <Link
              href={`/projects/${p.slug}`}
              className="btn-outline"
              style={{ background: "var(--white)", color: "var(--bg)", fontWeight: 700 }}
            >
              FULL CASE STUDY ↗
            </Link>
            {p.live ? (
              <a href={p.live} className="btn-ghost" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent3)", fontWeight: 600 }}>
                LIVE DEMO ↗
              </a>
            ) : p.github ? (
              <a href={p.github} className="btn-ghost" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent3)", fontWeight: 600 }}>
                GITHUB ↗
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
