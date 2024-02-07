<script setup lang="ts">
import {SELECT_INPUT_PROPS_TYPE} from "./type.ts";

defineProps<SELECT_INPUT_PROPS_TYPE>()
</script>

<template>
  <select>
    <template v-for="option in options" :key="option.key">
      <option :value="option.key">{{option.value}}</option>
    </template>
  </select>
</template>

<style scoped>

</style>
