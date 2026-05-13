"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Über 20 Jahre Erfahrung in der Zahntechnik",
  "Hauseigenes zahntechnisches Meisterlabor",
  "Modernste digitale Behandlungsmethoden",
  "Individuelle Beratung und persönliche Betreuung",
];

/** About section — images use explicit width/height + objectFit, no fill, no motion on image containers */
export default function About() {
  return (
    <section id="ueber-uns" className="py-24 bg-azure">
      <div className="max-w-7xl mx-auto px-5 md:px-10 space-y-16 lg:space-y-24">

        {/* Block 1: Image left, text right */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Static image container — no motion, no fill, no transforms */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/dental-model.jpg"
              alt="Zahntechnisches Meisterlabor"
              width={800}
              height={480}
              priority
              unoptimized
              style={{ width: "100%", height: "auto", objectFit: "cover", display: "block" }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-medical-blue">
              Über uns
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mt-3 mb-6 leading-tight">
              Präzision und Leidenschaft
              <br />seit über zwei Jahrzehnten.
            </h2>
            <p className="text-slate/60 leading-relaxed mb-8">
              Die Zahnarztpraxis Warkentin verbindet langjährige Erfahrung mit
              modernster Technologie. Unser hauseigenes Meisterlabor garantiert
              höchste Qualität – von der Planung bis zur Eingliederung.
            </p>
            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate/70">
                  <CheckCircle2 className="w-5 h-5 text-medical-blue mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Block 2: Text left, image right */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-medical-blue">
              Unser Anspruch
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mt-3 mb-6 leading-tight">
              Ihr Lächeln ist
              <br />unsere Meisterarbeit.
            </h2>
            <p className="text-slate/60 leading-relaxed mb-6">
              Jeder Patient ist einzigartig. Deshalb nehmen wir uns Zeit für eine
              gründliche Untersuchung und individuelle Behandlungsplanung – damit
              Sie genau das Ergebnis bekommen, das zu Ihnen passt.
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center px-6 py-3 rounded-full bg-navy text-white text-sm font-semibold hover:bg-medical-blue transition-colors"
            >
              Jetzt Termin vereinbaren
            </a>
          </motion.div>

          {/* Static image container — no motion, no fill, no transforms */}
          <div className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/Orthodontic-Tools-For-Common-Bite-Problems-scaled.jpeg"
              alt="Zahnarzt Werkzeuge"
              width={800}
              height={480}
              priority
              unoptimized
              style={{ width: "100%", height: "auto", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
