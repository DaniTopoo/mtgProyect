<template>
  <div v-if="magicData" class="debug-box">{{ magicData }}</div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { data } from "autoprefixer";

const magicData = ref(null);
const cardsUrl = "https://api.magicthegathering.io/v1/sets";

axios.get(cardsUrl).then((response) => {
  magicData.value = response.data;
});
</script>
