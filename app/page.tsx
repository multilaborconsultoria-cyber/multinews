import { getAllPosts, categorias } from '@/lib/posts'
import NewsCard from '@/components/NewsCard'
import Link from 'next/link'

export default function Home() {
  const posts = getAllPosts()
  const destaque = posts[0]
  const recentes = posts.slice(1, 5)

  return (
    <div>
      {/* Destaque */}
      {destaque && (
        <section className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-800 border-l-4 border-red-700 pl-3">Em Destaque</h2>
          </div>
          <NewsCard post={destaque} destaque />
        </section>
      )}

      {/* Mais recentes */}
      {recentes.length > 0 && (
        <section className="mb-10">
          <h2 className="text-lg font-bold text-gray-800 border-l-4 border-red-700 pl-3 mb-4">Últimas Notícias</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {recentes.map((post) => (
              <NewsCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* Por categoria */}
      <section>
        <h2 className="text-lg font-bold text-gray-800 border-l-4 border-red-700 pl-3 mb-4">Por Categoria</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {categorias.map((cat) => {
            const catPosts = posts.filter((p) => p.categoria.toLowerCase() === cat.toLowerCase())
            return (
              <Link key={cat} href={`/categoria/${cat.toLowerCase()}`}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center group">
                <div className="text-2xl mb-1">
                  {cat === 'Geral' ? '🌐' : cat === 'Regional' ? '📍' : cat === 'Trabalhista' ? '⚖️' : '🏛️'}
                </div>
                <div className="font-semibold text-gray-800 group-hover:text-red-700 transition-colors">{cat}</div>
                <div className="text-xs text-gray-400 mt-1">{catPosts.length} notícia{catPosts.length !== 1 ? 's' : ''}</div>
              </Link>
            )
          })}
        </div>
      </section>

      {posts.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          <p className="text-4xl mb-4">📰</p>
          <p className="text-lg">Nenhuma notícia publicada ainda.</p>
          <p className="text-sm mt-2">Adicione arquivos .md na pasta <code className="bg-gray-100 px-1 rounded">posts/</code></p>
        </div>
      )}
    </div>
  )
}
