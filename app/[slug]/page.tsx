import Image from "next/image"
import Link from "next/link"
import { notFound, redirect } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { BLOG_POSTS, LEGACY_BLOG_REDIRECTS, getBlogPostsByCategory } from "@/lib/blogs"

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
    image: "/images/network-operations-agents.png",
    imageAlt: "Network operations agents coordinated through a human approval and safety layer",
    capabilities: ["Continuous network monitoring", "Traffic and path analysis", "Latency and fault detection", "Agentic routing recommendations", "Operational response orchestration"],
  },
} as const

export function generateStaticParams() {
  return [...Object.keys(pages), ...Object.keys(LEGACY_BLOG_REDIRECTS)].map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const legacyPath = LEGACY_BLOG_REDIRECTS[slug]
  const legacyPost = legacyPath && BLOG_POSTS.find((post) => legacyPath.endsWith(`/${post.slug}`))
  if (legacyPost) return { title: `${legacyPost.title} | Oculyx Blog`, description: legacyPost.excerpt }
  const page = pages[slug as keyof typeof pages]
  return page ? { title: `${page.eyebrow} | Oculyx`, description: page.description } : {}
}

export default async function IntelligencePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const legacyPath = LEGACY_BLOG_REDIRECTS[slug]
  if (legacyPath) redirect(legacyPath)

  const page = pages[slug as keyof typeof pages]
  if (!page) notFound()

  const networkPosts = getBlogPostsByCategory("agentic-router-network")

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:items-center lg:px-12 lg:py-24">
        <div>
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#ea580c]">{page.eyebrow}</p>
          <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-6xl">{page.title}</h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">{page.description}</p>
          <a href="#capabilities" className="mt-8 inline-flex border border-foreground px-5 py-3 text-xs font-mono uppercase tracking-widest hover:bg-foreground hover:text-background">Explore capabilities <span className="ml-4 text-[#ea580c]">→</span></a>
        </div>
        <div className="relative overflow-hidden border border-border">
          <Image src={page.image} alt={page.imageAlt} width={1200} height={760} className="aspect-[4/3] w-full object-cover" unoptimized />
        </div>
      </section>
      <section id="capabilities" className="mx-auto max-w-7xl px-6 pb-16 lg:px-12">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">WHAT OCULYX CAN PROVIDE</p>
        <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Signals, understood in context.</h2>
        <ul className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {page.capabilities.map((item, index) => <li key={item} className="bg-background p-5"><span className="mr-3 font-mono text-xs text-[#ea580c]">0{index + 1}</span>{item}</li>)}
        </ul>
        {slug === "network-intelligence" ? (
          <div className="mt-12">
            <Link href="/blogs/agentic-router-network" className="font-mono text-[10px] uppercase tracking-widest text-[#ea580c]">Agentic Router Network / Blogs →</Link>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {networkPosts.map((post) => <Link key={post.slug} href={`/blogs/${post.category}/${post.slug}`} className="border border-border p-5 transition-colors hover:border-[#ea580c]"><span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">{post.readTime}</span><h3 className="mt-3 font-display text-lg font-bold leading-snug">{post.title}</h3><p className="mt-3 text-xs leading-relaxed text-muted-foreground">{post.excerpt}</p></Link>)}
            </div>
          </div>
        ) : (
          <Link href={`/blogs/${slug}`} className="mt-10 inline-flex border border-border px-5 py-3 text-xs font-mono uppercase tracking-widest transition-colors hover:border-[#ea580c]">Explore {page.eyebrow} blogs →</Link>
        )}
      </section>
      <footer className="border-t border-border px-6 py-6 text-xs font-mono uppercase tracking-widest text-muted-foreground lg:px-12">OCULYX · SIGNAL → CONTEXT → INFERENCE</footer>
    </main>
  )
}
