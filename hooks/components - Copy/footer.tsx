import Link from "next/link"
import { Instagram, Twitter, Linkedin } from "lucide-react"
import { ZyvoraLogo } from "@/components/zyvora-logo"

export function Footer() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact Us" },
  ]

  return (
    <footer className="relative">
      {/* Main Footer Section */}
      <div className="bg-[#2d1b4e] text-white relative overflow-hidden">
        {/* Large Background Watermark - positioned behind content */}
        <div className="absolute inset-0 flex items-end justify-center pointer-events-none select-none overflow-hidden">
          <div className="translate-y-[30%] opacity-[0.15]">
            <ZyvoraLogo variant="white" size="watermark" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-32">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <ZyvoraLogo variant="white" size="lg" />
          </div>

          {/* Navigation */}
          <nav className="flex justify-center gap-8 mb-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Light lavender background */}
      <div className="bg-[#e8d4ec]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-[#2d1b4e] mb-2 md:mb-0">
              Copyright © 2025. Designed By Zyvora
            </p>
            <div className="flex gap-2 items-center">
              <Link
                href="#"
                className="text-sm text-[#2d1b4e] hover:text-[#6b21a8] transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-[#2d1b4e]">|</span>
              <Link
                href="#"
                className="text-sm text-[#2d1b4e] hover:text-[#6b21a8] transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
