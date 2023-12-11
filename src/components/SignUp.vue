<template>
  <div class="container min-w-full text-center">
    <p class="font-pretendard text-3xl font-bold mb-5">회원가입</p>
    <p class="font-pretendard text-xl text-custom-gray mb-10">어려운 이웃에게 도움의 손길을 뻗어보세요</p>
    <div class="flex flex-col items-center mb-2">
      <input v-model="userInfo.username" type="text" class="focus:outline-none resize-none text-lg font-pretendard pl-10 pr-10 p-3 mb-3 border-2 border-gray-300 rounded w-1/3" placeholder="아이디">
      <input v-model="userInfo.password" type="password" class="focus:outline-none resize-none text-lg font-pretendard pl-10 pr-10 p-3 mb-3 border-2 border-gray-300 rounded w-1/3" placeholder="비밀번호">
      <input v-model="userInfo.nickname" type="text" class="focus:outline-none resize-none text-lg font-pretendard pl-10 pr-10 p-3 mb-3 border-2 border-gray-300 rounded w-1/3" placeholder="닉네임">
      <button @click="submitSignUp" class="bg-custom-btn-green hover:bg-custom-btn-green-hover rounded p-3 px-10 m-3 w-1/3 text-white font-pretendard">회원가입</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useStore } from '../store';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();
    const userInfo = reactive({ username: '', password: '', nickname: ''});

    async function submitSignUp() {
      await store.signUp(userInfo);
      console.log(store.signUp);
      router.push('/');
    }

    return {
      userInfo, submitSignUp
    }
  }
})
</script>

<style>
  
</style>