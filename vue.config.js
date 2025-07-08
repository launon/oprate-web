// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   lintOnSave: false
// })
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    host: '0.0.0.0',
    port: 8585, //默认8080
    proxy: {
      '/api': {
        target: 'http://localhost:8585/', // 后端地址
        changeOrigin: true,
        pathRewrite: { '^/api': '' } // 移除 /api 前缀
      },
      '/random-img': {
        target: 'https://img.xjh.me',
        changeOrigin: true,
        pathRewrite: { '^/random-img': '' }
      }
    }
  }
})