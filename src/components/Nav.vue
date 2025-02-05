<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { scrollToSection } from "../utils/helpers.ts";

const router = useRouter();
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <div
    class="h-[10vh] px-10 md:px-20 py-5 flex justify-between items-center relative"
  >
    <!-- Logo -->
    <div
      class="flex gap-2 items-center cursor-pointer font-customFont"
      @click="router.push('/')"
    >
      <img src="/assets/logo.png" alt="Logo" class="h-10 lg:h-20" />
    </div>

    <!-- Desktop Nav -->
    <div class="hidden md:flex gap-10 cursor-pointer">
      <p @click="scrollToSection('about-me')">About me</p>
      <p @click="scrollToSection('projects')">Projects</p>
      <p @click="scrollToSection('artworks')">Artworks</p>
      <p @click="scrollToSection('contact')">Contact me</p>
    </div>

    <!-- Mobile Hamburger Menu -->
    <div class="md:hidden flex items-center">
      <button @click="toggleMenu">
        <img
          src="https://img.icons8.com/?size=100&id=3096&format=png&color=FFFFFF"
          alt="Menu"
          class="h-8 w-8"
        />
      </button>
    </div>

    <!-- Mobile Dropdown -->
    <div
      v-if="isMenuOpen"
      class="absolute top-[70%] right-0 w-1/2 bg-[#020911] text-white flex flex-col items-center gap-5 py-5 transition-all duration-300 z-50 shadow-lg"
    >
      <p
        @click="
          scrollToSection('about-me');
          toggleMenu();
        "
      >
        About me
      </p>
      <p
        @click="
          scrollToSection('projects');
          toggleMenu();
        "
      >
        Projects
      </p>
      <p
        @click="
          scrollToSection('artworks');
          toggleMenu();
        "
      >
        Artworks
      </p>
      <p
        @click="
          scrollToSection('contact');
          toggleMenu();
        "
      >
        Contact me
      </p>
    </div>
  </div>
</template>
