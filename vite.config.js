import { defineConfig, esbuildVersion } from 'vite'
import vue from '@vitejs/plugin-vue'

import esbuild from 'rollup-plugin-esbuild'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    esbuild({
      target:"chrome64",
      loaders:{
        ".vue":"js",
        ".ts":"js",
      },
    }),

  ],
  build:{
    minify:"terser",
    target:["edge90", "chrome90", "firefox90", "safari15"],
  },
})
