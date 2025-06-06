import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/providers/ThemeProvider'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FreeSampleButton from '@/components/FreeSampleButton'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTopButton from '@/components/ScrollToTopButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Website',
  description: 'Created with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          <FreeSampleButton />
          <WhatsAppButton />
          <ScrollToTopButton />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
} 