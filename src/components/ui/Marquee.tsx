"use client";
import styles from "./Marquee.module.css";

interface MarqueeProps {
  items: string[];
  reverse?: boolean;
  speed?: number;
  className?: string;
  itemClassName?: string;
}

export default function Marquee({ items, reverse = false, className = "", itemClassName = "" }: MarqueeProps) {
  const doubled = [...items, ...items];
  return (
    <div className={`marquee-wrap ${className}`}>
      <div className={`marquee-track ${reverse ? "reverse" : ""}`}>
        {doubled.map((item, i) => (
          <span key={i} className={itemClassName}>{item}</span>
        ))}
      </div>
    </div>
  );
}
