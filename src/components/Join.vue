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
          <span @click="$router.push(`/list/detail/${ fetchedPosts[i].id }`)" class="col-span-3">{{ fetchedPosts[i].title }}</span>
          <span>작성자 미정</span>
          <span>{{ fetchedPosts[i].created_date }}</span>
        </div>
        <div class="h-0.5 w-full bg-custom-gray border-solid opacity-10"></div>
      </div>
      <div class="font-pretendard text-xl text-custom-gray mt-10">
        <button @click="prevPage" class="w-14 h-14 bg-gray-200 rounded-full hover:bg-slate-300 hover:text-gray-700 mr-10">&lt;</button>
        <router-link :to="`/list/join/${ i + 1 }`" v-for="(a, i) in totalPages" :key="i" class="p-5 hover:underline">{{ i + 1 }}</router-link>
        <button @click="nextPage" class="w-14 h-14 bg-gray-200 rounded-full hover:bg-slate-300 hover:text-gray-700 ml-10">&gt;</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch, onMounted } from 'vue';
import { useStore } from '../store';
import { useRoute, useRouter } from 'vue-router';

interface fetchedPosts {
  [key: string]: string | number;
}

export default defineComponent({
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const fetchedPosts = ref<fetchedPosts[]>([]);
    let paramsId: string;
    let totalPostsCount = ref<number>(0);
    let totalPages = computed(() => Math.ceil(totalPostsCount.value / 5));

    if (typeof route.params.id === 'string') {
      paramsId = route.params.id;
    } else if (Array.isArray(route.params.id)) {
      paramsId = route.params.id[0];
    } else {
      paramsId = '1';
    }

    async function fetchTotalPostsCount() {
      try {
        totalPostsCount.value = await store.fetchTotalPostsCount();
        console.log(totalPostsCount.value);
      } catch (error) {
        console.error("Failed to fetch total posts count:", error);
      }
    }

    async function fetchPosts() {
      try {
        fetchedPosts.value = await store.fetchPosts(paramsId);
        console.log(fetchedPosts.value);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    }

    async function nextPage() {
      try {
        if (typeof route.params.id === 'string' && parseInt(route.params.id) < totalPages.value) {
          router.push(`/list/join/${ parseInt(route.params.id) + 1 }`);
        }
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    }

    async function prevPage() {
      try {
        if (typeof route.params.id === 'string' && parseInt(route.params.id) > 1) {
          router.push(`/list/join/${ parseInt(route.params.id) - 1 }`);
        }
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    }
    
    watch(() => route.params.id ? route.params.id.toString() : '', async (newParamsId) => {
      paramsId = newParamsId;
      fetchedPosts.value = await store.fetchPosts(paramsId);
    });

    onMounted(async () => {
      await fetchTotalPostsCount();
      await fetchPosts();
    });


    return {
      fetchedPosts, fetchTotalPostsCount, totalPostsCount, totalPages, nextPage, prevPage
    }
  }
});
</script>

<style>
  
</style>