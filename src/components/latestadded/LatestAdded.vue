<template>
  <div class="latest-added-words">
    <h3>Latest added words</h3>
    <ul class="list">
      <Item v-for="(word, index) in words" :word="word" :key="index"/>
    </ul>
  </div>
</template>

<script>
import Item from '@/components/general/Item.vue'
//import data from '@/data/data.js'
import getData from '@/data/dataDB.js'
//import { db } from '@/main.js'

export default {
  name: 'LatestAdded',
  components: {
    Item
  },

  data() {
    return {
      //words: db.slice(Math.max(db.length - 5, 1)).reverse()
      words: []
    }
  },
  methods: {
    // getData() {
    //   db.collection('words')
    //     .get()
    //     .then((querySnapshot) => {
    //       const words = querySnapshot.docs.map((doc) => doc.data())
    //       this.words = words
    //     })
    // }
  },
  mounted() {
    getData()
    console.log(this.words)
    console.log('lool')
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
