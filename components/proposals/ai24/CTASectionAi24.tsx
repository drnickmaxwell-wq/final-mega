"use client";
import dynamic from "next/dynamic";
import ShimmerText from "@/components/fx/ShimmerText";
const WaveBackground = dynamic(()=>import("@/components/fx/WaveBackground").then(m=>m.default??(m as any).WaveBackground),{ ssr:false });

export default function CTASectionAi24(){
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10"><WaveBackground/></div>
      <div className="relative mx-auto max-w-[800px] px-6 text-center z-10">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          <ShimmerText shimmerColor="gold">Book Your Appointment Today</ShimmerText>
        </h2>
        <a href="/contact" className="inline-flex rounded-full px-7 py-3.5 text-white" style={{ background:"var(--magenta)", boxShadow:"var(--glow-magenta)"}}>Book Consultation</a>
      </div>
    </section>
  );
}
