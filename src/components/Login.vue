<template>
  <div class="container min-w-full text-center">
    <p class="font-pretendard text-3xl font-bold mb-5">나눔의 가치를 알 수 있어요</p>
    <p class="font-pretendard text-xl text-custom-gray mb-10">어려운 이웃에게 도움의 손길을 뻗어보세요</p>
    <div class="flex flex-col items-center mb-2">
      <input v-model="user.username" type="text" class="focus:outline-none resize-none text-lg font-pretendard pl-10 pr-10 p-3 mb-3 border-2 border-gray-300 rounded w-1/3" placeholder="아이디">
      <input v-model="user.password" type="text" class="focus:outline-none resize-none text-lg font-pretendard pl-10 pr-10 p-3 mb-3 border-2 border-gray-300 rounded w-1/3" placeholder="비밀번호">
      <button @click="submitLogin" class="bg-custom-btn-green hover:bg-custom-btn-green-hover rounded p-3 px-10 m-3 w-1/3 text-white font-pretendard">로그인</button>
    </div>
    <div class="flex justify-center items-center font-pretendard text-lg text-custom-gray">
      <span class="mr-3">회원가입</span>
      <div class="h-6 bg-custom-gray w-0.5 mr-3"></div>
      <span class="mr-3">비밀번호 찾기</span>
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
    const user = reactive({ username: '', password: ''});

    async function submitLogin() {
      await store.login(user);
      console.log(store.login);
      router.push('/');
    }

    return {
      user, submitLogin
    }
  }
})
</script>

<style>
  
</style>