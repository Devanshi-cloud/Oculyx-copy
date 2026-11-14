import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { BLOG_POSTS, getBlogCategory, getBlogPost, getBlogPostsByCategory } from "@/lib/blogs"

export function generateStaticParams() {
  return BLOG_POSTS.map(({ category, slug }) => ({ category, slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params
  const post = getBlogPost(category, slug)
  if (!post) return {}
  return {
    title: `${post.title} | Oculyx Blog`,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
    },
  }
}

export default async function BlogArticlePage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category: categorySlug, slug } = await params
  const category = getBlogCategory(categorySlug)
  const post = getBlogPost(categorySlug, slug)
  if (!category || !post) notFound()

  const relatedPosts = getBlogPostsByCategory(category.slug).filter((item) => item.slug !== post.slug)

  return (
    <div id="top" className="min-h-screen bg-background text-foreground dot-grid-bg">
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 pb-20 pt-10 lg:px-12 lg:pt-14">
        <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          <Link href={`/blogs/${category.slug}`} className="transition-colors hover:text-foreground">{category.label} blogs</Link>
          <span aria-hidden="true" className="text-[#ea580c]">/</span>
          <span className="text-foreground">Article</span>
        </nav>
        <article>
          <header className="max-w-4xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#ea580c]">{"// OCULYX BLOG / "}{category.label}</p>
            <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">{post.title}</h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">{post.excerpt}</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {post.publishedOn && <><time>{post.publishedOn}</time><span aria-hidden="true" className="text-[#ea580c]">/</span></>}
              <span>{post.readTime}</span>
            </div>
          </header>

          <div className="relative mt-10 aspect-[2.2/1] overflow-hidden border border-border bg-muted">
            <Image src={post.coverImage} alt={post.coverAlt} fill sizes="(max-width: 1024px) 100vw, 900px" className="object-cover object-top" priority />
          </div>

          <div className="case-study-body mt-10 max-w-none">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && <ul className="list-disc pl-6">{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
              </section>
            ))}
          </div>
          {post.sourceNote && <p className="mt-10 border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">{post.sourceNote}</p>}
        </article>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-y border-border py-5">
          <Link href={`/blogs/${category.slug}`} className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-foreground transition-colors hover:text-[#ea580c]">← Back to {category.label} blogs</Link>
          <Link href="/blogs" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground">All blog topics</Link>
        </div>

        {relatedPosts.length > 0 && (
          <section className="mt-14" aria-labelledby="related-articles">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#ea580c]">{"// CONTINUE READING"}</p>
            <h2 id="related-articles" className="mt-3 font-display text-2xl font-bold uppercase tracking-tight">More in {category.label}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {relatedPosts.slice(0, 2).map((related) => (
                <Link key={related.slug} href={`/blogs/${category.slug}/${related.slug}`} className="border border-border p-5 transition-colors hover:border-[#ea580c]">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">{related.readTime}</span>
                  <h3 className="mt-3 font-display text-lg font-bold leading-snug">{related.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{related.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <footer className="border-t border-border px-6 py-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground lg:px-12">OCULYX · SIGNAL → CONTEXT → INFERENCE</footer>
    </div>
  )
}
