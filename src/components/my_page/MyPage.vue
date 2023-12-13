<template>
  <div class="container min-w-full text-center flex justify-center items-center flex-col px-20">
    <div class="bg-custom-gray h-20 w-20 p-16 rounded-full mb-5"></div>
    <p class="font-pretendard font-bold text-xl mb-10">{{ fetchedUserInfo.username }}</p>
    <div class="grid grid-cols-5 w-full bg-gray-200 rounded-lg font-pretendard font-semibold">
      <div class="border-r-4 border-white p-5">현재 참여 중인 활동</div>
      <div class="border-r-4 border-white p-5">과거 참여 활동 기록</div>
      <div class="border-r-4 border-white p-5">관심있는 활동</div>
      <div class="border-r-4 border-white p-5">내 나무 보기</div>
      <div class="p-5">회원 정보</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useStore } from '../../store';

interface UserInfo {
  id: number;
  username: string;
  nickname: string;
 [key: string]: string | number;
}

export default defineComponent({
  setup() {
    const store = useStore();
    let fetchedUserInfo = ref<UserInfo>({ id: 0, username: '', nickname: '' });

    async function fetchUserInfo() {
      try {
        fetchedUserInfo.value = await store.fetchUserInfo();
        console.log(fetchedUserInfo);
      } catch (error) {
        console.error('Failed to fetch user info:', error);
      }
    }

    onMounted(async () => {
      await fetchUserInfo();
    });


    return {
      fetchUserInfo, fetchedUserInfo
    }
  }
})
</script>

<style>
  
</style>