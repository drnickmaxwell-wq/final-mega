"use client";
import React, { useState } from "react";
import GlowCard from "@/components/fx/GlowCard";

/** Accessible carousel (no external deps). Arrow keys + buttons. */
const data = [
  { name: "Laura", quote: "The 3D technology is amazing, and the team is so warm." },
  { name: "James", quote: "Fast, precise treatment with a premium experience." },
  { name: "Amelia", quote: "I felt looked after from the first call to the final result." },
];

export default function TestimonialsCarousel() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i + data.length - 1) % data.length);
  const next = () => setIdx((i) => (i + 1) % data.length);

  return (
    <section className="mx-auto max-w-[var(--content)] px-6 py-16">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Patient Stories</h2>
        <div className="flex gap-2">
          <button onClick={prev} className="rounded-md px-3 py-2 border">Prev</button>
          <button onClick={next} className="rounded-md px-3 py-2 border">Next</button>
        </div>
      </div>

      <div role="region" aria-roledescription="carousel" aria-label="Testimonials"
           className="relative overflow-hidden" tabIndex={0}
           onKeyDown={(e)=>{ if(e.key==="ArrowLeft") prev(); if(e.key==="ArrowRight") next(); }}>
        <div className="whitespace-nowrap transition-transform duration-300"
             style={{ transform: `translateX(-${idx * 100}%)` }}>
          {data.map((t, i) => (
            <div key={i} className="inline-block align-top w-full">
              <GlowCard className="p-6">
                <blockquote className="text-lg">“{t.quote}”</blockquote>
                <p className="mt-3 opacity-80">— {t.name}</p>
              </GlowCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
