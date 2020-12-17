<template>
  <div>
    <h3>Search results for '{{ searchedWord }}'</h3>
    <ul class="list">
      <List search v-for="(word, index) in words" :word="word" :key="index" />
    </ul>
  </div>
</template>

<script>
import List from "./../general/List.vue";

export default {
  name: "SearchResults",
  components: {
    List
  },
  data() {
    return {
      searchedWord: "Brauchen",
      words: [
        {
          word: "Brauchen",
          meaning: "To need"
        },
        {
          word: "Das Hause",
          meaning: "House",
          gender: "Neutral"
        },
        {
          word: "Schön",
          meaning: "Beautiful"
        }
      ]
    };
  }
};
</script>
<style scoped lang="scss">
h3 {
  margin-bottom: 35px;
}
</style>
