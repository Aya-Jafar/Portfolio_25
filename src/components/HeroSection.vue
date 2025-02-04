<script setup lang="ts">
import Nav from "./Nav.vue";
</script>

<template>
  <div
    class="bg-[url('../src/assets/test.png')] h-[100vh] w-screen text-white bg-cover bg-center"
  >
    <!-- Nav bar -->
    <Nav />

    <!-- Motto and GIF container -->
    <div class="px-20 flex flex-col lg:flex-row items-center mt-10 md:mt-20">
      <!-- Motto & Description -->
      <div
        class="flex flex-col w-full lg:w-1/2 justify-between items-start lg:text-left"
      >
        <h1
          class="font-customFont text-[3rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[6rem] font-bold leading-tight lg:leading-[5rem] xl:leading-[6.5rem] md:h-auto"
        >
          <span class="typing">Aya Jafar</span>
        </h1>
        <p
          class="text-[1rem] sm:text-[1.5rem] md:text-[1.8rem] min-lg:text-[2rem] font-thin mt-4 w-3/4 lg:leading-[2rem]"
        >
          Crafting experiences at the intersection of
          <span class="font-bold">art</span> and
          <span class="font-bold">code</span> 🎨💻
        </p>

        <div class="flex flex-col gap-6 items-center lg:items-start mt-7">
          <div class="flex gap-6">
            <a href="https://github.com/Aya-Jafar" target="_blank">
              <img
                src="https://img.icons8.com/ios/50/FFFFFF/github.png"
                alt="GitHub"
                class="w-10 h-10"
              />
            </a>
            <a href="https://www.linkedin.com/in/aya-jafar/" target="_blank">
              <img
                src="https://img.icons8.com/ios/50/FFFFFF/linkedin.png"
                alt="LinkedIn"
                class="w-10 h-10"
              />
            </a>
            <a href="mailto:aya.jafar002@gmail.com">
              <img
                src="https://img.icons8.com/ios/50/FFFFFF/email.png"
                alt="Email"
                class="w-10 h-10"
              />
            </a>
          </div>
        </div>

        <button
          type="button"
          class="mt-10 text-white bg-[#013fbd] hover:bg-blue-800 font-medium rounded-lg text-sm px-8 py-3 me-2 mb-2 dark:hover:bg-blue-700 focus:outline-none"
        >
          <a
            href="/cv.pdf"
            class="text-[1rem] font-regular font-customFont"
            download
            >Download CV</a
          >
        </button>
      </div>

      <!-- GIF -->
      <div
        class="w-full lg:w-3/5 flex justify-center items-center mt-10 lg:mt-0 bg-[#020911] md:h-[70vh] sm:h-[50vh] h-full rounded-[1vw] overflow-hidden"
      >
        <img
          src="../../src/assets/me.png"
          alt="me"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

.typing {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  width: 0;
  animation: typing 3s steps(20, end) forwards;
}

.cursor {
  display: inline-block;
  animation: blink 0.8s infinite;
}
</style>
