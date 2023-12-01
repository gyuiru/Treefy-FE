<template>
  <div class="container min-w-full">
    <div class="flex justify-between items-center mb-4">
      <p class="font-pretendard font-bold text-xl">모집이 종료된 봉사활동</p>
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
        <p>등록일</p>
      </div>
      <div class="h-0.5 w-full bg-custom-gray border-solid opacity-10"></div>
      <div>여기에 작성한 글 보여줌</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name : "Closed",
  components : {},
})
</script>

<style>
  
</style>