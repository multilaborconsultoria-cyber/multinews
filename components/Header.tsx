'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { categorias } from '@/lib/constants'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md border-b-2 border-[#1e2d5a]">
      <div className="bg-[#1e2d5a] text-xs text-gray-300 py-1">
        <div className="max-w-6xl mx-auto px-4 flex justify-between">
          <span>am.newsrh@gmail.com</span>
          <span>{new Date().toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Am.newsrh — Notícias que informam"
              width={72}
              height={72}
              className="object-contain"
              priority
            />
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {categorias.map((cat) => (
              <Link
                key={cat}
                href={`/categoria/${cat.toLowerCase()}`}
                className="px-4 py-2 rounded text-sm font-semibold text-[#1e2d5a] hover:bg-[#1e2d5a] hover:text-white transition-colors"
              >
                {cat}
              </Link>
            ))}
          </nav>
          <button
            className="md:hidden p-2 text-[#1e2d5a]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden pb-3 flex flex-col gap-1 border-t border-gray-200 pt-2">
            {categorias.map((cat) => (
              <Link
                key={cat}
                href={`/categoria/${cat.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-2 rounded text-sm font-semibold text-[#1e2d5a] hover:bg-[#1e2d5a] hover:text-white transition-colors"
              >
                {cat}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
