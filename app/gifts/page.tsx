"use client";

import { motion } from "framer-motion";
import { Download, Sparkles, Users, LayoutGrid } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const gifts = [
  {
    icon: <Users className="w-7 h-7" />,
    name: "Ask Your Angels™ Sacred Circle",
    tagline: "Free Weekly Group Clearing",
    description:
      "Join us every Wednesday for a complimentary live group session. Bring your specific questions and receive divine guidance, field clearings, and transmission to open your field for higher wisdom.",
    detail: "Wednesdays · 5:30–6:00 PM PST",
    cta: "Sign Up For Free Weekly Group Clearings",
    type: "form",
    accent: "from-rose-400/30 to-purple-600/30",
    border: "border-rose-400/30",
    badge: "Live Weekly",
  },
  {
    icon: <Download className="w-7 h-7" />,
    name: "Quiet The Inner Critic Guide",
    tagline: "Free Download",
    description:
      "A quick, easy-to-use guide to quiet the inner critic and feel better in just minutes. Practical tools for silencing self-sabotage whenever it shows up — at work, in relationships, or during big decisions.",
    detail: "Instant download · PDF guide",
    cta: "Claim Download",
    type: "form",
    accent: "from-purple-600/20 to-rose-400/20",
    border: "border-purple-500/20",
    badge: "Free Download",
  },
  {
    icon: <LayoutGrid className="w-7 h-7" />,
    name: "Life Wheel Assessment",
    tagline: "Free Download",
    description:
      "Evaluate different areas of your life to identify where intentionality — or limiting beliefs — may be creating or blocking your results. Use alongside the Inner Critic guide for powerful subconscious reprogramming.",
    detail: "Instant download · PDF assessment",
    cta: "Claim Download",
    type: "form",
    accent: "from-gold-500/20 to-purple-600/20",
    border: "border-gold-500/20",
    badge: "Free Download",
  },
];

export default function GiftsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute top-1/4 right-1/3 w-80 h-80 rounded-full bg-gold-500/10 blur-3xl animate-float" />
        <div
          className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-rose-400/10 blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <span className="tag bg-gold-500/10 border border-gold-500/20 text-gold-400 mb-6 inline-block">
              ✦ Free Access ✦
            </span>
          </motion.div>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="section-heading mb-6"
          >
            Our{" "}
            <span className="gradient-text-gold">Gifts For You</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            Free access to our sacred circle and downloads for your abundance.
            Start your transformation journey today — no investment required.
          </motion.p>
        </div>
      </section>

      {/* Gifts */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {gifts.map((gift, i) => (
            <motion.div
              key={gift.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className={`glass-card border ${gift.border} p-8 md:p-12 relative overflow-hidden`}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
              <div className="absolute top-5 right-5">
                <span className="tag bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs">
                  {gift.badge}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gift.accent} flex items-center justify-center text-gold-400 mb-5`}
                  >
                    {gift.icon}
                  </div>
                  <div className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-2">
                    {gift.tagline}
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">
                    {gift.name}
                  </h2>
                  <p className="text-white/55 leading-relaxed mb-3">
                    {gift.description}
                  </p>
                  <p className="text-gold-400/70 text-sm font-medium">
                    {gift.detail}
                  </p>
                </div>

                {/* Form placeholder */}
                <div className="glass-card p-6">
                  <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-5">
                    Claim Your Free Gift
                  </p>
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Your first name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-rose-400/50 focus:bg-white/8 transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-rose-400/50 focus:bg-white/8 transition-colors"
                    />
                    <button
                      type="button"
                      className="btn-gold w-full"
                      onClick={() => alert("Form submission coming soon — connect your email provider.")}
                    >
                      <Sparkles size={16} />
                      {gift.cta}
                    </button>
                  </div>
                  <p className="text-white/20 text-xs mt-3 text-center">
                    We respect your privacy. No spam, ever.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Upgrade CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card border border-rose-400/20 p-8"
          >
            <h3 className="font-serif text-2xl font-bold text-white mb-3">
              Ready to Go Deeper?
            </h3>
            <p className="text-white/50 text-sm mb-6">
              Our free gifts are just the beginning. Explore courses, memberships,
              and 1:1 sessions to accelerate your transformation.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="/courses" className="btn-outline text-sm px-6 py-3">
                Browse Courses
              </a>
              <a href="/memberships" className="btn-gold text-sm px-6 py-3">
                Join a Membership
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
