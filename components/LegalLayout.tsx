import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

export function LegalLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main className="mx-auto max-w-3xl px-5 py-20">
      <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-brand">
        <ArrowLeft size={16} /> Zur Startseite
      </Link>
      <h1 className="mt-6 font-display text-3xl font-bold text-anthracite sm:text-4xl">{title}</h1>
      <div className="legal mt-8 space-y-6 text-steel leading-relaxed">{children}</div>
    </main>
  );
}
