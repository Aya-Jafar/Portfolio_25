<script setup lang="ts">
import { useRouter } from "vue-router";
import ProjectCard from "./ProjectCard.vue";

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
          Projects<br />
        </h1>
      </div>
    </div>

    <!-- Cards -->
    <div class="flex justify-center items-center flex-wrap w-full gap-5 mt-10">
      <ProjectCard
        path="/project/AI Artistry"
        img="../../src/assets/projects/ai-art.png"
        title="AI Artistry"
        subtitle="React.js , Django , Websockets, Firebase , Gemini API, huggingface"
        extraStyle="'-bottom-10 -right-10 bg-[#EC5C87]'"

      />

      <ProjectCard
        path="'/buttons'"
        img="../../src/assets/projects/heal-ai.png"
        title="Heal Tech.AI"
        subtitle="React.js , Typescript , Django , Firebase, Jest"
        extraStyle="'-bottom-10 -right-10 bg-[#EC5C87]'"
      />

      <ProjectCard
        path="'/buttons'"
        img="../../src/assets/projects/Medium Banner Landscape Design.png"
        title="Sound Shop"
        subtitle="React.js , Django, bootstrap"
        extraStyle="'-bottom-10 -right-10 bg-[#EC5C87]'"
      />
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
  @apply border-[rgba(255,255,255,0.3)] border-[0.01px]  hover:border-blue-500  cursor-pointer  w-full lg:w-[28vw] lg:mt-0 bg-[#020911] md:h-[40vh] rounded-[1vw] flex flex-col items-center relative;
}
.card-title {
  @apply text-start lg:text-[2rem] md:text-[1.7rem]  font-customFont font-semibold mt-5;
}
.card-subtitle {
  @apply text-center w-[80%] !font-thin;
}
</style>
