<template>
  <div class="search-section">
    <div class="container">
      <SearchBar @send-input="searchedWord = $event" />
      <SearchResults :searchedWord="searchedWord" />
    </div>
  </div>
</template>

<script>
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
  },
  watch: {
    '$route.path'() {
      this.searchedWord = ''

    }
  },
}
</script>

<style scoped lang="scss">
.search-section {
  background: #f6f6f6;
  padding: 3rem 0;
  margin-bottom: 50px;
}
</style>
