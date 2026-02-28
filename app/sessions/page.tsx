"use client";

import { motion } from "framer-motion";
import { ArrowRight, Heart, Sparkles, Star, Zap } from "lucide-react";
import { BOOK_CALL_URL } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const sessionTypes = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Energy Clearing Session",
    tagline: "Release & Realign",
    description:
      "A powerful one-on-one session designed to clear energetic blocks, remove limiting patterns from your field, and realign you with your highest timeline. We use divine guidance and channeled wisdom to identify and release what no longer serves you.",
    duration: "60–90 minutes",
    accent: "from-rose-400/20 to-purple-600/20",
    border: "border-rose-400/20",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Mentoring Session",
    tagline: "Strategic Soul Alignment",
    description:
      "Combine behavioral science with spiritual wisdom in this personalized mentoring experience. We assess your drivers, strengths, and patterns — then create a custom roadmap for your personal or professional transformation.",
    duration: "60–90 minutes",
    accent: "from-purple-600/20 to-rose-400/20",
    border: "border-purple-500/20",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Divine Guidance Reading",
    tagline: "Clarity from the Field",
    description:
      "Connect with higher wisdom through a channeled divine guidance session. Receive clarity on relationships, career, health, or any area of life where you seek deeper truth and directional support.",
    duration: "45–60 minutes",
    accent: "from-gold-500/20 to-purple-600/20",
    border: "border-gold-500/20",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Brain-SHIFT™ Intensive",
    tagline: "Rapid Reprogramming",
    description:
      "An intensive session using the proprietary Brain-SHIFT™ methodology to rapidly identify and reprogram the subconscious patterns, limiting beliefs, and fear-based codes keeping you from your next level.",
    duration: "90–120 minutes",
    accent: "from-rose-400/20 to-gold-500/20",
    border: "border-rose-400/20",
  },
];

const process = [
  {
    step: "01",
    title: "Book Your Call",
    desc: "Start with a complimentary discovery call to share where you are and what you're calling in.",
  },
  {
    step: "02",
    title: "Custom Session Design",
    desc: "We design your session based on your unique needs, goals, and energetic blueprint.",
  },
  {
    step: "03",
    title: "Deep Transformation",
    desc: "Experience profound shifts in a sacred, held space — energetically, emotionally, and spiritually.",
  },
  {
    step: "04",
    title: "Integration Support",
    desc: "Receive post-session guidance to anchor your shifts and continue your momentum forward.",
  },
];

export default function SessionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 hero-bg" />
        <div className="absolute top-1/4 left-1/3 w-72 h-72 rounded-full bg-rose-400/10 blur-3xl animate-float" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <span className="tag bg-rose-400/10 border border-rose-400/20 text-rose-300 mb-6 inline-block">
              Personalized Transformation
            </span>
          </motion.div>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="section-heading mb-6"
          >
            1:1 Sessions &amp;{" "}
            <span className="gradient-text">Mentoring</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="text-plum-600 text-lg max-w-2xl mx-auto mb-8"
          >
            Deeply personal, divinely guided sessions tailored to your unique
            soul blueprint. No two sessions are the same.
          </motion.p>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={3}>
            <a
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Your Session
            </a>
          </motion.div>
        </div>
      </section>

      {/* Session Types */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="section-heading">
              Session <span className="gradient-text">Offerings</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {sessionTypes.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`glass-card border ${s.border} p-8`}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.accent} flex items-center justify-center text-rose-300 mb-5`}
                >
                  {s.icon}
                </div>
                <div className="text-xs font-semibold tracking-widest uppercase text-plum-300 mb-2">
                  {s.tagline} · {s.duration}
                </div>
                <h3 className="font-serif text-2xl font-bold text-plum-900 mb-4">
                  {s.title}
                </h3>
                <p className="text-plum-600 leading-relaxed mb-6">
                  {s.description}
                </p>
                <a
                  href={BOOK_CALL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-rose-300 text-sm font-medium hover:gap-3 transition-all duration-200"
                >
                  Book This Session
                  <ArrowRight size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 relative overflow-hidden section-alt">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="tag bg-gold-500/10 border border-gold-500/20 text-gold-400 mb-4 inline-block">
              How It Works
            </span>
            <h2 className="section-heading">
              Your Journey <span className="gradient-text-gold">Begins Here</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="font-serif text-4xl font-bold gradient-text-gold mb-4">
                  {step.step}
                </div>
                <h3 className="font-semibold text-plum-900 mb-3">{step.title}</h3>
                <p className="text-plum-500 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card border border-rose-400/20 p-12"
          >
            <Sparkles className="w-8 h-8 text-rose-400 mx-auto mb-6" />
            <h2 className="font-serif text-3xl font-bold text-plum-900 mb-4">
              Ready to Step Into Your Power?
            </h2>
            <p className="text-plum-500 mb-8">
              Book a complimentary call to discover which session is the perfect
              fit for where you are right now.
            </p>
            <a
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              Book A Call Now
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
