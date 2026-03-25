"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface SkillCategory {
  title: string
  label: string
  skills: { name: string; level?: string }[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Front-End",
    label: "Specialite",
    skills: [
      { name: "React.js", level: "Intermediaire" },
      { name: "CSS3 / Tailwind", level: "Avance" },
      { name: "Responsive Design", level: "Avance" },
      { name: "Framer Motion", level: "Intermediaire" },
    ],
  },
  {
    title: "Back-End",
    label: "En progression",
    skills: [
      { name: "Node.js", level: "Debutant" },
      { name: "MySQL", level: "Intermediaire" },
      { name: "Prisma ORM", level: "Apprentissage" },
      { name: "API RESTful", level: " Debutant" },
    ],
  },
  {
    title: "Outils",
    label: "Quotidien",
    skills: [
      { name: "Git / GitHub" },
      { name: "Vite" },
      { name: "Figma" },
      { name: "VS Code" },
      { name: "Antigravity" },
      { name: " planethoster" },
      { name: " Cpanel" },

    ],
  },
  {
    title: "Methodologie",
    label: "Approche",
    skills: [
      { name: "Agile / Scrum" },
      { name: "Clean Code" },

    ],
  },
]

function SkillCard({
  category,
  index,
}: {
  category: SkillCategory
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="group rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:border-primary/30"
    >
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">
          {category.title}
        </h3>
        <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {category.label}
        </span>
      </div>
      <div className="flex flex-wrap gap-2.5">
        {category.skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-2 rounded-xl bg-secondary px-4 py-2.5 transition-all duration-300 group-hover:bg-secondary/80"
          >
            <span className="text-sm font-medium text-secondary-foreground">
              {skill.name}
            </span>
            {skill.level && (
              <span className="text-xs text-muted-foreground">
                {"·"} {skill.level}
              </span>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="relative px-6 py-28">
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block text-sm font-medium tracking-wider text-primary uppercase">
            Competences
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Mon stack technique
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Les technologies et outils que {"j'utilise"} au quotidien pour
            creer des experiences web exceptionnelles.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
