<template>
  <div class="flex gap-1 items-center justify-center bg-black">
    <RouterLink to="/">
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
      class="flex items-center gap-2 text-xl text-white hover:text-orange-600"
    >
      <component :is="link.icon" class="size-6" />{{ link.name }}
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import infoIcon from "../components/iconics/infoIcon.vue";
import cardIcon from "../components/iconics/cardIcon.vue";
import setsIcon from "./iconics/setsIcon.vue";

const links = [
  {
    name: "CARDS",
    path: "/cards",
    icon: cardIcon,
  },
  {
    name: "SETS",
    path: "/sets",
    icon: setsIcon,
  },
  {
    name: "INFO",
    path: "/info",
    icon: infoIcon,
  },
];
</script>
