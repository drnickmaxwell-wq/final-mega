"use client";
export default function FooterAi24(){
  return (
    <footer className="mt-20 border-t border-[var(--border)] bg-[var(--surface)]/60 backdrop-blur">
      <div className="mx-auto grid max-w-[var(--content)] gap-10 px-4 py-12 md:grid-cols-4">
        <div>
          <h4 className="font-semibold mb-2">St Mary’s House Dental Care</h4>
          <address className="not-italic opacity-85">
            St Mary’s Road<br/>Shoreham-by-Sea BN43 5ZA<br/>United Kingdom
          </address>
          <p className="mt-2 opacity-85">
            Tel: <a className="underline" href="tel:+441273453109">01273 453109</a><br/>
            <a className="underline" href="mailto:info@smhdental.co.uk">info@smhdental.co.uk</a>
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Hours</h4>
          <ul className="opacity-85">
            <li>Mon–Fri: 08:30–17:30</li><li>Sat: By appointment</li><li>Sun: Closed</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick links</h4>
          <ul className="opacity-85 space-y-1">
            <li><a className="underline" href="/treatments">Treatments</a></li>
            <li><a className="underline" href="/patient-care/fees">Fees & Finance</a></li>
            <li><a className="underline" href="/stories">Patient Stories</a></li>
            <li><a className="underline" href="/contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Follow</h4>
          <div className="flex gap-3">
            <a className="underline" href="#" aria-label="Instagram">Instagram</a>
            <a className="underline" href="#" aria-label="Facebook">Facebook</a>
            <a className="underline" href="#" aria-label="YouTube">YouTube</a>
          </div>
          <div className="mt-4 text-sm opacity-75">CQC Outstanding · 98% Satisfaction</div>
        </div>
      </div>
      <div className="mx-auto max-w-[var(--content)] px-4 py-4 border-t border-[var(--border)] opacity-80 text-sm">
        © {new Date().getFullYear()} St Mary’s House Dental Care — All rights reserved.
      </div>
    </footer>
  );
}
