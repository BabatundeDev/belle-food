import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use GitHub Pages base if deploying there
const isGitHubPages = process.env.DEPLOY_ENV === 'GH_PAGES'

export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? '/belle-food/' : '/',
})
