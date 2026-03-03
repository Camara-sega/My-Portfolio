"use client"
import Image from "next/image"

import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 md:flex-row md:justify-between">
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

          <span className="text-xs text-muted-foreground">
            {"© 2026 . Tous droits reserves."}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:sega.camara.dev@gmail.com"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
          <a
            href="https://github.com/Camara-sega"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://linkedin.com/in/segacamara"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
