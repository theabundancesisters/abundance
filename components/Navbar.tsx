"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_LINKS, BOOK_CALL_URL } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [offeringsOpen, setOfferingsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOfferingsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-purple-950/95 backdrop-blur-md shadow-lg shadow-purple-950/50 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-400 to-purple-600 flex items-center justify-center text-white font-serif font-bold text-lg shadow-lg shadow-rose-400/20 group-hover:shadow-rose-400/40 transition-all duration-300">
                A
              </div>
            </div>
            <div>
              <span className="font-serif text-white font-bold text-lg leading-tight block">
                The Abundance Sisters
              </span>
              <span className="text-rose-300/70 text-xs tracking-widest uppercase">
                The Leading Edge Life
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative">
                  <button
                    onClick={() => setOfferingsOpen(!offeringsOpen)}
                    onBlur={() => setTimeout(() => setOfferingsOpen(false), 150)}
                    className="flex items-center gap-1 text-white/80 hover:text-white text-sm font-medium transition-colors duration-200"
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${offeringsOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {offeringsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 glass-card shadow-xl shadow-purple-950/50 overflow-hidden"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="block px-5 py-3 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors duration-150"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    pathname === link.href
                      ? "text-rose-300"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-6 py-3"
            >
              Book A Call
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-purple-950/98 backdrop-blur-md border-b border-white/10"
          >
            <div className="px-4 py-6 space-y-1">
              {NAV_LINKS.map((link) =>
                link.dropdown ? (
                  <div key={link.label}>
                    <div className="px-4 py-2 text-xs font-semibold tracking-widest uppercase text-rose-300/60">
                      Offerings
                    </div>
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-6 py-2 text-white/70 hover:text-white text-sm transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block px-4 py-3 text-white/80 hover:text-white font-medium transition-colors rounded-xl hover:bg-white/5"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="pt-4">
                <a
                  href={BOOK_CALL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-sm"
                >
                  Book A Call
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
