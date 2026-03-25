"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap,
  Heart,
  Sparkles,
} from "lucide-react"

function AnimatedSection({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const timeline = [
  {
    year: "2023",
    title: "Debut en developpement web",
    description:
      "Decouverte du HTML, CSS et JavaScript. Premiers pas dans le monde du code.",
    icon: <GraduationCap size={16} />,
  },
  {
    year: "2024",
    title: "Specialisation React.js",
    description:
      "Apprentissage  de React.js , et creation de mes premiers projets professionnels.",
    icon: <Sparkles size={16} />,
  },
  {
    year: "2025",
    title: "Transition Full-Stack",
    description:
      "Apprentissage de Node.js, MySQL et Prisma. Construction de solutions completes.",
    icon: <Briefcase size={16} />,
  },
  {
    year: "2026",
    title: "Developpeur ambitieux",
    description:
      "En route vers le Full-Stack avec la vision de creer des produits digitaux pour le Mali.",
    icon: <Heart size={16} />,
  },
]

const quickFacts = [
  { icon: <Calendar size={14} />, label: "22 ans" },
  { icon: <MapPin size={14} />, label: "Mali" },
  { icon: <Briefcase size={14} />, label: "Front-End Dev" },

]

export function AboutSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="mb-3 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium tracking-wider text-primary uppercase">
            A propos
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
            {"L'histoire"} derriere le code
          </h2>
        </motion.div>

        {/* Bento grid layout */}
        <div className="grid gap-5 md:grid-cols-12">
          {/* Main bio card - spans 7 cols */}
          <AnimatedSection delay={0.1} className="md:col-span-7">
            <div className="h-full rounded-2xl border border-border bg-card p-8 md:p-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-2 w-2 items-center justify-center rounded-full bg-accent" />
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Qui suis-je
                </span>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                Developpeur Front-End de{" "}
                <span className="font-medium text-foreground">22 ans</span>, je
                suis passionne par la creation {"d'interfaces"} beaux et performants.
                Mon expertise principale :{" "}
                <span className="font-medium text-primary">React.js</span>.
              </p>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Chaque ligne de code que{"j'ecris"}   sert à rendre l’expérience utilisateur{" "} facile, agréable et mémorable.

                Je ne fais pas que coder, je crée des expériences digitales qui restent dans les esprits.
              </p>

              {/* Quick facts row */}
              <div className="mt-8 flex flex-wrap gap-3">
                {quickFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-center gap-2 rounded-lg border border-border/50 bg-secondary/50 px-3 py-2"
                  >
                    <span className="text-primary">{fact.icon}</span>
                    <span className="text-xs font-medium text-foreground">
                      {fact.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Philosophy card - spans 5 cols */}
          <AnimatedSection delay={0.2} className="md:col-span-5">
            <div className="h-full rounded-2xl border border-border bg-card p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-2 w-2 items-center justify-center rounded-full bg-primary" />
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Ma philosophie
                </span>
              </div>
              <div className="space-y-5">
                {[
                  {
                    title: "Pixel Perfect",
                    desc: "Je fais attention à chaque détail : espacements, typographie… rien n’est laissé au hasard.",
                  },
                  {
                    title: "Performance First",
                    desc: "Je code de façon optimisée pour que les sites soient rapides et efficaces.",
                  },
                  {
                    title: "User Centric",
                    desc: " L’utilisateur est au cœur de mes choix de design et de développement.",
                  },
                ].map((item) => (
                  <div key={item.title} className="group">
                    <h4 className="mb-1.5 text-sm font-semibold text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Timeline - full width */}
          <AnimatedSection delay={0.3} className="md:col-span-12">
            <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-2 w-2 items-center justify-center rounded-full bg-accent" />
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Mon parcours
                </span>
              </div>
              <div className="grid gap-0 md:grid-cols-4">
                {timeline.map((item, index) => (
                  <AnimatedSection
                    key={item.year}
                    delay={0.4 + index * 0.1}
                    className="relative"
                  >
                    <div className="group relative flex flex-col pb-8 pl-8 md:pb-0 md:pl-0 md:pr-6">
                      {/* Vertical line for mobile */}
                      {index < timeline.length - 1 && (
                        <div className="absolute left-[11px] top-7 bottom-0 w-px bg-border md:hidden" />
                      )}
                      {/* Horizontal line for desktop */}
                      {index < timeline.length - 1 && (
                        <div className="absolute right-0 top-3 hidden h-px w-full bg-border md:block" />
                      )}

                      {/* Dot */}
                      <div className="absolute left-0 top-0.5 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-secondary text-primary md:relative md:left-auto md:mb-4">
                        {item.icon}
                      </div>

                      <span className="mb-1 text-xs font-bold tracking-wider text-primary">
                        {item.year}
                      </span>
                      <h4 className="mb-2 text-sm font-semibold text-foreground">
                        {item.title}
                      </h4>
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Goal card - spans 5 cols */}
          <AnimatedSection delay={0.5} className="md:col-span-5">
            <div className="relative h-full overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-8">
              <div className="relative z-10">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-2 w-2 items-center justify-center rounded-full bg-primary" />
                  <span className="text-xs font-medium uppercase tracking-wider text-primary">
                    Objectif 2026
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">
                  Devenir Full-Stack
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Maitriser Node.js, MySQL et Prisma pour construire des
                  solutions digitales completes, de {"l'interface"} au serveur.
                </p>
              </div>
              <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
            </div>
          </AnimatedSection>

          {/* Tech stack mini card - spans 7 cols */}
          <AnimatedSection delay={0.6} className="md:col-span-7">
            <div className="h-full rounded-2xl border border-border bg-card p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-2 w-2 items-center justify-center rounded-full bg-accent" />
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Stack actuelle
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  "React.js",
                  "React native",
                  "Tailwind CSS",
                  "Node.js",
                  "MySQL",
                  "Prisma",
                  "Git",
                  "Figma",
                  "Framer Motion",
                  "Vite",

                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-border/50 bg-secondary/50 px-4 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
