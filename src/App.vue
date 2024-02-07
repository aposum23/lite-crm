<script setup lang="ts">
import HeaderLayout from "@/layout/HeaderLayout.vue";
import ContentLayout from "./layout/ContentLayout.vue";
import {onMounted} from "vue";
import {auth} from "./api/auth/auth.ts";

onMounted(() => {
  auth();
})
</script>

<template>
  <div class="wrapper">
    <HeaderLayout/>
    <ContentLayout/>
  </div>
</template>

<style scoped>
.wrapper{
  align-items: center;
}
</style>
