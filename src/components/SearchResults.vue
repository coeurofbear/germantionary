<template>
  <div class="search-results">
    <h3>Search results for '{{ searchedWord }}'</h3>
    <p v-if="!filteredWords">No results for '{{ searchedWord }}'</p>
    <ul class="list" v-else>
      <Item
        date
        search
        v-for="(word, index) in filteredWords"
        :word="word"
        :key="index"
      />
    </ul>
  </div>
</template>

<script>
import Item from '@/components/Item.vue'
import { collection } from '@/main.js'

export default {
  name: 'SearchResults',
  components: {
    Item
  },
  data() {
    return {
      words: [],
      filteredWords: null
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
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      collection.onSnapshot(colection => {
        this.words = colection.docs.map(doc => {
          return {
            ...doc.data(),
            wordId: doc.id
          }
        })
      })
    },
    filterData(searchedWord) {
      this.filteredWords = this.words.filter(word => {
        if (searchedWord.length > 0) {
          return (
            word.word.toUpperCase().includes(searchedWord.toUpperCase()) ||
            word.meaning.toUpperCase().includes(searchedWord.toUpperCase())
          )
        }
      })
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
