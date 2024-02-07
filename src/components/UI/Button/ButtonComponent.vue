<script setup lang="ts">
import {BUTTON_PROPS_TYPE} from "./type.ts";

defineProps<BUTTON_PROPS_TYPE>();

</script>

<template>
  <button class="button">{{label}}</button>
</template>

<style scoped>
.button {
  border-radius: 3px;
  color: #f9f9f9;
  border: .001rem solid #4165b4;
  background: #5586f1;
  height: 3rem;
  outline: none;
}

.button:active {
  background: #f9f9f9;
  border: .001rem solid #7c7c7c;
  color: #1a1a1a;
}
</style>
