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
              width={120}
              height={48}
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
        </div>
      </div>
      <div className="border-t border-[#2d3f7a] py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Am.newsrh — Todos os direitos reservados
      </div>
    </footer>
  )
}
