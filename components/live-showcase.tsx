"use client"

import { motion } from "framer-motion"

const EXAMPLES = [
  { title: "Footfall & occupancy", label: "CROWD MONITORING / LIVE", image: "/images/crowd-footfall.png", alt: "Crowd-monitoring dashboard displaying live footfall and zone-occupancy activity" },
  { title: "Safety & PPE events", label: "PPE MONITORING / EVENT", image: "/images/ppe-detection.jpeg", alt: "Workplace surveillance image with visual markers identifying missing protective gloves" },
  { title: "Vehicle & parking detection", label: "PARKING INTELLIGENCE / LIVE", image: "/images/parking-detection.png", alt: "Parking-lot camera view with detected vehicles and tracked parking spaces" },
  { title: "Theft & suspicious activity", label: "BEHAVIOUR ANALYSIS / REVIEW", image: "/images/theft-monitoring.webp", alt: "Surveillance analytics view highlighting a suspected pickpocketing event" },
  { title: "Face detection", label: "IDENTITY SIGNAL / REVIEW", image: "/images/face-detection.png", alt: "Face-detection interface showing facial landmarks and confidence information" },
  { title: "Vacant-space detection", label: "SPACE MONITORING / LIVE", image: "/images/empty-space-monitoring.png", alt: "Aerial view marking vacant spaces and high-activity areas" },
  { title: "Service & workflow monitoring", label: "ACTIVITY ANALYTICS / LIVE", image: "/images/service-analytics.png", alt: "Restaurant service analytics dashboard with staff movement and activity metrics" },
  { title: "Forensic person search", label: "VIDEO INVESTIGATION / SEARCH", image: "/images/person-search.png", alt: "Forensic video search interface showing people matching a visual query" },
]

export function LiveShowcase() {
  return (
    <section id="live" className="w-full px-6 py-20 lg:px-12">
      <div className="mb-8 flex items-center gap-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{"// SURVEILLANCE INTELLIGENCE"}</span>
        <div className="flex-1 border-t border-border" />
        <span className="font-mono text-[10px] text-muted-foreground">007</span>
      </div>
      <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-extrabold uppercase tracking-tight lg:text-4xl">From camera feeds<br /><span className="text-[#ea580c]">to operational context.</span></h2>
          <p className="mt-4 max-w-xl text-xs leading-relaxed text-muted-foreground lg:text-sm">Explore eight surveillance use cases—from footfall and safety monitoring to parking availability, suspicious activity and forensic search.</p>
        </div>
        <a href="/surveillance" className="self-start border border-foreground px-5 py-3 font-mono text-xs uppercase tracking-widest hover:bg-foreground hover:text-background">Explore surveillance →</a>
      </div>
      <div className="grid grid-cols-1 gap-px border border-foreground bg-foreground sm:grid-cols-2 lg:grid-cols-4">
        {EXAMPLES.map((item, i) => (
          <motion.article key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 4) * 0.08 }} className="bg-background">
            <div className="flex items-center justify-between border-b border-border px-3 py-2">
              <span className="font-mono text-[9px] tracking-widest text-muted-foreground">{item.label}</span>
              <span className="size-1.5 bg-[#ea580c]" />
            </div>
            <div className="aspect-[4/3] overflow-hidden bg-foreground/5">
              <img src={item.image} alt={item.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]" />
            </div>
            <div className="px-4 py-4">
              <h3 className="font-display text-sm font-bold uppercase">{item.title}</h3>
              <p className="mt-2 font-mono text-[10px] leading-relaxed text-muted-foreground">Detection, context and event prioritization for a faster operational response.</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
