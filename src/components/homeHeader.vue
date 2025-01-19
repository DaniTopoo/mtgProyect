<template>
  <div class="flex border items-center">
    <RouterLink to="/cards">
      <img class="h-30 w-80" src="/src/images/magicLogo.png" alt="magicLogo" />
    </RouterLink>
    <RouterLink to="/">HOME</RouterLink>
    <p>aqui van mas cosas</p>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>
