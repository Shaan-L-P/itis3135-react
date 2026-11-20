import { defineConfig } from 'vite';

export default defineConfig({
  // GitHub Pages serves this repository from /itis3135-react/.
  base: '/itis3135-react/',
  // Keep the compiled application JavaScript in the assignment's scripts/ folder.
  build: {
    target: 'es2019',
    rollupOptions: {
      output: {
        entryFileNames: 'scripts/[name].js',
        chunkFileNames: 'scripts/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
});
