"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { company, navLinks } from "@/lib/site";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-anthracite/95 backdrop-blur-sm shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-3" aria-label="HTB Hochbau GmbH, zum Seitenanfang">
          <span className="grid h-10 w-10 place-items-center bg-brick font-display text-lg font-extrabold text-white">
            HTB
          </span>
          <span className="font-display text-lg font-bold leading-tight text-white">
            Hochbau <span className="text-white/60">GmbH</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Hauptnavigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="bg-brick px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brick-deep"
          >
            Angebot anfragen
          </a>
        </nav>

        <button
          type="button"
          className="text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-white/10 bg-anthracite px-5 py-4 md:hidden"
          aria-label="Mobile Navigation"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-white/85"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="bg-brick px-5 py-3 text-center font-semibold text-white"
            >
              Angebot anfragen
            </a>
            <a
              href={`tel:${company.phone}`}
              className="flex items-center justify-center gap-2 text-white/85"
            >
              <Phone size={18} /> {company.phoneDisplay}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
