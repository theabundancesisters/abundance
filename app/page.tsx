"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Star, Heart, BookOpen, Users, Zap, ChevronRight, ArrowRight } from "lucide-react";
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
    icon: <Heart className="w-5 h-5" />,
    title: "1:1 Sessions",
    tagline: "Personalized Transformation",
    description: "Deeply personal one-on-one energy sessions, mentoring, and behavioral coaching tailored to your unique soul blueprint.",
    cta: "Check Out Sessions",
    href: "/sessions",
    iconBg: "bg-rose-100 text-rose-500",
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: "Digital Courses",
    tagline: "Self-Paced Mastery",
    description: "Master your mind, align with your strengths, and lead from the heart with our transformational digital course library.",
    cta: "Check Out Courses",
    href: "/courses",
    iconBg: "bg-plum-100 text-plum-600",
  },
  {
    icon: <Star className="w-5 h-5" />,
    title: "Memberships",
    tagline: "Ongoing Divine Support",
    description: "Join a sacred community with weekly circles, private sessions, and continuous energetic support on your journey.",
    cta: "Become a Member",
    href: "/memberships",
    iconBg: "bg-gold-100 text-gold-600",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Programs",
    tagline: "Deep Immersion",
    description: "Comprehensive transformation programs combining ancient wisdom with modern science for lasting, profound change.",
    cta: "Check Out Programs",
    href: "/programs",
    iconBg: "bg-plum-100 text-plum-600",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Workshops",
    tagline: "Live Group Experiences",
    description: "Immersive group workshops designed to activate, align, and elevate your energy in a powerful collective field.",
    cta: "Check Out Workshops",
    href: "/workshops",
    iconBg: "bg-rose-100 text-rose-500",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Free Gifts",
    tagline: "Start Here",
    description: "Access our sacred free offerings — weekly group clearings, the Inner Critic guide, and the Life Wheel Assessment.",
    cta: "Claim Your Gifts",
    href: "/gifts",
    iconBg: "bg-gold-100 text-gold-600",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/sisters.jpg"
            alt="The Abundance Sisters — Claudia and Julia"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/65 to-white/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-cream-50/50 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-2xl">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
              <span className="tag bg-rose-100 border border-rose-200 text-rose-600 mb-6 inline-block">
                ✦ The Abundance Sisters ✦
              </span>
            </motion.div>
            <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={1} className="section-heading mb-6">
              Remember the truth{" "}
              <span className="gradient-text">of who you are</span>
            </motion.h1>
            <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={2} className="text-lg text-plum-600 max-w-xl mb-10 leading-relaxed">
              Activate your abundant codes. Step into your true power — aligned,
              confident, and purpose-driven. Divine guidance for spiritual
              liberation of mind, body, and soul.
            </motion.p>
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-4">
              <a href={BOOK_CALL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Book A Call Now
              </a>
              <Link href="/about" className="btn-outline">
                Meet the Sisters <ArrowRight size={16} />
              </Link>
            </motion.div>
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={4} className="mt-14 flex flex-wrap gap-8 text-plum-400 text-sm">
              {[
                { icon: <Sparkles size={14} className="text-gold-500" />, text: "20+ Years Experience" },
                { icon: <Star size={14} className="text-gold-500" />,     text: "Thousands of Clients" },
                { icon: <Heart size={14} className="text-gold-500" />,    text: "Multiple Modalities" },
              ].map((s) => (
                <span key={s.text} className="flex items-center gap-2">{s.icon}{s.text}</span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="tag bg-plum-100 border border-plum-200 text-plum-600 mb-6 inline-block">About Us</span>
              <h2 className="section-heading mb-6">
                It&apos;s A <span className="gradient-text">Family Affair</span>
              </h2>
              <p className="text-plum-600 leading-relaxed mb-5">
                We are teachers and channels here to serve humanity through
                divine guidance to spiritual liberation of mind, body, and soul.
                As actual sisters, we bring a combined 20 years of experience as
                behavioral science specialists and business consultants.
              </p>
              <p className="text-plum-600 leading-relaxed mb-8">
                We help leaders, entrepreneurs, and changemakers step into their
                true power — aligned, confident, and purpose-driven.
              </p>
              <Link href="/about" className="btn-outline inline-flex">
                Our Story <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-xl shadow-plum-100">
                <Image
                  src="/images/sisters.jpg"
                  alt="Claudia and Julia — The Abundance Sisters"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-lg p-5 border border-plum-100">
                <div className="text-2xl font-serif font-bold gradient-text-gold">20+</div>
                <div className="text-plum-400 text-xs mt-0.5">Years of Experience</div>
              </div>
              <div className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-lg p-5 border border-plum-100">
                <div className="text-2xl font-serif font-bold gradient-text">1000s</div>
                <div className="text-plum-400 text-xs mt-0.5">Lives Transformed</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 md:py-32 section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="tag bg-rose-100 border border-rose-200 text-rose-600 mb-4 inline-block">Our Offerings</span>
            <h2 className="section-heading mb-4">
              Your Path to <span className="gradient-text">Divine Alignment</span>
            </h2>
            <p className="text-plum-500 max-w-xl mx-auto">
              Every offering is designed to meet you exactly where you are on your transformation journey.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <Link href={service.href} className="block card-hover p-8 h-full group">
                  <div className={`w-11 h-11 rounded-xl ${service.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <div className="text-xs font-semibold tracking-widest uppercase text-plum-300 mb-2">{service.tagline}</div>
                  <h3 className="font-serif text-xl font-bold text-plum-900 mb-3">{service.title}</h3>
                  <p className="text-plum-500 text-sm leading-relaxed mb-6">{service.description}</p>
                  <span className="flex items-center gap-2 text-rose-500 text-sm font-medium group-hover:gap-3 transition-all">
                    {service.cta} <ChevronRight size={14} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY PHOTOS */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="tag bg-gold-100 border border-gold-300 text-gold-600 mb-4 inline-block">Our Community</span>
            <h2 className="section-heading">
              Transformation <span className="gradient-text">In Action</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { src: "/images/workshop-dome.jpg", alt: "Sacred circle workshop in geodesic dome", title: "Sacred Circles", sub: "Live workshop experiences" },
              { src: "/images/workshop-group.jpg", alt: "Group transformation workshop", title: "Group Transformation", sub: "More powerful together" },
            ].map((img, i) => (
              <motion.div
                key={img.title}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg"
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-900/50 to-transparent" />
                <div className="absolute bottom-5 left-5 text-white">
                  <div className="font-serif text-lg font-semibold">{img.title}</div>
                  <div className="text-white/70 text-sm">{img.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-24 md:py-32 section-alt relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, #ddc9ec 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="card p-12 md:p-16 shadow-md">
            <Sparkles className="w-8 h-8 text-gold-500 mx-auto mb-8" />
            <blockquote className="font-serif text-2xl md:text-3xl font-bold text-plum-900 leading-tight mb-8">
              &ldquo;I went from the doctors telling me I needed a liver transplant, to riding horses in 6 months.&rdquo;
            </blockquote>
            <div className="divider-glow mb-6" />
            <cite className="not-italic">
              <div className="font-semibold text-plum-800">Julia</div>
              <div className="text-plum-400 text-sm">Client Transformation</div>
            </cite>
          </motion.div>
        </div>
      </section>

      {/* FREE GIFTS CTA */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative card border-gold-200 shadow-md p-12 md:p-16 text-center overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-gold-100/60 to-transparent rounded-2xl" />
            <div className="relative z-10">
              <span className="tag bg-gold-100 border border-gold-300 text-gold-600 mb-6 inline-block">✦ Free Access ✦</span>
              <h2 className="section-heading mb-4">
                Our <span className="gradient-text-gold">Gifts For You</span>
              </h2>
              <p className="text-plum-500 max-w-xl mx-auto mb-10">
                Free access to our sacred circle and downloads for your abundance. Start your transformation today — no investment required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/gifts" className="btn-gold">
                  Claim Your Free Gifts <Sparkles size={16} />
                </Link>
                <a href={BOOK_CALL_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
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
