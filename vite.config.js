import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react],
  // GitHub Pages serves this repository from /itis3135-react/.
  base: '/itis3135-react/',
});
