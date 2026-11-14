import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

const pages = {
  dfos: {
    eyebrow: "DISTRIBUTED FIBRE-OPTIC SENSING",
    title: "Infrastructure that can feel change.",
    description: "Turn fibre-optic networks into continuous sensing systems. Oculyx helps teams interpret distributed acoustic, temperature and strain signals to monitor physical assets and surface meaningful change.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/932f0540-e830-465c-ba80-42dab14dae45-0qjNtLtSp9V8XrWOWasW4nxvxR69uk.png",
    imageAlt: "Fibre-optic sensing line beneath a bridge, illustrating distributed infrastructure monitoring",
    capabilities: ["Distributed acoustic sensing (DAS)", "Distributed temperature sensing (DTS)", "Strain and vibration analysis", "Ground movement and asset monitoring"],
  },
  surveillance: {
    eyebrow: "SURVEILLANCE INTELLIGENCE",
    title: "Make every camera more useful.",
    description: "Bring video, audio and operational context together to help teams spot relevant events, monitor spaces and investigate faster—from occupancy and footfall to safety events, suspicious activity and empty-space detection.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13ad6363-bed1-4722-88b2-884ef8dd919c-HBeLUDikf7DB3JnX43tESZgs51YIDe.png",
    imageAlt: "Surveillance intelligence dashboard visualizing crowd and footfall activity",
    capabilities: ["Footfall and occupancy monitoring", "Safety and PPE event detection", "Theft and suspicious-activity alerts", "Face detection and privacy-aware monitoring", "Empty-space and parking availability"],
  },
  "network-intelligence": {
    eyebrow: "AGENTIC NETWORK ROUTER",
    title: "Networks that adapt to conditions.",
    description: "Oculyx analyses telemetry, traffic patterns and network health to identify faults, understand changing conditions and support intelligent routing and operational orchestration.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/932f0540-e830-465c-ba80-42dab14dae45-0qjNtLtSp9V8XrWOWasW4nxvxR69uk.png",
    imageAlt: "Connected infrastructure represented as a continuous monitored network",
    capabilities: ["Continuous network monitoring", "Traffic and path analysis", "Latency and fault detection", "Agentic routing recommendations", "Operational response orchestration"],
  },
} as const

export function generateStaticParams() {
  return [...Object.keys(pages), "dfos-exdts-multi-zone-water-injection-monitoring"].map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (slug === "dfos-exdts-multi-zone-water-injection-monitoring") return {
    title: "DFOS eXDTS for Multi-Zone Water Injection Monitoring | Oculyx",
    description: "Explore how DFOS eXDTS and PLT validation help identify water injection allocation across multi-zone wells, improving well surveillance and reservoir management.",
  }
  const page = pages[slug as keyof typeof pages]
  return page ? { title: `${page.eyebrow} | Oculyx`, description: page.description } : {}
}

function CaseStudy() {
  return <article className="mx-auto max-w-5xl px-6 py-16 lg:px-12">
    <Link href="/" className="text-xs font-mono uppercase tracking-widest text-[#ea580c]">← Oculyx / Insights</Link>
    <p className="mt-12 text-xs font-mono uppercase tracking-[0.2em] text-[#ea580c]">DFOS CASE STUDY · WELL SURVEILLANCE</p>
    <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">Understanding Multi-Zone Water Injection</h1>
    <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">How distributed fibre-optic sensing helps engineers understand fluid distribution across injection zones and validate wellbore measurements.</p>
    <div className="mt-10 overflow-hidden border border-border"><Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2521-WELL-S~1-30OvzaHhFWsdIMhwajOQ02IRBKBgSF.webp" alt="Low-frequency distributed acoustic sensing measurements plotted against well depth and time" width={1400} height={580} className="h-auto w-full" unoptimized /></div>
    <div className="case-study-body mt-12 max-w-none">
      <h2>The challenge: where does the injected water go?</h2><p>In multi-zone injection wells, water can enter several reservoir sections through different flow paths. Estimates from open-hole measurements and permeability models do not always describe actual allocation under changing downhole conditions. Engineers need to know where water enters, how much each zone receives, and whether the interpretation is independently supported.</p>
      <h2>Distributed sensing, continuously</h2><p>Distributed Fibre Optic Sensing uses optical fibre to measure physical changes along its length rather than at a few isolated points. Distributed Temperature Sensing (DTS) captures temperature variation around fluid entry. Distributed Acoustic Sensing (DAS), processed here as low-frequency DAS (eXDTS), supports slope-based profiling of injection behaviour.</p>
      <h2>Acquisition and independent validation</h2><p>In a multi-zone water injector surveillance operation, Expro combined baseline, first-rate injection, shut-in and second-rate injection measurements. Depth correlation used Gamma Ray–Casing Collar Locator (GR-CCL) measurements and temperature matching. A Production Logging Tool (PLT) survey—including GR-CCL, pressure, temperature and spinner sensors—provided an independent comparison at the final injection rate.</p>
      <h2>What the comparison showed</h2><p>The reported results showed strong agreement between DFOS eXDTS-derived injection profiles and independent PLT measurements. The comparison helped confirm water-entry intervals, evaluate injection allocation across multiple zones and assess behaviour under varying rates and shut-in conditions. The work demonstrated the potential of DFOS eXDTS as a reliable complementary approach for commingled, multi-zone injection surveillance.</p>
      <h2>Where Oculyx can add intelligence</h2><p>The described Expro operation used DFOS eXDTS and PLT comparison; Oculyx was not a component of that deployment. Oculyx can provide an additional AI analysis layer after signal acquisition and processing:</p>
      <ol><li><strong>Acquire:</strong> ingest DAS and DTS measurements from the sensing workflow.</li><li><strong>Prepare:</strong> analyse structured, processed features rather than claim to replace interrogator signal processing.</li><li><strong>Identify:</strong> detect patterns and deviations from operating baselines for engineering review.</li><li><strong>Contextualize:</strong> connect anomaly insights with asset, well and operational context to support monitoring and investigation workflows.</li></ol>
      <p>Potential applications include injection monitoring, anomaly screening, leak investigation and well-integrity assessment. The AI layer supports engineering judgment; it does not replace validated measurements or expert interpretation.</p>
      <h2>From measurements to better decisions</h2><p>DFOS can provide continuous visibility into well behaviour, while comparison with conventional measurements can help validate the interpretation. Adding signal processing, contextual analysis and anomaly detection creates a path from distributed measurements to actionable engineering intelligence.</p>
    </div>
    <div className="mt-10 border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground"><strong>SEO keywords:</strong> DFOS, eXDTS, DAS, DTS, multi-zone injection monitoring, water injection profiling, PLT validation, fibre optic sensing, AI anomaly detection.</div>
  </article>
}

