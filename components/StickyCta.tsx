"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { company } from "@/lib/site";

// Dauerhaft sichtbarer Haupt-CTA auf Mobilgeräten.
export function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-line bg-white p-3 transition-transform duration-300 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href={`tel:${company.phone}`}
        aria-label="Anrufen"
        className="grid w-14 flex-shrink-0 place-items-center border border-anthracite text-anthracite"
      >
        <Phone size={20} />
      </a>
      <a
        href="#kontakt"
        className="flex flex-1 items-center justify-center bg-brand px-6 py-3.5 font-semibold text-white"
      >
        Angebot anfragen
      </a>
    </div>
  );
}
