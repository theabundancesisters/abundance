"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, CheckCircle, Infinity, Star } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const courses = [
  {
    name: "Brain-SHIFT™",
    tagline: "Master Your Mind",
    price: "$333",
    description:
      "The flagship course. Master your mind through subconscious reprogramming using the proprietary Brain-SHIFT™ methodology. Transform limiting beliefs at the root level for lasting change.",
    includes: [
      "7-module course structure",
      "Guided audio sessions",
      "Welcome call with the Sisters",
      "30-day access to community circle",
      "Workbook with exercises",
      "Lifetime course access",
      "70 foundation belief statements",
    ],
    href: "https://www.theleadingedge.life/offers/mp7TZC5e/checkout",
    featured: true,
    accent: "from-rose-400/30 to-purple-600/30",
    border: "border-rose-400/30",
    badge: "Signature Course",
  },
  {
    name: "Align With Strengths",
    tagline: "Know Your Drivers",
    price: "$333",
    description:
      "Discover your natural strengths, motivation patterns, and behavioral drivers. Includes a professional behavioral assessment with a personalized 30-minute readback consultation.",
    includes: [
      "Behavioral assessment",
      "30-minute consultation & readback",
      "Drivers Model training",
      "Practical workbook",
      "Lifetime materials access",
    ],
    href: "https://www.theleadingedge.life/offers/5ZJREi82",
    featured: false,
    accent: "from-purple-600/20 to-rose-400/20",
    border: "border-purple-500/20",
    badge: null,
  },
  {
    name: "Emotional Mastery",
    tagline: "Lead From The Heart",
    price: "$333",
    description:
      "Develop emotional intelligence and heart-centered leadership. Move from intellectual understanding to embodied practice — feeling your way to your highest self.",
    includes: [
      "Emotional intelligence framework",
      "Heart-centered leadership training",
      "Welcome session included",
      "Lifetime access to materials",
      "Practical exercises",
    ],
    href: "https://www.theleadingedge.life/offers/uvFYBzoZ",
    featured: false,
    accent: "from-gold-500/20 to-purple-600/20",
    border: "border-gold-500/20",
    badge: null,
  },
  {
    name: "From Triggered To Calm",
    tagline: "Guided Audio Collection",
    price: "$97",
    description:
      "Quick-access audio toolkit for belief reprogramming in the moment. Perfect for daily practice or when you need fast relief from reactive patterns.",
    includes: [
      "30 pre-written affirmations (3 themes)",
      "3 bonus healing audios",
      "Future self activation audio",
      "Breathwork exercises",
      "Lifetime access",
    ],
    href: "https://www.theleadingedge.life/offers/mp7TZC5e/checkout",
    featured: false,
    accent: "from-rose-400/20 to-gold-500/20",
    border: "border-rose-400/20",
    badge: "Best Value",
  },
  {
    name: "Connect With Your Divine",
    tagline: "Pendulum 101",
    price: "$111",
    description:
      "Learn to use a pendulum for divine guidance and intuitive decision-making. A beginner-friendly introduction to pendulum divination and accessing your higher wisdom.",
    includes: [
      "Video tutorial series",
      "Sample divination charts",
      "Dowsing technique training",
      "Lifetime access to materials",
    ],
    href: "https://www.theleadingedge.life/offers/Zs5FvLoo",
    featured: false,
    accent: "from-purple-500/20 to-rose-400/20",
    border: "border-purple-500/20",
    badge: null,
  },
];

export default function CoursesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl animate-float" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <span className="tag bg-purple-600/20 border border-purple-500/20 text-purple-300 mb-6 inline-block">
              Self-Paced Mastery
            </span>
          </motion.div>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="section-heading mb-6"
          >
            Digital <span className="gradient-text">Courses</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            Transform your mind, align with your strengths, and lead from the
            heart — at your own pace, on your own schedule.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
            className="flex items-center justify-center gap-6 mt-8 text-white/40 text-sm"
          >
            <span className="flex items-center gap-2">
              <Infinity size={14} className="text-rose-400" />
              Lifetime Access
            </span>
            <span className="w-px h-4 bg-white/10" />
            <span className="flex items-center gap-2">
              <BookOpen size={14} className="text-rose-400" />
              Instant Access
            </span>
            <span className="w-px h-4 bg-white/10" />
            <span className="flex items-center gap-2">
              <Star size={14} className="text-rose-400" />
              Proven Methods
            </span>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured course full width */}
          {courses
            .filter((c) => c.featured)
            .map((course) => (
              <motion.div
                key={course.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`glass-card border ${course.border} p-8 md:p-12 mb-8 relative overflow-hidden`}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent" />
                {course.badge && (
                  <div className="absolute top-6 right-6">
                    <span className="tag bg-rose-400/20 border border-rose-400/30 text-rose-300">
                      {course.badge}
                    </span>
                  </div>
                )}

                <div className="grid lg:grid-cols-2 gap-10">
                  <div>
                    <div className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-3">
                      {course.tagline}
                    </div>
                    <h2 className="font-serif text-4xl font-bold text-white mb-2">
                      {course.name}
                    </h2>
                    <div className="text-3xl font-bold gradient-text-gold mb-6">
                      {course.price}
                    </div>
                    <p className="text-white/60 leading-relaxed mb-8">
                      {course.description}
                    </p>
                    <a
                      href={course.href}
                      className="btn-primary inline-flex"
                    >
                      Enroll Now
                      <ArrowRight size={16} />
                    </a>
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5">
                      What&apos;s Included
                    </h3>
                    <ul className="space-y-3">
                      {course.includes.map((item) => (
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

          {/* Other courses grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {courses
              .filter((c) => !c.featured)
              .map((course, i) => (
                <motion.div
                  key={course.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`glass-card border ${course.border} p-8 relative`}
                >
                  {course.badge && (
                    <div className="absolute top-5 right-5">
                      <span className="tag bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs">
                        {course.badge}
                      </span>
                    </div>
                  )}
                  <div className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-2">
                    {course.tagline}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-1">
                    {course.name}
                  </h3>
                  <div className="text-2xl font-bold gradient-text-gold mb-4">
                    {course.price}
                  </div>
                  <p className="text-white/55 text-sm leading-relaxed mb-5">
                    {course.description}
                  </p>
                  <ul className="space-y-2 mb-7">
                    {course.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-rose-400/70 shrink-0 mt-0.5" />
                        <span className="text-white/55 text-xs">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={course.href}
                    className="flex items-center gap-2 text-rose-300 text-sm font-medium hover:gap-3 transition-all duration-200"
                  >
                    Enroll Now
                    <ArrowRight size={14} />
                  </a>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Bundle Note */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card border border-gold-500/20 p-8"
          >
            <p className="text-white/60 text-sm mb-4">
              Brain-SHIFT™, Align With Strengths, and Emotional Mastery are
              included in the{" "}
              <strong className="text-white">Live Aligned Program</strong> and
              select <strong className="text-white">Membership tiers</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="/programs" className="btn-outline text-sm px-6 py-3">
                View Programs
              </a>
              <a href="/memberships" className="btn-gold text-sm px-6 py-3">
                View Memberships
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
