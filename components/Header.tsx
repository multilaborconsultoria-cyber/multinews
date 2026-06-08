'use client'

import Link from 'next/link'
import { useState } from 'react'
import { categorias } from '@/lib/constants'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-red-700 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tight">MULTI<span className="text-yellow-300">NEWS</span></span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {categorias.map((cat) => (
              <Link
                key={cat}
                href={`/categoria/${cat.toLowerCase()}`}
                className="px-3 py-1 rounded hover:bg-red-600 text-sm font-medium transition-colors"
              >
                {cat}
              </Link>
            ))}
          </nav>
          <button
            className="md:hidden p-2"
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
          <div className="md:hidden pb-3 flex flex-col gap-1">
            {categorias.map((cat) => (
              <Link
                key={cat}
                href={`/categoria/${cat.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2 rounded hover:bg-red-600 text-sm font-medium"
              >
                {cat}
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="bg-gray-900 text-xs text-gray-400 py-1">
        <div className="max-w-6xl mx-auto px-4 flex justify-between">
          <span>multilabor.biz</span>
          <span>{new Date().toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
      </div>
    </header>
  )
}
