import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  ssr: {
    noExternal: ['html-react-parser', 'react-helmet-async', 'style-to-js', 'inline-style-parser'],
  },
});
