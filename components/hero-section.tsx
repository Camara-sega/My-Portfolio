"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import Image from "next/image"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { useEffect, useState, useRef } from "react"

function TypewriterText({ texts, className }: { texts: string[]; className?: string }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentFullText = texts[currentTextIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting && displayText === currentFullText) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false)
      setCurrentTextIndex((prev) => (prev + 1) % texts.length)
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentFullText.substring(0, displayText.length - 1)
              : currentFullText.substring(0, displayText.length + 1)
          )
        },
        isDeleting ? 30 : 60
      )
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentTextIndex, texts])

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.6, ease: "steps(1)" }}
        className="inline-block w-[3px] h-[1em] align-middle bg-primary ml-0.5"
      />
    </span>
  )
}

function FloatingCodeBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="absolute -right-4 top-8 hidden rounded-xl border border-border/60 bg-card/80 p-4 font-mono text-xs backdrop-blur-md lg:block"
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
        <div className="h-2.5 w-2.5 rounded-full bg-chart-4/60" />
        <div className="h-2.5 w-2.5 rounded-full bg-accent/60" />
      </div>
      <div className="flex flex-col gap-1 text-muted-foreground">
        <span><span className="text-primary">const</span> <span className="text-accent">developer</span> = {"{"}</span>
        <span className="pl-4"><span className="text-chart-4">name</span>: <span className="text-accent">{'"Sega Camara"'}</span>,</span>
        <span className="pl-4"><span className="text-chart-4">role</span>: <span className="text-accent">{'"Front-End Dev"'}</span>,</span>
        <span className="pl-4"><span className="text-chart-4">stack</span>: <span className="text-accent">{'"React.js"'}</span>,</span>
        <span className="pl-4"><span className="text-chart-4">passion</span>: <span className="text-accent">{'"UI/UX"'}</span></span>
        <span>{"}"}</span>
      </div>
    </motion.div>
  )
}

function StatusBadge({ label, status, delay }: { label: string; status: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex items-center gap-2 rounded-full border border-border/50 bg-card/60 px-3 py-1.5 backdrop-blur-sm"
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
      </span>
      <span className="text-xs text-muted-foreground">{label}</span>
      <span className="text-xs font-medium text-foreground">{status}</span>
    </motion.div>
  )
}

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const controls = animate(count, value, { duration: 2, delay: 0.8 })
    const unsubscribe = rounded.on("change", (v) => setDisplay(v))
    return () => {
      controls.stop()
      unsubscribe()
    }
  }, [count, rounded, value])

  return (
    <span>
      {display}{suffix}
    </span>
  )
}

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20">
      {/* Animated grid background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(oklch(0.7 0.15 200 / 0.5) 1px, transparent 1px), linear-gradient(90deg, oklch(0.7 0.15 200 / 0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-primary/8 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent/6 blur-[100px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-start lg:gap-20">
          {/* Left content */}
          <div className="flex flex-1 flex-col items-center lg:items-start">
            {/* Status badges row */}
            <div className="mb-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <StatusBadge label="Statut" status="Disponible" delay={0.3} />
              <StatusBadge label="Localisation" status="MALI" delay={0.5} />
            </div>

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground text-balance md:text-5xl lg:text-6xl xl:text-7xl">
                <span className="block text-muted-foreground/80 text-xl md:text-2xl font-medium mb-3 tracking-normal">
                  Salut, je suis SEGA OUMAR CAMARA
                </span>
                <span className="block">
                  <TypewriterText
                    texts={[
                      "Developpeur Front-End",
                      "Createur d'interfaces",

                    ]}
                    className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent"
                  />
                </span>
                <span className="block mt-2">
                  qui transforme vos idees
                  <br className="hidden md:block" />
                  {" "}en experiences digitales.
                </span>
              </h1>
            </motion.div>

            {/* Sub text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground lg:mx-0 text-center lg:text-left md:text-lg"
            >
              22 ans, passionne par le design premium et {"l'architecture"} scalable.
              Je concois des interfaces modernes et performantes avec React.js.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start"
            >
              <a
                href="#projects"
                className="group relative flex items-center gap-2 overflow-hidden rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                <span className="relative z-10">Voir mes projets</span>
                <svg className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 rounded-xl border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary/50 hover:bg-primary/5"
              >
                Me contacter
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="mt-10 flex items-center gap-4"
            >
              {[
                { icon: <Github size={18} />, href: "https://github.com/Camara-sega/", label: "GitHub" },
                { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
                { icon: <Mail size={18} />, href: "#contact", label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary hover:bg-primary/5"
                >
                  {social.icon}
                </a>
              ))}
              <div className="ml-2 h-5 w-px bg-border" />
              <span className="text-xs text-muted-foreground">
                {"sega.camara.dev@gmail.com"}
              </span>
            </motion.div>
          </div>

          {/* Right side - Photo + decorations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex-shrink-0"
          >
            {/* Main photo container */}
            <div className="relative">
              <div className="relative h-72 w-72 overflow-hidden rounded-2xl border-2 border-border/40 md:h-80 md:w-80 lg:h-[420px] lg:w-[360px]">
                <Image
                  src="/images/hero.jpeg"
                  alt="Sega Camara - Developpeur Front-End"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>

              {/* Stats overlay at bottom */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="absolute -bottom-5 left-4 right-4 flex items-center justify-center gap-6 rounded-xl border border-border/50 bg-card/90 px-5 py-3 backdrop-blur-md"
              >
                <div className="text-center">
                  <div className="text-lg font-bold text-foreground">
                    <AnimatedCounter value={1} suffix="+" />
                  </div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Ans exp.</div>
                </div>
                <div className="h-8 w-px bg-border/50" />
                <div className="text-center">
                  <div className="text-lg font-bold text-foreground">
                    <AnimatedCounter value={10} suffix="+" />
                  </div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Projets</div>
                </div>
                <div className="h-8 w-px bg-border/50" />
                <div className="text-center">
                  <div className="text-lg font-bold text-foreground">
                    <AnimatedCounter value={100} suffix="%" />
                  </div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Passion</div>
                </div>
              </motion.div>

              {/* Floating code block */}
              <FloatingCodeBlock />

              {/* Decorative corner accents */}
              <div className="absolute -top-2 -left-2 h-6 w-6 border-t-2 border-l-2 border-primary/50 rounded-tl-lg" />
              <div className="absolute -bottom-2 -right-2 h-6 w-6 border-b-2 border-r-2 border-accent/50 rounded-br-lg" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-muted-foreground" />
        </motion.div>
      </motion.a>
    </section>
  )
}
