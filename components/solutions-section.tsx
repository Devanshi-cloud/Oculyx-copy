"use client"

import { ArrowRight, Building2, Eye, Fingerprint } from "lucide-react"
import { motion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

interface Solution {
  id: string
  index: string
  name: string
  title: string
  description: string
  pattern: string
  icon: React.ReactNode
  cta: string
}

const SOLUTIONS: Solution[] = [
  {
    id: "dfos",
    index: "_01",
    name: "OCULYX INTELLIGENCE LAYER",
    title: "Distributed Fibre-Optic Sensing",
    description:
      "Turn fibre networks into continuous sensing systems. Interpret distributed acoustic, temperature and strain signals to monitor assets and surface meaningful change.",
    pattern: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/932f0540-e830-465c-ba80-42dab14dae45-0qjNtLtSp9V8XrWOWasW4nxvxR69uk.png",
    icon: <Building2 size={26} strokeWidth={1.25} />,
    cta: "Explore DFOS",
  },
  {
    id: "surveillance",
    index: "_02",
    name: "OCULYX INTELLIGENCE LAYER",
    title: "Surveillance Intelligence",
    description:
      "Connect video, audio and operational context to spot relevant events, monitor spaces and investigate faster—from footfall to safety and suspicious activity.",
    pattern: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13ad6363-bed1-4722-88b2-884ef8dd919c-HBeLUDikf7DB3JnX43tESZgs51YIDe.png",
    icon: <Eye size={26} strokeWidth={1.25} />,
    cta: "Explore Surveillance",
  },
  {
    id: "network-intelligence",
    index: "_03",
    name: "OCULYX INTELLIGENCE LAYER",
    title: "Agentic Network Router",
    description:
      "Analyse network conditions, detect faults and support intelligent routing decisions with agentic orchestration for resilient connectivity.",
    pattern: "/images/mpls-network-topology.webp",
    icon: <Fingerprint size={26} strokeWidth={1.25} />,
    cta: "Explore Network Intelligence",
  },
]

function SolutionCard({ solution, index }: { solution: Solution; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.12, duration: 0.6, ease }}
      className="flex flex-col h-full bg-background"
    >
      {/* Pattern header */}
      <div
        className="relative flex items-center justify-center h-36 border-b-2 border-foreground overflow-hidden"
        style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.05), rgba(0,0,0,.68)), url("${solution.pattern}")`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="flex items-center justify-center w-14 h-14 border-2 border-foreground bg-background text-[#ea580c]">
          {solution.icon}
        </div>
        <span className="absolute top-3 left-4 text-[10px] font-mono tracking-[0.2em] uppercase text-muted-foreground">
          {solution.index}
        </span>
        <span className="absolute top-3 right-4 flex items-center gap-2">
          <span className="h-1.5 w-1.5 bg-[#ea580c]" />
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted-foreground">
            ACTIVE
          </span>
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-4 flex-1 px-5 py-6">
        <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted-foreground">
          {solution.name}
        </span>
        <h3 className="text-lg lg:text-xl font-display font-bold tracking-tight uppercase leading-tight">
          {solution.title}
        </h3>
        <p className="text-xs lg:text-sm font-mono text-muted-foreground leading-relaxed flex-1">
          {solution.description}
        </p>
        <a
          href={`/${solution.id}`}
          className="group flex items-center justify-between gap-3 border-t-2 border-foreground pt-4 text-xs font-mono tracking-widest uppercase text-foreground hover:text-[#ea580c] transition-colors duration-200"
        >
          {solution.cta}
          <motion.span
            className="inline-flex text-[#ea580c]"
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <ArrowRight size={14} strokeWidth={2} />
          </motion.span>
        </a>
      </div>
    </motion.article>
  )
}

export function SolutionsSection() {
  return (
    <section id="solutions" className="w-full px-6 py-20 lg:px-12">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease }}
        className="flex items-center gap-4 mb-8"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-mono">
          {"// SECTION: SOLUTIONS"}
        </span>
        <div className="flex-1 border-t border-border" />
        <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-mono">
          008
        </span>
      </motion.div>

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease }}
        className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12"
      >
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl lg:text-4xl font-display font-extrabold tracking-tight uppercase text-balance">
            Three systems.
            <br />
            One inference engine.
          </h2>
          <p className="text-xs lg:text-sm font-mono text-muted-foreground leading-relaxed max-w-xl">
            DFOS, Surveillance Intelligence, and Agentic Network Routing connect distributed signals, network activity, and real-world events into contextual intelligence and coordinated action.
          </p>
        </div>
        <a href="/dfos-exdts-multi-zone-water-injection-monitoring" className="text-[10px] font-mono tracking-[0.15em] uppercase text-[#ea580c] hover:text-foreground">
          Read DFOS water-injection case study →
        </a>
      </motion.div>

      {/* Solutions grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-2 border-foreground">
        {SOLUTIONS.map((solution, i) => (
          <div
            key={solution.id}
            className={`flex flex-col h-full ${
              i < SOLUTIONS.length - 1 ? "border-b-2 md:border-b-0 md:border-r-2" : ""
            } border-foreground`}
          >
            <SolutionCard solution={solution} index={i} />
          </div>
        ))}
      </div>
    </section>
  )
}