export default async function IntelligencePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (slug === "dfos-exdts-multi-zone-water-injection-monitoring") return <><header className="flex items-center gap-3 border-b border-border px-6 py-4"><Link href="/" className="flex items-center gap-3 font-bold tracking-[0.2em]"><Image src="/images/oculyx-mark.png" alt="Oculyx" width={34} height={28} className="h-7 w-auto object-contain" style={{ width: "auto" }} />OCULYX</Link></header><CaseStudy /></>
  const page = pages[slug as keyof typeof pages]
  if (!page) notFound()
  return <main className="min-h-screen bg-background text-foreground">
    <header className="flex items-center justify-between border-b border-border px-6 py-5 lg:px-12"><Link href="/" className="flex items-center gap-3 font-bold tracking-[0.2em]"><Image src="/images/oculyx-mark.png" alt="Oculyx" width={34} height={28} className="h-7 w-auto object-contain" style={{ width: "auto" }} />OCULYX</Link><Link href="/#solutions" className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-[#ea580c]">All intelligence layers →</Link></header>
    <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:items-center lg:px-12 lg:py-24"><div><p className="text-xs font-mono uppercase tracking-[0.2em] text-[#ea580c]">{page.eyebrow}</p><h1 className="mt-5 text-4xl font-bold leading-tight sm:text-6xl">{page.title}</h1><p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">{page.description}</p><a href="#capabilities" className="mt-8 inline-flex border border-foreground px-5 py-3 text-xs font-mono uppercase tracking-widest hover:bg-foreground hover:text-background">Explore capabilities <span className="ml-4 text-[#ea580c]">→</span></a></div><div className="relative overflow-hidden border border-border"><Image src={page.image} alt={page.imageAlt} width={1200} height={760} className="aspect-[4/3] w-full object-cover" unoptimized /></div></section>
    <section id="capabilities" className="mx-auto max-w-7xl px-6 pb-20 lg:px-12"><p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">WHAT OCULYX CAN PROVIDE</p><h2 className="mt-3 text-2xl font-bold sm:text-3xl">Signals, understood in context.</h2><ul className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">{page.capabilities.map((item, i) => <li key={item} className="bg-background p-5"><span className="mr-3 font-mono text-xs text-[#ea580c]">0{i + 1}</span>{item}</li>)}</ul><div className="mt-12 flex flex-wrap gap-4"><Link href="/dfos-exdts-multi-zone-water-injection-monitoring" className="border border-border px-5 py-3 text-sm hover:border-[#ea580c]">Read DFOS water-injection case study →</Link><Link href="/" className="px-5 py-3 text-sm text-muted-foreground hover:text-foreground">Return to Oculyx →</Link></div></section>
    <footer className="border-t border-border px-6 py-6 text-xs font-mono uppercase tracking-widest text-muted-foreground lg:px-12">OCULYX · SIGNAL → CONTEXT → INFERENCE</footer>
  </main>
}
