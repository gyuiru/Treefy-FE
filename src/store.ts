import { defineStore } from 'pinia'
// import asdf from 'asdf'; // 데이터 가져오기 (json같은)
import axios, { Axios } from 'axios';

interface Post {
  title: string;
  content: string;
}

export const useStore = defineStore('main', {

  state: () => ({
    post: {
      title: '',
      content: ''
    } as Post
          // asdf, // 데이터 넣기 (이름이 같기에 : 안쓰고 하나로 씀);
          
  }),
  actions: {  //actions
    async setPost(post: Post) {
      this.post = post;
      try {
        const response = await axios.post('/api/posts', post);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },

  //getters
});