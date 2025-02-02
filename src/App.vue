<template>
  <div class="h-screen w-full">
    <HomeHeader class="h-16 w-full fixed top-0 z-10 shadow-md" />
    <div
      class="absolute top-16 left-0 w-full h-[calc(100vh-4rem)] overflow-auto scrollbar-custom"
    >
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import HomeHeader from "./components/homeHeader.vue";
</script>
