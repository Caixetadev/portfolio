import { file, glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const openSource = defineCollection({
  loader: async () => {
    const [tabnewsRes, goFastCDNRes] = await Promise.all([
      fetch(
        'https://api.github.com/search/issues?q=is:pr+repo:filipedeschamps/tabnews.com.br+author:caixetadev',
      ),
      fetch(
        'https://api.github.com/search/issues?q=is:pr+repo:kevinanielsen/go-fast-cdn+author:caixetadev',
      ),
    ])

    const [tabnews, goFastCDN] = await Promise.all([
      tabnewsRes.json(),
      goFastCDNRes.json(),
    ])

    return [
      {
        id: 'fastcdn',
        title: 'Go Fast CDN',
        description: `This open source project really caught my attention, so I decided to contribute to its development. As the name suggests, it's a CDN built with Golang and React.`,
        total_count: goFastCDN.total_count,
        data: goFastCDN.items.map((item: any) => ({
          created_at: item.created_at,
          title: item.title,
          html_url: item.html_url,
        })),
      },
      {
        id: 'tabnews',
        title: 'TabNews',
        description:
          'TabNews is an open source project where the Brazilian programming and technology community shares knowledge, news, and discussions. Inspired by platforms like Hacker News, TabNews offers a lightweight and collaborative space for those who want to learn, teach, or stay up-to-date with the tech world.',
        total_count: tabnews.total_count,
        data: tabnews.items.map((item: any) => ({
          created_at: item.created_at,
          title: item.title,
          html_url: item.html_url,
        })),
      },
    ]
  },
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    total_count: z.number(),
    data: z.array(
      z.object({
        created_at: z.string(),
        title: z.string(),
        html_url: z.string(),
      }),
    ),
  }),
})

const experiences = defineCollection({
  loader: file('src/data/experiences.json'),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    location: z.string(),
    dates: z.string(),
  }),
})

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/projects' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    date: z.string(),
    previewLink: z.string().url(),
    githubLink: z.string().url(),
    image: z.string(),
    technologies: z.array(
      z.object({ language: z.string(), link: z.string().url() }),
    ),
  }),
})

export const collections = { openSource, experiences, projects }
