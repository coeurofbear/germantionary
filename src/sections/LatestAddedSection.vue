<template>
  <div>
    <h3 class="h3">Latest added words: {{ words.length }}</h3>
    <br />
    <AllAddedWords :itemsToShow="10" />
    <div class="button" v-if="words.length > 10">
      <router-link class="link" to="/words">See all</router-link>
    </div>
  </div>
</template>

<script>
import AllAddedWords from '@/components/AllAddedWords.vue'
import { collection } from '@/main.js'

export default {
  name: 'LatestAddedSection',

  components: {
    AllAddedWords
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
.button {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
</style>
