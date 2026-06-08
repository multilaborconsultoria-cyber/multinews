import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

const corCategoria: Record<string, string> = {
  geral: 'bg-blue-600',
  regional: 'bg-green-600',
  trabalhista: 'bg-orange-600',
  político: 'bg-purple-600',
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  if (!post) notFound()

  const cor = corCategoria[post.categoria.toLowerCase()] ?? 'bg-gray-600'

  return (
    <article className="max-w-3xl mx-auto">
      <div className="mb-6">
        <span className={`${cor} text-white text-xs font-bold px-3 py-1 rounded uppercase`}>
          {post.categoria}
        </span>
        <h1 className="text-3xl font-bold text-gray-900 mt-3 mb-2 leading-tight">{post.title}</h1>
        <p className="text-gray-500 text-lg mb-4">{post.resumo}</p>
        <div className="flex items-center gap-3 text-sm text-gray-400 border-t border-b border-gray-100 py-3">
          <span className="font-medium text-gray-600">{post.autor}</span>
          <span>·</span>
          <span>{new Date(post.date + 'T12:00:00').toLocaleDateString('pt-BR', { dateStyle: 'long' })}</span>
        </div>
      </div>

      <div
        className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-red-700"
        dangerouslySetInnerHTML={{ __html: post.content ?? '' }}
      />
    </article>
  )
}
