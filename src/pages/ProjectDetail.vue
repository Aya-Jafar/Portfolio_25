<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getProjectData } from "../utils/data.ts";
import { ProjectData } from "../utils/schema.ts";
import ProjectDetailTemplate from "../components/ProjectDetailTemplate.vue";

const route = useRoute();
const currentData = ref<ProjectData | null>(null);

onMounted(() => {
  const projectName = Array.isArray(route.params.name)
    ? route.params.name[0]
    : route.params.name;

  currentData.value = getProjectData(projectName) as ProjectData;
});
</script>

<template>
  <ProjectDetailTemplate v-if="currentData !== null">
    <template v-slot:option-1>
      <div class="flex items-center gap-5">
        <div
          class="mb-5 lg:text-[2rem] md:text-[1.7rem] font-customFont font-semibold mt-3"
        >
          {{ currentData?.title }}
        </div>
      </div>
    </template>

    <template v-slot:option-2>
      <div
        class="text-left font-thin lg:text-[1.4rem] md:text-[1.1rem] sm:text-[2rem]"
      >
        <div v-html="currentData?.description"></div>

        <br />

        <span
          class="font-semibold text-lg text-white"
          v-if="currentData?.features"
          >Features:</span
        >

        <li v-for="feature in currentData.features" v-html="feature"></li>
      </div>
    </template>

    <!-- Links -->
    <template v-slot:option-3>
      <div
        class="flex flex-col sm:flex-row gap-4 sm:gap-2 justify-center w-full"
      >
        <!-- GitHub Repo -->
        <a :href="currentData?.githubLink" class="w-full sm:flex-1">
          <div
            class="bg-gray-900 hover:bg-gray-800 mt-5 sm:mt-10 text-white p-3 sm:p-4 rounded-lg shadow-md flex items-center justify-center gap-2 cursor-pointer w-full"
          >
            <img
              loading="lazy"
              src="https://img.icons8.com/ios11/512/FFFFFF/github.png"
              alt="GitHub"
              class="w-8 sm:w-10 h-8 sm:h-10"
            />
            <p
              class="text-blue-300 text-[1rem] sm:text-[1.3rem] md:text-[1.5rem] font-customFont"
            >
              GitHub Repo
            </p>
          </div>
        </a>

        <!-- Active Link -->
        <a
          :href="currentData?.activeLink"
          class="w-full sm:flex-1"
          v-if="currentData?.activeLink"
        >
          <div
            class="bg-gray-900 hover:bg-gray-800 mt-5 sm:mt-10 p-3 sm:p-4 rounded-lg shadow-md flex items-center justify-center gap-2 cursor-pointer w-full"
          >
            <img
              src="/assets/Link Icon.png"
              alt="link"
              class="w-8 sm:w-10 h-8 sm:h-10"
              loading="lazy"
            />
            <p
              class="text-blue-300 text-[1rem] sm:text-[1.3rem] md:text-[1.5rem] font-customFont"
            >
              Active link
            </p>
          </div>
        </a>
      </div>
    </template>

    <!-- Images -->
    <template v-slot:project>
      <div class="flex gap-5 w-full">
        <!-- Images Container (Stacked Vertically) -->
        <div class="flex flex-col gap-5 w-full mt-2">
          <img
            loading="lazy"
            v-for="img in currentData?.extraImages"
            :key="img"
            :src="img"
            alt="Image"
            class="w-full h-auto"
          />
        </div>

        <!-- Colors Container (Side by Side) -->
        <div class="flex flex-col gap-4 items-end justify-center">
          <div
            v-for="color in currentData?.colors"
            :key="color"
            :style="{ backgroundColor: color }"
            class="w-10 h-7 rounded-md shadow-md"
          ></div>
        </div>
      </div>
    </template>
  </ProjectDetailTemplate>
</template>

<style scoped>
span {
  @apply font-semibold;
}
</style>
