import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio | Rathan Priyan',
  description: 'A modern portfolio showcasing my work and experience',
  keywords: ['portfolio', 'developer', 'typescript', 'nextjs', 'react'],
  authors: [{ name: 'Rathan Priyan' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Theme will be set by a script or context, so just render the html with className
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
