"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function HeaderAi24() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const nav = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/treatments", label: "Treatments" },
    { href: "/patient-care/fees", label: "Fees" },
    { href: "/stories", label: "Stories" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <header className={`sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)]/60 backdrop-blur transition-shadow duration-300 ${scrolled ? "shadow-[0_8px_20px_rgba(0,0,0,.10)]" : ""}`}>
      <div className="mx-auto flex max-w-[var(--content)] items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] rounded-md px-1">
          <div className="w-10 h-10 rounded-full grid place-items-center text-white font-semibold"
               style={{ background:"linear-gradient(135deg, var(--magenta), var(--turquoise))", boxShadow:"0 0 16px rgba(64,196,180,.25)" }} aria-hidden>SMH</div>
          <span className="font-semibold">St Mary’s House</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
          {nav.map(n => (
            <Link key={n.href} href={n.href} className="relative inline-flex items-center py-1 opacity-90 hover:opacity-100 transition">
              <span className="px-1">{n.label}</span>
              <span className={`absolute left-0 -bottom-[6px] h-[3px] rounded-full transition-all duration-300 ${isActive(n.href) ? "w-full" : "w-0"} bg-gradient-to-r from-[var(--magenta)] via-[var(--turquoise)] to-[var(--gold)]`} />
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a href="/contact" className="rounded-full px-4 py-2 text-white" style={{ background:"var(--magenta)", boxShadow:"var(--glow-magenta)"}}>Book</a>
          <a href="tel:+441273453109" className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-white" style={{ background:"var(--turquoise)", boxShadow:"var(--glow-turquoise)"}}>
            <Phone className="w-4 h-4"/> Call
          </a>
        </div>

        <button onClick={() => setOpen(v=>!v)} className="md:hidden rounded-md p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]" aria-expanded={open} aria-label="Toggle navigation">
          {open ? <X/> : <Menu/>}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur">
          <nav className="mx-auto max-w-[var(--content)] px-4 py-3 grid gap-4" aria-label="Mobile">
            {nav.map(n => <Link key={n.href} href={n.href} className="py-1">{n.label}</Link>)}
            <div className="flex gap-2 pt-2">
              <a href="/contact" className="flex-1 text-center rounded-full px-4 py-2 text-white" style={{ background:"var(--magenta)", boxShadow:"var(--glow-magenta)"}}>Book</a>
              <a href="tel:+441273453109" className="flex-1 text-center rounded-full px-4 py-2 text-white" style={{ background:"var(--turquoise)", boxShadow:"var(--glow-turquoise)"}}>Call</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
