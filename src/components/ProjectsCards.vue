<script setup lang="ts">
import ProjectCard from "./ProjectCard.vue";
import { allProjects } from "../utils/data.ts";
</script>

<template>
  <div
    id="projects"
    class="explorer max-sm:pt-[10vh] bg-[url('/assets/bg-2.png')] h-[190vh] w-screen text-white bg-cover bg-center md:pt-[20vh] flex flex-col items-start font-customFont"
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
      <div v-for="(project, index) in allProjects" :key="index">
        <ProjectCard
          :path="project.path"
          :img="project.img"
          :title="project.title"
          :subtitle="project.subtitle"
        />
      </div>
    </div>

    <div class="flex items-center justify-center w-full mt-10">
      <a href="https://github.com/Aya-Jafar" target="_blank">
        <button
          type="button"
          class="text-[1rem] font-regular font-customFont text-white bg-[#013fbd] hover:bg-blue-800 font-medium rounded-lg text-sm px-8 py-3 dark:hover:bg-blue-700 focus:outline-none"
        >
          View More
        </button>
      </a>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 0px) and (max-width: 999px) {
  .explorer {
    padding: 0 5rem;
    height: 240vh;
  }

  .card-wrapper {
    width: 100% !important;
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
  @apply border-[rgba(255,255,255,0.3)] border-[0.01px] hover:border-blue-500 cursor-pointer 
         w-full sm:w-[80%] md:w-[45%] lg:w-[28vw] 
         bg-[#020911] md:h-[40vh] sm:h-full rounded-[1vw] flex flex-col items-center relative;
}

.card-title {
  @apply text-start lg:text-[2rem] md:text-[1.7rem]  font-customFont font-semibold mt-5;
}
.card-subtitle {
  @apply text-center w-[80%] !font-thin;
}
</style>
