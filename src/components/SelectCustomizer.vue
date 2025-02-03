<script setup lang="ts">
import { defineEmits, ref } from "vue";

const props = defineProps({
  label: {
    type: String,
    required: false,
  },
  placeholder: {
    type: String,
    required: true,
  },
  options: {
    type: Array as () => { label: string; value: string }[],
    required: true,
  },
});

const emit = defineEmits(["update"]);
const inputValue = ref("");

const updateValue = () => {
  emit("update", inputValue.value);
};
</script>

<template>
  <div class="flex items-center gap-5">
    <label
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >{{ props.label }}</label
    >
    <select
      v-model="inputValue"
      @change="updateValue"
      class="mb-5 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option value="" disabled selected>{{ props.placeholder }}...</option>
      <option
        v-for="option in props.options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>
