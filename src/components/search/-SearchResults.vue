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
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      collection.get().then(colection => {
        this.wordsList = colection.docs.map(doc => doc.data())
      })
    },
    filterData(searchedWord) {
      this.words = this.wordsList.filter(word => {
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
