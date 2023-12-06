<template>
  <div class="container min-w-full text-center" v-if="fetchedPostsEdit.length > 0">
    <div class="flex flex-col items-center mb-10">
      <p class="font-pretendard text-3xl font-bold mb-10">글 수정</p>
      <input v-model="post.title" type="text" class="focus:outline-none resize-none text-lg font-pretendard pl-10 pr-10 p-3 mb-3 border-2 border-gray-300 rounded w-3/5" placeholder="제목">
      <textarea v-model="post.content" type="text" class="focus:outline-none resize-none text-lg font-pretendard p-10 border-2 border-gray-300 rounded w-3/5 h-96" placeholder="내용"></textarea>
    </div>
    <router-link to="/list" class="bg-custom-btn-green hover:bg-custom-btn-green-hover rounded p-3 pl-10 pr-10 m-3 text-white font-pretendard inline-block">취소</router-link>
    <button @click="editPost" class="bg-custom-btn-green hover:bg-custom-btn-green-hover rounded p-3 pl-10 pr-10 m-3 text-white font-pretendard">수정</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import { useStore } from '../store';
import { useRouter, useRoute } from 'vue-router';

interface FetchedPostsEdit {
  [key: string]: string | number;
}

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const post = reactive({ title: '', content: ''});
    const fetchedPostsEdit = ref<FetchedPostsEdit[]>([]);

    async function editPost() {
      await store.editPost(post, route.params.id);
      console.log(store.post);
      router.push('/list/join');
    }

    console.log(typeof (route.params.id));

    async function fetchPostsEdit(id: string | string[]) {
      if (typeof id === 'string') {
        fetchedPostsEdit.value = await store.fetchPostsEdit(id);
        console.log(fetchedPostsEdit.value);
      }
      if (fetchedPostsEdit.value.length) {
        post.title = String(fetchedPostsEdit.value[0].title);
        post.content = String(fetchedPostsEdit.value[0].content);
      }
    }
    fetchPostsEdit(route.params.id);
    

    return {
      post, editPost, fetchPostsEdit, fetchedPostsEdit
    }
  }
})
</script>

<style>
  
</style>