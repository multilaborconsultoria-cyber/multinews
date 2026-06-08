import { getPostsByCategoria, categorias } from '@/lib/posts'
import NewsCard from '@/components/NewsCard'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return categorias.map((cat) => ({ categoria: cat.toLowerCase() }))
}

export default function CategoriaPage({ params }: { params: { categoria: string } }) {
  const nome = categorias.find((c) => c.toLowerCase() === params.categoria)
  if (!nome) notFound()

  const posts = getPostsByCategoria(nome)

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 border-l-4 border-red-700 pl-3">{nome}</h1>
        <p className="text-gray-500 text-sm mt-1">{posts.length} notícia{posts.length !== 1 ? 's' : ''} encontrada{posts.length !== 1 ? 's' : ''}</p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-4xl mb-4">📰</p>
          <p>Nenhuma notícia nesta categoria ainda.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post, i) => (
            <NewsCard key={post.slug} post={post} destaque={i === 0} />
          ))}
        </div>
      )}
    </div>
  )
}
