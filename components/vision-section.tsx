"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

function TerminalLine({
  children,
  delay,
  prefix = "$",
  isOutput = false,
}: {
  children: React.ReactNode
  delay: number
  prefix?: string
  isOutput?: boolean
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -10 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay }}
      className={`flex gap-2 font-mono text-sm ${isOutput ? "text-muted-foreground pl-5" : ""}`}
    >
      {!isOutput && (
        <span className="flex-shrink-0 text-accent select-none">{prefix}</span>
      )}
      <span>{children}</span>
    </motion.div>
  )
}

function AnimatedCodeBlock() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  const codeLines = [
    { type: "comment", text: "// Ma vision pour l'avenir" },
    { type: "keyword", text: "const " , value: "vision", rest: " = {" },
    { type: "property", indent: true, key: "mission", value: '"Construire des solutions digitales pour l\'Afrique"' },
    { type: "property", indent: true, key: "objectif", value: '"Devenir Full-Stack Developer"' },
    { type: "property", indent: true, key: "valeurs", value: '["Innovation", "Impact", "Excellence"]' },
    { type: "property", indent: true, key: "stack", value: '["React", "Node.js", "MySQL", "Prisma"]' },
    { type: "close", text: "}" },
    { type: "empty" },
    { type: "keyword", text: "async function ", value: "buildFuture", rest: "(vision) {" },
    { type: "property", indent: true, key: "const impact", value: "await createSolutions(vision)" },
    { type: "property", indent: true, key: "const growth", value: "await neverStopLearning()" },
    { type: "return", indent: true, text: "return { impact, growth, success: true }" },
    { type: "close", text: "}" },
    { type: "empty" },
    { type: "call", text: "buildFuture(vision)" },
    { type: "output", text: '// Output: { impact: "Africa transformed", growth: "Infinite" }' },
  ]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="overflow-hidden rounded-2xl border border-border bg-card"
    >
      {/* Editor header */}
      <div className="flex items-center justify-between border-b border-border px-5 py-3">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-destructive/50" />
          <div className="h-3 w-3 rounded-full bg-chart-4/50" />
          <div className="h-3 w-3 rounded-full bg-accent/50" />
        </div>
        <span className="font-mono text-xs text-muted-foreground">
          vision.ts
        </span>
        <div className="w-14" />
      </div>

      {/* Code content */}
      <div className="overflow-x-auto p-6 font-mono text-sm leading-7">
        {codeLines.map((line, i) => {
          if (line.type === "empty") {
            return <div key={i} className="h-5" />
          }

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.3 + i * 0.06 }}
              className={line.indent ? "pl-6" : ""}
            >
              {line.type === "comment" && (
                <span className="text-muted-foreground/50">{line.text}</span>
              )}
              {line.type === "output" && (
                <span className="text-accent/60">{line.text}</span>
              )}
              {line.type === "keyword" && (
                <span>
                  <span className="text-primary">{line.text}</span>
                  <span className="text-chart-4">{line.value}</span>
                  <span className="text-foreground">{line.rest}</span>
                </span>
              )}
              {line.type === "property" && (
                <span>
                  <span className="text-foreground">{line.key}</span>
                  <span className="text-muted-foreground">{": "}</span>
                  <span className="text-accent">{line.value}</span>
                  <span className="text-muted-foreground">,</span>
                </span>
              )}
              {line.type === "close" && (
                <span className="text-foreground">{line.text}</span>
              )}
              {line.type === "return" && (
                <span>
                  <span className="text-primary">{"return "}</span>
                  <span className="text-foreground">{line.text?.replace("return ", "")}</span>
                </span>
              )}
              {line.type === "call" && (
                <span>
                  <span className="text-chart-4">{line.text}</span>
                  <span className="text-muted-foreground">{"  // "}</span>
                  <span className="text-accent">{"Let's go"}</span>
                </span>
              )}
            </motion.div>
          )
        })}
        {/* Blinking cursor at end */}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8, ease: "steps(1)" }}
          className="inline-block h-4 w-2 bg-primary/80 align-middle"
        />
      </div>
    </motion.div>
  )
}

