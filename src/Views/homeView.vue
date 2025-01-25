<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="bg-white shadow-lg rounded-lg p-6 w-full max-w-6xl">
      <div
        class="border border-black p-6"
        v-for="box in boxesInfo"
        :key="box.title"
      >
        <p
          v-if="box.title"
          class="border border-black p-2 bg-slate-300 font-bold"
        >
          {{ box.title }}
        </p>
        <p class="p-3">{{ box.content }}</p>
        <div class="p-3 flex gap-3 border">
          <RouterLink
            v-for="boxLinks in box.links"
            v-if="box.links"
            :key="boxLinks.path"
            :to="boxLinks.path"
            class="hover:underline hover:text-black text-xl text-slate-600 flex items-center gap-1"
          >
            <component class="size-7" :is="boxLinks.icon" />
            {{ boxLinks.name }}
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import infoIcon from "../components/iconics/infoIcon.vue";
import cardIcon from "../components/iconics/cardIcon.vue";
const boxesInfo = [
  {
    title: "What are you looking for?",
    content: "Click on links to explore the page",
    links: [
      {
        name: "Cards",
        path: "/cards",
        icon: cardIcon,
      },
      {
        name: "Info",
        path: "/info",
        icon: infoIcon,
      },
    ],
  },
];

// const magicData = ref(null);
// const cardsUrl = "https://api.magicthegathering.io/v1/cards";

// axios.get(cardsUrl).then((response) => {
//   const uniqueCards = response.data.cards.filter(
//     (card, index, self) => index === self.findIndex((c) => c.name === card.name)
//   );
//   magicData.value = { cards: uniqueCards };
// });
</script>
