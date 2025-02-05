<script setup lang="ts">
import TechSkill from "./TechSkills.vue";
</script>

<template>
  <div
  id="about-me"
    class="features bg-[url('/assets/bg-2.png')] h-[100vh] w-screen text-white bg-cover bg-center flex flex-col items-start"
  >
    <div class="flex lg:flex-row items-start ">
      <div class="flex w-full items-start text-left sm:mt-[10vh]">
        <h1
          class="pl-20 text-[2rem] sm:text-[4.5rem] md:text-[4.5rem] lg:text-[5rem] font-bold font-customFont leading-tight lg:leading-[5rem] xl:leading-[6.5rem] md:h-auto"
        >
          About me<br />
        </h1>
      </div>
    </div>

    <div class="flex justify-center flex-wrap w-full gap-5 mt-10">
      <!-- Card -->
      <div
        class="card w-full border-[0.01px] border-transparent hover:border-blue-500 lg:w-[80%] lg:h-[70vh] lg:mt-0 bg-[#020911] md:h-[50vh] rounded-[1vw] flex flex-col gap-5 relative overflow-hidden p-20"
      >
        <div
          class="absolute -bottom-10 -left-10 w-[20vw] h-[20vh] bg-blue-500 opacity-30 blur-3xl rounded-full pointer-events-none"
        ></div>

        <p class="card-subtitle w-full text-balance">
          I'm a web developer with almost 2 years experience , machine learning enthusiast, and artist who loves
          crafting beautiful, user-friendly websites. I tinker with AI to build
          smart solutions and use art as my creative playground. Blending code,
          intelligence, and creativity, I aim to make experiences that wow,
          inspire, and innovate!
        </p>

        <h1
          class="mt-auto text-[1rem] sm:text-[4.5rem] md:text-[4.5rem] lg:text-[2rem] font-bold font-customFont leading-tight lg:leading-[5rem] xl:leading-[6.5rem] md:h-auto"
        >
          Technechal skills<br />
        </h1>
        <TechSkill />
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 0px) and (max-width: 700px) {
  .features {
    /* align-items: center; */
    padding-top:2rem;
  }

  .card-title {
    font-size: 1.2rem;
  }
  .card-subtitle {
    font-size: 1rem;
  }
}

.card-title {
  @apply text-center lg:text-[2rem] md:text-[2rem]  font-customFont font-semibold;
}
.card-subtitle {
  @apply text-left font-thin lg:text-[1.8rem] md:text-[1.1rem] sm:text-[2rem];
}
</style>
