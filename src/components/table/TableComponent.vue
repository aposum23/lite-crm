<script setup lang="ts">
import {useTableStore} from "../../stores/TableStore.ts";
import {TABLE_STRUCTURES} from "../../constants/tablesStructures.ts";


const tableStore = useTableStore();
</script>

<template>
  <div class="container">
    <table class="table">
      <thead>
        <template v-for="column in TABLE_STRUCTURES[tableStore.tableType]">
            <td>{{column.label}}</td>
        </template>
      </thead>
    </table>
    <div class="table-scroll">
      <table>
          <tbody>
            <template v-for="row in tableStore.data">
              <tr>
                <template v-for="column in TABLE_STRUCTURES[tableStore.tableType]">
                  <td>{{ row[column.responseId] }}</td>
                </template>
              </tr>
            </template>
          </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 1rem;
  height: calc(80% - 1rem);
}

.table {
  margin: 0 auto;
  border: 1px solid #7c7c7c;
  border-radius: 6px;
  border-spacing: 0px;
  border-collapse: collapse;
  font-weight: bolder;
  width: 90%;
  padding: 0;
}

.table-scroll {
  overflow: auto;
  width: 90%;
  height: 55%;
  margin: 0 auto;
}

.table-scroll table {
  width: 100%;
  border: 1px solid #7c7c7c;
  border-radius: 6px;
  border-spacing: 0px;
  border-collapse: collapse;
}

td {
  height: 2rem;
  border: 1px solid #7c7c7c;
}

::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}
::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}
</style>