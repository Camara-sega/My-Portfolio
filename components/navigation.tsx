"use client"
import Image from "next/image"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "A propos", href: "#about" },
  { label: "Competences", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "Vision", href: "#vision" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "glass-strong py-3 shadow-lg shadow-background/50"
          : "bg-transparent py-5"
          }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <a href="#" className="flex items-center">
            <Image
              src="/images/SEGA _LOGO (1).png"
              alt="Sega Camara Logo"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:opacity-90 glow-primary"
            >
              Me contacter
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="glass-strong fixed inset-x-0 top-16 z-40 border-b border-border p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-xl bg-primary px-5 py-2.5 text-center text-sm font-medium text-primary-foreground"
              >
                Me contacter
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
