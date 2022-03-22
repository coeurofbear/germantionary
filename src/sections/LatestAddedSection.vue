<template>
  <div class="latest-added-words">
    <h3>Latest added words: {{ words.length }}</h3>
    <br />
    <ul class="list">
      <Item
        v-for="(word, index) in words"
        :word="word"
        :key="index"
        date
        :wordId="word.wordId"
        @deleted="getData()"
      />
    </ul>
  </div>
</template>

<script>
import Item from '@/components/Item.vue'
import { collection } from '@/main.js'

export default {
  name: 'LatestAddedSection',

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
      collection.orderBy('date', 'desc').onSnapshot(querySnapshot => {
        this.words = querySnapshot.docs.map(doc => {
          return {
            ...doc.data(),
            wordId: doc.id
          }
        })
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
.latest-added-words {
  margin-top: 60px;
}
</style>
