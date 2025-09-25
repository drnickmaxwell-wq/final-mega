"use client";
import Script from "next/script";

/** Organization + Dentist + small FAQ JSON-LD for Home. */
export default function SeoHomeJsonLd() {
  const org = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "St Mary’s House Dental Care",
    url: "https://smhdental.co.uk",
    telephone: "+44 1273 453109",
    email: "info@smhdental.co.uk",
    address: {
      "@type": "PostalAddress",
      streetAddress: "St Mary’s House, St Mary’s Road",
      addressLocality: "Shoreham-by-Sea",
      addressRegion: "West Sussex",
      postalCode: "BN43 5ZA",
      addressCountry: "UK",
    },
    areaServed: ["Shoreham-by-Sea", "Lancing", "Worthing", "Steyning", "Brighton"],
    openingHours: "Mo-Fr 08:30-17:30",
  };
  const faqs = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Do you offer emergency appointments?", acceptedAnswer: { "@type": "Answer", text: "Yes — same-day slots are kept for urgent care. Call +44 1273 453109." } },
      { "@type": "Question", name: "Do you provide routine check-ups and hygiene?", acceptedAnswer: { "@type": "Answer", text: "Yes — general dentistry is our foundation, with prevention at its heart." } },
      { "@type": "Question", name: "Can I spread the cost of treatment?", acceptedAnswer: { "@type": "Answer", text: "Yes — monthly finance available via Tabeo." } },
    ],
  };

  return (
    <>
      <Script id="ld-home-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <Script id="ld-home-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqs) }} />
    </>
  );
}
