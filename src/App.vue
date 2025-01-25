<template>
  <div
    class="flex flex-col gap-3 h-full min-h-screen w-full bg-gradient-to-r from-gray-900 to-gray-500 relative"
    :class="{ 'pr-5': showScrollbar }"
  >
    <HomeHeader />
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import HomeHeader from "./components/homeHeader.vue";
import { ref, onMounted } from "vue";

// Estado para detectar la aparición de la barra de desplazamiento
const showScrollbar = ref(false);

// Detecta si hay barra de desplazamiento
const checkScrollbar = () => {
  showScrollbar.value =
    document.documentElement.scrollHeight >
    document.documentElement.clientHeight;
};

onMounted(() => {
  checkScrollbar();
  window.addEventListener("resize", checkScrollbar); // Vuelve a comprobar cuando la ventana cambie de tamaño
});
</script>
