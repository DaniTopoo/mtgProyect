<template>
  <div v-if="magicData" class="gap-3 grid grid-cols-6">
    <div
      class="flex flex-col items-center"
      v-for="card in magicData.cards"
      :key="card.id"
    >
      <img class="w-60" :src="card.imageUrl" alt="" />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import axios from "axios";

const magicData = ref(null);
const cardsUrl = "https://api.magicthegathering.io/v1/cards";

axios.get(cardsUrl).then((response) => {
  const uniqueCards = response.data.cards.filter(
    (card, index, self) => index === self.findIndex((c) => c.name === card.name)
  );
  magicData.value = { cards: uniqueCards };
});
</script>
