module.exports = function gfeMicroFE(o) {
  console.log('init', o)
  return {
    name: '@gfe/vite-plugin-micro-fontend', // 必须的，将会显示在 warning 和 error 中
    resolveId(...args) {
      console.log('resolveId', args)
      return args[0]
    },
    load(id) {
      console.log('load', id)
      return
    },
    transformIndexHtml(html) {
      console.log('transformIndexHtml', html)
      return html
    },
    transform(src, id) {
      console.log('transform', id)
      return
    },
  }
}
