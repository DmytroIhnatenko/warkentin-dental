"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Award, Clock, Shield } from "lucide-react";

const stats = [
  { icon: Award, value: "20+", label: "Jahre Erfahrung" },
  { icon: Clock, value: "5.000+", label: "Behandlungen" },
  { icon: Shield, value: "100%", label: "Eigenes Labor" },
];

/** Hero section with full-bleed workspace image and text overlay */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/workspace.jpg"
          alt="Modernes Meisterlabor Warkentin"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 w-full pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-medical-blue/20 border border-medical-blue/40 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-medical-blue animate-pulse" />
            <span className="text-sm text-white/90 font-medium tracking-wide">
              Zahnarztpraxis Detmold
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 hyphens-auto"
          >
            Ästhetik &amp; Präzision
            <span className="block text-medical-blue mt-1">
              aus unserem hauseigenen
            </span>
            Meisterlabor.
          </motion.h1>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-base sm:text-lg leading-relaxed mb-10"
          >
            Modernste Zahntechnik und individuelle Beratung – alles aus einer
            Hand in Detmold. Ihr Lächeln ist unsere Meisterarbeit.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-medical-blue text-white font-semibold hover:bg-white hover:text-navy transition-colors shadow-lg shadow-medical-blue/30"
            >
              Termin buchen
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#leistungen"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Unsere Leistungen
            </a>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 flex flex-col sm:flex-row gap-6 sm:gap-12"
        >
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-medical-blue/20 border border-medical-blue/30 flex items-center justify-center">
                <Icon className="w-5 h-5 text-medical-blue" />
              </div>
              <div>
                <p className="text-white font-bold text-xl leading-none">{value}</p>
                <p className="text-white/50 text-sm mt-0.5">{label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-0.5 h-8 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
