<template>
  <div class="latest-added-words">
    <h3>Latest added words</h3>
    <ul class="list">
      <List v-for="(word, index) in words" :word="word" :key="index" />
    </ul>
  </div>
</template>

<script>
import List from "@/components/general/List.vue";
import data from "@/data/data.js";

export default {
  name: "LatestAdded",
  components: {
    List,
  },

  data() {
    return {
      words: data.slice(Math.max(data.length - 5, 1)).reverse(),
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
