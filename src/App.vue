<template>
<div class="container mx-auto">
  <div class="grid grid-cols-2 gap-4 h-110 pt-20 pb-20 justify-center items-center bg-sky-200 mx-auto">
    <div class="flex items-center space-x-4 justify-left">
      <img src="./assets/icon.png" alt="Icon Image" class="w-10">
      <p class="font-pretendard text-custom-black text-3xl">Treefy</p>
    </div>
    <div class="flex items-center space-x-4 justify-end">
      <p class="font-pretendard text-custom-gray pr-10">Home</p>
      <p class="font-pretendard text-custom-gray pr-10">미정</p>
      <p class="font-pretendard text-custom-gray pr-10">미정</p>
      <p class="font-pretendard text-custom-gray pr-10">미정</p>
      <p class="font-pretendard text-custom-gray pr-10">미정</p>
      <button class="bg-custom-btn-green rounded-lg p-3 pl-5 pr-5">Login</button>
    </div>
  </div>
  <router-view></router-view>

</div>

</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>

</style>
