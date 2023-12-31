import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  webpack(config) {
    config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"]
    });

    return config;
    }
})


