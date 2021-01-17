<template>
  <div class="search-results">
    <h3>Search results for '{{ searchedWord }}'</h3>
    <ul class="list">
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
import { db } from '@/main.js'

export default {
  name: 'SearchResults',
  components: {
    Item
  },
  data() {
    return {
      words: []
    }
  },
  methods: {
    getData() {
      db.collection('words')
        .get()
        .then((querySnapshot) => {
          const words = querySnapshot.docs.map((doc) => doc.data())
          this.words = words
        })
    }
  },
  beforeMount() {
    this.getData()
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
