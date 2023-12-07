import { defineStore } from 'pinia'
// import asdf from 'asdf'; // 데이터 가져오기 (json같은)
import axios, { Axios } from 'axios';

interface Post {
  title: string;
  content: string;
}

interface fetchedPosts {
  [key: string]: string | number;
}

interface fetchedPostsDetail {
  [key: string]: string | number;
}

interface FetchedPostsEdit {
  [key: string]: string | number;
}

export const useStore = defineStore('main', {

  state: () => ({
    // asdf, // 데이터 넣기 (이름이 같기에 : 안쓰고 하나로 씀);
    post: {
      title: '',
      content: ''
    } as Post,

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
    async fetchPosts(id: string): Promise<fetchedPosts[]>{
      try {
        const response = await axios.get(`/api/list?page=${parseInt(id) - 1}&limit=5`);
        console.log('글 전체 데이터 성공적으로 가져옴');
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.log(error);
        return [];
      }
    },
    async fetchTotalPostsCount(): Promise<number>{
      try {
        const response = await axios.get('/api/list/count');
        console.log('전체 글 갯수 성공적으로 가져옴');
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.log(error);
        return 0;
      }
    },
    async fetchPostsDetail(id: string | string[]): Promise<fetchedPostsDetail[]>{
      try {
        const response = await axios.get(`/api/list/detail/${id}`);
        console.log('글 상세 데이터 성공적으로 가져옴');
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.log(error);
        return [];
      }
    },
    async fetchPostsEdit(id: string | string[]): Promise<FetchedPostsEdit[]>{
      try {
        const response = await axios.get(`/api/edit/${id}`);
        console.log('글 상세 데이터 성공적으로 가져옴');
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.log(error);
        return [];
      }
    },
    async editPost(post: Post, id: string | string[]) {
      this.post = post;
      console.log(id);
      try {
        const response = await axios.put(`/api/edit/${id}`, post);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async deletePost(id: string | string[]) {
      try {
        console.log('삭제할 글 아이디', id);
        const response = await axios.delete(`/api/delete/${id}`);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    

  },

  //getters
});