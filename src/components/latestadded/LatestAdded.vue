<template>
  <div class="latest-added-words">
    <h3>Latest added words</h3>
    <ul class="list">
      <List v-for="(word, index) in words" :word="word" :key="index" />
    </ul>
  </div>
</template>

<script>
import List from "./../general/List.vue";

export default {
  name: "LatestAdded",
  components: {
    List,
  },
  data() {
    return {
      words: [
        {
          word: "Brauchen",
          meaning: "To need",
          type: "Verb",
        },
        {
          word: "Das Hause",
          meaning: "House",
          gender: "Neutral",
          type: "Noun",
        },
        {
          word: "Schön",
          meaning: "Beautiful",
          type: "Adjetive",
        },
        {
          word: "Der Hund",
          meaning: "Dog",
          type: "Noun",
          gender: "Masculine",
        },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
h3 {
  margin-bottom: 35px;
}
.latest-added-words {
  margin-top: 60px;
}
</style>
