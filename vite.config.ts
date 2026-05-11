import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

// Plugin to serve src/imports as static files at /src/imports/ URL path
function srcImportsPlugin() {
  const importsDir = path.resolve(__dirname, 'src/imports')
  return {
    name: 'src-imports-server',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url?.startsWith('/src/imports/')) {
          const filename = decodeURIComponent(req.url.replace('/src/imports/', ''))
          const filepath = path.join(importsDir, filename)
          if (fs.existsSync(filepath)) {
            const ext = path.extname(filename).toLowerCase()
            const mimeTypes: Record<string, string> = {
              '.png': 'image/png',
              '.jpg': 'image/jpeg',
              '.jpeg': 'image/jpeg',
              '.gif': 'image/gif',
              '.webp': 'image/webp',
              '.mp4': 'video/mp4',
              '.svg': 'image/svg+xml',
            }
            const contentType = mimeTypes[ext] || 'application/octet-stream'
            res.setHeader('Content-Type', contentType)
            fs.createReadStream(filepath).pipe(res)
            return
          }
        }
        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    srcImportsPlugin(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.mp4', '**/*.webp'],
})