function TerminalBlock() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })
  const [showOutput, setShowOutput] = useState(false)

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setShowOutput(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [isInView])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="overflow-hidden rounded-2xl border border-border bg-card"
    >
      {/* Terminal header */}
      <div className="flex items-center justify-between border-b border-border px-5 py-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-destructive/50" />
            <div className="h-3 w-3 rounded-full bg-chart-4/50" />
            <div className="h-3 w-3 rounded-full bg-accent/50" />
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            terminal
          </span>
        </div>
        <span className="font-mono text-[10px] text-muted-foreground/50">
          bash
        </span>
      </div>

      {/* Terminal content */}
      <div className="space-y-2 p-6">
        <TerminalLine delay={0.5}>
          <span className="text-foreground">whoami</span>
        </TerminalLine>
        <TerminalLine delay={0.8} isOutput>
          <span className="text-accent">sega-camara</span>
          <span className="text-muted-foreground">{" // Front-End Developer"}</span>
        </TerminalLine>

        <div className="h-2" />

        <TerminalLine delay={1.0}>
          <span className="text-foreground">cat ./ambitions.json</span>
        </TerminalLine>
        {showOutput && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden pl-5 font-mono text-sm"
          >
            <div className="text-muted-foreground">{"{"}</div>
            <div className="pl-4">
              <span className="text-primary">{'"court_terme"'}</span>
              <span className="text-muted-foreground">{": "}</span>
              <span className="text-accent">{'"Maitriser le Full-Stack"'}</span>
              <span className="text-muted-foreground">,</span>
            </div>
            <div className="pl-4">
              <span className="text-primary">{'"moyen_terme"'}</span>
              <span className="text-muted-foreground">{": "}</span>
              <span className="text-accent">{'"Lancer ma startup tech"'}</span>
              <span className="text-muted-foreground">,</span>
            </div>
            <div className="pl-4">
              <span className="text-primary">{'"long_terme"'}</span>
              <span className="text-muted-foreground">{": "}</span>
              <span className="text-accent">{'"Transformer l\'Afrique digitale"'}</span>
            </div>
            <div className="text-muted-foreground">{"}"}</div>
          </motion.div>
        )}

        <div className="h-2" />

        <TerminalLine delay={1.2}>
          <span className="text-foreground">echo $MOTIVATION</span>
        </TerminalLine>
        <TerminalLine delay={1.5} isOutput>
          <span className="text-accent">{">>>"}</span>
          <span className="text-foreground">
            {" Construire des produits utiles et scalables pour le monde"}
          </span>
        </TerminalLine>

        <div className="h-2" />

        <TerminalLine delay={1.8}>
          <span className="text-foreground">npm run build-future</span>
        </TerminalLine>
        {showOutput && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="pl-5 font-mono text-sm"
          >
            <span className="text-accent">{">"}</span>
            <span className="text-foreground">
              {" Compilation reussie. L'avenir est en marche..."}
            </span>
          </motion.div>
        )}

        <div className="h-3" />

        {/* Blinking cursor */}
        <div className="flex items-center gap-2 font-mono text-sm">
          <span className="text-accent select-none">$</span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8, ease: "steps(1)" }}
            className="inline-block h-4 w-2 bg-accent/70"
          />
        </div>
      </div>
    </motion.div>
  )
}

export function VisionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="vision" className="relative px-6 py-28">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium tracking-wider text-primary uppercase">
            {"<Vision />"}
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
            Mon ambition en code
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Ma vision du futur, ecrite dans le langage que je maitrise le mieux.
          </p>
        </motion.div>

        {/* Two-column layout: code editor + terminal */}
        <div className="grid gap-6 lg:grid-cols-2">
          <AnimatedCodeBlock />
          <TerminalBlock />
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="inline-block rounded-xl border border-border/50 bg-card/50 px-8 py-4 font-mono text-sm text-muted-foreground backdrop-blur-sm">
            <span className="text-primary">{"// "}</span>
            {"Le code est mon outil. L'impact est mon objectif."}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
