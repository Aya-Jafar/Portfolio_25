<script setup lang="ts">
import { useRouter } from "vue-router";
import {
  getTitleFontSize,
  getSubTitleFontSize,
  truncateText,
} from "../utils/helpers";

const router = useRouter();

const props = defineProps({
  path: {
    required: true,
    type: String,
    default: "",
  },
  img: {
    required: true,
    type: String,
    default: "",
  },
  title: {
    required: true,
    type: String,
    default: "",
  },
  subtitle: {
    required: true,
    type: String,
    default: "",
  },
  extraStyle: {
    required: false,
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="card-wrapper" @click="router.push(props.path)">
    <div
      :class="`absolute -bottom-10 -left-10 w-[20vw] h-[20vh]   opacity-30 blur-3xl rounded-full pointer-events-none`"
    ></div>

    <img
      :src="props.img"
      alt=""
      loading="lazy"
      class="w-full h-[65%] object-cover rounded-tl-[1vw] rounded-tr-[1vw] border-[0.01px] border-[rgba(255,255,255,0.3)] hover:border-blue-500"
    />

    <h1
      class="card-title"
      :style="{ fontSize: getTitleFontSize(props.title) }"
      :title="props.title"
    >
      {{ truncateText(props.title) }}
    </h1>
    <p
      class="card-subtitle"
      :style="{ fontSize: getSubTitleFontSize(props.subtitle) }"
      :title="props.subtitle"
    >
      {{ truncateText(props.subtitle, 50) }}
    </p>
  </div>
</template>

<style scoped>
@media (min-width: 0px) and (max-width: 700px) {
  .explorer {
  }

  .card-wrapper {
    width: 75% !important;
  }
  .card-title {
    font-size: 2rem;
  }
}

.card-wrapper {
  @apply border-[rgba(255,255,255,0.3)] border-[0.01px]  hover:border-blue-500  cursor-pointer  w-full lg:w-[28vw] lg:mt-0 bg-[#020911] md:h-[40vh] rounded-[1vw] flex flex-col items-center relative;
}
.card-title {
  @apply text-start lg:text-[2rem] md:text-[1.7rem]  font-customFont font-semibold mt-3;
}
.card-subtitle {
  @apply text-center w-[80%] !font-thin;
}
</style>
