import { resolve } from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root = resolve(__dirname, 'src');
console.log(root);
const outDir = resolve(__dirname, 'dist');

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        // ADD PAGES HERE
        password_reset: resolve(root, 'password_reset', 'index.html'),
        admin_dashboard: resolve(root, 'admin_dashboard', 'index.html'),
        admin_dashboard_login: resolve(root, 'admin_dashboard_login', 'index.html')
      }
    }
  }
})
