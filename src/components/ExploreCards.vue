<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div
    class="explorer max-sm:mt-[60vh] bg-[url('../src/assets/bg-2.png')] h-[100vh] w-screen text-white bg-cover bg-center md:pt-[20vh] flex flex-col items-start font-customFont"
  >
    <div class="px-20 flex lg:flex-row">
      <!-- Motto & Description -->
      <div class="flex w-full items-start sm:mt-[10vh]">
        <h1
          class="text-[2rem] sm:text-[4.5rem] md:text-[4.5rem] lg:text-[5rem] font-bold font-customFont leading-tight lg:leading-[5rem] xl:leading-[6.5rem] md:h-auto"
        >
          Explore our elements<br />
        </h1>
      </div>
    </div>

    <!-- Cards -->
    <div class="flex justify-center items-center flex-wrap w-full gap-5 mt-10">
      <!-- Card 1 -->
      <div class="card-wrapper" @click="router.push('/buttons')">
        <div
          class="absolute -bottom-10 -left-10 w-[20vw] h-[20vh] bg-blue-500 opacity-30 blur-3xl rounded-full pointer-events-none"
        ></div>

        <img
          src="../../src/assets/btns.png"
          alt=""
          class="w-[80%] h-[65%] object-cover mt-5 transform transition duration-300 hover:scale-105"
        />

        <h1 class="card-title">Buttons</h1>
      </div>

      <!-- Card 2 -->
      <div class="card-wrapper">
        <img
          src="../../src/assets/temp.png"
          alt=""
          class="w-[80%] h-[65%] object-cover mt-5 transform transition duration-300 hover:scale-105"
        />
        <h1 class="card-title">Cards</h1>
      </div>

      <!-- Card 3 -->
      <div class="card-wrapper">
        <div
          class="absolute -bottom-10 -right-10 w-[20vw] h-[20vh] bg-[#EC5C87] opacity-30 blur-3xl rounded-full pointer-events-none"
        ></div>

        <img
          src="../../src/assets/temp.png"
          alt=""
          class="w-[80%] h-[65%] object-cover mt-5 transform transition duration-300 hover:scale-105"
        />

        <h1 class="card-title">Sliders</h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 0px) and (max-width: 700px) {
  .explorer {
  }

  .card-wrapper {
    width: 75% !important;
    padding-bottom: 2rem;
  }
  .card-title {
    font-size: 2rem;
  }
  /* .icon {
    height: 7rem;
    width: 7rem;
  } */
}

.card-wrapper {
  @apply border-[0.1px] cursor-pointer  w-full lg:w-[28vw] lg:mt-0 bg-[#020911] md:h-[30vh] rounded-[1vw] flex flex-col items-center gap-5 relative overflow-hidden;
}
.card-title {
  @apply text-start lg:text-[2rem] md:text-[1.7rem]  font-customFont font-semibold;
}
.card-subtitle {
  @apply text-center w-[80%] font-thin lg:text-[2rem] md:text-[1.1rem];
}
</style>
