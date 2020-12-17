<template>
  <div>
    <h3>Search results for '{{ searchedWord }}'</h3>
    <ul class="list">
      <List />
      <List />
      <List />
    </ul>
  </div>
</template>

<script>
import List from "./-List.vue";

export default {
  name: "SearchResults",
  components: {
    List
  },
  data() {
    return {
      searchedWord: "Brauchen"
    };
  }
};
</script>
<style scoped lang="scss">
h3 {
  margin-bottom: 35px;
}
</style>
