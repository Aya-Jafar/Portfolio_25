<script lang="ts" setup>
import Nav from "./Nav.vue";
import { computed, useSlots, Slots } from "vue";

/**
 * Access the slots provided by the parent component.
 * @constant {Slots} slots - Contains all named slots passed to the component.
 */
const slots: Slots = useSlots(); // Explicitly type slots

/**
 * Computes an array of slot names, excluding the default slot.
 * @constant {ComputedRef<string[]>} slotNames - List of available named slots.
 */
const slotNames = computed<string[]>(() =>
  Object.keys(slots).filter((name) => name !== "default")
);

const filteredSlotNames = computed(() => {
  return slotNames.value.filter((slot) => slot.startsWith("option"));
});
</script>
<template>
  <div
    class="bg-[url('/assets/detail-bg.png')] min-h-screen w-screen text-white bg-cover bg-center pb-5"
  >
    <Nav />

    <div
      class="container flex flex-col lg:flex-row items-center lg:items-start justify-between border-[0.1px] border-[rgba(255,255,255,0.3)] rounded-xl !mx-5 sm:!mx-10 lg:!mx-20 px-5 sm:px-10 lg:px-20 py-10 h-auto lg:h-[87vh] overflow-y-auto"
    >
      <!-- Options Section -->
      <div class="flex-col w-full lg:w-[40%] space-y-5">
        <div v-for="(slotName, index) in filteredSlotNames" :key="index">
          <slot :name="slotName"></slot>
        </div>
      </div>

      <!-- Project Image Section -->
      <div class="w-full lg:w-[50%] mt-10 lg:mt-0">
        <slot name="project"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 1024px) {
  .container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}

@media (max-width: 780px) {
  :deep(.container) {
    padding-top: 3rem;
    align-items: center;
    width: 100%;
  }

  :deep(.container > div) {
    width: 100% !important; /* Make child divs take full width */
  }
}
</style>
