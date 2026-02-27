import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@astrojs/mdx'
import rehypeMermaid from 'rehype-mermaid'

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
  trailingSlash: 'never',
  markdown: {
    rehypePlugins: [
      [
        rehypeMermaid,
        {
          strategy: 'inline-svg',
          mermaidConfig: {
            theme: 'base',
            themeVariables: {
              background: '#141515',
              primaryColor: '#1a2a2a',
              primaryTextColor: '#eee',
              primaryBorderColor: '#2a2a2a',
              secondaryColor: '#1a1f2e',
              secondaryTextColor: '#b0b0b0',
              secondaryBorderColor: '#2a2a2a',
              tertiaryColor: '#1a2520',
              tertiaryTextColor: '#b0b0b0',
              tertiaryBorderColor: '#2a2a2a',
              lineColor: '#505050',
              textColor: '#8f9391',
              mainBkg: '#141515',
              nodeBorder: '#2a2a2a',
              clusterBkg: '#0e0f0f',
              clusterBorder: '#2a2a2a',
              titleColor: '#eee',
              edgeLabelBackground: '#141515',
              nodeTextColor: '#eee',
              fontFamily: 'arial, sans-serif',
            },
          },
        },
      ],
    ],
    syntaxHighlight: {
      type: 'shiki',
      excludeLangs: ['mermaid'],
    },
    shikiConfig: {
      theme: {
        name: 'portfolio',
        type: 'dark',
        settings: [
          {
            scope: ['comment', 'punctuation.definition.comment'],
            settings: { foreground: '#505050' },
          },
          {
            scope: ['string', 'string.quoted'],
            settings: { foreground: '#7ec4a0' },
          },
          {
            scope: ['constant.numeric', 'constant.language'],
            settings: { foreground: '#c4a07e' },
          },
          {
            scope: ['keyword', 'storage.type', 'storage.modifier'],
            settings: { foreground: '#7e9ec4' },
          },
          {
            scope: ['entity.name.function', 'support.function'],
            settings: { foreground: '#c9c9c9' },
          },
          {
            scope: ['variable', 'entity.name.variable'],
            settings: { foreground: '#b0b0b0' },
          },
          {
            scope: ['entity.name.type', 'support.type', 'support.class'],
            settings: { foreground: '#7ec4c4' },
          },
          {
            scope: ['keyword.operator', 'punctuation'],
            settings: { foreground: '#707070' },
          },
          {
            scope: ['constant.other', 'entity.name.tag'],
            settings: { foreground: '#7e9ec4' },
          },
          {
            scope: ['meta.property-name', 'support.type.property-name'],
            settings: { foreground: '#b0b0b0' },
          },
        ],
        colors: {
          'editor.background': '#141515',
          'editor.foreground': '#a0a0a0',
        },
      },
    },
  },
})
