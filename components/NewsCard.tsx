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
            <svg viewBox="0 0 560 208" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
              <circle cx="490" cy="104" r="190" fill="rgba(255,255,255,0.04)" />
              <circle cx="490" cy="104" r="130" fill="rgba(255,255,255,0.04)" />
              <circle cx="490" cy="104" r="70" fill="rgba(255,255,255,0.05)" />
              <rect x="44" y="38" width="230" height="14" rx="7" fill="rgba(255,255,255,0.22)" />
              <rect x="44" y="62" width="170" height="10" rx="5" fill="rgba(255,255,255,0.13)" />
              <line x1="44" y1="82" x2="290" y2="82" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <rect x="44" y="92" width="140" height="7" rx="3.5" fill="rgba(255,255,255,0.08)" />
              <rect x="44" y="106" width="160" height="7" rx="3.5" fill="rgba(255,255,255,0.08)" />
              <rect x="44" y="120" width="120" height="7" rx="3.5" fill="rgba(255,255,255,0.08)" />
              <rect x="44" y="134" width="150" height="7" rx="3.5" fill="rgba(255,255,255,0.06)" />
              <circle cx="340" cy="46" r="3" fill="rgba(255,255,255,0.12)" />
              <circle cx="362" cy="46" r="3" fill="rgba(255,255,255,0.12)" />
              <circle cx="384" cy="46" r="3" fill="rgba(255,255,255,0.12)" />
              <circle cx="340" cy="66" r="3" fill="rgba(255,255,255,0.1)" />
              <circle cx="362" cy="66" r="3" fill="rgba(255,255,255,0.1)" />
              <circle cx="384" cy="66" r="3" fill="rgba(255,255,255,0.1)" />
              <circle cx="340" cy="86" r="3" fill="rgba(255,255,255,0.08)" />
              <circle cx="362" cy="86" r="3" fill="rgba(255,255,255,0.08)" />
              <circle cx="384" cy="86" r="3" fill="rgba(255,255,255,0.08)" />
            </svg>
            <div className="absolute right-5 top-1/2 -translate-y-1/2 rounded-full overflow-hidden border-2 border-white/30 shadow-lg w-20 h-20">
              <Image src="/logo.png" alt="Am.newsrh" width={80} height={80} className="object-cover" />
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
