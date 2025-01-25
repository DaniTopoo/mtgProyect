<template>
  <div
    class="flex flex-col gap-3 h-full min-h-screen w-full bg-gradient-to-r from-gray-900 to-gray-500 relative"
  >
    <HomeHeader class="absolute" />
    <RouterView></RouterView>
  </div>
</template>
<script setup>
import { RouterView } from "vue-router";
import HomeHeader from "./components/homeHeader.vue";
</script>
