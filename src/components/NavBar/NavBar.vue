<script setup lang="ts">
import {ref} from "vue";

const NavList = ref(
    [
      {
        name: "首页",
        path: "/"
      },
      {
        name: "关于我们",
        path: "/about"
      },
      {
        name: "产品中心",
        path: "/product"
      },
      {
        name: "新闻中心",
        path: "/news"
      },
      {
        name: "联系我们",
        path: "/contact"
      },
    ]
);
</script>

<template>
  <nav class="w-screen">
    <div class="w-3/5">
      <div v-for="(item,index) in NavList" :key="index">

        <span>{{ item.name }}</span>
        <div class="disabled">
          1231
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>