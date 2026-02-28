"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  Star,
  Heart,
  BookOpen,
  Users,
  Zap,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { BOOK_CALL_URL } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const services = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "1:1 Sessions",
    tagline: "Personalized Transformation",
    description:
      "Deeply personal one-on-one energy sessions, mentoring, and behavioral coaching tailored to your unique soul blueprint.",
    cta: "Check Out Sessions",
    href: "/sessions",
    color: "from-rose-400/20 to-purple-600/20",
    border: "border-rose-400/20",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Digital Courses",
    tagline: "Self-Paced Mastery",
    description:
      "Master your mind, align with your strengths, and lead from the heart with our transformational digital course library.",
    cta: "Check Out Courses",
    href: "/courses",
    color: "from-purple-500/20 to-purple-800/20",
    border: "border-purple-500/20",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Memberships",
    tagline: "Ongoing Divine Support",
    description:
      "Join a sacred community with weekly circles, private sessions, and continuous energetic support on your journey.",
    cta: "Become a Member",
    href: "/memberships",
    color: "from-gold-500/20 to-rose-400/20",
    border: "border-gold-500/20",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Programs",
    tagline: "Deep Immersion",
    description:
      "Comprehensive transformation programs combining ancient wisdom with modern science for lasting, profound change.",
    cta: "Check Out Programs",
    href: "/programs",
    color: "from-purple-600/20 to-rose-400/20",
    border: "border-purple-600/20",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Workshops",
    tagline: "Live Group Experiences",
    description:
      "Immersive group workshops designed to activate, align, and elevate your energy in a powerful collective field.",
    cta: "Check Out Workshops",
    href: "/workshops",
    color: "from-rose-400/20 to-gold-500/20",
    border: "border-rose-400/20",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Free Gifts",
    tagline: "Start Here",
    description:
      "Access our sacred free offerings — weekly group clearings, the Inner Critic guide, and the Life Wheel Assessment.",
    cta: "Claim Your Gifts",
    href: "/gifts",
    color: "from-gold-300/20 to-purple-500/20",
    border: "border-gold-300/20",
  },
];

const testimonial = {
  quote:
    "I went from the doctors telling me I needed a liver transplant, to riding horses in 6 months.",
  author: "Julia",
  context: "Client Transformation",
};

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Mesh background */}
        <div className="absolute inset-0 mesh-bg" />

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-rose-400/10 blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-600/15 blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-800/10 blur-3xl"
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            className="mb-6"
          >
            <span className="tag bg-rose-400/10 border border-rose-400/20 text-rose-300">
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
            Remember the truth{" "}
            <span className="gradient-text">of who you are</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Activate your abundant codes. Step into your true power — aligned,
            confident, and purpose-driven. Divine guidance for spiritual
            liberation of mind, body, and soul.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base"
            >
              Book A Call Now
            </a>
            <Link href="/about" className="btn-outline text-base">
              Meet the Sisters
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Social proof strip */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={4}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/30 text-sm"
          >
            <span className="flex items-center gap-2">
              <Sparkles size={14} className="text-gold-400" />
              20+ Years Experience
            </span>
            <span className="w-px h-4 bg-white/10" />
            <span className="flex items-center gap-2">
              <Star size={14} className="text-gold-400" />
              Thousands of Clients
            </span>
            <span className="w-px h-4 bg-white/10" />
            <span className="flex items-center gap-2">
              <Heart size={14} className="text-gold-400" />
              Multiple Modalities
            </span>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/20 text-xs tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </section>

      {/* ── ABOUT PREVIEW ── */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950 via-purple-900/30 to-purple-950" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="tag bg-purple-600/20 border border-purple-500/20 text-purple-300 mb-6 inline-block">
                About Us
              </span>
              <h2 className="section-heading mb-6">
                It&apos;s A{" "}
                <span className="gradient-text">Family Affair</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                We are teachers and channels here to serve humanity through
                divine guidance to spiritual liberation of mind, body, and soul.
                As actual sisters, we bring a combined 20 years of experience as
                behavioral science specialists and business consultants.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                Our work addresses the common human threads of unworthiness and
                fear — helping leaders, entrepreneurs, and changemakers step
                into their true power, aligned, confident, and purpose-driven.
              </p>
              <Link href="/about" className="btn-outline inline-flex">
                Our Story
                <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Stats / Cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { num: "20+", label: "Years of Experience" },
                { num: "1000s", label: "Lives Transformed" },
                { num: "6", label: "Transformation Modalities" },
                { num: "Brain-SHIFT™", label: "Proprietary Method" },
              ].map((stat) => (
                <div key={stat.label} className="glass-card p-6 text-center">
                  <div className="font-serif text-3xl font-bold gradient-text-gold mb-2">
                    {stat.num}
                  </div>
                  <div className="text-white/50 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="tag bg-rose-400/10 border border-rose-400/20 text-rose-300 mb-4 inline-block">
              Our Offerings
            </span>
            <h2 className="section-heading mb-4">
              Your Path to{" "}
              <span className="gradient-text">Divine Alignment</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Every offering is designed to meet you exactly where you are on
              your transformation journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link
                  href={service.href}
                  className={`block glass-card-hover p-8 h-full group border ${service.border}`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-rose-300 mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                  <div className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-2">
                    {service.tagline}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <span className="flex items-center gap-2 text-rose-300 text-sm font-medium group-hover:gap-3 transition-all duration-200">
                    {service.cta}
                    <ChevronRight size={14} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-800/20 via-rose-400/5 to-purple-950" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(217,164,199,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-12 md:p-16"
          >
            <Sparkles className="w-8 h-8 text-gold-400 mx-auto mb-8" />
            <blockquote className="font-serif text-2xl md:text-4xl font-bold text-white leading-tight mb-8">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <div className="divider-glow mb-6" />
            <cite className="not-italic">
              <div className="font-semibold text-white">{testimonial.author}</div>
              <div className="text-white/40 text-sm">{testimonial.context}</div>
            </cite>
          </motion.div>
        </div>
      </section>

      {/* ── FREE GIFTS CTA ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card border border-gold-500/20 p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent" />

            <div className="relative z-10">
              <span className="tag bg-gold-500/10 border border-gold-500/20 text-gold-400 mb-6 inline-block">
                ✦ Free Access ✦
              </span>
              <h2 className="section-heading mb-4">
                Our <span className="gradient-text-gold">Gifts For You</span>
              </h2>
              <p className="text-white/60 max-w-xl mx-auto mb-10">
                Free access to our sacred circle and downloads for your
                abundance. Start your transformation journey today — no
                investment required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/gifts" className="btn-gold">
                  Claim Your Free Gifts
                  <Sparkles size={16} />
                </Link>
                <a
                  href={BOOK_CALL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  Book Your Call Now
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
