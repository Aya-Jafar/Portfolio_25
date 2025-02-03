<script setup lang="ts">
import { defineEmits, ref } from "vue";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
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
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-[120px]"
      >{{ props.label }}</label
    >
    <input
      v-model="inputValue"
      @input="updateValue"
      :type="props.type || 'text'"
      class="mb-5 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      :placeholder="`${props.placeholder}...`"
      required
    />
  </div>
</template>
