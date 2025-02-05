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
    class="bg-[url('../src/assets/bg-2.png')] min-h-screen w-screen text-white bg-cover bg-center pb-5"
  >
    <Nav />

    <div
      class="container flex items-center justify-between border-[0.1px] border-[rgba(255,255,255,0.3)] rounded-xl !mx-20 px-20 h-[90vh] overflow-y-scroll mb-10"
    >
      <div class="flex-col w-[40%]">
        <div v-for="(slotName, index) in filteredSlotNames" :key="index">
          <slot :name="slotName">
            <!-- Fallback content if no slot is passed -->
            {{ slotName }}
          </slot>
        </div>
      </div>

      <div class="w-[50%]">
        <!-- Render the customizable component slot -->
        <center>
          <slot name="component-to-customize"></slot>
        </center>

        <!-- Dynamic Images based on the project  -->
        <slot name="code"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 0px) and (max-width: 780px) {
  :deep(.container) {
    display: flex;
    flex-wrap: wrap !important;
    padding-top: 3rem;
    align-items: center;
    width: 100%;
  }

  :deep(.container > div) {
    width: 100% !important; /* Make child divs take full width */
  }
}
</style>
