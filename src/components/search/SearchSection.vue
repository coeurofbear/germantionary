<template>
  <div class="search-section">
    <div class="container">
      <SearchBar />
      <SearchResults v-if="false" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from '@/components/search/-SearchBar.vue'
import SearchResults from '@/components/search/-SearchResults.vue'

export default {
  name: 'SearchSection',
  components: {
    SearchResults,
    SearchBar
  }
}
</script>

<style scoped lang="scss">
@import './src/assets/scss/variables';
.search-section {
  background: #f6f6f6;
  padding: 3rem 0;
  margin-bottom: 50px;
}
</style>
