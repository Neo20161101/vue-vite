<template>
  <a-layout id="components-layout">
    <a-layout-header theme="light" class="header">
      <div class="logo">
        <img :src="Logo" alt="logo" />
      </div>
      <div class="Menu">
        <button
            type="button"
            class="btn"
        >
          safdsfds
        </button>
      </div>
      <div class="info">
        <div>
          <span>userId</span> 账号：enterpriseName&nbsp;&nbsp;
          <a-tag color="#f50">
            <a href="#" @click="onLoginOut">退出</a>
          </a-tag>
        </div>
        <div>上次登录时间：lastTime</div>
      </div>
    </a-layout-header>
    <a-layout>
      <Menu :treedata="treedata" :selectedKeyData="selectedKeyData" />
      <a-layout>
        <a-layout-content
            :style="{
            background: '#fff',
            padding: '24px',
            margin: 0,
            minHeight: '280px',
          }"
        >
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
import { ref } from 'vue';
import Menu from "@/components/Menu/index.vue";
// import Logo_img from "../../assets/logo.png";
import Store from "@/AppStore";
export default {
  name: "home",
  components: { Menu },
  setup(props) {
    const treedata = ref([
      {
        key: '1',
        title: 'Option 1',
      },
      {
        key: '2',
        title: 'Navigation 2',
        children: [
          {
            key: '2.1',
            title: 'Navigation 3',
            children: [
              {
                key: '2.1.1',
                title: 'Option 2.1.1',
              },
            ],
          },
        ],
      },
    ])
    const selectedKeyData = ref([])
    const MenuData = ref([])
    const Logo = ref('')
    console.log(Store)
    const onLoginOut = () => {

    }
    const onMenuClick = () => {

    }

    return {treedata,selectedKeyData,MenuData,Logo,onLoginOut,onMenuClick}
  }
}
</script>

<style lang="less" scoped>
#components-layout{
  .header{
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    .info{
      display: flex;
    }
  }
}

</style>