<template>
  <a-sub-menu :key="menuInfo.key">
    <template #icon><MailOutlined /></template>
    <template #title>{{ menuInfo.title }}</template>
    <template v-for="item in menuInfo.children" :key="item.key">
      <template v-if="!item.children">
        <a-menu-item :key="item.key">
          <template #icon>
            <PieChartOutlined />
          </template>
          {{ item.title }}
        </a-menu-item>
      </template>
      <template v-else>
        <sub-menu :menu-info="item" :key="item.key" />
      </template>
    </template>
  </a-sub-menu>
</template>
<script>
import { defineComponent, ref } from 'vue';

import {
  AppstoreOutlined
} from '@ant-design/icons-vue';
export default defineComponent({
  name: 'SubMenu',
  props: {
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  components:{
    AppstoreOutlined
  },
  setup(props) {
    console.log('AppstoreOutlined,',props.menuInfo)
  }
});
</script>
<style lang="less">
</style>