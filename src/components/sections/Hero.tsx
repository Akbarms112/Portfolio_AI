"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { getAssetPath } from "@/utils/basePath";
import styles from "./Hero.module.css";

const WORDS_DEFAULT = ["VOICE AI", "RAG AGENTS", "LLM PIPELINES", "GEN AI PLATFORMS", "FASTAPI APIs"];
const WORDS_HOVER = ["OUT OF LIMITS", "BEYOND BOUNDARIES", "NEXT-GEN REASONING", "ULTRA LOW LATENCY"];
const CHARS = "01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*<>/\\|{}[]";

const socials = [
  {
    label: "Email", href: "mailto:akbarms112@gmail.com",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
  },
  {
    label: "GitHub", href: "https://github.com/Akbarms112", target: "_blank",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/></svg>`,
  },
  {
    label: "LinkedIn", href: "https://www.linkedin.com/in/akbar-ali-053615225/", target: "_blank",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`,
  },
];

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dropsRef = useRef<number[]>([]);
  const rafRef = useRef<number>(0);

  const activeWords = isHovered ? WORDS_HOVER : WORDS_DEFAULT;

  /* Mouse move tracking inside Hero section */
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  /* Cycling words */
  useEffect(() => {
    const id = setInterval(() => {
      setWordVisible(false);
      setTimeout(() => {
        setWordIdx((i) => (i + 1) % activeWords.length);
        setWordVisible(true);
      }, 350);
    }, 2600);
    return () => clearInterval(id);
  }, [activeWords]);

  /* Canvas matrix rendering */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const cols = Math.floor(canvas.width / 12);
      dropsRef.current = Array(cols).fill(1);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.fillStyle = "rgba(8,8,14,0.18)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = "10px 'Space Mono', monospace";
      dropsRef.current.forEach((y, i) => {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const alpha = Math.random() * 0.55 + 0.1;
        const isCyan = Math.random() > 0.82;
        ctx.fillStyle = isCyan ? `rgba(0,212,255,${alpha})` : `rgba(${Math.floor(alpha*70)},${Math.floor(alpha*120)},${Math.floor(alpha*220)},${alpha})`;
        ctx.fillText(char, i * 12, y * 12);
        if (y * 12 > canvas.height && Math.random() > 0.975) dropsRef.current[i] = 0;
        dropsRef.current[i]++;
      });
      rafRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(rafRef.current); };
  }, []);

  const topItems = ["AI ENGINEER", "·", "PYTHON DEVELOPER", "·", "GENERATIVE AI", "·", "VOICE AI SPECIALIST", "·", "AI ENGINEER", "·", "PYTHON DEVELOPER", "·", "GENERATIVE AI", "·", "VOICE AI SPECIALIST", "·"];
  const botItems = ["LANGGRAPH", "·", "FASTAPI", "·", "PIPECAT", "·", "WEBRTC", "·", "QDRANT", "·", "HUGGING FACE", "·", "CLOUDFLARE R2", "·", "POSTGRESQL", "·", "REACT.JS", "·"];

  return (
    <section
      className={`${styles.hero} ${isHovered ? styles.heroHovered : ""}`}
      id="hero"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Synthwave Hover Background */}
      <div className={styles.synthwaveBgWrap}>
        <Image
          src={getAssetPath("/hero_bg_synthwave.jpg")}
          alt="Cyberpunk Synthwave Backdrop"
          fill
          priority
          style={{ objectFit: "cover" }}
          className={styles.synthwaveImg}
        />
        <div
          className={styles.spotlightOverlay}
          style={{
            background: `radial-gradient(circle 500px at ${mousePos.x}% ${mousePos.y}%, rgba(108, 99, 255, 0.25) 0%, rgba(0, 0, 0, 0.85) 75%)`,
          }}
        />
      </div>

      {/* top marquee */}
      <div className={`${styles.marqueeBar} ${styles.top}`}>
        <div className="marquee-wrap"><div className="marquee-track">{topItems.map((t,i)=><span key={i}>{t}</span>)}</div></div>
      </div>

      {/* blobs */}
      <div className={`${styles.blob} ${styles.blob1}`} />
      <div className={`${styles.blob} ${styles.blob2}`} />

      {/* main content */}
      <div className={styles.content}>
        <div className={styles.titleWrap}>
          {/* line 1 */}
          <div className={`${styles.line} reveal-blur delay-100`}>
            <span className={styles.outline}>BUILDING</span>
            <span className={styles.solid}>{isHovered ? "CREATIVITY" : "INTELLIGENT"}</span>
          </div>

          {/* scanner frame */}
          <div className={`${styles.frame} ${isHovered ? styles.frameActive : ""} reveal-scale delay-200`}>
            <div className={`${styles.corner} ${styles.tl}`} />
            <div className={`${styles.corner} ${styles.tr}`} />
            <div className={`${styles.corner} ${styles.bl}`} />
            <div className={`${styles.corner} ${styles.br}`} />
            <div className={styles.scanLine} />

            {/* Default Matrix Canvas */}
            <canvas
              ref={canvasRef}
              className={`${styles.canvas} ${isHovered ? styles.canvasHide : ""}`}
            />

            {/* Hover State: Cyberpunk Mecha Eye Image */}
            <div className={`${styles.mechaWrap} ${isHovered ? styles.mechaShow : ""}`}>
              <Image
                src={getAssetPath("/hero_mecha_eye.jpg")}
                alt="Mecha Eye Visualizer"
                fill
                style={{ objectFit: "cover" }}
                className={styles.mechaImg}
              />
              <div className={styles.mechaOverlay} />
            </div>
          </div>

          {/* line 2 */}
          <div className={`${styles.line} reveal-blur delay-300`}>
            <span className={styles.solid}>{isHovered ? "TAKE IT" : "NEXT-GEN"}</span>
            <span className={styles.cycling} style={{ opacity: wordVisible ? 1 : 0, transform: wordVisible ? "translateY(0)" : "translateY(16px)" }}>
              {activeWords[wordIdx % activeWords.length]}
            </span>
          </div>
        </div>
      </div>

      {/* socials */}
      <div className={`${styles.socials} reveal-left delay-400`}>
        {socials.map((s) => (
          <a key={s.label} href={s.href} target={s.target} rel="noopener noreferrer" className={`social-circle ${styles.socialCircle}`} aria-label={s.label} dangerouslySetInnerHTML={{ __html: s.icon }} />
        ))}
      </div>

      {/* bottom marquee */}
      <div className={`${styles.marqueeBar} ${styles.bottom}`}>
        <div className="marquee-wrap"><div className="marquee-track reverse">{botItems.map((t,i)=><span key={i}>{t}</span>)}</div></div>
      </div>
    </section>
  );
}
