import Link from 'next/link'
import Image from 'next/image'
import { Post } from '@/lib/posts'

const corCategoria: Record<string, string> = {
  geral: 'bg-blue-600',
  regional: 'bg-green-600',
  trabalhista: 'bg-orange-600',
  político: 'bg-purple-600',
}

export default function NewsCard({ post, destaque = false }: { post: Post; destaque?: boolean }) {
  const cor = corCategoria[post.categoria.toLowerCase()] ?? 'bg-gray-600'

  if (destaque) {
    return (
      <Link href={`/post/${post.slug}`} className="block group">
        <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100">
          <div className="relative bg-gradient-to-br from-[#1e2d5a] to-[#2563eb] h-52 flex items-end p-5 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt=""
                width={180}
                height={180}
                className="opacity-15 mix-blend-luminosity"
              />
            </div>
            <span className={`relative z-10 ${cor} text-white text-xs font-bold px-2 py-1 rounded uppercase`}>
              {post.categoria}
            </span>
          </div>
          <div className="p-5">
            <h2 className="text-xl font-bold text-gray-900 group-hover:text-[#2563eb] transition-colors line-clamp-2 mb-2">
              {post.title}
            </h2>
            <p className="text-gray-500 text-sm line-clamp-3">{post.resumo}</p>
            <div className="mt-3 flex items-center justify-between text-xs text-gray-400">
              <span>{post.autor}</span>
              <span>{new Date(post.date + 'T12:00:00').toLocaleDateString('pt-BR')}</span>
            </div>
          </div>
        </article>
      </Link>
    )
  }

  return (
    <Link href={`/post/${post.slug}`} className="block group">
      <article className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100">
        <div className="flex-1">
          <span className={`${cor} text-white text-xs font-bold px-2 py-0.5 rounded uppercase`}>
            {post.categoria}
          </span>
          <h3 className="mt-1 font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors line-clamp-2 text-sm">
            {post.title}
          </h3>
          <p className="text-gray-500 text-xs line-clamp-2 mt-1">{post.resumo}</p>
          <div className="mt-2 flex items-center gap-2 text-xs text-gray-400">
            <span>{post.autor}</span>
            <span>·</span>
            <span>{new Date(post.date + 'T12:00:00').toLocaleDateString('pt-BR')}</span>
          </div>
        </div>
      </article>
    </Link>
  )
}
