"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Heart, Users, Star } from "lucide-react";
import { BOOK_CALL_URL } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const modalities = [
  "Energy Clearing",
  "Divine Guidance Channeling",
  "Brain-SHIFT™ Methodology",
  "Behavioral Science",
  "Business Consulting",
  "Emotional Mastery",
  "Soul Alignment",
  "Pendulum Divination",
  "Subconscious Reprogramming",
  "Servant Leadership",
];

const timeline = [
  {
    year: "1980",
    title: "The Legacy Begins",
    description:
      "Their mother, Jeanne McGuire, establishes her consulting business in Boston, laying the foundation for a family legacy of transformation.",
  },
  {
    year: "20 Years Ago",
    title: "The Journey Starts",
    description:
      "Claudia and Julia begin their work as behavioral science specialists and business consultants, addressing the core human threads of unworthiness and fear.",
  },
  {
    year: "Brain-SHIFT™",
    title: "A Proprietary Breakthrough",
    description:
      "The sisters develop Brain-SHIFT™ — a revolutionary process helping clients eliminate stress and limiting beliefs at the subconscious level.",
  },
  {
    year: "Today",
    title: "The Leading Edge Life",
    description:
      "Thousands of clients transformed. Multiple modalities mastered. A global community of leaders, entrepreneurs, and changemakers aligned with their divine purpose.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute top-1/3 left-1/3 w-72 h-72 rounded-full bg-rose-400/10 blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-purple-600/15 blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
          >
            <span className="tag bg-rose-400/10 border border-rose-400/20 text-rose-300 mb-6 inline-block">
              ✦ The Abundance Sisters ✦
            </span>
          </motion.div>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="section-heading mb-6"
          >
            Teachers, Channels &amp;{" "}
            <span className="gradient-text">Soul Guides</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            We are here to serve humanity through divine guidance to spiritual
            liberation of mind, body, and soul.
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="tag bg-purple-600/20 border border-purple-500/20 text-purple-300 mb-6 inline-block">
                Our Mission
              </span>
              <h2 className="section-subheading mb-6">
                Our Journey to{" "}
                <span className="gradient-text">Your Liberation</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-5">
                We are teachers and channels here to serve humanity through
                divine guidance to spiritual liberation of mind, body, and soul.
                Our mission centers on helping you step into your true power —
                aligned, confident, and purpose-driven.
              </p>
              <p className="text-white/60 leading-relaxed mb-5">
                With over 20 years as behavioral science specialists and
                business consultants, we&apos;ve worked with thousands of
                clients — targeting leaders, entrepreneurs, and changemakers
                seeking to overcome limiting beliefs and unlock their divine
                potential.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                We address the common human threads of unworthiness and fear —
                in both personal and professional contexts — helping you move
                from the intellectual understanding of truth to the embodied
                experience of it.
              </p>
              <a
                href={BOOK_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex"
              >
                Book A Call
                <ArrowRight size={16} />
              </a>
            </motion.div>

            {/* Visual cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              {[
                {
                  icon: <Heart className="w-5 h-5 text-rose-400" />,
                  title: "Heart-Led Guidance",
                  desc: "Every session, course, and program is infused with love, intention, and divine wisdom.",
                },
                {
                  icon: <Sparkles className="w-5 h-5 text-gold-400" />,
                  title: "Ancient Wisdom + Modern Science",
                  desc: "We bridge timeless spiritual principles with cutting-edge behavioral science for transformative results.",
                },
                {
                  icon: <Users className="w-5 h-5 text-purple-300" />,
                  title: "Family Legacy",
                  desc: "Built on a foundation of multi-generational wisdom — our mother established her consulting firm in Boston in 1980.",
                },
                {
                  icon: <Star className="w-5 h-5 text-gold-400" />,
                  title: "Proven Results",
                  desc: "Thousands of clients have experienced profound transformation — physical, emotional, spiritual, and financial.",
                },
              ].map((item) => (
                <div key={item.title} className="glass-card p-5 flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-white/50 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950 via-purple-900/20 to-purple-950" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="tag bg-gold-500/10 border border-gold-500/20 text-gold-400 mb-4 inline-block">
              Our Story
            </span>
            <h2 className="section-heading">
              It&apos;s A{" "}
              <span className="gradient-text-gold">Family Affair</span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-rose-400/50 via-purple-400/30 to-transparent" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex gap-8 pl-20 relative"
                >
                  <div className="absolute left-5 top-1 w-6 h-6 rounded-full bg-gradient-to-br from-rose-400 to-purple-600 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <div className="glass-card p-6 flex-1">
                    <div className="text-xs font-semibold tracking-widest uppercase text-gold-400 mb-2">
                      {item.year}
                    </div>
                    <h3 className="font-serif text-xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modalities */}
      <section className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="tag bg-rose-400/10 border border-rose-400/20 text-rose-300 mb-4 inline-block">
              Our Expertise
            </span>
            <h2 className="section-heading">
              Trained Across{" "}
              <span className="gradient-text">Multiple Modalities</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {modalities.map((m) => (
              <span
                key={m}
                className="glass-card px-5 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                {m}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Connect CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card border border-rose-400/20 p-12"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent" />
            <Sparkles className="w-8 h-8 text-rose-400 mx-auto mb-6" />
            <h2 className="font-serif text-3xl font-bold text-white mb-4">
              Share Your Story
            </h2>
            <p className="text-white/50 mb-8">
              We&apos;d love to hear where you are on your journey and explore
              how we can support your transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/connect" className="btn-primary">
                Connect With Us
              </Link>
              <a
                href={BOOK_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Book A Call
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
