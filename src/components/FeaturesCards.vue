<script setup lang="ts"></script>

<template>
  <div
    class="features bg-[url('../src/assets/bg-2.png')] h-[100vh] w-screen text-white bg-cover bg-center pt-[20vh] flex flex-col items-center font-customFont"
  >
    <div class="px-20 flex lg:flex-row items-center">
      <!-- Motto & Description -->
      <div
        class="flex w-full items-center text-center justify-center sm:mt-[10vh]"
      >
        <h1
          class="text-[2rem] sm:text-[4.5rem] md:text-[4.5rem] lg:text-[5rem] font-bold font-customFont leading-tight lg:leading-[5rem] xl:leading-[6.5rem] md:h-auto"
        >
          Why to use code crafter?<br />
        </h1>
      </div>
    </div>

    <!-- Cards -->
    <div class="flex justify-center items-center flex-wrap w-full gap-5 mt-10">
      <!-- Card 1 -->
      <div
        class="card w-full lg:w-[28vw] lg:mt-0 bg-[#020911] md:h-[50vh] rounded-[1vw] flex flex-col items-center gap-5 relative overflow-hidden"
      >
        <div
          class="absolute -bottom-10 -left-10 w-[20vw] h-[20vh] bg-blue-500 opacity-30 blur-3xl rounded-full pointer-events-none"
        ></div>

        <img
          src="../../src/assets/time-icon.png"
          alt=""
          class="icon md:h-[45%] md:w-[50%] sm:w-[30%] sm:h-[30%] mt-5 transform transition duration-300 hover:scale-105"
        />

        <h1 class="card-title">Real-Time Customization</h1>
        <p class="card-subtitle">
          Save time and adjust the look and feel of components instantly with
          live preview.
        </p>
      </div>

      <!-- Card 2 -->
      <div
        class="card group w-full lg:w-[28vw] lg:mt-0 bg-[#020911] md:h-[50vh] sm:h-[50vh] rounded-[1vw] flex flex-col items-center gap-5 relative overflow-hidden"
      >
        <img
          src="../../src/assets/juinior-icon.png"
          alt=""
          class="icon h-[45%] w-[50%] mt-5 transform transition duration-300 hover:scale-105"
        />

        <h1 class="card-title">Junior web developer friendly</h1>
        <p class="card-subtitle">
          Easily customize components with no strong familiarity with css needed
        </p>
      </div>

      <!-- Card 3 -->
      <div
        class="card group w-full lg:w-[28vw] lg:mt-0 bg-[#020911] md:h-[50vh] sm:h-[50vh] rounded-[1vw] flex flex-col items-center gap-5 relative overflow-hidden"
      >
        <div
          class="absolute -bottom-10 -right-10 w-[20vw] h-[20vh] bg-[#EC5C87] opacity-30 blur-3xl rounded-full pointer-events-none"
        ></div>

        <img
          src="../../src/assets/perfomance-icon.png"
          alt=""
          class="icon h-[45%] w-[50%] mt-5 transform transition duration-300 hover:scale-105"
        />

        <h1 class="card-title">Boost performance</h1>
        <p class="card-subtitle">
          Create fully customized components using pure CSS, or Tailwind , all
          in one place. No extra dependencies
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 0px) and (max-width: 700px) {
  .features {
    align-items: center;
  }
  .card{
    width:80%;
    padding-bottom: 2rem;
  }
  .card-title{
    font-size: 1.2rem;
  }
  .card-subtitle {
    font-size: 1rem;
  }
  .icon {
    height: 7rem;
    width: 7rem;
  }
}

.card-title {
  @apply text-center lg:text-[2rem] md:text-[2rem]  font-customFont font-semibold;
}
.card-subtitle {
  @apply text-center w-[80%] font-thin lg:text-[1.3rem] md:text-[1.1rem];
}
</style>
