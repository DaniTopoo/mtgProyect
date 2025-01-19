<template>
  <div class="flex gap-3 items-center justify-center bg-black h-16 w-full">
    <RouterLink to="/" class="">
      <img
        class="h-14 w-52 transition-transform duration-300 ease-in-out hover:scale-105"
        src="/src/images/magicLogo.png"
        alt="magicLogo"
      />
    </RouterLink>
    <RouterLink
      v-for="link in links"
      :key="link.path"
      :to="link.path"
      class="text-xl text-white hover:text-orange-600"
      >{{ link.name }}</RouterLink
    >
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
const links = [
  {
    name: "CARDS",
    path: "/cards",
  },
  {
    name: "INFO",
    path: "/info",
  },
];
</script>
