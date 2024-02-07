<script setup lang="ts">
import ButtonComponent from '@ui/Button/ButtonComponent.vue'
import SelectInput from "@ui/Select/SelectInput.vue";
import {useTableStore} from "../stores/TableStore.ts";

const optionsArr = [
  {key: 0, value: 'Не выбрано', selected: true},
  {key: 1, value: 'Сделка'},
  {key: 2, value: 'Контакт'},
  {key: 3, value: 'Компания'},
]
const tableStore = useTableStore();
const { updateTableType } = tableStore;

const updateSelectValue = (selectedValue) => {
  updateTableType(selectedValue);
}
</script>

<template>
  <div class="header">
    <SelectInput :options="optionsArr" @value:change="(value) => updateSelectValue(value)"/>
    <ButtonComponent label="Создать"/>
  </div>
</template>

<style scoped>
.header {
  display: grid;
  grid-template-columns: repeat(2, 20%);
  grid-column-gap: 60%;
  max-width: 85%;
  margin: 1rem auto;
  padding: .5rem;
  background-color: #e3e3e3;
  border-radius: 6px;
}
</style>