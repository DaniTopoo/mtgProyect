<template>
  <div class="flex flex-col gap-3 relative h-full w-full">
    <HomeHeader />
    <RouterView></RouterView>
  </div>
</template>
<script setup>
import { RouterView } from "vue-router";
import HomeHeader from "./components/homeHeader.vue";
</script>
