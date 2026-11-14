"use client"

import { motion } from "framer-motion"

const EXAMPLES = [
  { title: "Footfall & occupancy", label: "CROWD MONITORING / LIVE", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13ad6363-bed1-4722-88b2-884ef8dd919c-HBeLUDikf7DB3JnX43tESZgs51YIDe.png", alt: "Crowd monitoring dashboard with live footfall and zone occupancy" },
  { title: "Safety event detection", label: "PPE MONITORING / EVENT", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/detect-RKxza7pEtQq7xCksLAsCexR35LLcfI.jpeg", alt: "Workplace surveillance frame highlighting missing protective gloves" },
  { title: "Parking & empty spaces", label: "PARKING INTELLIGENCE / LIVE", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/videoframe_14741-mAlnNPs8i1fRHm9zjrsf1DC9WD3dVv.png", alt: "Computer vision monitoring vehicles and available parking spaces" },
  { title: "Theft & behaviour analytics", label: "BEHAVIOUR ANALYSIS / REVIEW", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d1773d9d-1d14-4457-ae49-3f3f49a2f985-YWzAdlALXQm90GPGhBDUZ3FrhMIOJ1.webp", alt: "Surveillance analytics interface identifying a theft event" },
]

export function LiveShowcase() {
  return <section id="live" className="w-full px-6 py-20 lg:px-12">
    <div className="mb-8 flex items-center gap-4"><span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{"// SURVEILLANCE INTELLIGENCE"}</span><div className="flex-1 border-t border-border" /><span className="font-mono text-[10px] text-muted-foreground">007</span></div>
    <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"><div className="max-w-2xl"><h2 className="text-2xl font-extrabold uppercase tracking-tight lg:text-4xl">From camera feeds<br/><span className="text-[#ea580c]">to operational context.</span></h2><p className="mt-4 max-w-xl text-xs leading-relaxed text-muted-foreground lg:text-sm">Real-world examples of what Oculyx surveillance intelligence can monitor: footfall, safety, parking availability, suspicious activity and more.</p></div><a href="/surveillance" className="self-start border border-foreground px-5 py-3 font-mono text-xs uppercase tracking-widest hover:bg-foreground hover:text-background">Explore surveillance →</a></div>
    <div className="grid grid-cols-1 gap-px border border-foreground bg-foreground sm:grid-cols-2 lg:grid-cols-4">{EXAMPLES.map((item, i) => <motion.article key={item.title} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}} className="bg-background"><div className="flex items-center justify-between border-b border-border px-3 py-2"><span className="font-mono text-[9px] tracking-widest text-muted-foreground">{item.label}</span><span className="size-1.5 bg-[#ea580c]" /></div><div className="relative aspect-[4/3] overflow-hidden"><img src={item.image} alt={item.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]" /></div><div className="px-4 py-4"><h3 className="font-display text-sm font-bold uppercase">{item.title}</h3><p className="mt-2 font-mono text-[10px] leading-relaxed text-muted-foreground">Detection, context and event prioritization for a faster operational response.</p></div></motion.article>)}</div>
  </section>
}
