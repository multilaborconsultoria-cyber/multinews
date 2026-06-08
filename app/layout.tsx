import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Am.newsrh — Notícias que informam',
  description: 'Notícias que informam. Cobertura geral, regional, trabalhista e política da região amazônica.',
  openGraph: {
    title: 'Am.newsrh',
    description: 'Notícias que informam. Cobertura da região amazônica.',
    siteName: 'Am.newsrh',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-gray-50 min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
