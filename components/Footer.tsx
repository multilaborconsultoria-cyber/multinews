import Link from 'next/link'
import { categorias } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white text-xl font-black mb-2">MULTI<span className="text-yellow-300">NEWS</span></h3>
          <p className="text-sm text-gray-400">Notícias gerais, regionais, trabalhistas e políticas com credibilidade e atualidade.</p>
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
          <p className="text-sm text-gray-400">contato@multilabor.biz</p>
          <p className="text-sm text-gray-400 mt-1">multilabor.biz</p>
        </div>
      </div>
      <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} MultiNews — Todos os direitos reservados
      </div>
    </footer>
  )
}
