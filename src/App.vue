<template>
<div class="container pl-20 pr-20 mx-auto">
  <div class="grid grid-cols-2 gap-4 h-110 pt-20 pb-20 justify-center items-cente mx-auto">
    <div class="flex items-center space-x-4 justify-left">
      <img src="./assets/icon.png" alt="Icon Image" class="w-10">
      <p class="font-pretendard text-custom-black text-3xl">Treefy</p>
    </div>
    <div class="flex items-center space-x-4 justify-end whitespace-nowrap">
      <p class="font-pretendard text-custom-gray pr-10">Home</p>
      <p class="font-pretendard text-custom-gray pr-10">소식</p>
      <p class="font-pretendard text-custom-gray pr-10">봉사신청</p>
      <p class="font-pretendard text-custom-gray pr-10">갤러리</p>
      <p class="font-pretendard text-custom-gray pr-10">마이페이지</p>
      <p class="font-pretendard text-custom-gray pr-10">Sign up</p>
      <button class="bg-custom-btn-green rounded-lg p-3 pl-7 pr-7 text-white">Login</button>
    </div>
  </div>
  <router-view></router-view>
  <div class="mt-20">
    <div class="h-0.5 w-full bg-custom-gray border-solid opacity-10"></div>
    <div class="flex items-center justify-center p-10">
      <img src="./assets/icon.png" alt="" class="w-8 h-10 mr-2">
      <p class="font-pretendard text-custom-gray">@ 2023 Treefy, inc.</p>
    </div>
  </div>
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
