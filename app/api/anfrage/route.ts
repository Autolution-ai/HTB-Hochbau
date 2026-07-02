import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  // Spam-Schutz: Honeypot-Feld muss leer sein.
  if (typeof body.company_website === "string" && body.company_website.trim() !== "") {
    // Wie ein Erfolg antworten, damit Bots keinen Hinweis bekommen.
    return NextResponse.json({ ok: true });
  }

  // Pflichtfelder prüfen.
  const required = ["service", "customerType", "name", "phone", "email"] as const;
  for (const field of required) {
    if (typeof body[field] !== "string" || (body[field] as string).trim() === "") {
      return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 422 });
    }
  }

  const email = String(body.email);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 422 });
  }

  // TODO (vor Go-Live): Anfrage per E-Mail an info@htb24.de zustellen
  // bzw. in ein CRM/Ticketsystem schreiben. Zugangsdaten ausschließlich
  // über Umgebungsvariablen (.env.local), niemals im Repository.
  // Beispiel: await sendMail({ to: "info@htb24.de", ... })
  console.info("[Anfrage eingegangen]", {
    service: body.service,
    customerType: body.customerType,
    location: body.location,
    timeframe: body.timeframe,
  });

  return NextResponse.json({ ok: true });
}
