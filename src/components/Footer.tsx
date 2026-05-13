import Link from "next/link";
import { Stethoscope, MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

const footerLinks = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Labor & Technologie", href: "#labor" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Kontakt", href: "#kontakt" },
];

const legalLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];

/** Deep Navy footer with contact info, links, and social icons */
export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg bg-medical-blue flex items-center justify-center">
              <Stethoscope className="w-5 h-5 text-white" />
            </div>
            <span className="font-heading font-bold text-white text-lg leading-tight">
              Warkentin
              <span className="block text-xs font-sans font-normal text-medical-blue/80 tracking-widest uppercase">
                Zahnarztpraxis
              </span>
            </span>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            Ästhetik & Präzision aus unserem hauseigenen Meisterlabor –
            für Ihr strahlendes Lächeln.
          </p>
          <div className="flex items-center gap-3 mt-5">
            <SocialLink href="https://instagram.com" icon={<Instagram className="w-4 h-4" />} label="Instagram" />
            <SocialLink href="https://facebook.com" icon={<Facebook className="w-4 h-4" />} label="Facebook" />
          </div>
        </div>

        {/* Nav Links */}
        <div>
          <h3 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5">
            Navigation
          </h3>
          <ul className="space-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5">
            Kontakt
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-sm text-white/70">
              <MapPin className="w-4 h-4 text-medical-blue mt-0.5 shrink-0" />
              <span>Hermannstraße 31<br />32756 Detmold</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-white/70">
              <Phone className="w-4 h-4 text-medical-blue shrink-0" />
              <a href="tel:+49523100000" className="hover:text-white transition-colors">
                +49 5231 00000
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm text-white/70">
              <Mail className="w-4 h-4 text-medical-blue shrink-0" />
              <a href="mailto:info@zahnarzt-warkentin.de" className="hover:text-white transition-colors">
                info@zahnarzt-warkentin.de
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Zahnarztpraxis Warkentin. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-5">
            {legalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/40 hover:text-white/70 text-xs transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/** Reusable social icon button */
function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-colors"
    >
      {icon}
    </a>
  );
}
