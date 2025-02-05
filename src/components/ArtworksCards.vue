<script setup lang="ts">
import { ref, onMounted, nextTick, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { artworks } from "../utils/data";
import ArtworkCard from "./ArtworkCard.vue";

const router = useRouter();

const hoveredArtwork = ref(null);

const setHoveredArtwork = (newValue: any) => {
  hoveredArtwork.value = newValue;
};
</script>

<template>
  <div
    id="artworks"
    class="explorer max-sm:mt-[60vh] bg-[url('../src/assets/bg-2.png')] h-[250vh] w-screen text-white bg-cover bg-center md:pt-[20vh] flex flex-col items-start font-customFont"
  >
    <div class="px-20 flex lg:flex-row">
      <!-- Motto & Description -->
      <div class="flex w-full items-start sm:mt-[10vh]">
        <h1
          class="text-[2rem] sm:text-[4.5rem] md:text-[4.5rem] lg:text-[5rem] font-bold font-customFont leading-tight lg:leading-[5rem] xl:leading-[6.5rem] md:h-auto"
        >
          Artworks<br />
        </h1>
      </div>
    </div>

    <!-- Cards -->
    <div
      class="flex justify-center items-center flex-wrap w-full gap-5 mt-10 px-20"
    >
      <div
        v-for="(artwork, index) in artworks"
        :key="index"
        :onMouseOver="() => setHoveredArtwork(artwork)"
        :onMouseOut="() => setHoveredArtwork(null)"
        class="relative group w-auto cursor-pointer"
      >
        <ArtworkCard
          :img="`${index + 1}`"
          :link="artwork.link"
        />
        <a
          class="hover-text opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          :href="artwork.link"
        >
          View post
        </a>
      </div>
    </div>

    <div class="flex items-center justify-center w-full mt-10">
      <button
        type="button"
        class="text-[1rem] font-regular font-customFont text-white bg-[#013fbd] hover:bg-blue-800 font-medium rounded-lg text-sm px-8 py-3 dark:hover:bg-blue-700 focus:outline-none"
      >
        <a href="https://www.instagram.com/_aya.jaffar_/" target="_blank">
          View More
        </a>
      </button>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 0px) and (max-width: 700px) {
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
}

.card-wrapper {
  @apply border-[rgba(255,255,255,0.3)] border-[0.01px]   hover:border-blue-500  cursor-pointer  lg:mt-0 bg-[#020911] md:h-[40vh]  rounded-[1vw] flex flex-col items-center relative;
}
.card-title {
  @apply text-start lg:text-[2rem] md:text-[1.7rem]  font-customFont font-semibold mt-5;
}
.card-subtitle {
  @apply text-center w-[80%] !font-thin;
}

.hover-text {
  @apply absolute inset-0 flex items-center justify-center 
         text-white text-lg font-bold bg-black/50 rounded-lg opacity-0 
         group-hover:opacity-100 transition-opacity duration-300;
}
</style>
