import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { BLOG_CATEGORIES, getBlogCategory, getBlogPostsByCategory } from "@/lib/blogs"

export function generateStaticParams() {
  return BLOG_CATEGORIES.map(({ slug }) => ({ category: slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category: categorySlug } = await params
  const category = getBlogCategory(categorySlug)
  if (!category) return {}
  return {
    title: `${category.label} Blogs | Oculyx`,
    description: category.description,
  }
}

export default async function BlogCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: categorySlug } = await params
  const category = getBlogCategory(categorySlug)
  if (!category) notFound()

  const posts = getBlogPostsByCategory(category.slug)

  return (
    <div id="top" className="min-h-screen bg-background text-foreground dot-grid-bg">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 pb-20 pt-12 lg:px-12 lg:pt-16">
        <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-foreground">Oculyx</Link>
          <span aria-hidden="true" className="text-[#ea580c]">/</span>
          <span className="text-foreground">Blogs</span>
        </nav>
        <div className="mb-10 max-w-3xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#ea580c]">{"// OCULYX BLOG / TOPIC"}</p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
            <h1 className="font-display text-3xl font-extrabold uppercase tracking-tight sm:text-5xl">{category.label}</h1>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{String(posts.length).padStart(2, "0")} ARTICLES</span>
          </div>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">{category.description}</p>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {posts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blogs/${category.slug}/${post.slug}`}
                className="group flex h-full flex-col border border-foreground/20 bg-background transition-colors hover:border-[#ea580c]"
              >
                <div className="relative aspect-[2.2/1] overflow-hidden border-b border-border bg-muted">
                  <Image src={post.coverImage} alt={post.coverAlt} fill sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" />
                  <span className="absolute left-3 top-3 border border-background/30 bg-background/85 px-2 py-1 font-mono text-[9px] uppercase tracking-widest text-foreground">{String(index + 1).padStart(2, "0")} / {String(posts.length).padStart(2, "0")}</span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                    <span>{category.label}</span>
                    {post.publishedOn && <><span aria-hidden="true" className="text-[#ea580c]">/</span><time>{post.publishedOn}</time></>}
                    <span aria-hidden="true" className="text-[#ea580c]">/</span><span>{post.readTime}</span>
                  </div>
                  <h2 className="mt-4 font-display text-xl font-bold leading-snug tracking-tight">{post.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                  <span className="mt-6 inline-flex items-center gap-2 border-t border-border pt-4 font-mono text-[10px] uppercase tracking-widest text-foreground transition-colors group-hover:text-[#ea580c]">Read article <span aria-hidden="true">→</span></span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="border border-border px-6 py-12 text-sm text-muted-foreground">New articles in this topic are on the way.</div>
        )}
      </main>
      <footer className="border-t border-border px-6 py-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground lg:px-12">OCULYX · SIGNAL → CONTEXT → INFERENCE</footer>
    </div>
  )
}
