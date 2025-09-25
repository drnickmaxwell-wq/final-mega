"use client";
import React, { useRef, useEffect, useState } from "react";

export default function HeroVideo({
  videoSrc = "/videos/hero/coastal-dental-hero.mp4",
  posterSrc = "/videos/hero/hero-poster.jpg",
  className = "",
}: { videoSrc?: string; posterSrc?: string; className?: string }) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const v = ref.current; if (!v || !videoSrc) return;
    const onLoaded = () => setLoaded(true);
    v.addEventListener("loadeddata", onLoaded);
    v.play().catch(() => void 0);
    return () => v.removeEventListener("loadeddata", onLoaded);
  }, [videoSrc]);

  return (
    <div className={`relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden ${className}`}>
      <video ref={ref} className="absolute inset-0 w-full h-full object-cover"
            poster={posterSrc} autoPlay muted loop playsInline preload={videoSrc ? "metadata" : "none"}>
        {videoSrc && <source src={videoSrc} type="video/mp4" />}
      </video>
      <div className="absolute inset-0 hero-mask" />
      <div className="absolute inset-0 grid place-items-center text-center px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-semibold text-white">Experience Luxury</h1>
          <p className="mt-4 text-lg text-white/90">Coastal Dental Care — advanced 3D dentistry in Shoreham-by-Sea.</p>
          <div className="mt-6 flex gap-4 justify-center">
            <a href="/contact" className="rounded-full px-6 py-3 text-white" style={{ background:"var(--magenta)", boxShadow:"var(--glow-magenta)"}}>Book Consultation</a>
            <a href="/treatments" className="rounded-full px-6 py-3 text-white" style={{ background:"var(--turquoise)", boxShadow:"var(--glow-turquoise)"}}>View Treatments</a>
          </div>
        </div>
      </div>
    </div>
  );
}
