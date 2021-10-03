<script setup>
import { ref } from 'vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
const locale = ref(zhCN)

</script>

<template>
  <a-config-provider :locale="locale">
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </a-config-provider>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
}
html{
  font-size:62.5%;
}
.ant-layout {
  height: 100%;
}
</style>
