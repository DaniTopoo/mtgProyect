<template>
  <div class="mt-12 px-4">
    <div v-if="cardsData" class="gap-3 grid grid-cols-6 mt-10">
      <div
        class="flex flex-col items-center"
        v-for="card in cardsData.cards"
        :key="card.id"
      >
        <p class="text-white">{{ card.name.toUpperCase() }}</p>
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
