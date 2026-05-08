"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const PETAL_COUNT = 18;

interface Petal {
  id: number;
  left: string;
  animationDuration: string;
  animationDelay: string;
  fontSize: string;
  emoji: string;
}

export default function FloatingPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generated: Petal[] = Array.from({ length: PETAL_COUNT }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${8 + Math.random() * 10}s`,
      animationDelay: `${Math.random() * 12}s`,
      fontSize: `${14 + Math.random() * 18}px`,
      emoji: ["🌸", "🌷", "✿", "❀", "🌺", "💮"][
        Math.floor(Math.random() * 6)
      ],
    }));
    setPetals(generated);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden -z-10"
    >
      {petals.map((p) => (
        <span
          key={p.id}
          style={{
            position: "absolute",
            top: "-5%",
            left: p.left,
            fontSize: p.fontSize,
            animation: `petalDrift ${p.animationDuration} linear ${p.animationDelay} infinite`,
            opacity: 0,
            userSelect: "none",
          }}
        >
          {p.emoji}
        </span>
      ))}

      {/* Soft blurred orbs */}
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(232,200,154,0.18) 0%, transparent 70%)",
          top: "5%",
          left: "-10%",
          animation: "orbFloat 14s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(232,180,184,0.15) 0%, transparent 70%)",
          bottom: "10%",
          right: "-8%",
          animation: "orbFloat 18s ease-in-out infinite reverse",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(249,237,233,0.25) 0%, transparent 70%)",
          top: "45%",
          left: "60%",
          animation: "orbFloat 10s ease-in-out 3s infinite",
        }}
      />
    </div>
  );
}
