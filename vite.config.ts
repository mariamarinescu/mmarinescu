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
          default-src 'self'; // Allow resources only from the same origin
          script-src 'self' 'nonce-abc123'; // Allow scripts from the same origin and those with the specified nonce
          style-src 'self' 'nonce-def456'; // Allow styles from the same origin and those with the specified nonce
          object-src 'none'; // Disallow <object>, <embed>, and <applet> elements
          img-src 'self' data:; // Allow images from the same origin and data URIs
          connect-src 'self'; // Allow connections (e.g., XHR, WebSocket) to the same origin
          frame-src 'none'; // Disallow framing
          base-uri 'self'; // Allow the base URL to be set to the same origin
          form-action 'self'; // Allow form submissions to the same origin
          frame-ancestors 'none'; // Disallow embedding in any frame
          font-src 'self'; // Allow fonts from the same origin
          media-src 'self'; // Allow media (audio, video) from the same origin
          upgrade-insecure-requests; // Upgrade all HTTP requests to HTTPS
          report-uri /csp-violation-report-endpoint; // Send CSP violation reports to this endpoint
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
