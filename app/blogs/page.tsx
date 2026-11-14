import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { BLOG_CATEGORIES } from "@/lib/blogs"

export const metadata = {
  title: "Oculyx Blogs | Real-World Intelligence",
  description: "Explore Oculyx writing on distributed fibre sensing, surveillance intelligence and agentic network operations.",
}

export default function BlogsIndexPage() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground dot-grid-bg">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 pb-20 pt-12 lg:px-12 lg:pt-16">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#ea580c]">{"// OCULYX BLOG / ALL TOPICS"}</p>
        <h1 className="mt-4 font-display text-3xl font-extrabold uppercase tracking-tight sm:text-5xl">Signals, in context.</h1>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">Explore case studies, research and operating principles across Oculyx intelligence layers.</p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {BLOG_CATEGORIES.map((category, index) => (
            <Link key={category.slug} href={`/blogs/${category.slug}`} className="group flex min-h-56 flex-col justify-between border border-border bg-background p-6 transition-colors hover:border-[#ea580c]">
              <span className="font-mono text-[10px] tracking-widest text-[#ea580c]">0{index + 1} / BLOG TOPIC</span>
              <div>
                <h2 className="font-display text-2xl font-bold uppercase tracking-tight">{category.label}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{category.description}</p>
                <span className="mt-6 inline-flex font-mono text-[10px] uppercase tracking-widest text-foreground transition-colors group-hover:text-[#ea580c]">Browse articles →</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <footer className="border-t border-border px-6 py-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground lg:px-12">OCULYX · SIGNAL → CONTEXT → INFERENCE</footer>
    </div>
  )
}
