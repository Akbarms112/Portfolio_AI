"use client";
import { useEffect, useRef } from "react";
import styles from "./Skills.module.css";

const skills = [
  { cat: "AI & GENERATIVE AI", tags: ["LLMs", "RAG Pipelines", "LangGraph", "Transformer Architectures", "Prompt Engineering", "Embeddings", "MCP (Model Context Protocol)"] },
  { cat: "VOICE AI & WEBRTC", tags: ["STT & TTS Pipelines", "VAD (Voice Activity)", "Pipecat", "WebRTC Audio", "Multilingual Voice AI (Tamil, English, Hindi, Telugu)"] },
  { cat: "PYTHON & BACKEND", tags: ["Python", "FastAPI", "Hugging Face", "REST APIs", "Composio API", "OOP", "Data Structures"] },
  { cat: "DATABASES & CLOUD", tags: ["Qdrant (Vector DB)", "PostgreSQL", "MongoDB", "Redis", "Cloudflare R2", "AWS", "RunPod", "Docker", "Vercel"] },
];

const stats = [
  { num: 10, suffix: "+", label: "AI Models & Agents" },
  { num: 2, suffix: "s", label: "Sub-2s Voice Latency" },
  { num: 20, suffix: "+", label: "MCP Tools Integrated" },
  { num: 100, suffix: "%", label: "Commitment" },
];

export default function Skills() {
  const statRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const countObs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          stats.forEach((s, i) => {
            const el = statRefs.current[i];
            if (!el) return;
            const start = performance.now();
            const update = (now: number) => {
              const t = Math.min((now - start) / 1800, 1);
              const eased = 1 - Math.pow(1 - t, 3);
              el.textContent = String(Math.floor(eased * s.num));
              if (t < 1) requestAnimationFrame(update);
              else el.textContent = String(s.num);
            };
            requestAnimationFrame(update);
          });
        }
      });
    }, { threshold: 0.5 });

    if (sectionRef.current) countObs.observe(sectionRef.current);
    return () => { countObs.disconnect(); };
  }, []);

  return (
    <section className={styles.skills} id="skills">
      <div className={styles.inner}>
        <div className={`${styles.header} reveal-up`}>
          <h2 className="section-title">TECH STACK</h2>
          <p className={styles.subtitle}>Generative AI frameworks, backend infrastructure, and tools I engineer with.</p>
        </div>
        <div className={styles.grid}>
          {skills.map((s, idx) => (
            <div key={s.cat} className={`${styles.category} reveal-up delay-${(idx + 1) * 100}`}>
              <div className={styles.catLabel}>{s.cat}</div>
              <div className={styles.tags}>
                {s.tags.map((t) => <span key={t} className="skill-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
        <div className={`${styles.statsRow} reveal-scale delay-300`} ref={sectionRef}>
          {stats.map((s, i) => (
            <div key={s.label} className={styles.statItem}>
              <div className={styles.statNum}>
                {s.label.includes("Sub-2s") && <span style={{fontSize:"1.8rem",marginRight:"2px"}}>&lt;</span>}
                <span ref={(el) => { statRefs.current[i] = el; }}>0</span>
                <span className={styles.statSuffix}>{s.suffix}</span>
              </div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
