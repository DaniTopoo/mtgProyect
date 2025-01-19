<template>
  <p class="text-white">info</p>
  <div class="debug-box">{{ magicData }}</div>
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
