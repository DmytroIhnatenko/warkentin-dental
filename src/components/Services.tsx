"use client";

import { motion } from "framer-motion";
import { Bone, Smile, ShieldCheck, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Bone,
    title: "Implantologie",
    description:
      "Dauerhafter Zahnersatz durch modernste Implantattechnik. Festsitzend, natürlich und langlebig – direkt aus unserem Meisterlabor.",
    features: ["Sofortimplantation", "Knochenaufbau", "3D-Planung"],
  },
  {
    icon: Smile,
    title: "Prothetik",
    description:
      "Individueller Zahnersatz, der perfekt zu Ihnen passt. Kronen, Brücken und Prothesen in höchster ästhetischer Qualität.",
    features: ["Keramikkronen", "Inlays & Onlays", "Vollprothesen"],
  },
  {
    icon: ShieldCheck,
    title: "Prophylaxe",
    description:
      "Professionelle Zahnreinigung und vorsorgende Betreuung – für gesunde Zähne und ein strahlendes Lächeln ein Leben lang.",
    features: ["Profireinigung", "Bleaching", "Mundgesundheit"],
  },
];

/** Responsive 3-column service cards with hover lift animation */
export default function Services() {
  return (
    <section id="leistungen" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-medical-blue">
            Unsere Leistungen
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mt-3">
            Alles für Ihr Lächeln
          </h2>
          <p className="text-slate/60 mt-4 max-w-xl mx-auto">
            Von der Prophylaxe bis zum vollständigen Zahnersatz – wir begleiten
            Sie mit modernster Technik und persönlicher Betreuung.
          </p>
        </motion.div>

        {/* Cards grid: 1 col mobile → 2 col tablet → 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

type Service = (typeof services)[number];

/** Individual service card with lift-on-hover effect */
function ServiceCard({ service, delay }: { service: Service; delay: number }) {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      className="group bg-white border border-slate/10 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow cursor-default"
    >
      <div className="w-12 h-12 rounded-xl bg-azure flex items-center justify-center mb-6 group-hover:bg-medical-blue transition-colors">
        <Icon className="w-6 h-6 text-medical-blue group-hover:text-white transition-colors" />
      </div>

      <h3 className="font-heading text-xl font-bold text-navy mb-3">
        {service.title}
      </h3>
      <p className="text-slate/60 text-sm leading-relaxed mb-6">
        {service.description}
      </p>

      <ul className="space-y-2 mb-8">
        {service.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm text-slate/70">
            <span className="w-1.5 h-1.5 rounded-full bg-medical-blue" />
            {f}
          </li>
        ))}
      </ul>

      <a
        href="#kontakt"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-medical-blue hover:gap-3 transition-all"
      >
        Termin vereinbaren <ArrowRight className="w-4 h-4" />
      </a>
    </motion.div>
  );
}
