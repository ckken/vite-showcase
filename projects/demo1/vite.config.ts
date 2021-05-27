import reactRefresh from '@vitejs/plugin-react-refresh'
import tsconfigPaths from 'vite-tsconfig-paths'
// import resolveExternalsPlugin from 'vite-plugin-resolve-externals'
// import legacy from '@vitejs/plugin-legacy'
import {defineConfig} from 'vite'
import path from 'path'
// import {mutateConfigPlugin,partialConfigPlugin} from './vite-config-plugin'
const root = path.join(process.cwd(), 'src')
// console.log('resolveExternalsPlugin', resolveExternalsPlugin)
export default defineConfig({
  plugins: [
    reactRefresh(),
    tsconfigPaths(),
    /* resolveExternalsPlugin({
      react: 'React',
      'react-dom': 'ReactDom',
    }), */
    // legacy({
    //   targets: ['IE 11'],
    // }),
    // mutateConfigPlugin(),
    // partialConfigPlugin()
  ],
  css: {
    preprocessorOptions: {less: {javascriptEnabled: true}},
  },
  resolve: {
    alias: [
      {find: /^~/, replacement: ''},
      {find: 'src/', replacement: path.join(root, '/')},
      {find: '@demo2', replacement: 'http://172.26.130.38:3333'},
      // {find: '@demo2', replacement: 'http://172.26.130.38:3002'},
      // {find: '@cdn', replacement: 'https://cdn.skypack.dev'},
      // {find: 'react', replacement: 'https://cdn.skypack.dev/react'},
      // {find: 'react-dom', replacement: 'https://cdn.skypack.dev/react-dom'},
    ],
  },
  build: {
    outDir: path.join(process.cwd(), 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      // external: ['react', 'react-dom'],
      // output: {
      //   // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
      //   globals: {
      //     react: 'React',
      //   },
      // },
    },
  },
  server: {
    port: 3001,
    strictPort: true,
    cors: true,
  },
  esbuild: {
    // jsxInject: `import React from 'react'`,
  },
  root,
  base: '/',
})
