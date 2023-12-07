<template>
  <div class="container min-w-full">
    <div class="p-10">
      <p class="text-3xl font-pretendard font-bold text-center">Volunteer Programs in Japan</p>
      <p class="font-pretendard text-custom-gray font-bold text-center pt-3">봉사는 우리가 소중한 가치를 나누는 시작입니다. 당신의 소중한 시간과 노력이 더 나은 세상을 만드는 일에 기여합니다.</p>
    </div>
    <div class="text-center p-10 pb-20">
      <router-link to="/list/join/1" class="bg-custom-btn-green rounded-l-lg p-3 pl-7 pr-7 text-black font-pretendard font-bold">참여하기</router-link>
      <router-link to="/list/closed" class="bg-gray-100 p-3 pl-7 pr-7 text-black font-pretendard">참여마감</router-link>
      <router-link to="/list/faq" class="bg-gray-100 rounded-r-lg p-3 pl-7 pr-7 text-black font-pretendard">자주 묻는 질문</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name : "VolunteerProgramsList",
  components : {},
})
</script>

<style>
  
</style>