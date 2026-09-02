"use client";
import styles from "./Experience.module.css";

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  current?: boolean;
  tagline: string;
  bullets: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Junior Consultant – AI Engineer",
    company: "@ Smilodata (Hosur)",
    period: "Nov 2025 – Present",
    current: true,
    tagline: "Architecting real-time WebRTC voice agents, autonomous RAG pipelines, and multi-agent AI platforms.",
    bullets: [
      "Built multi-agent AI voice platform on Pipecat framework with sub-2s WebRTC voice communication",
      "Architected enterprise RAG pipelines using Qdrant vector DB & Cloudflare R2 object storage for context retrieval",
      "Integrated Composio for external tool automation & third-party application actions during live agent calls",
      "Built document ingestion and preprocessing pipelines to clean and index unstructured enterprise data",
      "Developed FastAPI backend and React.js frontend for agent management and no-code voice bot builder"
    ],
    skills: ["Python", "FastAPI", "Pipecat", "WebRTC", "Qdrant", "LangGraph", "Composio", "Cloudflare R2", "PostgreSQL", "React.js"]
  },
  {
    id: 2,
    role: "Intern – Software Engineer",
    company: "@ Smilodata (Remote)",
    period: "Jul 2025 – Oct 2025",
    current: false,
    tagline: "Built client-facing UI dashboards and REST API integrations for AI ticketing platforms.",
    bullets: [
      "Built responsive UI components for enterprise AI ticketing & customer support platform in React.js",
      "Integrated REST APIs for real-time frontend-backend data synchronization & live status feeds",
      "Led server deployment — handled environment setup, infrastructure configuration, and go-live on AWS"
    ],
    skills: ["React.js", "JavaScript", "REST APIs", "HTML5/CSS3", "Node.js", "AWS"]
  },
  {
    id: 3,
    role: "B.Tech in Information Technology",
    company: "@ RP Sarathy Institute of Tech (CGPA 8.01)",
    period: "2021 – 2025",
    current: false,
    tagline: "Core specialization in Software Engineering, Data Structures, Web Applications, and AI.",
    bullets: [
      "Graduated with CGPA 8.01 in Information Technology",
      "🏆 Winner of Mini Hackathon at Bannari Amman Institute of Technology for Chit Fund Web Application",
      "Built full-stack PHP/MySQL financial ledger web applications and algorithmic solutions"
    ],
    skills: ["Python", "Java", "Data Structures", "MySQL", "Web Development", "PHP"]
  }
];

export default function Experience() {
  return (
    <section className={styles.experience} id="experience">
      {/* Background Particle Mesh Grid */}
      <div className={styles.particleBg} />

      {/* Header */}
      <div className={`${styles.header} reveal-up`}>
        <div className={styles.totalExpBadge}>
          Professional Career Timeline &amp; Roles
        </div>
        <h2 className="section-title">EXPERIENCE &amp; JOURNEY</h2>
        <p className={styles.subtitle}>
          A detailed timeline of my professional engineering roles, industry impact, and key technical achievements.
        </p>
      </div>

      {/* Timeline Container */}
      <div className={styles.timelineWrap}>
        {/* Central Vertical Spine Line */}
        <div className={styles.timelineSpine} />

        {/* Timeline Items */}
        <div className={styles.itemsList}>
          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={exp.id}
                className={`${styles.timelineRow} ${isEven ? styles.rowLeft : styles.rowRight}`}
              >
                {/* Connecting Node Dot on Spine */}
                <div className={styles.nodeDot}>
                  <div className={styles.nodeInner} />
                </div>

                {/* Timeline Glass Card */}
                <div className={`${styles.card} ${exp.current ? styles.currentCard : ""} reveal-scale`}>
                  {exp.current && <span className={styles.currentBadge}>CURRENT</span>}

                  <h3 className={styles.roleTitle}>{exp.role}</h3>
                  <div className={styles.companyMeta}>
                    <span className={styles.companyName}>{exp.company}</span>
                    <span className={styles.periodText}>{exp.period}</span>
                  </div>

                  <p className={styles.tagline}>{exp.tagline}</p>

                  {/* Accomplishment Bullets */}
                  <ul className={styles.bulletList}>
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className={styles.bulletItem}>
                        <span className={styles.checkIcon}>✓</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skill Pill Badges */}
                  <div className={styles.skillsRow}>
                    {exp.skills.map((skill) => (
                      <span key={skill} className={styles.skillPill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
