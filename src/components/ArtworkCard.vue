<script setup lang="ts">

const props = defineProps({
  link: {
    required: true,
    type: String,
    default: "",
  },
  img: {
    required: true,
    type: String,
    default: "",
  },
});

</script>

<template>
  <a class="card-wrapper" :href="link">
    <img
      :src="`/assets/artworks/${props.img}.jpg`"
      alt="artwork"
      class="w-full h-full object-cover  hover:border-blue-500"
    />
  </a>
</template>

<style scoped>
@media (min-width: 0px) and (max-width: 700px) {
  .card-wrapper {
    @apply w-full h-auto
  }
  .card-title {
    font-size: 2rem;
  }
}

.card-wrapper {
  @apply border-[rgba(255,255,255,0.3)] border-[0.01px] hover:border-blue-500 cursor-pointer 
         w-auto h-auto bg-[#020911] 
         rounded-[1vw] flex flex-col items-center relative shadow-lg overflow-hidden;
}

.card-title {
  @apply text-start lg:text-[2.5rem] md:text-[2rem] font-customFont font-semibold mt-3;
}

.card-subtitle {
  @apply text-center w-[80%] text-lg !font-thin;
}

.card-wrapper img {
  @apply h-full w-full object-cover rounded-[1vw];
}
</style>
