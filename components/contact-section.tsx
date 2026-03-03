"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Send, Github, Linkedin, Mail, CheckCircle } from "lucide-react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
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
            Contact
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Travaillons ensemble
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Vous avez un projet en tete ou une opportunite ? {"N'hesitez"} pas a
            me contacter.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Nom complet
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Votre nom"
                    className="w-full rounded-xl border border-border bg-secondary px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="votre@email.com"
                    className="w-full rounded-xl border border-border bg-secondary px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Sujet
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  placeholder="Sujet de votre message"
                  className="w-full rounded-xl border border-border bg-secondary px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Decrivez votre projet ou votre demande..."
                  className="w-full resize-none rounded-xl border border-border bg-secondary px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:opacity-90 glow-primary sm:w-auto"
              >
                {submitted ? (
                  <>
                    <CheckCircle size={18} />
                    Message envoye !
                  </>
                ) : (
                  <>
                    Envoyer le message
                    <Send
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-col gap-8 lg:col-span-2"
          >
            <div className="rounded-2xl border border-border bg-card p-7">
              <h3 className="mb-5 text-lg font-semibold text-foreground">
                Retrouvez-moi
              </h3>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:contact@segacamara.dev"
                  className="group flex items-center gap-4 rounded-xl bg-secondary p-4 transition-all duration-300 hover:bg-secondary/80"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <p className="text-xs text-muted-foreground">
                      sega.camara.dev@gmail.com
                    </p>
                  </div>
                </a>
                <a
                  href="https://github.com/Camara-sega"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl bg-secondary p-4 transition-all duration-300 hover:bg-secondary/80"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Github size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      GitHub
                    </p>
                    <p className="text-xs text-muted-foreground">
                      @segacamara
                    </p>
                  </div>
                </a>
                <a
                  href="https://linkedin.com/in/segacamara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl bg-secondary p-4 transition-all duration-300 hover:bg-secondary/80"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Linkedin size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      LinkedIn
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Sega Camara
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-accent/10 p-7">
              <p className="text-sm leading-relaxed text-foreground">
                {"\""}Disponible pour des missions freelance, des collaborations
                et des opportunites en  CDD ou CDI. Parlons de votre prochain projet !{"\""}
              </p>
              <p className="mt-3 text-sm font-semibold text-primary">
                - Sega Camara
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
