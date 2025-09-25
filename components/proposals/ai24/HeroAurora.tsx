"use client";
import React, { useMemo } from "react";

/** Aurora + coloured microbubbles (motion-safe). Stronger brand look. */
export default function HeroAurora({ className = "" }: { className?: string }) {
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

  // deterministic bubbles (SSR-safe)
  const bubbles = useMemo(
    () =>
      Array.from({ length: 26 }).map((_, i) => {
        const palette = [
          "rgba(212,175,55,0.55)",   // gold
          "rgba(64,196,180,0.55)",   // turquoise
          "rgba(194,24,91,0.55)",    // magenta
        ];
        return {
          left: `${(i * 41) % 100}%`,
          size: 10 + ((i * 37) % 26),            // 10–36px
          duration: 7 + ((i * 13) % 14),         // 7–20s
          delay: (i * 0.5) % 6,                  // 0–6s
          color: palette[i % palette.length],
          blur: (i % 3) ? "1px" : "0.5px",
        };
      }),
    []
  );

  return (
    <div className={`absolute inset-0 z-10 pointer-events-none ${className}`} aria-hidden>
      {/* Stronger aurora blobs */}
      <div
        className="absolute -top-40 -left-32 w-[520px] h-[520px] rounded-full blur-[90px] opacity-60"
        style={{ background: "radial-gradient(closest-side, var(--turquoise), transparent)" }}
      />
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[90px] opacity-55"
        style={{ background: "radial-gradient(closest-side, var(--magenta), transparent)" }}
      />
      <div
        className="absolute bottom-10 left-1/3 w-[460px] h-[460px] rounded-full blur-[90px] opacity-45"
        style={{ background: "radial-gradient(closest-side, var(--gold), transparent)" }}
      />

      {/* Coloured microbubbles */}
      {!reduce && (
        <div className="absolute inset-0 overflow-hidden">
          {bubbles.map((b, i) => (
            <span
              key={i}
              className="absolute bottom-[-50px] rounded-full"
              style={{
                left: b.left,
                width: b.size,
                height: b.size,
                background: b.color,
                filter: `blur(${b.blur})`,
                animation: `smh-bubble ${b.duration}s linear ${b.delay}s infinite`,
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            />
          ))}
          <style jsx>{`
            @keyframes smh-bubble {
              0%   { transform: translateY(0) translateX(0); opacity: 0; }
              10%  { opacity: 0.95; }
              90%  { opacity: 0.95; }
              100% { transform: translateY(-115vh) translateX(14px); opacity: 0; }
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
