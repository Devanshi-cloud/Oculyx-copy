import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono, Martian_Mono } from 'next/font/google'
import { GeistPixelGrid } from 'geist/font/pixel'
import { ThemeProvider } from '@/components/theme-provider'

import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

const martianMono = Martian_Mono({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'OCULYX | AI-Native Real-World Intelligence Platform',
  description:
    'Oculyx transforms data from physical infrastructure, networks, sensors and surveillance into actionable intelligence through multimodal AI and agentic automation.',
  keywords: [
    'real-world intelligence',
    'multimodal AI',
    'DFOS',
    'distributed fibre optic sensing',
    'fibre optic intelligence',
    'surveillance intelligence',
    'infrastructure monitoring',
    'agentic network routing',
    'sensor analytics',
    'anomaly detection',
    'network intelligence',
    'critical infrastructure',
    'OCULYX',
  ],
  authors: [{ name: 'OCULYX' }],
  creator: 'OCULYX',
  publisher: 'OCULYX',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'OCULYX | Real-World Intelligence Platform',
    description:
      'From distributed fibre-optic sensing to surveillance intelligence and agentic network orchestration.',
    siteName: 'OCULYX',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OCULYX | AI-Native Real-World Intelligence Platform',
    description:
      'Signals to context to intelligence—multimodal monitoring for resilient infrastructure.',
    creator: '@oculyx',
  },
  category: 'technology',
}

export const viewport: Viewport = {
  themeColor: '#0F0F0F',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} ${martianMono.variable} ${GeistPixelGrid.variable}`}
      suppressHydrationWarning
    >
      <body className="font-mono antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
