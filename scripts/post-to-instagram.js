const fs = require('fs')
const path = require('path')

const IG_USER_ID = process.env.IG_USER_ID
const IG_ACCESS_TOKEN = process.env.IG_ACCESS_TOKEN
const POST_FILE = process.env.POST_FILE

if (!POST_FILE || !IG_USER_ID || !IG_ACCESS_TOKEN) {
  console.error('❌ Variáveis de ambiente ausentes: IG_USER_ID, IG_ACCESS_TOKEN, POST_FILE')
  process.exit(1)
}

if (!fs.existsSync(POST_FILE)) {
  console.error(`❌ Arquivo não encontrado: ${POST_FILE}`)
  process.exit(1)
}

// Lê e analisa o frontmatter do post
const content = fs.readFileSync(POST_FILE, 'utf8')
const fmMatch = content.match(/^---\n([\s\S]*?)\n---/)
if (!fmMatch) {
  console.error('❌ Frontmatter não encontrado no post')
  process.exit(1)
}

const fm = fmMatch[1]
const get = (key) => {
  const m = fm.match(new RegExp(`${key}:\\s*"(.*?)"`))
  return m ? m[1] : ''
}

const title = get('title')
const resumo = get('resumo')
const categoria = get('categoria')
const slug = path.basename(POST_FILE, '.md')

// Hashtags por categoria
const hashtags = {
  'Geral':       '#amazonas #noticias #brasil #informacao',
  'Regional':    '#amazonas #manaus #regiaonorte #amazonia',
  'Trabalhista': '#trabalhista #direitostrabalhistas #trabalho #clt #emprego',
  'Político':    '#politica #amazonas #manaus #eleicoes2026',
}[categoria] || '#amazonas #noticias #amnewsrh'

const caption = `📰 ${title}

${resumo}

🔗 Leia a matéria completa:
amnewsrh.com.br/post/${slug}

#amnewsrh ${hashtags}`

console.log('📝 Caption gerada:')
console.log(caption)
console.log('---')

const IMAGE_URL = 'https://am-newsrh.vercel.app/logo.png'

async function apiPost(endpoint, params) {
  const url = new URL(`https://graph.facebook.com/v21.0/${endpoint}`)
  const res = await fetch(url.toString(), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...params, access_token: IG_ACCESS_TOKEN }),
  })
  const data = await res.json()
  if (data.error) throw new Error(`API Error: ${JSON.stringify(data.error)}`)
  return data
}

async function run() {
  try {
    console.log('📤 Criando container de mídia no Instagram...')
    const container = await apiPost(`${IG_USER_ID}/media`, {
      image_url: IMAGE_URL,
      caption,
    })
    console.log('✅ Container criado:', container.id)

    console.log('🚀 Publicando no Instagram...')
    const publish = await apiPost(`${IG_USER_ID}/media_publish`, {
      creation_id: container.id,
    })
    console.log('✅ Publicado com sucesso! Post ID:', publish.id)
  } catch (err) {
    console.error('❌ Erro ao publicar:', err.message)
    process.exit(1)
  }
}

run()
