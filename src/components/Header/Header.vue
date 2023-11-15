<script setup lang="ts">

</script>

<template>
  <header class="w-full bg-indigo-600">
    <div class="w-3/5 h-16 my-0 mx-auto flex justify-between items-center">
      <div class="h-full flex items-center">
        <img class="h-[50px]" src="../../assets/logo.png" alt="">
        <span class="ml-3 text-white">
          凛创科技
        </span>
      </div>
      <div class="flex items-center justify-between">
        <div>
          <input type="text" placeholder="请输入搜索内容">
        </div>
        <div>
          <el-button type="primary">登录</el-button>
          <el-button type="danger">退出</el-button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>