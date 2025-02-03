<script lang="ts" setup>
import CustomizerTemplate from "../../components/CustomizerTemplate.vue";
import { ref, computed } from "vue";
import SliderCustomizer from "../../components/SliderCustomizer.vue";
import CustomizerInput from "../../components/CustomizerInput.vue";
import CodeCard from "../../components/CodeCard.vue";
import SelectCustomizer from "../../components/SelectCustomizer.vue";

/**
 * Reactive reference for button width.
 * @constant {Ref<number>} widthValue - Stores the width of the button.
 */
const widthValue = ref(200);

/**
 * Reactive reference for button height.
 * @constant {Ref<string>} heightValue - Stores the height of the button.
 */
const heightValue = ref("");

/**
 * Reactive reference for button border-radius.
 * @constant {Ref<string>} borderRadiusValue - Stores the border-radius of the button.
 */
const borderRadiusValue = ref("");

/**
 * Reactive reference for selected button color.
 * @constant {Ref<string>} selectedColor - Stores the selected button color.
 */
const selectedBGColor = ref("#1E96F3"); // Default color

/**
 * Reactive reference for selected button font color.
 * @constant {Ref<string>} selectedFontColor - Stores the selected button font color.
 */
const selectedFontColor = ref("#FFFFFF"); // Default color

/**
 * Reactive reference for selected button border color.
 * @constant {Ref<string>} selectedBorderColor - Stores the selected button border color.
 */
const selectedBorderColor = ref("#FFFFFF"); // Default color

/**
 * Reactive reference for text inside the button.
 * @constant {Ref<string>} buttonText - Stores the text inside the button
 */
const buttonText = ref("Custom Text");

/**
 * Reactive reference for button font size.
 * @constant {Ref<string>} fontSizeValue - Stores the font size of the button.
 */
const fontSizeValue = ref("16px");

/**
 * Reactive reference for button font weight.
 * @constant {Ref<string>} fontWeightValue - Stores the font weight of the button.
 */
const fontWeightValue = ref("400");

/**
 * Reactive reference for button padding.
 * @constant {Ref<string>} paddingValue - Stores the padding of the button.
 */
const paddingValue = ref("10px 20px");

/**
 * Reactive reference for button shadow.
 * @constant {Ref<string>} boxShadowValue - Stores the box-shadow of the button.
 */
const boxShadowValue = ref("none");

const selectedWidthMeasure = ref("");

/**
 * Computed property for dynamic button styles.
 * @constant {ComputedRef<Record<string, string>>} buttonStyles - Stores the computed styles for the button.
 */
const buttonStyles = computed(() => ({
  width: `${Math.min(Math.max(widthValue.value || 100, 50), 500)}${
    selectedWidthMeasure.value || "px"
  }`,

  height: `${Math.min(Math.max(parseInt(heightValue.value) || 40, 20), 200)}px`,
  borderRadius: `${Math.min(
    Math.max(parseInt(borderRadiusValue.value) || 5, 0),
    50
  )}px`,
  backgroundColor: selectedBGColor.value,
  color: selectedFontColor.value,
  borderColor: selectedBorderColor.value,
  fontSize: fontSizeValue.value,
  fontWeight: fontWeightValue.value,
  padding: paddingValue.value,
  boxShadow: boxShadowValue.value,
}));



const sliderDimensions = computed(() => {
  // Set default values for min, max, and step
  let min = 50;
  let max = 500;
  let step = 10;

  // Adjust based on the selected measurement unit
  if (selectedWidthMeasure.value === 'vw') {
    min = 1; // Minimum value for vw might be 1
    max = 100; // Max for vw can be 100%
    step = 1;  // Step size for vw can be smaller
  } else if (selectedWidthMeasure.value === '%') {
    min = 1;  // Minimum value for percentage can be 1%
    max = 40; // Max for percentage is 100%
    step = 1;  // Step size for percentage can be 1%
  } else if (selectedWidthMeasure.value === 'rem') {
    min = 1;  // Minimum value for rem can be 1rem
    max = 20; // Max for rem can be 20rem
    step = 0.5; // Step size for rem can be 0.5rem
  } else {
    min = 50; // Default min for px
    max = 500; // Default max for px
    step = 10; // Default step for px
  }

  return { min, max, step };
});



/**
 * Computed property for dynamically generated CSS and Tailwind classes.
 * @constant {ComputedRef<Record<string, string>>} code - Stores dynamically generated CSS and Tailwind code for the button.
 */
