<script setup lang="ts">
import TableComponent from "@/components/table/TableComponent.vue";
</script>

<template>
  <div class="content">
    <TableComponent/>
  </div>
</template>

<style scoped>
.content {
  display: grid;
  width: 80%;
  min-height: 80vh;
  max-height: 80vh;
  margin: 1rem auto;
  border-radius: 6px;
  background-color: #e3e3e3;
}
</style>