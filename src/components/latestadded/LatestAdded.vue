<template>
  <div>
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
    List
  },
  data() {
    return {
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
