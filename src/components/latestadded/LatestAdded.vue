<template>
  <div class="latest-added-words">
    <h3>Latest added words</h3>
    <ul class="list">
      <Item v-for="(word, index) in words" :word="word" :key="index" date/>
    </ul>
  </div>
</template>

<script>
import Item from '@/components/general/Item.vue'
import { db } from '@/main.js'

export default {
  name: 'LatestAdded',
  components: {
    Item
  },
  props: {
    updateData: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      words: []
    }
  },
  methods: {
    getData() {
      db.collection('words')
        .orderBy('date', 'desc')
        .get()
        .then((querySnapshot) => {
          let words = querySnapshot.docs.map((doc) => doc.data())
          this.words = words
        })
    }
  },
  beforeMount() {
    this.getData()
  },
  mounted() {
    if (this.updateData) {
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
