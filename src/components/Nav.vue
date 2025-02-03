<script setup lang="ts">
import { useRouter } from 'vue-router';
const router =  useRouter()

</script>


<template>
  <div class="h-[10vh] px-20 py-5 flex justify-between items-center">
    <div class="flex gap-2 items-center cursor-pointer font-customFont" @click="router.push('/')">
      <img src="../assets/logo.png" alt="" class="h-10 lg:h-20" />
      <h1 class="md:text-[1rem] font-semibold sm:text-[1.5rem] lg:text-[1.8rem]">
      </h1>
    </div>
  </div>
</template>
