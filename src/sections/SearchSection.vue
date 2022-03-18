<template>
  <div class="search-section">
    <div class="container">
      <SearchBar v-model="searchedWord" />
      <SearchResults :searchedWord="searchedWord" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from '@/components/SearchBar.vue'
import SearchResults from '@/components/SearchResults.vue'

export default {
  name: 'SearchSection',
  components: {
    SearchResults,
    SearchBar
  },
  data() {
    return {
      searchedWord: ''
    }
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
