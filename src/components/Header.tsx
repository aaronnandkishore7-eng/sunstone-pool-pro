import { useState } from "react";
import logo from "@/assets/logo.jpeg";

export function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#areas", label: "Areas" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border/50 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Pool Specialists Marbella" className="h-12 w-12 rounded-full object-cover" />
          <div className="leading-tight">
            <div className="font-display text-lg font-bold text-navy">Pool Specialists</div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-deep">Marbella</div>
          </div>
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 transition-colors hover:text-navy">
              {l.label}
            </a>
          ))}
          <a
            href="tel:+34627350348"
            className="rounded-full bg-[var(--gradient-gold)] px-5 py-2.5 text-sm font-semibold text-navy-deep shadow-[var(--shadow-gold)] transition-transform hover:scale-105"
          >
            ✆ Call Now
          </a>
        </nav>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="lg:hidden"
        >
          <svg className="h-6 w-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-sm font-medium text-foreground/80">
                {l.label}
              </a>
            ))}
            <a href="tel:+34627350348" className="mt-2 rounded-full bg-[var(--gradient-gold)] px-5 py-3 text-center text-sm font-semibold text-navy-deep">
              ✆ Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
