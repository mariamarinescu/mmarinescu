import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      'process.env': env,
    },
    server: {
      port: 3000,
    },
    plugins: [react()],
    resolve: {
      alias: {
        components: path.resolve(__dirname, './src/components'),
        modules: path.resolve(__dirname, './src/modules'),
        src: path.resolve(__dirname, './src'),
      },
    },
  };
});
