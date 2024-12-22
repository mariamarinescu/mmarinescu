import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import EnvironmentPlugin from 'vite-plugin-environment';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      'process.env': env,
    },
    server: {
      port: 3000,
      headers: {
        'Content-Security-Policy': `
          default-src 'self'; 
          script-src 'self'; 
          style-src 'self'; 
          img-src 'self' data:; 
          connect-src 'self';
        `.replace(/\n\s+/g, ' '),
      },
    },
    plugins: [react(), EnvironmentPlugin('all', { prefix: 'VITE_' })],
    resolve: {
      alias: {
        components: path.resolve(__dirname, './src/components'),
        modules: path.resolve(__dirname, './src/modules'),
        src: path.resolve(__dirname, './src'),
      },
    },
  };
});
