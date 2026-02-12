// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@astrojs/mdx'

import react from '@astrojs/react'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://caixeta.dev',
  integrations: [react(), sitemap(), mdx()],
  prefetch: true,
  markdown: {
    shikiConfig: {
      theme: {
        name: 'portfolio',
        type: 'dark',
        settings: [
          { scope: ['comment', 'punctuation.definition.comment'], settings: { foreground: '#505050' } },
          { scope: ['string', 'string.quoted'], settings: { foreground: '#7ec4a0' } },
          { scope: ['constant.numeric', 'constant.language'], settings: { foreground: '#c4a07e' } },
          { scope: ['keyword', 'storage.type', 'storage.modifier'], settings: { foreground: '#7e9ec4' } },
          { scope: ['entity.name.function', 'support.function'], settings: { foreground: '#c9c9c9' } },
          { scope: ['variable', 'entity.name.variable'], settings: { foreground: '#b0b0b0' } },
          { scope: ['entity.name.type', 'support.type', 'support.class'], settings: { foreground: '#7ec4c4' } },
          { scope: ['keyword.operator', 'punctuation'], settings: { foreground: '#707070' } },
          { scope: ['constant.other', 'entity.name.tag'], settings: { foreground: '#7e9ec4' } },
          { scope: ['meta.property-name', 'support.type.property-name'], settings: { foreground: '#b0b0b0' } },
        ],
        colors: {
          'editor.background': '#141515',
          'editor.foreground': '#a0a0a0',
        },
      },
    },
  },
})
