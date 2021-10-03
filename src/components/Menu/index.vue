<template>
  <a-layout-sider
      theme="light"
  >

    <a-menu
        :selectedKeys="selectedData"
        mode="inline"
        :inline-collapsed="collapsed"
        @click="handleMenuClick"
    >
      <template v-for="item in treedata" :key="item.key">
        <template v-if="!item.children">
          <a-menu-item :key="item.key">
            <template #icon>
              <AppstoreOutlined />
            </template>
            {{ item.title }}
          </a-menu-item>
        </template>
        <template v-else>
          <sub-menu :menu-info="item" :key="item.key" />
        </template>
      </template>
    </a-menu>
  </a-layout-sider>
</template>
<script>
import { defineComponent, ref } from 'vue';
import SubMenu from './Menu.vue';
// import Store from "@/AppStore";
import {
  AppstoreOutlined
} from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    'sub-menu': SubMenu,
    AppstoreOutlined
  },

  props: {
    treedata:Object,
    selectedKeyData:Object,
  },
  setup() {
    const collapsed = ref(false);
    const selectedData = ref(false);
    const handleMenuClick = () => {

    }
    return {
      collapsed,
      selectedData,
      handleMenuClick
    };
  }
});
</script>
<style lang="less">
</style>