"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ScanLine, Printer, Monitor, Microscope } from "lucide-react";

const technologies = [
  {
    icon: Monitor,
    title: "CAD/CAM Design",
    description:
      "Computergestützte Konstruktion von Zahnersatz mit höchster Passgenauigkeit – direkt in unserem Labor gefräst.",
  },
  {
    icon: Printer,
    title: "3D-Druck",
    description:
      "Modernster 3D-Druck für Schienen, Modelle und Prototypen in zahntechnischer Präzision.",
  },
  {
    icon: ScanLine,
    title: "Digitaler Scan",
    description:
      "Komfortabler Intraoralscanner ersetzt den klassischen Abdruck – schnell, präzise und angenehm.",
  },
  {
    icon: Microscope,
    title: "Meisterlabor",
    description:
      "Hauseigenes zahntechnisches Labor für kurze Wege, maximale Qualitätskontrolle und individuelle Anpassung.",
  },
];

/** Technology showcase section with icon cards on dark background */
export default function Technology() {
  return (
    <section id="labor" className="py-24 bg-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-medical-blue">
              Labor &amp; Technologie
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mt-3 leading-tight">
              Modernes Labor –
              <br />
              <span className="text-medical-blue">direkt für Sie.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/50 leading-relaxed lg:max-w-sm"
          >
            Unser hauseigenes Meisterlabor verbindet Handwerkskunst mit
            Digitaltechnik – für Zahnersatz, der perfekt sitzt und natürlich
            aussieht.
          </motion.p>
        </div>

        {/* Tech grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, i) => (
            <TechCard key={tech.title} tech={tech} delay={i * 0.1} />
          ))}
        </div>

        {/* Image strip — static container, no fill, no motion on image */}
        <div className="mt-16 rounded-2xl overflow-hidden relative shadow-xl">
          <Image
            src="/images/dental-model.jpg"
            alt="Zahntechnisches Labor Warkentin"
            width={1280}
            height={400}
            priority
            unoptimized
            style={{ width: "100%", height: "auto", objectFit: "cover", display: "block" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/80 to-transparent flex items-center">
            <div className="px-5 sm:px-10">
              <p className="text-white/50 text-sm uppercase tracking-widest mb-2">
                Hergestellt in Detmold
              </p>
              <p className="text-white font-heading text-xl sm:text-2xl font-bold">
                Zahntechnik auf höchstem Niveau.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type Tech = (typeof technologies)[number];

/** Single technology feature card */
function TechCard({ tech, delay }: { tech: Tech; delay: number }) {
  const Icon = tech.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
    >
      <div className="w-11 h-11 rounded-lg bg-medical-blue/20 flex items-center justify-center mb-5">
        <Icon className="w-5 h-5 text-medical-blue" />
      </div>
      <h3 className="font-semibold text-white mb-2">{tech.title}</h3>
      <p className="text-white/50 text-sm leading-relaxed">{tech.description}</p>
    </motion.div>
  );
}
