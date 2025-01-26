<template>
  <div class="flex flex-col min-h-screen items-center justify-center">
    <div class="homeBox flex justify-center rounded-t-lg">
      <p class="text-6xl font-serif">Welcome to Magic the Gathering wiki</p>
    </div>
    <div
      class="homeBox grid grid-cols-3 justify-items-center rounded-b-lg gap-12"
    >
      <RouterLink
        class="flex items-center gap-3 text-4xl text-black hover:text-orange-600 slide-in"
        v-for="(link, i) in links"
        :style="{ '--order': i }"
        :key="link.path"
        :to="link.path"
      >
        <component :is="link.icon" class="size-20" />
        {{ link.name }}
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import infoIcon from "../components/iconics/infoIcon.vue";
import cardIcon from "../components/iconics/cardIcon.vue";

const links = [
  {
    name: "CARDS",
    path: "/cards",
    icon: cardIcon,
  },
  {
    name: "INFO",
    path: "/info",
    icon: infoIcon,
  },
  {
    name: "CARDS",
    path: "/cards",
    icon: cardIcon,
  },
  {
    name: "INFO",
    path: "/info",
    icon: infoIcon,
  },
  {
    name: "CARDS",
    path: "/cards",
    icon: cardIcon,
  },
  {
    name: "INFO",
    path: "/info",
    icon: infoIcon,
  },
];
</script>
