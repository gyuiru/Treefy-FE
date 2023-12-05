<template>
  <div class="container min-w-full">
    <div class="flex justify-between items-center mb-4">
      <p class="font-pretendard font-bold text-xl">참여 가능한 봉사활동</p>
      <router-link to="/write" class="bg-custom-btn-green rounded p-3 pl-7 pr-7 text-white font-pretendard">모집 글 작성</router-link>
      <div>
        <select class="font-pretendard border rounded h-12 w-32 mr-3">
          <option value="value1">지역</option>
          <option value="value2">Option 2</option>
          <option value="value3">Option 3</option>
        </select>
        <input type="text" placeholder="검색어를 입력해주세요" class="border h-12 w-80 rounded mr-3">
        <button class="bg-custom-btn-green rounded-lg p-3 pl-7 pr-7 text-white">검색</button>
      </div>
    </div>
    <div class="h-1.5 w-full bg-custom-gray border-soli opacity-75"></div>
    <div class="text-center">
      <div class="grid grid-cols-6 p-3 font-pretendard font-bold">
        <p>번호</p>
        <p class="col-span-3">제목</p>
        <p>작성자</p>
        <p>작성일</p>
      </div>
      <div class="h-0.5 w-full bg-custom-gray border-solid opacity-10"></div>
      <div v-for="(a,i) in fetchedPosts" :key="i">
        <div class="grid grid-cols-6 p-5">
          <span>{{ fetchedPosts[i].id }}</span>
          <span @click="$router.push(`detail/${ i }`)" class="col-span-3">{{ fetchedPosts[i].title }}</span>
          <span>작성자 미정</span>
          <span>{{ fetchedPosts[i].created_date }}</span>
        </div>
        <div class="h-0.5 w-full bg-custom-gray border-solid opacity-10"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from '../store';

interface fetchedPosts {
  [key: string]: string | number;
}

export default defineComponent({
  setup() {
    const store = useStore();
    const fetchedPosts = ref<fetchedPosts[]>([]);

    async function fetchPosts() {
      fetchedPosts.value = await store.fetchPosts();
      console.log(fetchedPosts.value);
    }
    fetchPosts();

    return {
      fetchedPosts,
    }
  }
})
</script>

<style>
  
</style>