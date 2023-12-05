<template>
  <div class="container min-w-full text-center">
    <div class="flex flex-col items-center mb-10">
      <p class="font-pretendard text-3xl font-bold mb-10">봉사 모집 글 작성</p>
      <input v-model="post.title" type="text" class="focus:outline-none resize-none text-lg font-pretendard pl-10 pr-10 p-3 mb-3 border-2 border-gray-300 rounded w-3/5" placeholder="제목">
      <textarea v-model="post.content" type="text" class="focus:outline-none resize-none text-lg font-pretendard p-10 border-2 border-gray-300 rounded w-3/5 h-96" placeholder="내용"></textarea>
    </div>
    <router-link to="/list" class="bg-custom-btn-green rounded p-3 pl-10 pr-10 m-3 text-white font-pretendard">취소</router-link>
    <button @click="submitPost" class="bg-custom-btn-green rounded p-3 pl-10 pr-10 m-3 text-white font-pretendard">등록</button>
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
    const post = reactive({ title: '', content: ''});

    function submitPost() {
      store.setPost(post);
      console.log(store.post);
      router.push('/list/join');
    }

    return {
      post, submitPost
    }
  }
})
</script>

<style>
  
</style>