const code = computed(() => ({
  css: `<div class="btn">
    <button type="button">
      ${buttonText.value}
    </button>
</div>
  
<style>
  .btn{
    width: ${buttonStyles.value.width}; 
    height: ${buttonStyles.value.height};
    border-radius: ${buttonStyles.value.borderRadius};
    background-color: ${buttonStyles.value.backgroundColor};
    color: ${buttonStyles.value.color};
    border-color: ${buttonStyles.value.borderColor};
    font-size: ${buttonStyles.value.fontSize};
    font-weight: ${buttonStyles.value.fontWeight};
    padding: ${buttonStyles.value.padding};
    box-shadow: ${buttonStyles.value.boxShadow};
  }
</style>
  `,
  tailwind: `<div>
  <button
    type="button"
    class="w-[${parseInt(buttonStyles.value.width)}px] h-[${parseInt(
    buttonStyles.value.height
  )}px] bg-[${buttonStyles.value.backgroundColor}] text-[${
    buttonStyles.value.color
  }] text-[${buttonStyles.value.fontSize}] font-[${
    buttonStyles.value.fontWeight
  }] px-[${parseInt(
    buttonStyles.value.padding.split(" ")[0]
  )}px] py-[${parseInt(buttonStyles.value.padding.split(" ")[1])}px] shadow-[${
    buttonStyles.value.boxShadow
  }]"
  >
    ${buttonText.value}
  </button>
</div>`,
}));
</script>

<template>
  <CustomizerTemplate>
    <!-- Customize options -->
    <template v-slot:option-0>
      <CustomizerInput
        @update="(newValue: string) => (buttonText = newValue)"
        label="Text"
        placeholder="Enter text"
      />
    </template>
    <template v-slot:option-1>
      <div class="flex">
       <SliderCustomizer
    label="Width"
    :min="sliderDimensions.min"
    :max="sliderDimensions.max"
    :step="sliderDimensions.step"
    @update="(newValue: number) => (widthValue = newValue)"
  />
        <SelectCustomizer
          placeholder="messurement"
          :options="[
            { label: 'vw', value: 'vw' },
            { label: 'px', value: 'px' },
            { label: '%', value: '%' },
            { label: 'rem', value: 'rem' },
          ]"
          @update="(newValue) => (selectedWidthMeasure = newValue)"
        />
      </div>
    </template>

    <template v-slot:option-2>
      <SliderCustomizer
        label="Height"
        :min="30"
        :max="500"
        :step="10"
        @update="(newValue: string) => (heightValue = newValue)"
      />
    </template>
    <template v-slot:option-3>
      <SliderCustomizer
        label="Border Radius"
        :min="0"
        :max="50"
        :step="5"
        @update="(newValue) => (borderRadiusValue = newValue)"
      />
    </template>

    <template v-slot:option-4>
      <div class="flex gap-5">
        <div>
          <!-- BG Color Picker -->
          <label class="mb-2 text-sm font-medium text-gray-200 w-[115px]"
            >BG color</label
          >

          <div class="relative">
            <input
              type="color"
              id="color-picker"
              v-model="selectedBGColor"
              class="absolute opacity-0 cursor-pointer w-8 h-8 rounded-full"
            />
            <div
              :style="{ backgroundColor: selectedBGColor }"
              class="w-8 h-8 rounded-full border-2 border-gray-300"
            ></div>
          </div>
        </div>

        <div>
          <!-- Font Color Picker -->
          <label class="mb-2 text-sm font-medium text-gray-200 w-[115px]"
            >Font color</label
          >

          <div class="relative">
            <input
              type="color"
              id="color-picker"
              v-model="selectedFontColor"
              class="absolute opacity-0 cursor-pointer w-8 h-8 rounded-full"
            />
            <div
              :style="{ backgroundColor: selectedFontColor }"
              class="w-8 h-8 rounded-full border-2 border-gray-300 mb-5"
            ></div>
          </div>
        </div>
      </div>
    </template>

    <template v-slot:option-5>
      <SliderCustomizer
        label="Font Size"
        :min="12"
        :max="32"
        :step="2"
        @update="(value) => (fontSizeValue = `${value}px`)"
      />
    </template>

    <template v-slot:option-6>
      <SliderCustomizer
        label="Padding"
        :min="5"
        :max="30"
        :step="5"
        @update="(value) => (paddingValue = `${value}px ${value * 2}px`)"
      />
    </template>

    <template v-slot:option-7>
      <CustomizerInput
        @update="(value) => (boxShadowValue = value)"
        label="Box Shadow"
        placeholder="e.g., 2px 2px 5px rgba(0, 0, 0, 0.2)"
      />
    </template>

    <template v-slot:component-to-customize>
      <button type="button" :style="buttonStyles">
        {{ buttonText }}
      </button>
    </template>

    <template v-slot:code>
      <CodeCard :code="code" class="mt-10" />
    </template>
  </CustomizerTemplate>
</template>
