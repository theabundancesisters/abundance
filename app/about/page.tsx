"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
  "Energy Clearing", "Divine Guidance Channeling", "Brain-SHIFT™ Methodology",
  "Behavioral Science", "Business Consulting", "Emotional Mastery",
  "Soul Alignment", "Pendulum Divination", "Subconscious Reprogramming", "Servant Leadership",
];

const timeline = [
  { year: "1980", title: "The Legacy Begins", description: "Their mother, Jeanne McGuire, establishes her consulting business in Boston, laying the foundation for a family legacy of transformation." },
  { year: "20 Years Ago", title: "The Journey Starts", description: "Claudia and Julia begin their work as behavioral science specialists and business consultants, addressing the core human threads of unworthiness and fear." },
  { year: "Brain-SHIFT™", title: "A Proprietary Breakthrough", description: "The sisters develop Brain-SHIFT™ — a revolutionary process helping clients eliminate stress and limiting beliefs at the subconscious level." },
  { year: "Today", title: "The Leading Edge Life", description: "Thousands of clients transformed. Multiple modalities mastered. A global community of leaders, entrepreneurs, and changemakers aligned with their divine purpose." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="The Abundance Sisters"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-white/20" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-center w-full">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <span className="tag bg-rose-100 border border-rose-200 text-rose-600 mb-5 inline-block">✦ The Abundance Sisters ✦</span>
          </motion.div>
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={1} className="section-heading mb-4">
            Teachers, Channels &amp; <span className="gradient-text">Soul Guides</span>
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={2} className="text-plum-600 text-lg max-w-2xl mx-auto">
            We are here to serve humanity through divine guidance to spiritual liberation of mind, body, and soul.
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="tag bg-plum-100 border border-plum-200 text-plum-600 mb-6 inline-block">Our Mission</span>
              <h2 className="section-subheading mb-6">
                Our Journey to <span className="gradient-text">Your Liberation</span>
              </h2>
              <p className="text-plum-600 leading-relaxed mb-5">
                We are teachers and channels here to serve humanity through divine guidance to spiritual liberation of mind, body, and soul. Our mission centers on helping you step into your true power — aligned, confident, and purpose-driven.
              </p>
              <p className="text-plum-600 leading-relaxed mb-5">
                With over 20 years as behavioral science specialists and business consultants, we&apos;ve worked with thousands of clients — targeting leaders, entrepreneurs, and changemakers seeking to overcome limiting beliefs.
              </p>
              <p className="text-plum-600 leading-relaxed mb-8">
                We address the common human threads of unworthiness and fear — helping you move from the intellectual understanding of truth to the embodied experience of it.
              </p>
              <a href={BOOK_CALL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex">
                Book A Call <ArrowRight size={16} />
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
              <div className="relative rounded-3xl overflow-hidden aspect-square shadow-xl shadow-plum-100">
                <Image src="/images/sisters.jpg" alt="Claudia and Julia" fill className="object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <Heart className="w-5 h-5 text-rose-500" />, bg: "bg-rose-100", title: "Heart-Led Guidance", desc: "Every session is infused with love, intention, and divine wisdom." },
              { icon: <Sparkles className="w-5 h-5 text-gold-500" />, bg: "bg-gold-100", title: "Ancient Wisdom + Modern Science", desc: "Bridging timeless spiritual principles with cutting-edge behavioral science." },
              { icon: <Users className="w-5 h-5 text-plum-500" />, bg: "bg-plum-100", title: "Family Legacy", desc: "Multi-generational wisdom — our mother founded her consulting firm in Boston in 1980." },
              { icon: <Star className="w-5 h-5 text-gold-500" />, bg: "bg-gold-100", title: "Proven Results", desc: "Thousands of clients have experienced profound transformation across every area of life." },
            ].map((item) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card p-6">
                <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center mb-4`}>{item.icon}</div>
                <h4 className="font-semibold text-plum-900 mb-2">{item.title}</h4>
                <p className="text-plum-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Photos */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="tag bg-gold-100 border border-gold-300 text-gold-600 mb-4 inline-block">In Community</span>
            <h2 className="section-heading">The Work <span className="gradient-text">In Action</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { src: "/images/workshop-dome.jpg", alt: "Workshop in geodesic dome" },
              { src: "/images/workshop-group.jpg", alt: "Group workshop celebration" },
            ].map((img, i) => (
              <motion.div key={img.src} initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 md:py-32 section-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="tag bg-gold-100 border border-gold-300 text-gold-600 mb-4 inline-block">Our Story</span>
            <h2 className="section-heading">It&apos;s A <span className="gradient-text-gold">Family Affair</span></h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-rose-300 via-plum-200 to-transparent" />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-8 pl-20 relative">
                  <div className="absolute left-5 top-2 w-6 h-6 rounded-full bg-gradient-to-br from-rose-400 to-plum-600 flex items-center justify-center shadow-md">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <div className="card p-6 flex-1">
                    <div className="text-xs font-semibold tracking-widest uppercase text-gold-500 mb-2">{item.year}</div>
                    <h3 className="font-serif text-xl font-bold text-plum-900 mb-2">{item.title}</h3>
                    <p className="text-plum-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modalities */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <span className="tag bg-rose-100 border border-rose-200 text-rose-600 mb-4 inline-block">Our Expertise</span>
            <h2 className="section-heading">Trained Across <span className="gradient-text">Multiple Modalities</span></h2>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex flex-wrap gap-3 justify-center">
            {modalities.map((m) => (
              <span key={m} className="card px-5 py-2.5 text-sm text-plum-700 hover:text-plum-900 hover:border-plum-200 hover:shadow-md transition-all duration-200 cursor-default">
                {m}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 section-alt">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="card p-12 shadow-md">
            <Sparkles className="w-8 h-8 text-rose-400 mx-auto mb-6" />
            <h2 className="font-serif text-3xl font-bold text-plum-900 mb-4">Share Your Story</h2>
            <p className="text-plum-500 mb-8">We&apos;d love to hear where you are on your journey and explore how we can support your transformation.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/connect" className="btn-primary">Connect With Us</Link>
              <a href={BOOK_CALL_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">Book A Call</a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
