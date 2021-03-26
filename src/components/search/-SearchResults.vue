<template>
  <div class="search-results">
    <h3>Search results for '{{ searchedWord }}'</h3>
    <p v-if="!words">No results for '{{ searchedWord }}'</p>
    <ul class="list" v-else>
      <Item
        date
        search
        v-for="(word, index) in words"
        :word="word"
        :key="index"
      />
    </ul>
  </div>
</template>

<script>
import Item from '@/components/general/Item.vue'
import { collection } from '@/main.js'

export default {
  name: 'SearchResults',
  components: {
    Item
  },
  data() {
    return {
      wordsList: [],
      words: null
    }
  },
  props: {
    searchedWord: {
      type: String,
      default: ''
    }
  },
  watch: {
    searchedWord() {
      this.filterData(this.searchedWord)
    }
  },
  methods: {
    filterData(searchedWord) {
      collection.get().then(colection => {
        this.wordsList = colection.docs.map(doc => doc.data())
      })
      this.words = this.wordsList.filter(word => word.word === searchedWord)
    }
  }
}
</script>
<style scoped lang="scss">
h3 {
  margin-bottom: 35px;
}

.search-results {
  margin-top: 40px;
}
</style>
