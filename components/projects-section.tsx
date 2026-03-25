"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState, useCallback, useEffect } from "react"
import Image from "next/image"
import {
  ArrowUpRight,
  X,
  ExternalLink,
  GraduationCap,
  Database,
  ShoppingBag,
  Layers,
  MessageSquare,
  BarChart3,
} from "lucide-react"

interface Project {
  title: string
  subtitle: string
  description: string
  longDescription: string
  tags: string[]
  features: string[]
  icon: React.ReactNode
  gradient: string
  link: string
  year: string
  image: string
}

const projects: Project[] = [
  {
    title: "Portfolio 2026",
    subtitle: "Site personnel",
    description:
      "Ce portfolio premium avec animations Framer Motion et glassmorphism.",
    longDescription:
      "Le portfolio que vous consultez en ce moment. Concu avec une attention particuliere au detail, il utilise Next.js, Framer Motion pour les animations fluides, et Tailwind CSS pour un design system coherent. L'architecture est modulaire et chaque section est un composant independant pour une maintenance optimale.",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    features: [
      "Animations fluides Framer Motion",
      "Design system coherent",
      "Architecture modulaire",
      "Dark mode premium",
    ],
    icon: <Layers size={22} />,
    gradient: "from-accent/20 to-primary/5",
    link: "https://segacamara.vercel.app/",
    year: "2026",
    image: "/images/ojep.jpeg",
  },
  {
    title: "Projet HOLICORP ",
    subtitle: "Site Web d'OJEP ",
    description:
      "Site vitrine pour la presentation d'Organisation des Jeunes Patrons du Mali (OJEP)",
    longDescription:
      " J’ai créé un site web moderne et responsive pour OJEP, en mettant l’accent sur une expérience utilisateur fluide et intuitive. Chaque élément a été pensé pour être clair, esthétique et fonctionnel, avec un code optimisé pour la performance. Le projet m’a permis d’allier design et développement, tout en respectant les besoins des utilisateurs.",
    tags: ["React.js", " CSS", "Responsive",],
    features: [
      "Interface utilisateur responsive",

    ],
    icon: <GraduationCap size={22} />,
    gradient: "from-primary/20 to-primary/5",
    link: "https://ojep-mali.org/",
    year: "2025",
    image: "/images/ojep.jpeg",
  },
  {
    title: "Gestion Scolaire",
    subtitle: "Application de gestion",
    description:
      "Application complete de gestion scolaire avec authentification securisee.",
    longDescription:
      "Une application de gestion scolaire robuste construite avec Node.js et MySQL. Elle permet la gestion complete des eleves, des notes, des classes et des rapports. Le systeme d'authentification securise protege les donnees sensibles et offre differents niveaux d'acces pour les administrateurs et enseignants.",
    tags: ["react.js", "Node.js", "MySQL", "Prisma", "Auth"],
    features: [
      "Authentification securisee",
      "Gestion des eleves et notes",
      "Generation de rapports",
      "Panel administrateur",
    ],
    icon: <Database size={22} />,
    gradient: "from-accent/20 to-accent/5",
    link: "#",
    year: "2025",
    image: "/images/project-gestion-scolaire.jpg",
  },
  {
    title: "Projet HOLICORP ",
    subtitle: "Site Web d'Arcade ",
    description:
      "Site vitrine pour la presentation d'arcade architecture ",
    longDescription:
      "  J’ai réalisé le site web de Arcade SARL, une entreprise d’architecture dirigée par Alhouseni Touré.Le site a été conçu avec WordPress, en utilisant le thème Adsett, que j’ai personnalisé pour correspondre à l’identité visuelle et aux besoins de l’entreprise.L’objectif était de créer une plateforme moderne, élégante et professionnelle pour présenter les projets architecturaux, les services et les réalisations de l’entreprise.",
    tags: ["Wordpress", "Elementor Pro",],
    features: [
      "La personnalisation du thème",
      "La structuration des contenus",
      "L’optimisation de l’affichage responsive",
      "L’amélioration de l’expérience utilisateur",
    ],
    icon: <ShoppingBag size={22} />,
    gradient: "from-primary/20 to-accent/5",
    link: "#",
    year: "2024",
    image: "/images/arcade.jpeg",
  },

  {
    title: "ChatApp",
    subtitle: "Messagerie temps reel",
    description:
      "Application de messagerie en temps reel avec WebSocket et interface moderne.",
    longDescription:
      "Une application de messagerie en temps reel utilisant WebSocket pour une communication instantanee. L'interface moderne supporte les conversations individuelles et de groupe, le partage de fichiers et les notifications en temps reel. Le design est optimise pour une experience fluide sur tous les appareils.",
    tags: ["React.js", "WebSocket", "Node.js", "Express"],
    features: [
      "Messagerie en temps reel",
      "Conversations de groupe",
      "Partage de fichiers",
      "Notifications push",
    ],
    icon: <MessageSquare size={22} />,
    gradient: "from-primary/15 to-primary/5",
    link: "#",
    year: "2024",
    image: "/images/project-chatapp.jpg",
  },
  {
    title: "Dashboard Analytics",
    subtitle: "Tableau de bord",
    description:
      "Dashboard interactif de visualisation de donnees avec graphiques dynamiques.",
    longDescription:
      "Un tableau de bord analytique interactif concu pour visualiser des donnees complexes de maniere claire et intuitive. Il comprend des graphiques dynamiques, des filtres en temps reel, l'export de rapports et une interface responsive. Chaque widget est personnalisable selon les besoins de l'utilisateur.",
    tags: ["React.js", "Recharts", "Tailwind CSS", "API REST"],
    features: [
      "Graphiques dynamiques interactifs",
      "Filtres en temps reel",
      "Export de rapports PDF",
      "Widgets personnalisables",
    ],
    icon: <BarChart3 size={22} />,
    gradient: "from-accent/15 to-accent/5",
    link: "#",
    year: "2025",
    image: "/images/project-dashboard.jpg",
  },
]

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project
  index: number
  onOpen: () => void
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      <button
        onClick={onOpen}
        className="group relative w-full overflow-hidden rounded-2xl border border-border bg-card text-left transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
      >
        {/* Image preview */}
        <div className="relative h-44 w-full overflow-hidden">
          <Image
            src={project.image}
            alt={`Apercu du projet ${project.title}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
          {/* Year badge on image */}
          <div className="absolute top-3 right-3 rounded-md bg-background/70 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-foreground backdrop-blur-sm">
            {project.year}
          </div>
          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
            <span className="flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground">
              Voir les details
              <ArrowUpRight size={14} />
            </span>
          </div>
        </div>

        <div className="p-5">
          {/* Header */}
          <div className="mb-3 flex items-center gap-3">
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${project.gradient} text-foreground transition-transform duration-500 group-hover:scale-110`}
            >
              {project.icon}
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="truncate text-sm font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="text-[11px] text-muted-foreground">
                {project.subtitle}
              </p>
            </div>
          </div>

          <p className="mb-4 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-secondary/80 px-2 py-0.5 text-[10px] font-medium text-muted-foreground transition-colors duration-300 group-hover:text-foreground"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="rounded-md bg-secondary/80 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </button>
    </motion.div>
  )
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) onClose()
    },
    [onClose]
  )

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleEsc)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handleEsc)
      document.body.style.overflow = ""
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={`Details du projet ${project.title}`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />

      {/* Modal content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-border bg-card shadow-2xl shadow-background/50"
      >
        {/* Project image in modal */}
        <div className="relative h-56 w-full overflow-hidden sm:h-64 md:h-72">
          <Image
            src={project.image}
            alt={`Apercu du projet ${project.title}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 720px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-lg border border-border/30 bg-background/60 text-foreground backdrop-blur-sm transition-all hover:bg-background/80"
            aria-label="Fermer"
          >
            <X size={16} />
          </button>

          {/* Title overlay on image */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex items-center gap-4">
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${project.gradient} text-foreground backdrop-blur-sm border border-border/20`}
              >
                {project.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {project.subtitle} &middot; {project.year}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-10">
          {/* Description */}
          <p className="mb-8 text-base leading-relaxed text-muted-foreground">
            {project.longDescription}
          </p>

          {/* Features */}
          <div className="mb-8">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Fonctionnalites
            </h4>
            <div className="grid gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 rounded-lg border border-border/50 bg-secondary/30 px-4 py-3"
                >
                  <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span className="text-sm text-muted-foreground">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="mb-8">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-border/50 bg-secondary/50 px-3 py-1.5 text-xs font-medium text-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action button */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            <ExternalLink size={16} />
            Voir le projet
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <>
      <section id="projects" className="relative px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <span className="mb-3 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium tracking-wider text-primary uppercase">
              Projets
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
              Mes realisations
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              Cliquez sur un projet pour decouvrir les details, les
              fonctionnalites et les technologies utilisees.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                onOpen={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
