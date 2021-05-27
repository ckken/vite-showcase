export const mutateConfigPlugin = () => ({
  name: 'mutate-config',
  config(config, {command}) {
    console.log('config', config)
    /* if (command === 'build') {
      config.root = __dirname
    } */
  },
})
export const partialConfigPlugin = () => ({
  name: 'return-partial',
  config: () => ({
    alias: {
      react: 'https://cdn.skypack.dev/react',
      'react-dom': 'https://cdn.skypack.dev/react-dom',
    },
  }),
})
