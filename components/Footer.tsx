import Link from 'next/link'
import Image from 'next/image'
import { categorias } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-[#1e2d5a] text-gray-300 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="bg-white inline-block rounded-lg px-3 py-2 mb-3">
            <Image
              src="/logo.png"
              alt="Am.newsrh"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
          <p className="text-sm text-gray-400">Notícias que informam. Cobertura geral, regional, trabalhista e política com credibilidade.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Categorias</h4>
          <ul className="space-y-1">
            {categorias.map((cat) => (
              <li key={cat}>
                <Link href={`/categoria/${cat.toLowerCase()}`} className="text-sm hover:text-white transition-colors">
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Contato</h4>
          <p className="text-sm text-gray-400">am.newsrh@gmail.com</p>
          <div className="mt-4">
            <h4 className="text-white font-semibold mb-3">Redes Sociais</h4>
            <a
              href="https://www.instagram.com/amnewsrh/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
            >
              <span className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-1.5 rounded-lg group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </span>
              @amnewsrh
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-[#2d3f7a] py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Am.newsrh — Todos os direitos reservados
      </div>
    </footer>
  )
}
