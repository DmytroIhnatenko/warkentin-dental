"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, MapPin, Phone, Mail, Clock } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  telefon: string;
  nachricht: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const contactInfo = [
  { icon: MapPin, label: "Adresse", value: "Hermannstraße 31, 32756 Detmold" },
  { icon: Phone, label: "Telefon", value: "+49 5231 00000", href: "tel:+4952310000" },
  { icon: Mail, label: "E-Mail", value: "info@zahnarzt-warkentin.de", href: "mailto:info@zahnarzt-warkentin.de" },
  { icon: Clock, label: "Öffnungszeiten", value: "Mo–Fr 8:00–18:00 Uhr" },
];

/** Validates all form fields, returns error map */
function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Bitte geben Sie Ihren Namen ein.";
  if (!data.email.trim()) {
    errors.email = "Bitte geben Sie Ihre E-Mail ein.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Ungültige E-Mail-Adresse.";
  }
  if (!data.telefon.trim()) errors.telefon = "Bitte geben Sie Ihre Telefonnummer ein.";
  if (!data.nachricht.trim()) errors.nachricht = "Bitte schreiben Sie eine kurze Nachricht.";
  return errors;
}

/** Contact section with form and clinic info */
export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", telefon: "", nachricht: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    setApiError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setApiError(data?.error ?? "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.");
      }
    } catch {
      setApiError("Verbindungsfehler. Bitte prüfen Sie Ihre Internetverbindung.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="kontakt" className="py-24 bg-azure">
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
            Kontakt
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mt-3">
            Termin vereinbaren
          </h2>
          <p className="text-slate/60 mt-4 max-w-xl mx-auto">
            Schreiben Sie uns – wir melden uns innerhalb von 24 Stunden bei Ihnen.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-medical-blue/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-medical-blue" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate/40 mb-0.5">
                    {label}
                  </p>
                  {href ? (
                    <a href={href} className="text-slate font-medium hover:text-medical-blue transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-slate font-medium">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="mt-4 rounded-2xl overflow-hidden h-48 bg-navy/10 relative">
              <Image
                src="/images/workspace.jpg"
                alt="Praxisstandort"
                fill
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 text-center">
                  <p className="text-navy font-semibold text-sm">Hermannstraße 31</p>
                  <p className="text-slate/60 text-xs">32756 Detmold</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 bg-white rounded-2xl shadow-lg p-5 sm:p-8"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <SuccessMessage key="success" onReset={() => { setSubmitted(false); setForm({ name: "", email: "", telefon: "", nachricht: "" }); }} />
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Name *" name="name" type="text" placeholder="Max Mustermann" value={form.name} onChange={handleChange} error={errors.name} />
                    <Field label="Telefon *" name="telefon" type="tel" placeholder="+49 5231 …" value={form.telefon} onChange={handleChange} error={errors.telefon} />
                  </div>
                  <Field label="E-Mail *" name="email" type="email" placeholder="max@beispiel.de" value={form.email} onChange={handleChange} error={errors.email} />
                  <div>
                    <label className="block text-sm font-medium text-slate mb-1.5">
                      Nachricht *
                    </label>
                    <textarea
                      name="nachricht"
                      rows={5}
                      placeholder="Wie können wir Ihnen helfen?"
                      value={form.nachricht}
                      onChange={handleChange}
                      className={`w-full rounded-xl border px-4 py-3 text-sm text-slate placeholder:text-slate/30 outline-none resize-none transition-colors focus:ring-2 focus:ring-medical-blue/30 ${
                        errors.nachricht ? "border-red-400 bg-red-50" : "border-slate/15 bg-azure/50 focus:border-medical-blue"
                      }`}
                    />
                    {errors.nachricht && <p className="text-red-500 text-xs mt-1">{errors.nachricht}</p>}
                  </div>

                  {apiError && (
                    <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
                      {apiError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-medical-blue text-white font-semibold hover:bg-navy transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Nachricht senden <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/** Reusable text/email/tel input field with label and error */
function Field({
  label, name, type, placeholder, value, onChange, error,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate mb-1.5">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full rounded-xl border px-4 py-3 text-sm text-slate placeholder:text-slate/30 outline-none transition-colors focus:ring-2 focus:ring-medical-blue/30 ${
          error ? "border-red-400 bg-red-50" : "border-slate/15 bg-azure/50 focus:border-medical-blue"
        }`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

/** Success state shown after form submission */
function SuccessMessage({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center py-12 text-center"
    >
      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
        <CheckCircle2 className="w-8 h-8 text-green-500" />
      </div>
      <h3 className="font-heading text-2xl font-bold text-navy mb-2">
        Vielen Dank!
      </h3>
      <p className="text-slate/60 text-sm max-w-sm mb-8">
        Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns innerhalb von
        24 Stunden bei Ihnen.
      </p>
      <button
        onClick={onReset}
        className="px-6 py-2.5 rounded-full border border-slate/20 text-sm font-medium text-slate hover:bg-azure transition-colors"
      >
        Neue Nachricht senden
      </button>
    </motion.div>
  );
}
