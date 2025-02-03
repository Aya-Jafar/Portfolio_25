<script setup>
import { ref } from "vue";
import VCodeBlock from "@wdns/vue-code-block";

const selectedTab = ref("css");

const props = defineProps({
  code: {
    type: Object,
  },
});
</script>

<template>
  <div class="bg-[#000c1d]">
    <div
      class="border-b-[0.1px] p-5 flex gap-10 border-[rgba(255,255,255,0.3)]"
    >
      <div class="flex gap-2 items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Official_CSS_Logo.svg"
          alt=""
          class="w-7 h-7"
        />

        <button
          :class="{
            'text-[#00A3FB]': selectedTab === 'css',
            'text-white': selectedTab !== 'css',
          }"
          @click="selectedTab = 'css'"
        >
          Pure CSS
        </button>
      </div>

      <div class="flex gap-2 items-center">
        <img
          src="https://images.seeklogo.com/logo-png/35/3/tailwind-css-logo-png_seeklogo-354675.png?v=1957907763835204384"
          alt=""
          class="w-7 h-7"
        />

        <button
          :class="{
            'text-[#00A3FB]': selectedTab === 'tailwind',
            'text-white': selectedTab !== 'tailwind',
          }"
          @click="selectedTab = 'tailwind'"
        >
          Tailwind CSS
        </button>
      </div>
    </div>

    <VCodeBlock
      :code="selectedTab === 'css' ? props.code.css : props.code.tailwind"
      highlightjs
      lang="html"
      theme="night-owl"
      copy-button
    />
  </div>
</template>

<style>
.v-code-block--code pre code[data-v-51ec5829] {
  width: 100%;
  background-color: #000c1d;
}

.hljs-keyword {
  color: #aa27ff !important;
  font-style: italic;
  font-weight: bold;
}

.hljs-title {
  color: #00d5c3 !important;
  font-style: italic;
  font-weight: bold;
}

.hljs-variable {
  color: #00d0ff !important;
  font-weight: bold;
}

.hljs-name {
  color: #de2b8d !important;
  font-weight: bold;
}
.hljs-tag {
  color: #7a1055 !important;
  font-weight: bold;
}
.hljs-attr {
  color: #00a3fb !important;
}
.hljs-string {
  color: #ffb862 !important;
  font-weight: bold;
}
.hljs-selector-class{
  color: #00d5c3 !important;
  font-weight: bold;
}
.hljs-attribute{
  color: #ffffff !important;

}
.hljs-number{
    color:#FF5555 !important;
}
</style>
