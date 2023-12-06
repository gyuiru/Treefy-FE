<template>
  <div class="container min-w-full" v-if="fetchedPostsDetail.length > 0">
    <div class="flex flex-col items-center justify-center">
      <div class="flex items-center font-pretendard text-lg text-gray-500 font-bold">
        <span class="mr-3">글 테마</span>
        <div class="h-6 bg-gray-500 w-0.5"></div>
        <span class="ml-3">{{ fetchedPostsDetail[0].created_date }}</span>
        <div class="absolute right-96">
          <router-link :to="`/edit/${ fetchedPostsDetail[0].id }`" class="bg-custom-btn-green hover:bg-custom-btn-green-hover rounded-full py-1 pl-3 pr-3 text-white font-pretendard inline-block">수정</router-link>
          <button @click="deletePost" class="bg-red-500 hover:bg-red-700 rounded-full py-1 pl-3 pr-3 text-white font-pretendard ml-5">삭제</button>
        </div>
      </div>
      <h3 class="font-pretendard font-bold text-4xl mt-8">{{ fetchedPostsDetail[0].title }}</h3>
      <span class="mt-10">모집 기간</span>
    </div>
    <div class="bg-gray-50 mx-60 my-20 h-auto text-center">{{ fetchedPostsDetail[0].content }}</div>
    <div class="text-center">
      <router-link to="/list/join" class="bg-custom-btn-green hover:bg-custom-btn-green-hover rounded p-3 pl-10 pr-10 m-3 text-white font-pretendard inline-block">목록 보기</router-link>
      <button class="bg-custom-btn-green hover:bg-custom-btn-green-hover rounded p-3 pl-10 pr-10 m-3 text-white font-pretendard">지원하기</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from '../store';
import { useRouter, useRoute } from 'vue-router'

interface fetchedPostsDetail {
  [key: string]: string | number;
}

export default defineComponent({
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const fetchedPostsDetail = ref<fetchedPostsDetail[]>([]);

    console.log(typeof (route.params.id));

    async function fetchPostsDetail(id: string | string[]) {
      if (typeof id === 'string') {
        fetchedPostsDetail.value = await store.fetchPostsDetail(id);
        console.log(fetchedPostsDetail.value);
      }
    }
    fetchPostsDetail(route.params.id);

    async function deletePost() {
      await store.deletePost(route.params.id);
      console.log('글 삭제 완료');
      router.push('/list/join');
    }

    return {
      fetchedPostsDetail, fetchPostsDetail, deletePost
    }
  }
})
</script>

<style>
.router-link {
  display: inline-block; /* 블록 요소처럼 동작하게 함 */
  padding: 0; /* 패딩 제거 */
  margin: 0; /* 마진 제거 */
  border: none; /* 테두리 제거 */
  background: none; /* 배경 제거 */
  text-decoration: none; /* 밑줄 제거 */
}
</style>