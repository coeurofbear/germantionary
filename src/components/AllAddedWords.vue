<template>
  <ul class="list">
    <Item
      v-for="(word, index) in words.slice(0, itemsToShow)"
      :word="word"
      :key="index"
      date
    />
  </ul>
</template>

<script>
import Item from '@/components/Item.vue'
import { collection } from '@/main.js'

export default {
  name: 'LatestAddedSection',

  props: {
    itemsToShow: {
      type: Number,
      default: 999999
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
  }
}
</script>

<style scoped lang="scss">
.latest-added-words {
  margin-top: 60px;
}
</style>
