import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Ubah base sesuai repo kamu
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  base: '/LUXURY-GIORGIO-ARMANI/', // Penting agar asset path benar di GitHub Pages
});
