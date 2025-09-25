"use client";
import React, { useMemo } from "react";

/** Soft aurora gradient + microbubbles overlay (motion-safe). */
export default function HeroAurora({ className = "" }: { className?: string }) {
  const reduce = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

  // deterministic bubbles so SSR/hydration stay in sync
  const bubbles = useMemo(
    () =>
      Array.from({ length: 16 }).map((_, i) => ({
        left: `${(i * 61) % 100}%`,
        size: 10 + ((i * 37) % 24),      // 10–34px
        duration: 6 + ((i * 17) % 12),  // 6–18s
        delay: (i * 0.7) % 5,           // 0–5s
      })),
    []
  );

  return (
    <div className={`absolute inset-0 z-10 pointer-events-none ${className}`} aria-hidden>
      {/* Aurora blobs */}
      <div className="absolute -top-32 -left-24 w-[420px] h-[420px] rounded-full blur-3xl opacity-40"
           style={{ background: "radial-gradient(closest-side, var(--turquoise), transparent)" }} />
      <div className="absolute top-10 right-0 w-[520px] h-[520px] rounded-full blur-3xl opacity-40"
           style={{ background: "radial-gradient(closest-side, var(--magenta), transparent)" }} />
      <div className="absolute bottom-0 left-1/3 w-[420px] h-[420px] rounded-full blur-3xl opacity-30"
           style={{ background: "radial-gradient(closest-side, var(--gold), transparent)" }} />

      {/* Microbubbles */}
      {!reduce && (
        <div className="absolute inset-0 overflow-hidden">
          {bubbles.map((b, i) => (
            <span
              key={i}
              className="absolute bottom-[-40px] rounded-full bg-white/35"
              style={{
                left: b.left,
                width: b.size,
                height: b.size,
                filter: "blur(0.5px)",
                animation: `smh-bubble ${b.duration}s linear ${b.delay}s infinite`,
              }}
            />
          ))}
          <style jsx>{`
            @keyframes smh-bubble {
              0%   { transform: translateY(0) translateX(0); opacity: 0; }
              10%  { opacity: 0.9; }
              90%  { opacity: 0.9; }
              100% { transform: translateY(-110vh) translateX(12px); opacity: 0; }
            }
            @media (prefers-reduced-motion: reduce) {
              span { animation: none !important; }
            }
          `}</style>
        </div>
      )}
    </div>
  );
}
