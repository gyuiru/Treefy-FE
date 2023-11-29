<template>
  <div class="container min-w-full flex justify-center">
    <div class="items-center justify-start p-20">
      <p class="text-5xl font-pretendard font-bold">봉사를 통해서</p>
      <p class="text-5xl font-pretendard font-bold">나무를 심자</p>
      <p class="text-10 font-pretendard pt-5 pb-5">봉사는 기부를 낳는다</p>
      <button class="bg-custom-btn-green rounded-lg p-3 pl-7 pr-7 text-white">도움주기</button>
    </div>
    <div class="items-center justify-end max-h-2xl max-w-2xl">
      <img src="../assets/main.webp" alt="" class="object-contain w-full h-full">
    </div>
  </div>
  <div class="container min-w-full pt-10 pb-10 flex items-center justify-center">
    <div class="mr-20">
      <p class="text-3xl font-pretendard font-medium">파트너 기업</p>
      <p class="text-10 font-pretendard text-custom-gray pt-3">여러 기업들이 손을 뻗어주고 있어요</p>
    </div>
    <div class="grid grid-cols-5">
      <img src="../assets/unicef.webp" alt="" class="w-32 object-contain h-full">
      <img src="../assets/visa.webp" alt="" class="w-32 object-contain h-full">
      <img src="../assets/mastercard.webp" alt="" class="w-32 object-contain h-full">
      <img src="../assets/paypal.webp" alt="" class="w-32 object-contain h-full">
      <img src="../assets/discover.webp" alt="" class="w-32 object-contain h-full">
    </div>
  </div>
  <div class="container text-center pt-24 pb-12">
    <p class="font-pretendard text-custom-btn-green">FAQS</p>
    <p class="font-pretendard text-2xl flex-grow font-bold">봉사를 통해 나무를 심는다는 게 무슨 말이죠?</p>
  </div>
  <div class="container mx-auto grid grid-cols-5 pb-12">
    <div class="text-center">
      <p class="font-pretendard text-10 text-custom-btn-green">step 1</p>
      <p class="font-pretendard text-2xl">봉사를 신청하세요!</p>
      <p class="font-pretendard text-10 text-custom-gray">원하는 날짜와 원하는 장소에서 여러 도움을 줄 수 있습니다</p>
      <button class="bg-custom-btn-green rounded-lg p-3 pl-7 pr-7 text-white mt-5">도움주기</button>
    </div>
    <div class="flex items-center justify-center">
      <img src="../assets/arrow.webp" alt="" class="w-14 h-14">
    </div>
    <div class="text-center">
      <p class="font-pretendard text-10 text-custom-btn-green">step 2</p>
      <p class="font-pretendard text-2xl">포인트를 받으세요!</p>
      <p class="font-pretendard text-10 text-custom-gray">봉사가 끝나면 일정 포인트를 받을 수 있습니다</p>
      <button class="bg-custom-btn-green rounded-lg p-3 pl-7 pr-7 text-white mt-5">포인트 확인하기</button>
    </div>
    <div class="flex items-center justify-center">
      <img src="../assets/arrow.webp" alt="" class="w-14 h-14">
    </div>
    <div class="text-center">
      <p class="font-pretendard text-10 text-custom-btn-green">step 3</p>
      <p class="font-pretendard text-2xl">나무를 심으세요!</p>
      <p class="font-pretendard text-10 text-custom-gray">포인트로 나무를 성장시키고 성장이 끝난 나무는 기부할 수 있습니다</p>
      <button class="bg-custom-btn-green rounded-lg p-3 pl-7 pr-7 text-white mt-5">나무 심기</button>
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "Home",
  components: {},
});
</script>

<style></style>
