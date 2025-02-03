<script lang="ts" setup>
import CustomizerTemplate from "../components/CustomizerTemplate.vue";
import { ref, computed, onMounted, watchEffect } from "vue";
import SliderCustomizer from "../components/SliderCustomizer.vue";
import CustomizerInput from "../components/CustomizerInput.vue";
import CodeCard from "../components/CodeCard.vue";
import SelectCustomizer from "../components/SelectCustomizer.vue";
import { useRoute } from "vue-router";
import { getProjectData } from "../utils/data.ts";

const route = useRoute();
const currentData = ref(null);

onMounted(() => {
  currentData.value = getProjectData(route.params.name);
})
</script>

<template>
  <CustomizerTemplate>
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
        <br />

        <span class="font-semibold text-lg text-white">Features:</span>
        <ul
          class="list-none space-y-2 text-gray-300 mt-2 lg:text-[1.3rem]"
          v-for="feature in currentData?.features"
        >
          <li>
            {{ feature }}
          </li>
        </ul>
      </div>
    </template>

    <!-- Links -->
    <template v-slot:option-3>
      <div class="flex gap-2 justify-center text-nowrap">
        <a :href="currentData?.githubLink">
          <div
            class="bg-gray-900 mt-10 text-white p-4 rounded-lg shadow-md flex items-center justify-center gap-2 cursor-pointer max-w-[300px]"
          >
            <img
              src="https://img.icons8.com/ios11/512/FFFFFF/github.png"
              alt="GitHub"
              class="w-10 h-10"
            />
            <p
              class="text-lg text-blue-300 lg:text-[2rem] md:text-[1.7rem] font-customFont mt-3"
            >
              GitHub Repo
            </p>
          </div>
        </a>

        <a :href="currentData?.activeLink">
          <div
            class="bg-gray-900 mt-10 p-4 rounded-lg shadow-md flex items-center justify-center gap-2 cursor-pointer max-w-[300px]"
          >
            <img src="../assets/Link Icon.png" alt="link" class="w-10 h-10" />
            <p
              class="text-lg text-blue-300 lg:text-[2rem] md:text-[1.7rem] font-customFont mt-3"
            >
              Active link
            </p>
          </div>
        </a>
      </div>
    </template>

    <!-- Images -->
    <template v-slot:code>
      <div class="flex flex-col gap-5 w-full mt-2" v-for="img in currentData?.extraImages">
        <img
          :src="img"
          alt="Image"
          class="w-full h-auto"
        />
      </div>
    </template>
  </CustomizerTemplate>
</template>

<style scoped>
span {
  @apply font-semibold;
}
</style>
