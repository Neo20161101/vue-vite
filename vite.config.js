import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx";
// import vueJsxBabel from "@vue/babel-plugin-jsx";
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
const path = require('path');

export default defineConfig({
  plugins: [
      vue(),
    vueJsx(),
    Components({
      resolvers: [AntDesignVueResolver({importStyle:'less',importLess:true,resolveIcons:true})],
    }),
  ],
  base:'./',
  outDir:'build',
  port:3000,
  resolve:{
    alias:{
      '@': path.resolve(__dirname,'./src'),
      // 'vue': 'vue/dist/vue.esm-bundler.js'
    },
  },
  proxy:{

  },
  css:{
    preprocessorOptions:{
      less: {
        modifyVars: {
          'primary-color': 'red',// 更改主题色
          'link-color': '#1DA57A', // a标签色
          'border-radius-base': '2px', //圆角
        },
        javascriptEnabled: true,
      },
    }
  },
  // esbuild: {
  //   jsxInject: `import React from 'react'`
  // }
})
