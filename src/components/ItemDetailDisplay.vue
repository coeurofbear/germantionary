<template>
  <div>
    <h3 class="h3">{{ word.word }}</h3>
    <p>{{ word.meaning }}</p>
  </div>
</template>

<script>
import { collection } from '@/main.js'

export default {
  name: 'ItemDetailDisplay',
  data() {
    return {
      word: {}
    }
  },
  watch: {
    wordIdPath() {
      this.getItem(this.wordIdPath)
    }
  },
  computed: {
    wordIdPath() {
      return this.$route.params.id
    }
  },
  mounted() {
    this.getItem(this.wordIdPath)
  },
  methods: {
    getItem(id) {
      collection
        .doc(id)
        .get()
        .then(
          item => {
            this.word = item.data()
          },
          err => {
            console.log(`Encountered error: ${err}`)
          }
        )
      // collection.onSnapshot(colection => {
      //   this.words = colection.docs.map(doc => {
      //     return {
      //       ...doc.data(),
      //       wordId: doc.id
      //     }
      //   })
      // })
    }
  }
}
</script>

<style scoped lang="scss"></style>
