<template>
  <ul class="list" v-if="words.length">
    <Item
      v-for="(word, index) in words.slice(0, itemsToShow)"
      :word="word"
      :key="index"
      :date="date"
    />
  </ul>
</template>

<script>
import Item from '@/components/Item.vue'
import { collection } from '@/main.js'
// import words from '@/words/words.js'

export default {
  name: 'LatestAddedSection',

  props: {
    itemsToShow: {
      type: Number,
      default: 999999
    },
    date: {
      type: Boolean,
      default: false
    }
  },
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
  mounted() {
    this.getData()
    // this.words = words
  }
}
</script>

<style scoped lang="scss">
.latest-added-words {
  margin-top: 60px;
}
</style>
