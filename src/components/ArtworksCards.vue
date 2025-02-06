<script setup lang="ts">
import { ref } from "vue";
import { artworks } from "../utils/data";
import ArtworkCard from "./ArtworkCard.vue";
import { useIntersectionObserver } from "../composables/useIntersectionObserver";

const { isInView, targetRef } = useIntersectionObserver(0.3);
const hoveredArtwork = ref(null);

const setHoveredArtwork = (newValue: any) => (hoveredArtwork.value = newValue);
</script>

<template>
  <div
    ref="targetRef"
    id="artworks"
    class="explorer bg-[url('/assets/bg-2.png')] h-[210vh] w-screen text-white bg-cover bg-center md:pt-[20vh] flex flex-col items-start font-customFont"
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
    <div class="w-full flex justify-center mt-10 px-20">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5"
      >
        <div
          v-for="(artwork, index) in artworks"
          :key="index"
          :onMouseOver="() => setHoveredArtwork(artwork)"
          :onMouseOut="() => setHoveredArtwork(null)"
          class="relative group w-full transition-all duration-700 ease-in-out"
          :class="{
            'opacity-100 translate-y-0': isInView,
            'opacity-0 translate-y-10': !isInView,
          }"
        >
          <ArtworkCard :img="`${index + 1}`" :link="artwork.link" />
          <a
            loading="lazy"
            class="hover-text opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            :href="artwork.link"
          >
            View post
          </a>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-center w-full mt-10">
      <a href="https://www.instagram.com/_aya.jaffar_/" target="_blank">
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
@media (min-width: 0px) and (max-width: 700px) {
  .explorer {
    @apply h-auto items-center mt-[10rem]  mb-[5rem];
  }

  .card-title {
    font-size: 2rem;
  }
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
