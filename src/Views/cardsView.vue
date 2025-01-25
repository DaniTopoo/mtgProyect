<template>
  <div
    class="overflow-y-auto h-screen mt-12 px-4 scrollbar-custom"
    :style="{ maxHeight: 'calc(100vh - 4rem)' }"
  >
    <div v-if="cardsData" class="gap-3 grid grid-cols-6 mt-10">
      <div
        class="flex flex-col items-center"
        v-for="card in cardsData.cards"
        :key="card.id"
      >
        <img class="w-60" :src="card.imageUrl" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const cardsData = ref(null);
const cardsUrl = "https://api.magicthegathering.io/v1/cards";

axios.get(cardsUrl).then((response) => {
  const uniqueCards = response.data.cards.filter(
    (card, index, self) => index === self.findIndex((c) => c.name === card.name)
  );
  cardsData.value = { cards: uniqueCards };
});
</script>

<style scoped>
/* Personaliza el scrollbar */
.scrollbar-custom::-webkit-scrollbar {
  width: 10px;
}

.scrollbar-custom::-webkit-scrollbar-track {
  background: #333333;
}

.scrollbar-custom::-webkit-scrollbar-thumb {
  background: #ff7f50;
  border-radius: 10px;
  transition: background 0.3s ease;
}

.scrollbar-custom::-webkit-scrollbar-thumb:hover {
  background: #ff5722;
}
</style>
