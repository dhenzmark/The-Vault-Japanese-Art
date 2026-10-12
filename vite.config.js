import { defineConfig } from 'vite'

// Relative base so the built site works at any GitHub Pages address
// (https://<user>.github.io/<repo>/) without hardcoding the repo name.
export default defineConfig({
  base: './',
})
