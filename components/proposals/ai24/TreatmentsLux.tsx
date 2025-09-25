"use client";
import GlowCard from "@/components/fx/GlowCard";
import React from "react";

/** Treatments grid with top accent bar + icon chip + gold hover & CTA reveal. */
export default function TreatmentsLux() {
  const items = [
    { title: "3D Printed Veneers", href: "/treatments/3d-printed-veneers", cta: "Learn More", badge: "Most Popular", color: "var(--magenta)" },
    { title: "3D Implant Restorations", href: "/treatments/implants", cta: "Learn More", badge: "Advanced Tech", color: "var(--turquoise)" },
    { title: "Digital Twin Simulation", href: "/treatments/digital-twin-simulation", cta: "Learn More", badge: "AI-Powered", color: "var(--gold)" },
  ];

  return (
    <section className="mx-auto max-w-[var(--content)] px-6 py-16">
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((it) => (
          <article key={it.title} className="relative group">
            {/* top accent bar */}
            <div className="absolute left-0 right-0 top-0 h-[6px] rounded-t-[var(--radius)]"
                 style={{ background: it.color }} aria-hidden />
            {/* gold overlay on hover */}
            <div className="pointer-events-none absolute inset-0 rounded-[var(--radius)] bg-[var(--gold)]/0 group-hover:bg-[var(--gold)]/10 transition-colors duration-300" />
            <GlowCard className="pt-8 p-6">
              {/* badge chip */}
              <div className="mb-3">
                <span className="inline-block rounded-full px-2 py-1 text-xs text-black/75"
                      style={{ background: "rgba(255,255,255,0.8)", border: "1px solid rgba(0,0,0,0.06)" }}>
                  {it.badge}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{it.title}</h3>
              <a
                href={it.href}
                className="inline-block mt-3 rounded-full px-4 py-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "var(--magenta)", boxShadow: "var(--glow-magenta)" }}
              >
                {it.cta} →
              </a>
            </GlowCard>
          </article>
        ))}
      </div>
    </section>
  );
}
