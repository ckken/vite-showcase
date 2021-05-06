import reactRefresh from '@vitejs/plugin-react-refresh'
import tsconfigPaths from 'vite-tsconfig-paths'
import legacy from '@vitejs/plugin-legacy'
import {defineConfig} from 'vite'
import path from 'path'
const root = path.join(process.cwd(), 'src')

export default defineConfig({
  plugins: [
    reactRefresh(),
    tsconfigPaths(),
    /* legacy({
      targets: ['IE 11'],
    }), */
  ],
  css: {
    preprocessorOptions: {less: {javascriptEnabled: true}},
  },

  resolve: {
    alias: [
      {find: /^~/, replacement: ''},
      {find: 'src/', replacement: path.join(root, '/')},
    ],
  },
  build: {
    outDir: path.join(process.cwd(), 'dist'),
    emptyOutDir: true,
    minify: false,
    // watch:{},
    cssCodeSplit: true,
    // ============== 库模式 ============================
    //当设置为 true，构建后将会生成 manifest.json 文件，映射没有被 hash 的资源文件名和它们的 hash 版本。可以为一些服务器框架渲染时提供正确的资源引入链接。
    manifest: true,
    lib: {
      entry: path.resolve(root, 'components/App'),
      name: 'App',
      fileName: 'index',
    },
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['react'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: 'React',
        },
      },
    },
  },
  server: {
    port: 3002,
    strictPort: true,
    cors: true,
  },
  esbuild: {
    // jsxInject: `import React from 'react'`,
  },
  root,
  base: 'http://172.26.130.38:3002/',
})
