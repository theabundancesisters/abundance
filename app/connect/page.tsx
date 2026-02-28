"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Mail, MessageCircle } from "lucide-react";
import { BOOK_CALL_URL, SOCIAL } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
    </svg>
  );
}

const socialChannels = [
  {
    name: "Instagram",
    handle: "@the_abundance_sisters",
    tagline: "Business coaching and tools",
    href: SOCIAL.instagram,
    icon: <Instagram size={22} />,
    color: "from-rose-400/20 to-purple-600/20",
    border: "border-rose-400/20",
  },
  {
    name: "TikTok",
    handle: "@theabundancesisters",
    tagline: "Manifestation tips",
    href: SOCIAL.tiktok,
    icon: <TikTokIcon size={22} />,
    color: "from-purple-500/20 to-rose-400/20",
    border: "border-purple-500/20",
  },
  {
    name: "Facebook",
    handle: "The Abundance Sisters",
    tagline: "Spiritual inspiration",
    href: SOCIAL.facebook,
    icon: <Facebook size={22} />,
    color: "from-gold-500/20 to-purple-600/20",
    border: "border-gold-500/20",
  },
];

export default function ConnectPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute top-1/3 right-1/3 w-72 h-72 rounded-full bg-rose-400/10 blur-3xl animate-float" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <span className="tag bg-rose-400/10 border border-rose-400/20 text-rose-300 mb-6 inline-block">
              Let&apos;s Chat
            </span>
          </motion.div>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="section-heading mb-6"
          >
            We&apos;d Love to{" "}
            <span className="gradient-text">Connect</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            Share your story. Ask your questions. Take the first step toward
            your transformation. We&apos;re here and ready.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Book A Call */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="glass-card border border-rose-400/20 p-8 md:p-10 h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-400/30 to-purple-600/30 flex items-center justify-center text-rose-300 mb-6">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h2 className="font-serif text-3xl font-bold text-white mb-3">
                  Let&apos;s Chat
                </h2>
                <p className="text-white/55 leading-relaxed mb-4">
                  Book a complimentary discovery call with the Sisters. Come
                  ready for your session by being in a quiet, undistracted
                  place.
                </p>
                <p className="text-rose-300/70 text-sm font-medium mb-8">
                  No obligation. Just a real conversation about where you are
                  and where you want to go.
                </p>
                <a
                  href={BOOK_CALL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex"
                >
                  Book Your Call
                </a>
              </div>
            </motion.div>

            {/* Email Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="glass-card border border-white/10 p-8 md:p-10 h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-rose-400/20 flex items-center justify-center text-purple-300 mb-6">
                  <Mail className="w-6 h-6" />
                </div>
                <h2 className="font-serif text-3xl font-bold text-white mb-3">
                  Prefer Email?
                </h2>
                <p className="text-white/55 leading-relaxed mb-2">
                  Send us a message and we&apos;ll get back to you as soon as
                  possible.
                </p>
                <p className="text-white/30 text-xs mb-8">
                  We do not respond to solicitations.
                </p>
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Form submission — connect your email provider or CRM.");
                  }}
                >
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="First name"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-rose-400/50 transition-colors"
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-rose-400/50 transition-colors"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email address"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-rose-400/50 transition-colors"
                  />
                  <textarea
                    placeholder="What would you like to share or ask?"
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-rose-400/50 transition-colors resize-none"
                  />
                  <button type="submit" className="btn-primary w-full">
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950 via-purple-900/20 to-purple-950" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="tag bg-rose-400/10 border border-rose-400/20 text-rose-300 mb-4 inline-block">
              Find Us Online
            </span>
            <h2 className="section-heading">
              Follow Along the{" "}
              <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-white/50 mt-4 max-w-lg mx-auto">
              When you follow, leave us a comment and we&apos;ll follow you
              back. Let&apos;s build community together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {socialChannels.map((s, i) => (
              <motion.a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`glass-card-hover border ${s.border} p-6 text-center block`}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white/70 mx-auto mb-4`}
                >
                  {s.icon}
                </div>
                <h3 className="font-semibold text-white mb-1">{s.name}</h3>
                <p className="text-rose-300/70 text-sm font-medium mb-2">
                  {s.handle}
                </p>
                <p className="text-white/40 text-xs">{s.tagline}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
