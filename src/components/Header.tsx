"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Stethoscope } from "lucide-react";

const navLinks = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Labor", href: "#labor" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Kontakt", href: "#kontakt" },
];

/** Sticky glassmorphism header with full-screen mobile menu */
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/70 backdrop-blur-md shadow-sm border-b border-white/30"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-medical-blue flex items-center justify-center">
              <Stethoscope className="w-5 h-5 text-white" />
            </div>
            <span className="font-heading font-bold text-lg leading-tight transition-colors"
              style={{ color: isScrolled ? "#002D5D" : "#ffffff" }}
            >
              Warkentin
              <span className="block text-xs font-sans font-normal text-medical-blue tracking-widest uppercase">
                Zahnarztpraxis
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-medical-blue ${
                  isScrolled ? "text-navy/80" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#kontakt"
              className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-medical-blue text-white text-sm font-semibold hover:bg-navy transition-colors shadow-md"
            >
              Termin buchen
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? "text-navy hover:bg-azure" : "text-white hover:bg-white/10"
              }`}
              aria-label="Menü öffnen"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-navy flex flex-col">
          <div className="flex items-center justify-between px-5 h-20 border-b border-white/10">
            <Link href="/" className="flex items-center gap-2">
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
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 rounded-lg text-white/70 hover:text-white transition-colors"
              aria-label="Menü schließen"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col items-center justify-center flex-1 gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-heading font-semibold text-white/90 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setMenuOpen(false)}
              className="mt-4 px-8 py-3 rounded-full bg-medical-blue text-white text-base font-semibold hover:bg-white hover:text-navy transition-colors"
            >
              Termin buchen
            </a>
          </nav>

          <p className="text-center text-white/30 text-xs pb-8">
            Hermannstraße 31, 32756 Detmold
          </p>
        </div>
      )}
    </>
  );
}
