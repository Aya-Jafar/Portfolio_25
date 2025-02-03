<script setup lang="ts">
import { defineEmits, ref, watch } from "vue";

/**
 * Define props for the slider component.
 * @property {string} label - The label text to display beside the slider.
 * @property {number} min - The minimum value of the slider. Default is 0.
 * @property {number} max - The maximum value of the slider. Default is 100.
 * @property {number} step - The step value for the slider increments. Default is 1.
 */
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  min: {
    type: Number,
    required: false,
    default: 0,
  },
  max: {
    type: Number,
    required: false,
    default: 100,
  },
  step: {
    type: Number,
    required: false,
    default: 1,
  },
});

/**
 * Emit event to update the slider value.
 * @event update - Emitted when the slider value changes.
 */
const emit = defineEmits(["update"]);

/**
 * The reactive value bound to the slider.
 */
const inputValue = ref((props.min + props.max) / 2);

/**
 * Emit the updated slider value when the slider changes.
 */
const updateValue = () => {
  emit("update", inputValue.value);
};

/**
 * The percentage of the filled portion of the slider. This value is used to dynamically update the filled track.
 */
const percentage = ref("50%");

/**
 * @effect
 * Watch for changes to the inputValue and update the percentage of the filled portion of the slider.
 * @dependency inputValue
 */
watch(inputValue, () => {
  percentage.value = `${
    ((inputValue.value - props.min) / (props.max - props.min)) * 100
  }%`;
});
</script>

<template>
  <div class="flex items-center gap-5 w-full mb-5">
    <!-- Label -->
    <label class="text-sm font-medium text-gray-200 w-[120px]">
      {{ props.label }}
    </label>

    <!-- Slider Container -->
    <div class="relative w-full flex items-center">
      <!-- Track Background -->
      <div
        class="absolute top-1/2 left-0 w-full h-[16px] bg-gray-700 rounded-full transform -translate-y-1/2"
      ></div>

      <!-- Filled Track -->
      <div
        class="absolute top-1/2 left-0 h-[16px] bg-gradient-to-r from-[#00A3FB] to-[#19B4B9] rounded-full transform -translate-y-1/2"
        :style="{ width: percentage }"
      ></div>

      <!-- Slider Input -->
      <input
        v-model="inputValue"
        @input="updateValue"
        type="range"
        :min="props.min"
        :max="props.max"
        :step="props.step"
        class="w-full h-[16px] appearance-none cursor-pointer bg-transparent relative z-10"
      />

      <!-- Thumb Indicator -->
      <div
        class="absolute w-[17px] h-[17px] bg-white rounded-full shadow-md"
        :style="{
          left: `calc(${percentage} - 12px)`,
          top: '50%',
          transform: 'translateY(-50%)',
        }"
      ></div>
    </div>
  </div>
</template>

<style scoped>
input[type="range"]::-webkit-slider-thumb {
  appearance: none;
  width: 0;
  height: 0;
  background: transparent;
  border: none;
  cursor: pointer;
}

input[type="range"]::-moz-range-thumb {
  width: 0;
  height: 0;
  background: transparent;
  border: none;
  cursor: pointer;
}
</style>
