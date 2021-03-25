<template>
  <div class="latest-added-words">
    <h3>Latest added words</h3>
    <ul class="list">
      <Item
        v-for="(word, index) in words"
        :word="word"
        :key="index"
        date
        :wordId="wordsId[index]"
        @deleted="getData()"
      />
    </ul>
  </div>
</template>

<script>
import Item from '@/components/general/Item.vue'
import { collection } from '@/main.js'

export default {
  name: 'LatestAdded',
  components: {
    Item
  },
  props: {
    updateData: {
      type: Object,
      default: null
    }
  },

  data() {
    return {
      words: [],
      wordsId: ''
    }
  },
  methods: {
    getData() {
      collection
        .orderBy('date', 'desc')
        .get()
        .then(colection => {
          this.words = colection.docs.map(doc => doc.data())
          this.wordsId = colection.docs.map(doc => doc.id)
        })
    }
  },
  beforeMount() {
    this.getData()
  },
  watch: {
    updateData() {
      this.getData()
    }
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
