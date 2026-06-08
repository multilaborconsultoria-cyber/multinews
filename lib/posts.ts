import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export type Post = {
  slug: string
  title: string
  date: string
  categoria: string
  resumo: string
  imagem?: string
  autor: string
  content?: string
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) return []
  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames
    .filter((f) => f.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)
      return { slug, ...data } as Post
    })
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostsByCategoria(categoria: string): Post[] {
  return getAllPosts().filter(
    (p) => p.categoria.toLowerCase() === categoria.toLowerCase()
  )
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  if (!fs.existsSync(fullPath)) return null
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const processed = await remark().use(html).process(content)
  return { slug, ...data, content: processed.toString() } as Post
}

export { categorias } from './constants'
