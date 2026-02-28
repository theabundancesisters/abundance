"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Sparkles, Zap } from "lucide-react";
import { BOOK_CALL_URL } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const programs = [
  {
    name: "Live Aligned Program",
    tagline: "Your Complete Transformation Journey",
    duration: "8 Weeks",
    description:
      "Free yourself from old negative thoughts and limiting beliefs. Clear repeating patterns that keep you stuck. This program combines ancient wisdom with modern technologies to address past traumas and DNA codes that create stagnation.",
    includes: [
      "12 private one-on-one sessions",
      "Brain-SHIFT™ Digital Course",
      "Align With Strengths Course",
      "Emotional Mastery Course",
      "Weekly sacred circles for coaching & attunements",
      "Guided meditations via Divine Library",
      "Behavioral assessment with personalized readback",
    ],
    cta: "Book A Call",
    href: BOOK_CALL_URL,
    featured: true,
    accent: "from-rose-400/30 to-purple-600/30",
    border: "border-rose-400/30",
  },
  {
    name: "Servant Leadership Program",
    tagline: "Heart-Led Leadership Mastery",
    duration: "Self-Paced (2 Levels)",
    description:
      "Define your personal mission statement aligned with your motivation, values, and strengths. Level 2 focuses on building high-performance teams through communication and trust — leading from the heart.",
    includes: [
      "12 private one-on-one coaching sessions (individual or team)",
      "Digital course with workbooks and exercises",
      "Monthly live group sessions",
      "Weekly sacred circles",
      "Level 1: Personal mission alignment",
      "Level 2: High-performance team building",
    ],
    cta: "Book A Call",
    href: BOOK_CALL_URL,
    featured: false,
    accent: "from-purple-600/20 to-rose-400/20",
    border: "border-purple-500/20",
  },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-600/15 blur-3xl animate-float" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <span className="tag bg-purple-600/20 border border-purple-500/20 text-purple-300 mb-6 inline-block">
              Deep Transformation
            </span>
          </motion.div>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="section-heading mb-6"
          >
            Transformation{" "}
            <span className="gradient-text">Programs</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            Comprehensive immersive experiences that combine ancient wisdom with
            modern science for profound, lasting change.
          </motion.p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {programs.map((program, i) => (
            <motion.div
              key={program.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className={`glass-card border ${program.border} p-8 md:p-12 relative overflow-hidden`}
            >
              {program.featured && (
                <div className="absolute top-6 right-6">
                  <span className="tag bg-rose-400/20 border border-rose-400/30 text-rose-300">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-400/50 to-transparent" />

              <div className="grid lg:grid-cols-2 gap-10 items-start">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${program.accent} flex items-center justify-center`}
                    >
                      {program.featured ? (
                        <Sparkles className="w-5 h-5 text-rose-300" />
                      ) : (
                        <Zap className="w-5 h-5 text-purple-300" />
                      )}
                    </div>
                    <span className="text-xs font-semibold tracking-widest uppercase text-white/40">
                      {program.duration}
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-2">
                    {program.name}
                  </h2>
                  <p className="text-rose-300/70 text-sm font-medium mb-6">
                    {program.tagline}
                  </p>
                  <p className="text-white/60 leading-relaxed mb-8">
                    {program.description}
                  </p>
                  <a
                    href={program.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex"
                  >
                    {program.cta}
                    <ArrowRight size={16} />
                  </a>
                </div>

                <div>
                  <h3 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5">
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-3">
                    {program.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                        <span className="text-white/70 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl font-bold text-white mb-4">
              Not sure which program is right for you?
            </h2>
            <p className="text-white/50 mb-8">
              Book a complimentary call and we&apos;ll guide you to the perfect
              starting point for your transformation.
            </p>
            <a
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              Book A Free Call
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
