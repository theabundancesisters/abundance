"use client";

import { motion } from "framer-motion";
import { CheckCircle, Sparkles, Star, Zap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const memberships = [
  {
    name: "Inspired",
    tagline: "Change Your Life",
    price: "$111",
    period: "/month",
    description:
      "For those ready to stop overthinking and start moving with clarity and an open heart.",
    benefits: [
      "Greater confidence and mental clarity",
      "Peace around money and decision-making",
      "Motivation flowing naturally without forcing",
    ],
    includes: [
      "Brain-SHIFT™ Digital Course (workbook, 70 foundation statements, guided audios)",
      "Brain-SHIFT Circle — Mondays, 5:30 PM PT",
      "20% member discount on private sessions",
      "Option to upgrade: Activate Abundance Circle (Wed 4:30 PM PT)",
    ],
    href: "https://www.theleadingedge.life/offers/2WfMf5RN",
    featured: false,
    accent: "from-purple-600/20 to-rose-400/20",
    border: "border-purple-500/20",
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    name: "Manifestor",
    tagline: "Fast Track Results",
    price: "$222",
    period: "/month",
    description:
      "Combines mindset shifts with personalized energetic support for those ready to magnetize rather than chase results.",
    benefits: [
      "Unblock hidden resistance and self-sabotage",
      "Strengthen energetic boundaries and receiving channels",
      "Divinely-timed breakthroughs with ongoing support",
    ],
    includes: [
      "1 Private 1:1 Energy Session monthly",
      "Brain-SHIFT™ Digital Course",
      "Brain-SHIFT Circle — Mondays, 5:30 PM PT",
      "Activate Abundance Circle — Wednesdays, 4:30 PM PT",
      "Divine Library (zodiac transmissions, meditations, activations)",
      "20% member discount on additional sessions",
    ],
    href: "https://www.theleadingedge.life/offers/kFBfYDr2",
    featured: true,
    accent: "from-rose-400/30 to-purple-600/30",
    border: "border-rose-400/30",
    icon: <Star className="w-6 h-6" />,
  },
  {
    name: "Aligned",
    tagline: "Your Divine Calling",
    price: "$333",
    period: "/month",
    description:
      "The complete Live Aligned Program as a monthly subscription — for step-by-step transformation with full support.",
    benefits: [
      "Embody your soul's vision with confidence",
      "Align energy with desires to magnetically attract them",
      "Take grounded, intuitive action from inner power",
    ],
    includes: [
      "1 Private Energy Session monthly",
      "Divine Coaching: 20-minute weekly check-ins",
      "Brain-SHIFT Circle — Mondays, 5:30 PM PT",
      "Activate Abundance Circle — Wednesdays, 4:30 PM PT",
      "Ascension Circle — Wednesdays, 6:00 PM PT",
      "Brain-SHIFT™ Digital Course",
      "Align With Strengths Course + Assessment ($619 value)",
      "Master Document Tracking System",
      "25% member discount on additional sessions",
    ],
    href: "https://www.theleadingedge.life/offers/X7gAzii9",
    featured: false,
    accent: "from-gold-500/20 to-purple-600/20",
    border: "border-gold-500/20",
    icon: <Zap className="w-6 h-6" />,
  },
];

export default function MembershipsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 hero-bg" />
        <div className="absolute top-1/4 right-1/3 w-80 h-80 rounded-full bg-rose-400/10 blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-gold-500/10 blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <span className="tag bg-gold-500/10 border border-gold-500/20 text-gold-400 mb-6 inline-block">
              Ongoing Divine Support
            </span>
          </motion.div>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="section-heading mb-6"
          >
            Sacred{" "}
            <span className="gradient-text-gold">Memberships</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="text-plum-600 text-lg max-w-2xl mx-auto"
          >
            Join a sacred community with weekly circles, private sessions, and
            continuous energetic support. Choose the level that calls to your soul.
          </motion.p>
        </div>
      </section>

      {/* Membership Cards */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6 items-start">
            {memberships.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`glass-card border ${m.border} relative overflow-hidden ${
                  m.featured ? "ring-1 ring-rose-200 shadow-xl shadow-rose-100" : ""
                }`}
              >
                {m.featured && (
                  <>
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-rose-400 to-transparent" />
                    <div className="absolute top-5 right-5">
                      <span className="tag bg-rose-400/20 border border-rose-400/30 text-rose-300 text-xs">
                        Most Popular
                      </span>
                    </div>
                  </>
                )}

                <div className="p-8">
                  {/* Header */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${m.accent} flex items-center justify-center text-rose-300 mb-5`}
                  >
                    {m.icon}
                  </div>
                  <div className="text-xs font-semibold tracking-widest uppercase text-plum-300 mb-1">
                    {m.tagline}
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-plum-900 mb-1">
                    {m.name}
                  </h2>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-bold gradient-text-gold">
                      {m.price}
                    </span>
                    <span className="text-plum-400 text-sm">{m.period}</span>
                  </div>
                  <p className="text-plum-600 text-sm leading-relaxed mb-6">
                    {m.description}
                  </p>

                  <a
                    href={m.href}
                    className={m.featured ? "btn-primary w-full mb-8" : "btn-outline w-full mb-8"}
                  >
                    {m.featured ? "Become A Member" : "Enroll Now"}
                  </a>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold tracking-widest uppercase text-plum-300 mb-3">
                      Transformation Outcomes
                    </h4>
                    <ul className="space-y-2">
                      {m.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                          <span className="text-plum-700 text-sm">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Includes */}
                  <div>
                    <h4 className="text-xs font-semibold tracking-widest uppercase text-plum-300 mb-3">
                      What&apos;s Included
                    </h4>
                    <ul className="space-y-2">
                      {m.includes.map((inc) => (
                        <li key={inc} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-rose-400/70 shrink-0 mt-0.5" />
                          <span className="text-plum-600 text-xs">{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Circles Schedule */}
      <section className="py-20 relative overflow-hidden section-alt">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <span className="tag bg-rose-400/10 border border-rose-400/20 text-rose-300 mb-4 inline-block">
              Sacred Circles
            </span>
            <h2 className="section-heading">
              Weekly <span className="gradient-text">Gathering Schedule</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                name: "Brain-SHIFT Circle",
                day: "Mondays",
                time: "5:30 PM PT",
                desc: "Subconscious reprogramming and belief clearing",
              },
              {
                name: "Activate Abundance",
                day: "Wednesdays",
                time: "4:30 PM PT",
                desc: "Abundance activation and field attunements",
              },
              {
                name: "Ascension Circle",
                day: "Wednesdays",
                time: "6:00 PM PT",
                desc: "Advanced soul alignment and ascension work",
              },
            ].map((circle, i) => (
              <motion.div
                key={circle.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="font-semibold text-plum-900 mb-1">{circle.name}</div>
                <div className="text-gold-400 text-sm font-medium mb-3">
                  {circle.day} · {circle.time}
                </div>
                <p className="text-plum-500 text-xs">{circle.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Comparison note */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-plum-400 text-sm">
            All memberships include access to the Brain-SHIFT™ Digital Course
            and community circles. Upgrade anytime. Cancel monthly.
          </p>
        </div>
      </section>
    </>
  );
}
