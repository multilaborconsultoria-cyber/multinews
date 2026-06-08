import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AM.NEWS — Notícias Gerais, Regionais, Trabalhistas e Políticas',
  description: 'Portal de notícias cobrindo temas gerais, regionais, trabalhistas e políticos com credibilidade.',
  openGraph: {
    title: 'AM.NEWS',
    description: 'Notícias gerais, regionais, trabalhistas e políticas.',
    siteName: 'AM.NEWS',
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
