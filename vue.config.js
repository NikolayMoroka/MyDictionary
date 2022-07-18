const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/MyDictionary/',
  transpileDependencies: [
    'vuetify'
  ]
})
