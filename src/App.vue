<script setup lang="ts">
import ButtonComponent from '@ui/Button/ButtonComponent.vue'
import SelectInput from "@ui/Select/SelectInput.vue";

const optionsArr = [
  {key: 1, value: 'value1'},
  {key: 2, value: 'value2'},
  {key: 3, value: 'value3'},
  {key: 4, value: 'value4'},
]
</script>

<template>
  <ButtonComponent label="Создать"/>
  <SelectInput :options="optionsArr"/>
</template>

<style scoped>
</style>
