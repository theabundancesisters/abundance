"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Sparkles, Users } from "lucide-react";
import Link from "next/link";
import { BOOK_CALL_URL } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const workshopThemes = [
  {
    title: "Energy Activation Intensive",
    description:
      "A full-day immersive experience designed to clear your energetic field, activate your abundance codes, and align you with your highest timeline.",
    format: "Live Virtual or In-Person",
    accent: "from-rose-400/20 to-purple-600/20",
    border: "border-rose-400/20",
  },
  {
    title: "Brain-SHIFT™ Live",
    description:
      "Experience the transformational Brain-SHIFT™ methodology in a powerful group setting — amplified by collective energy and real-time breakthroughs.",
    format: "Live Virtual",
    accent: "from-purple-600/20 to-rose-400/20",
    border: "border-purple-500/20",
  },
  {
    title: "Leadership Alignment Retreat",
    description:
      "For leaders and entrepreneurs ready to align their personal mission with their business vision — a half-day strategic soul alignment experience.",
    format: "In-Person",
    accent: "from-gold-500/20 to-purple-600/20",
    border: "border-gold-500/20",
  },
  {
    title: "Soul Circle Gathering",
    description:
      "Monthly intimate group gatherings for deep connection, collective healing, and community support on the spiritual growth path.",
    format: "Live Virtual",
    accent: "from-rose-400/20 to-gold-500/20",
    border: "border-rose-400/20",
  },
];

export default function WorkshopsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl animate-float" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <span className="tag bg-rose-400/10 border border-rose-400/20 text-rose-300 mb-6 inline-block">
              Live Group Experiences
            </span>
          </motion.div>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="section-heading mb-6"
          >
            <span className="gradient-text">Workshops</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="text-white/60 text-lg max-w-2xl mx-auto mb-8"
          >
            Immersive group experiences designed to activate, align, and elevate
            your energy in a powerful collective field. More powerful together.
          </motion.p>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={3}>
            <a
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Inquire About Workshops
            </a>
          </motion.div>
        </div>
      </section>

      {/* Coming Up */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="tag bg-gold-500/10 border border-gold-500/20 text-gold-400 mb-4 inline-block">
              Workshop Themes
            </span>
            <h2 className="section-heading">
              Experiences We{" "}
              <span className="gradient-text">Facilitate</span>
            </h2>
            <p className="text-white/50 mt-4 max-w-xl mx-auto">
              Our workshops are created seasonally and by request. Reach out to
              be notified of upcoming live events.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {workshopThemes.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`glass-card border ${w.border} p-8`}
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${w.accent} flex items-center justify-center text-rose-300 mb-5`}
                >
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-white/30 mb-3">
                  <Users size={12} />
                  {w.format}
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-4">
                  {w.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed mb-6">
                  {w.description}
                </p>
                <a
                  href={BOOK_CALL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-rose-300 text-sm font-medium hover:gap-3 transition-all duration-200"
                >
                  Inquire About This Workshop
                  <ArrowRight size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notify Me */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-800/20 via-rose-400/5 to-purple-950" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card border border-rose-400/20 p-12"
          >
            <Calendar className="w-8 h-8 text-rose-400 mx-auto mb-6" />
            <h2 className="font-serif text-3xl font-bold text-white mb-4">
              Stay In The Loop
            </h2>
            <p className="text-white/50 mb-8">
              Workshop dates are released seasonally. Connect with us to be
              added to the notification list and get early access to upcoming
              events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/connect" className="btn-primary">
                Get Notified
              </Link>
              <Link href="/gifts" className="btn-outline">
                Free Weekly Circle
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
