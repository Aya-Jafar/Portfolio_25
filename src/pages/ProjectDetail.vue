<script lang="ts" setup>
import CustomizerTemplate from "../components/CustomizerTemplate.vue";
import { ref, computed } from "vue";
import SliderCustomizer from "../components/SliderCustomizer.vue";
import CustomizerInput from "../components/CustomizerInput.vue";
import CodeCard from "../components/CodeCard.vue";
import SelectCustomizer from "../components/SelectCustomizer.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <CustomizerTemplate>
    <template v-slot:option-1>
      <!-- <p>Project Name: {{ route.params.name }}</p> -->

      <div class="flex items-center gap-5">
        <div
          class="mb-5 lg:text-[2rem] md:text-[1.7rem] font-customFont font-semibold mt-3"
        >
          {{ route.params.name }}
        </div>
      </div>
    </template>

    <template v-slot:option-2>
      <div
        class="text-left font-thin lg:text-[1.4rem] md:text-[1.1rem] sm:text-[2rem]"
      >
        Art generation image web app with <span>React.js</span>,
        <span>Firebase</span> for data storage and authentication, and
        <span> Django </span> for extra AI features with <span>Gemini</span>
        <br />
        <br />

        <span class="font-semibold text-lg text-white">Features:</span>
        <ul class="list-none space-y-2 text-gray-300 mt-2 lg:text-[1.3rem]">
          <li>
            🖼️ AI-powered image generation with huggingface
            (Lykon/art-diffusion-xl-0.9 model)
          </li>
          <li>
            🤖 Real time Chatbot to brainstorm prompts with Django and Gemini
          </li>
          <li>🔒 Secure authentication with Firebase</li>
          <li>
            ☁️ Cloud-based data storage with ability for users to
            post,comment,save and interact with the previously generated images
          </li>
          <li>
            <!-- ⚡ -->
            👩‍🎨 Additional feature with Gemini to get artists names with similar
            style to the generated image
          </li>
        </ul>
      </div>
    </template>

    <!-- Links -->
    <template v-slot:option-3>
      <div class="flex gap-2 justify-center text-nowrap">
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
      </div>
    </template>

    <!-- Images -->
    <template v-slot:code>
      <div class="flex flex-col gap-5 w-full mt-2">
        <img
          src="../assets/projects/ai-art-2.png"
          alt="Image 1"
          class="w-full h-auto"
        />
        <img
          src="../assets/projects/imagine.jpg"
          alt="Image 1"
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
