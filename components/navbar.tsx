"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { BLOG_CATEGORIES } from "@/lib/blogs"

const ease = [0.22, 1, 0.36, 1] as const
const LINKS = [
  { label: "Platform", href: "#platform" },
  { label: "Solutions", href: "#solutions" },
  { label: "Company", href: "#company" },
]

export function Navbar({ onDemo }: { onDemo?: () => void }) {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [active, setActive] = useState<string>("")
  const [menuOpen, setMenuOpen] = useState(false)
  const [blogsOpen, setBlogsOpen] = useState(false)
  const blogsActive = pathname.startsWith("/blogs")

  useEffect(() => {
    if (!isHome) {
      setActive("")
      return
    }

    const targets = LINKS.map((link) => document.querySelector(link.href)).filter(
      (element): element is Element => Boolean(element)
    )
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    )
    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [isHome])

  const go = (href: string) => {
    setMenuOpen(false)
    if (!isHome) {
      window.location.assign(`/${href}`)
      return
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const desktopLinks = (
    <>
      {LINKS.map((link, index) => {
        const href = isHome ? link.href : `/${link.href}`
        const isActive = active === link.href
        return (
          <motion.a
            key={link.label}
            href={href}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.06, duration: 0.4, ease }}
            onClick={(event) => {
              if (!isHome) return
              event.preventDefault()
              go(link.href)
            }}
            className={`relative whitespace-nowrap text-xs font-mono tracking-widest uppercase transition-colors duration-200 ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
          >
            {link.label}
            <span className={`absolute -bottom-1.5 left-0 h-0.5 bg-[#ea580c] transition-all duration-300 ${isActive ? "w-full" : "w-0"}`} />
          </motion.a>
        )
      })}
      <div className="relative" onMouseEnter={() => setBlogsOpen(true)} onMouseLeave={() => setBlogsOpen(false)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setBlogsOpen(false) }} onKeyDown={(event) => { if (event.key === "Escape") setBlogsOpen(false) }}>
        <motion.button
          type="button"
          aria-haspopup="menu"
          aria-expanded={blogsOpen}
          aria-controls="desktop-blogs-menu"
          onClick={() => setBlogsOpen(true)}
          onFocus={() => setBlogsOpen(true)}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42, duration: 0.4, ease }}
          className={`relative inline-flex items-center gap-1.5 whitespace-nowrap text-xs font-mono tracking-widest uppercase transition-colors duration-200 ${blogsActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
        >
          Blogs
          <ChevronDown aria-hidden="true" className={`size-3 transition-transform duration-200 ${blogsOpen ? "rotate-180" : ""}`} />
          <span className={`absolute -bottom-1.5 left-0 h-0.5 bg-[#ea580c] transition-all duration-300 ${blogsActive ? "w-full" : "w-0"}`} />
        </motion.button>
        <AnimatePresence>
          {blogsOpen && (
            <motion.div
              id="desktop-blogs-menu"
              role="menu"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.16, ease }}
              className="absolute left-0 top-full z-20 w-72 pt-4"
            >
              <div className="border border-foreground/20 bg-background p-2 shadow-xl">
                <div role="group" aria-label="Browse by intelligence layer">
                  <p className="px-3 py-2 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">Browse by intelligence layer</p>
                  {BLOG_CATEGORIES.map((category) => (
                    <a
                      key={category.slug}
                      role="menuitem"
                      href={`/blogs/${category.slug}`}
                      onClick={() => setBlogsOpen(false)}
                      className="group flex items-center justify-between gap-3 px-3 py-3 text-xs font-mono uppercase tracking-wider text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
                    >
                      {category.label}
                      <span aria-hidden="true" className="text-[#ea580c] transition-transform group-hover:translate-x-1">→</span>
                    </a>
                  ))}
                </div>
                <a role="menuitem" href="/blogs" onClick={() => setBlogsOpen(false)} className="mt-1 block border-t border-border px-3 py-3 font-mono text-[10px] uppercase tracking-widest text-[#ea580c] hover:text-foreground">All blogs →</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease }}
      className="sticky top-0 z-50 w-full bg-background/85 px-3 py-3 backdrop-blur-md lg:px-6 lg:pt-6"
    >
      <nav aria-label="Main navigation" className="w-full border border-foreground/20 px-4 py-3 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <a
            href={isHome ? "#top" : "/"}
            onClick={(event) => {
              if (!isHome) return
              event.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
            className="flex shrink-0 items-center gap-2.5"
          >
            <Image src="/images/oculyx-mark.png" alt="Oculyx" width={38} height={32} className="h-8 w-auto object-contain" style={{ width: "auto" }} priority />
            <span className="text-xs font-display font-bold tracking-[0.2em] uppercase">OCULYX</span>
            <span className="hidden border-l border-border pl-2.5 text-[9px] font-mono tracking-[0.15em] uppercase text-muted-foreground sm:inline">SIGNAL → CONTEXT → INFERENCE</span>
          </a>

          <div className="hidden items-center gap-6 md:flex lg:gap-8">{desktopLinks}</div>

          <div className="flex items-center gap-3 lg:gap-4">
            <span className="hidden items-center gap-2 border border-foreground/20 px-2.5 py-1.5 xl:flex"><span className="size-1.5 animate-blink bg-[#ea580c]" /><span className="text-[9px] font-mono tracking-[0.2em] uppercase text-muted-foreground">All systems nominal</span></span>
            <ThemeToggle />
            <a href={isHome ? "#platform" : "/#platform"} onClick={(event) => { if (!isHome) return; event.preventDefault(); go("#platform") }} className="hidden whitespace-nowrap text-xs font-mono tracking-widest uppercase text-muted-foreground transition-colors hover:text-foreground sm:block">Console</a>
            {onDemo ? (
              <motion.button type="button" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={onDemo} className="whitespace-nowrap bg-foreground px-4 py-2 text-xs font-mono tracking-widest uppercase text-background">Request Demo</motion.button>
            ) : (
              <a href="/#top" className="hidden whitespace-nowrap bg-foreground px-4 py-2 text-xs font-mono tracking-widest uppercase text-background sm:block">Request Demo</a>
            )}
            <button type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} className="flex size-9 items-center justify-center border border-foreground/30 text-foreground md:hidden">{menuOpen ? <X size={16} strokeWidth={2} /> : <Menu size={16} strokeWidth={2} />}</button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {menuOpen && (
            <motion.div key="mobile-menu" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease }} className="overflow-hidden md:hidden">
              <div className="mt-4 flex flex-col gap-1 border-t border-border pt-4">
                {LINKS.map((link) => {
                  const href = isHome ? link.href : `/${link.href}`
                  return <a key={link.label} href={href} onClick={(event) => { if (!isHome) return; event.preventDefault(); go(link.href) }} className={`flex items-center justify-between border-b border-border px-1 py-2.5 text-xs font-mono tracking-widest uppercase ${active === link.href ? "text-[#ea580c]" : "text-muted-foreground"}`}>{link.label}<span aria-hidden="true" className="text-[10px]">→</span></a>
                })}
                <button type="button" onClick={() => setBlogsOpen((open) => !open)} aria-expanded={blogsOpen} aria-controls="mobile-blogs-menu" className={`flex items-center justify-between border-b border-border px-1 py-2.5 text-left text-xs font-mono tracking-widest uppercase ${blogsActive ? "text-[#ea580c]" : "text-muted-foreground"}`}>Blogs<ChevronDown aria-hidden="true" className={`size-3 transition-transform ${blogsOpen ? "rotate-180" : ""}`} /></button>
                <AnimatePresence initial={false}>
                  {blogsOpen && <motion.div id="mobile-blogs-menu" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-b border-border pl-3">{BLOG_CATEGORIES.map((category) => <a key={category.slug} href={`/blogs/${category.slug}`} onClick={() => { setMenuOpen(false); setBlogsOpen(false) }} className="flex items-center justify-between border-b border-border/60 px-2 py-3 text-[11px] font-mono uppercase tracking-wider text-muted-foreground last:border-0 hover:text-foreground">{category.label}<span aria-hidden="true" className="text-[#ea580c]">→</span></a>)}<a href="/blogs" onClick={() => { setMenuOpen(false); setBlogsOpen(false) }} className="block px-2 py-3 font-mono text-[10px] uppercase tracking-widest text-[#ea580c]">All blogs →</a></motion.div>}
                </AnimatePresence>
                <a href={isHome ? "#platform" : "/#platform"} onClick={(event) => { if (!isHome) return; event.preventDefault(); go("#platform") }} className="px-1 py-2.5 text-xs font-mono tracking-widest uppercase text-muted-foreground">Console</a>
                {onDemo && <button type="button" onClick={() => { setMenuOpen(false); onDemo() }} className="mt-2 bg-foreground px-4 py-3 text-left text-xs font-mono tracking-widest uppercase text-background">Request Demo</button>}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.div>
  )
}
