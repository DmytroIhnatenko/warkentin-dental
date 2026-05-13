import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, telefon, nachricht } = body as {
      name: string;
      email: string;
      telefon: string;
      nachricht: string;
    };

    // Basic server-side guard
    if (!name || !email || !telefon || !nachricht) {
      return NextResponse.json({ error: "Alle Felder sind erforderlich." }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["ihnatenkodmytro0@gmail.com"],
      reply_to: email,
      subject: `Neue Terminanfrage von ${name}`,
      html: buildEmailHtml({ name, email, telefon, nachricht }),
    });

    if (error) {
      console.error("[Resend error]", error);
      return NextResponse.json({ error: "E-Mail konnte nicht gesendet werden." }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[Contact API error]", err);
    return NextResponse.json({ error: "Serverfehler." }, { status: 500 });
  }
}

/** Builds a clean HTML email body */
function buildEmailHtml(data: {
  name: string;
  email: string;
  telefon: string;
  nachricht: string;
}) {
  return `
    <!DOCTYPE html>
    <html lang="de">
    <head><meta charset="UTF-8" /></head>
    <body style="font-family:sans-serif;color:#1A1A1A;max-width:600px;margin:0 auto;padding:32px;">
      <div style="background:#002D5D;padding:24px 32px;border-radius:12px 12px 0 0;">
        <h1 style="color:#ffffff;font-size:20px;margin:0;">Neue Terminanfrage</h1>
        <p style="color:#ffffff99;font-size:13px;margin:4px 0 0;">Zahnarztpraxis Warkentin – Kontaktformular</p>
      </div>
      <div style="background:#F0F4F8;padding:32px;border-radius:0 0 12px 12px;">
        ${row("Name", data.name)}
        ${row("E-Mail", `<a href="mailto:${data.email}" style="color:#0056B3;">${data.email}</a>`)}
        ${row("Telefon", `<a href="tel:${data.telefon}" style="color:#0056B3;">${data.telefon}</a>`)}
        <div style="margin-top:20px;">
          <p style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:#1A1A1A99;margin:0 0 6px;">Nachricht</p>
          <div style="background:#ffffff;border-radius:8px;padding:16px;font-size:14px;line-height:1.6;white-space:pre-wrap;">${data.nachricht}</div>
        </div>
      </div>
      <p style="text-align:center;font-size:11px;color:#1A1A1A40;margin-top:24px;">
        Hermannstraße 31 · 32756 Detmold · zahnarzt-warkentin.de
      </p>
    </body>
    </html>
  `;
}

/** Renders a labeled data row */
function row(label: string, value: string) {
  return `
    <div style="display:flex;gap:12px;padding:12px 0;border-bottom:1px solid #0000000d;">
      <span style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:#1A1A1A60;width:80px;padding-top:2px;flex-shrink:0;">${label}</span>
      <span style="font-size:14px;">${value}</span>
    </div>
  `;
}
