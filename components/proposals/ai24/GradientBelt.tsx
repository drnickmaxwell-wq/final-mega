"use client";
export default function GradientBelt({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-[24px] mx-auto my-12 h-[16px] w-[min(100%,1200px)] ${className}`}
      style={{
        background: "linear-gradient(90deg, var(--magenta), var(--turquoise))",
        boxShadow: "0 6px 18px rgba(0,0,0,0.08) inset, 0 -6px 18px rgba(0,0,0,0.08) inset",
      }}
      aria-hidden
    />
  );
}
