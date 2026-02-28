import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import { SOCIAL } from "@/lib/utils";

function TikTokIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
    </svg>
  );
}

const footerLinks = [
  {
    heading: "Offerings",
    links: [
      { label: "Programs", href: "/programs" },
      { label: "1:1 Sessions", href: "/sessions" },
      { label: "Courses", href: "/courses" },
      { label: "Memberships", href: "/memberships" },
      { label: "Workshops", href: "/workshops" },
      { label: "Gifts", href: "/gifts" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Connect", href: "/connect" },
      { label: "Terms of Service", href: "/pages/terms" },
      { label: "Privacy Policy", href: "/pages/privacy-policy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-purple-950 border-t border-white/10">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-purple-800/50 via-rose-400/10 to-purple-800/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <p className="font-serif text-2xl md:text-3xl text-white mb-2">
            Ready to remember the truth of who you are?
          </p>
          <p className="text-white/60 mb-6">
            Book a call and take the first step toward your divine alignment.
          </p>
          <a
            href="https://api.leadconnectorhq.com/widget/bookings/generalcalendar-59d8c81c-f8e6-4bde-b959-fb61483daf32/typeofappointment-d6e719bd-15f7-43ca-8dca-1292ef01996d"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            Book A Call Now
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5 group w-fit">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-400 to-purple-600 flex items-center justify-center text-white font-serif font-bold text-lg">
                A
              </div>
              <div>
                <span className="font-serif text-white font-bold text-lg block leading-tight">
                  The Abundance Sisters
                </span>
                <span className="text-rose-300/60 text-xs tracking-widest uppercase">
                  The Leading Edge Life
                </span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Teachers and channels here to serve humanity through divine
              guidance to spiritual liberation of mind, body, and soul.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
              >
                <Facebook size={16} />
              </a>
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
              >
                <Instagram size={16} />
              </a>
              <a
                href={SOCIAL.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.heading}>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-rose-300/60 mb-5">
                {group.heading}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} The Abundance Sisters. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/pages/terms"
              className="text-white/30 hover:text-white/60 text-sm transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/pages/privacy-policy"
              className="text-white/30 hover:text-white/60 text-sm transition-colors"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
