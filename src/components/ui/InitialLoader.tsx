"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./InitialLoader.module.css";

export default function InitialLoader({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  // Counter timer
  useEffect(() => {
    const startTime = performance.now();
    const duration = 2400; // 2.4 seconds loading duration

    const updateProgress = (now: number) => {
      const elapsed = now - startTime;
      const pct = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(pct);

      if (pct < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => {
            setLoading(false);
            onComplete?.();
          }, 600); // 600ms fade duration
        }, 200);
      }
    };

    requestAnimationFrame(updateProgress);
  }, [onComplete]);

  // 3D Wireframe Orb Canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let angleX = 0;
    let angleY = 0;
    const radius = 90;
    const rings = 14;
    const pointsPerRing = 32;

    const resize = () => {
      canvas.width = 280;
      canvas.height = 280;
    };
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      angleX += 0.012;
      angleY += 0.018;

      // Draw latitude rings
      for (let i = 0; i < rings; i++) {
        const phi = (Math.PI * (i + 1)) / (rings + 1) - Math.PI / 2;
        const rRing = radius * Math.cos(phi);
        const yRing = radius * Math.sin(phi);

        ctx.beginPath();
        let first = true;

        for (let j = 0; j <= pointsPerRing; j++) {
          const theta = (2 * Math.PI * j) / pointsPerRing;
          const x0 = rRing * Math.cos(theta);
          const z0 = rRing * Math.sin(theta);
          const y0 = yRing;

          // 3D Rotation Matrix
          // Rotate around X
          const y1 = y0 * Math.cos(angleX) - z0 * Math.sin(angleX);
          const z1 = y0 * Math.sin(angleX) + z0 * Math.cos(angleX);

          // Rotate around Y
          const x2 = x0 * Math.cos(angleY) + z1 * Math.sin(angleY);
          const z2 = -x0 * Math.sin(angleY) + z1 * Math.cos(angleY);

          // Perspective Projection
          const scale = 260 / (260 + z2);
          const px = cx + x2 * scale;
          const py = cy + y1 * scale;

          if (first) {
            ctx.moveTo(px, py);
            first = false;
          } else {
            ctx.lineTo(px, py);
          }
        }

        // Color based on ring index and subtle glitch effect
        const alpha = Math.max(0.1, (i + 1) / rings);
        const isAccent = i % 4 === 0;

        if (isAccent) {
          ctx.strokeStyle = `rgba(0, 212, 255, ${0.55 * alpha})`;
          ctx.lineWidth = 1.2;
        } else if (i % 3 === 0) {
          ctx.strokeStyle = `rgba(255, 107, 107, ${0.45 * alpha})`;
          ctx.lineWidth = 1.0;
        } else {
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.25 * alpha})`;
          ctx.lineWidth = 0.8;
        }

        ctx.stroke();
      }

      // Draw center glowing core
      const gradient = ctx.createRadialGradient(cx, cy, 2, cx, cy, 45);
      gradient.addColorStop(0, "rgba(108, 99, 255, 0.3)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(cx, cy, 45, 0, Math.PI * 2);
      ctx.fill();

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  if (!loading) return null;

  return (
    <div className={`${styles.loaderContainer} ${fadeOut ? styles.fadeOut : ""}`}>
      {/* 3D Wireframe Sphere */}
      <div className={styles.sphereWrapper}>
        <canvas ref={canvasRef} className={styles.canvas} />
      </div>

      {/* Loading Footer Info */}
      <div className={styles.infoBar}>
        <div className={styles.logo}>
          AKBAR<span className={styles.dot}>.</span>
        </div>
        <div className={styles.textStack}>
          <span className={styles.textLine}>PATIENCE, COOL STUFF</span>
          <span className={styles.textSub}>TAKES TIME...</span>
        </div>
        <div className={styles.counter}>{progress}%</div>
      </div>
    </div>
  );
}
