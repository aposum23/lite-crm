<script setup lang="ts">
import {SELECT_INPUT_PROPS_TYPE} from "./type.ts";
import {ref, watch} from 'vue';

defineProps<SELECT_INPUT_PROPS_TYPE>();
const emit = defineEmits<{
  'value:change': [number]
}>();

const selectedValue = ref<number>(0);

watch(
    () => selectedValue.value,
    (newValue) => emit("value:change", newValue)
);
</script>

<template>
  <div class="custom-select">
    <select v-model="selectedValue">
      <template v-for="option in options" :key="option.key">
        <option :value="option.key">{{option.value}}</option>
      </template>
    </select>
  </div>
</template>

<style scoped>
.custom-select {
  min-width: 350px;
}

select {
  appearance: menulist-button;
  /* safari */
  -webkit-appearance: menulist-button;
  /* other styles for aesthetics */
  width: 100%;
  font-size: 1.15rem;
  padding: 0.675em 6em 0.675em 1em;
  background-color: #fff;
  border: 1px solid #caced1;
  border-radius: 0.25rem;
  color: #000;
  cursor: pointer;
}
</style>
