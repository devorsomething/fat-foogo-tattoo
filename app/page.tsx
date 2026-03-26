"use client";

import { useState } from "react";
import WhatsAppButton from '@/components/WhatsAppButton';

const UNSPLASH = {
  hero: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=1920&q=80",
  artist: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=800&q=80",
  traditional: "https://images.unsplash.com/photo-1560707303-4e980ce876ad?w=600&q=80",
  japanese: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&q=80",
  minimalist: "https://images.unsplash.com/photo-1590246814883-57764fd2e00f?w=600&q=80",
  realistic: "https://images.unsplash.com/photo-1542727313-4f3e99aa2568?w=600&q=80",
  custom: "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?w=600&q=80",
  studio: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=800&q=80",
};

const STYLES = [
  {
    title: "Traditional / Old School",
    desc: "Klassische Motive, kräftige Farben, unvergessliche Lines.",
    img: UNSPLASH.traditional,
    alt: "Traditional old school tattoo",
  },
  {
    title: "Japanese / Irezumi",
    desc: "Yin-Yang, Drachen, Koi, Kirschblüten — tiefe asiatische Tradition.",
    img: UNSPLASH.japanese,
    alt: "Japanese irezumi tattoo",
  },
  {
    title: "Minimalist / Fine Line",
    desc: "Zarte Linien, geometrisch, perfekte Schriftzüge & filigrane Motive.",
    img: UNSPLASH.minimalist,
    alt: "Minimalist fine line tattoo",
  },
  {
    title: "Realistic / Portraits",
    desc: "Schwarzweiß oder farbig — lebensechte Kunst auf deiner Haut.",
    img: UNSPLASH.realistic,
    alt: "Realistic portrait tattoo",
  },
  {
    title: "Custom / Freehand",
    desc: "Individuelle Designs, direkt mit dir entwickelt. Dein einzigartiges Stück.",
    img: UNSPLASH.custom,
    alt: "Custom freehand tattoo design",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Beratung",
    desc: "Wir besprechen deine Idee, deinen Style und was dazu passt. Kostenlos & unverbindlich.",
  },
  {
    num: "02",
    title: "Entwurf",
    desc: "Ich erstelle einen individuellen Entwurf, der zu dir und deiner Haut passt.",
  },
  {
    num: "03",
    title: "Termin",
    desc: "Gemeinsam finden wir den passenden Termin. Sauber, professionell, sicher.",
  },
  {
    num: "04",
    title: "Heilung",
    desc: "Nachsorge-Tipps inklusive. Ich begleite dich durch den Heilungsprozess.",
  },
];

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    style: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-charcoal text-white overflow-x-hidden">

      {/* ===== HERO ===== */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${UNSPLASH.hero}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal" />
        <div className="absolute inset-0 bg-gradient-to-r from-blood-dark/30 to-transparent" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="font-heading text-gold text-lg md:text-xl tracking-[0.3em] mb-4 uppercase">
            Custom Tattoo Studio
          </p>
          <h1 className="font-heading text-[80px] md:text-[140px] lg:text-[180px] leading-none text-white mb-2">
            FAT FOOGO
          </h1>
          <div className="w-24 h-1 bg-blood-red mx-auto mb-6" />
          <p className="font-heading text-2xl md:text-4xl text-white/80 tracking-widest mb-10">
            BREGENZ · VORARLBERG
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#kontakt"
              className="font-heading text-xl tracking-wider px-10 py-4 bg-blood-red text-white hover:bg-blood-dark transition-colors duration-300 glow-blood uppercase"
            >
              Termin anfragen
            </a>
            <a
              href="tel:+43557452285"
              className="font-heading text-xl tracking-wider px-10 py-4 border-2 border-gold text-gold hover:bg-gold hover:text-charcoal transition-all duration-300 glow-gold uppercase"
            >
              +43 5574 52285
            </a>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white/50">
            <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* ===== INFO STRIP ===== */}
      <div className="bg-blood-dark py-4 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-4 text-sm text-white/80">
          <a href="tel:+43557452285" className="flex items-center gap-2 hover:text-white transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C9.6 21 3 14.4 3 6c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
            +43 5574 52285
          </a>
          <span className="hidden md:inline text-charcoal-lighter">|</span>
          <span className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            Bregenz, Vorarlberg
          </span>
          <span className="hidden md:inline text-charcoal-lighter">|</span>
          <span className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
            Termine nach Vereinbarung
          </span>
        </div>
      </div>

      {/* ===== ARTIST SECTION ===== */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-blood-red" />
            <img
              src={UNSPLASH.artist}
              alt="Fat Foogo — Tattoo Artist at work"
              className="w-full object-cover relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
              style={{ height: "520px" }}
            />
          </div>
          <div>
            <p className="font-heading text-gold tracking-[0.3em] text-sm mb-4">DER KÜNSTLER</p>
            <h2 className="font-heading text-6xl md:text-7xl text-white mb-2">FAT FOOGO</h2>
            <div className="w-16 h-1 bg-blood-red mb-8" />
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Custom Tattoo Artist mit Leidenschaft für individuelle Designs. 
              Spezialisiert auf traditionelle und moderne Stile — von Old School Klassikern 
              bis hin zu filigranen Japanese-Irezumi-Werken.
            </p>
            <p className="text-white/70 leading-relaxed mb-8">
              Mein Ansatz: Jedes Tattoo erzählt <em>deine</em> Geschichte. 
              Ich nehme mir Zeit für jedes Projekt, arbeite präzise und mit höchstem 
              Hygieneanspruch. Hier entsteht Kunst, die ein Leben lang hält.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Irezumi", "Old School", "Fine Line", "Realism", "Freehand"].map((tag) => (
                <span key={tag} className="px-4 py-1 border border-gold text-gold text-sm font-body">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== STYLES / PORTFOLIO ===== */}
      <section className="py-24 px-6 bg-charcoal-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-heading text-gold tracking-[0.3em] text-sm mb-4">PORTFOLIO</p>
            <h2 className="font-heading text-6xl md:text-7xl text-white">STILE &amp; TECHNIKEN</h2>
            <div className="w-24 h-1 bg-blood-red mx-auto mt-6" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {STYLES.map((style) => (
              <div
                key={style.title}
                className="group relative overflow-hidden bg-charcoal"
              >
                <img
                  src={style.img}
                  alt={style.alt}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ height: "300px" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading text-2xl text-white mb-2">{style.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{style.desc}</p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-gold">
                    <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== THE PROCESS ===== */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-heading text-gold tracking-[0.3em] text-sm mb-4">ABLAUF</p>
            <h2 className="font-heading text-6xl md:text-7xl text-white">SO ARBEITEN WIR</h2>
            <div className="w-24 h-1 bg-blood-red mx-auto mt-6" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((step, i) => (
              <div key={step.num} className="relative group">
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-blood-red to-transparent z-0" />
                )}
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 border-2 border-blood-red flex items-center justify-center group-hover:bg-blood-red transition-colors duration-300">
                    <span className="font-heading text-3xl text-blood-red group-hover:text-white transition-colors duration-300">{step.num}</span>
                  </div>
                  <h3 className="font-heading text-2xl text-white mb-3">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className="py-20 px-6 bg-blood-dark">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-heading text-gold tracking-[0.3em] text-sm mb-4">PREISE</p>
          <h2 className="font-heading text-5xl md:text-6xl text-white mb-6">
            INDIVIDUELLE PREISE
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-8" />
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            Preise nach Beratung — abhängig von Größe, Detail und Zeitaufwand. 
            Jedes Projekt wird individuell kalkuliert. Keine versteckten Kosten.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {[
              { label: "Small", desc: "bis ca. 5×5 cm" },
              { label: "Medium", desc: "bis ca. 15×15 cm" },
              { label: "Large", desc: "ab ca. 15×15 cm" },
            ].map((item) => (
              <div key={item.label} className="border border-white/20 p-6">
                <p className="font-heading text-2xl text-gold mb-2">{item.label}</p>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <a
            href="#kontakt"
            className="inline-block font-heading text-xl tracking-wider px-12 py-4 bg-gold text-charcoal hover:bg-gold-light transition-colors duration-300 uppercase"
          >
            Kostenlose Beratung
          </a>
        </div>
      </section>

      {/* ===== HYGIENE & QUALITÄT ===== */}
      <section className="py-24 px-6 bg-charcoal-lighter">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-heading text-gold tracking-[0.3em] text-sm mb-4">SICHERHEIT</p>
              <h2 className="font-heading text-5xl md:text-6xl text-white mb-2">HYGIENE &amp; QUALITÄT</h2>
              <div className="w-16 h-1 bg-blood-red mb-8" />
              <p className="text-white/70 leading-relaxed mb-8">
                In meinem Studio wird Sicherheit großgeschrieben. Ich arbeite nach 
                den höchsten Standards der Branche — 100% sterile Einwegnadeln, 
                medizinische Hygiene, zertifizierter Betrieb.
              </p>
              <div className="space-y-4">
                {[
                  "100% sterile Einwegnadeln",
                  "Medizinische Desinfektionsstandards",
                  "Zertifizierter Tattoo-Betrieb",
                  "Hochwertige, geprüfte Farben",
                  "Professionelle Nachsorge-Beratung",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blood-red flex-shrink-0" />
                    <span className="text-white/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={UNSPLASH.studio}
                alt="Fat Foogo Tattoo Studio — clean and professional"
                className="w-full object-cover"
                style={{ height: "480px" }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT & LOCATION ===== */}
      <section id="kontakt" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-heading text-gold tracking-[0.3em] text-sm mb-4">KONTAKT</p>
            <h2 className="font-heading text-6xl md:text-7xl text-white">JETZT ANFRAGEN</h2>
            <div className="w-24 h-1 bg-blood-red mx-auto mt-6" />
          </div>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              {submitted ? (
                <div className="bg-charcoal-light border border-gold p-10 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 border-2 border-gold flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-gold">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-3xl text-white mb-4">ANFRAGE GESENDET!</h3>
                  <p className="text-white/60">
                    Ich melde mich so schnell wie möglich bei dir. Danke für dein Vertrauen.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/60 text-sm mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full bg-charcoal-light border border-charcoal-lighter text-white px-4 py-3 focus:border-blood-red focus:outline-none transition-colors"
                        placeholder="Dein Name"
                      />
                    </div>
                    <div>
                      <label className="block text-white/60 text-sm mb-2">E-Mail *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full bg-charcoal-light border border-charcoal-lighter text-white px-4 py-3 focus:border-blood-red focus:outline-none transition-colors"
                        placeholder="deine@email.at"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/60 text-sm mb-2">Telefon</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full bg-charcoal-light border border-charcoal-lighter text-white px-4 py-3 focus:border-blood-red focus:outline-none transition-colors"
                        placeholder="+43 ..."
                      />
                    </div>
                    <div>
                      <label className="block text-white/60 text-sm mb-2">Style</label>
                      <select
                        name="style"
                        value={form.style}
                        onChange={handleChange}
                        className="w-full bg-charcoal-light border border-charcoal-lighter text-white px-4 py-3 focus:border-blood-red focus:outline-none transition-colors appearance-none"
                      >
                        <option value="">Style wählen</option>
                        <option>Traditional / Old School</option>
                        <option>Japanese / Irezumi</option>
                        <option>Minimalist / Fine Line</option>
                        <option>Realistic / Portraits</option>
                        <option>Custom / Freehand</option>
                        <option>Sonstiges</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Deine Idee *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full bg-charcoal-light border border-charcoal-lighter text-white px-4 py-3 focus:border-blood-red focus:outline-none transition-colors resize-none"
                      placeholder="Beschreibe dein Wunschtattoo, Größe, Stelle am Körper, Timeline..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full font-heading text-xl tracking-wider py-4 bg-blood-red text-white hover:bg-blood-dark transition-colors duration-300 glow-blood uppercase"
                  >
                    Anfrage senden
                  </button>
                </form>
              )}
            </div>
            {/* Info + Map */}
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-3xl text-white mb-6">KONTAKT INFOS</h3>
                <div className="space-y-4">
                  <a href="tel:+43557452285" className="flex items-center gap-4 text-white/70 hover:text-blood-red transition-colors group">
                    <div className="w-12 h-12 border border-charcoal-lighter group-hover:border-blood-red flex items-center justify-center transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C9.6 21 3 14.4 3 6c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
                    </div>
                    <div>
                      <p className="text-sm text-white/40">Telefon</p>
                      <p className="text-lg">+43 5574 52285</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 text-white/70">
                    <div className="w-12 h-12 border border-charcoal-lighter flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                    </div>
                    <div>
                      <p className="text-sm text-white/40">Standort</p>
                      <p className="text-lg">Bregenz, Vorarlberg</p>
                      <p className="text-sm text-white/40">Termine nach Vereinbarung</p>
                    </div>
                  </div>
                  <a href="mailto:info@fat-foogo.at" className="flex items-center gap-4 text-white/70 hover:text-blood-red transition-colors group">
                    <div className="w-12 h-12 border border-charcoal-lighter group-hover:border-blood-red flex items-center justify-center transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                    </div>
                    <div>
                      <p className="text-sm text-white/40">E-Mail</p>
                      <p className="text-lg">info@fat-foogo.at</p>
                    </div>
                  </a>
                </div>
              </div>
              {/* Google Maps Embed */}
              <div className="w-full h-64 bg-charcoal-light overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10760.944077!2d9.747!3d47.516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b6b3b8f3f3f3f%3A0x0!2sBregenz!5e0!3m2!1sen!2sat!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Fat Foogo Tattoo — Bregenz"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-charcoal-light border-t border-charcoal-lighter py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-heading text-3xl text-white mb-2">FAT FOOGO</h3>
              <p className="text-white/40 text-sm">Custom Tattoo Studio</p>
              <p className="text-white/40 text-sm">Bregenz · Vorarlberg</p>
            </div>
            <div>
              <h4 className="font-heading text-lg text-gold mb-4 tracking-wider">KONTAKT</h4>
              <div className="space-y-2 text-sm text-white/60">
                <a href="tel:+43557452285" className="block hover:text-white transition-colors">+43 5574 52285</a>
                <a href="mailto:info@fat-foogo.at" className="block hover:text-white transition-colors">info@fat-foogo.at</a>
                <p>Bregenz, Vorarlberg</p>
              </div>
            </div>
            <div>
              <h4 className="font-heading text-lg text-gold mb-4 tracking-wider">ÖFFNUNGSZEITEN</h4>
              <div className="space-y-2 text-sm text-white/60">
                <p>Termine nach Vereinbarung</p>
                <p className="text-xs text-white/30 mt-2">Bitte vorab anrufen oder schreiben</p>
              </div>
            </div>
          </div>
          <div className="border-t border-charcoal-lighter pt-8 flex flex-wrap justify-between items-center gap-4">
            <p className="text-white/30 text-sm">
              © {new Date().getFullYear()} Fat Foogo Tattoo. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6 text-sm text-white/30">
              <a href="#" className="hover:text-white/60 transition-colors">Impressum</a>
              <a href="#" className="hover:text-white/60 transition-colors">Datenschutz</a>
            </div>
          </div>
        </div>
      </footer>
      <WhatsAppButton phone="+43 664 456 7890" />
    </main>
  );
}
