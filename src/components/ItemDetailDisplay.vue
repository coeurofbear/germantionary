<template>
  <div>
    <Date class="date" :wordDate="word.date.seconds" />
    <div class="elements">
      <Tag v-if="word.gender" :word="word.gender.charAt(0)" clear />
      <Tag :word="word.type" />
    </div>
    <div class="text">
      <h3 class="h3">{{ word.word }}</h3>
      <p>{{ word.meaning }}</p>
    </div>
  </div>
</template>

<script>
import Tag from '@/components/item-elements/ItemTag.vue'
import Date from '@/components/item-elements/ItemDate.vue'
import { collection } from '@/main.js'

export default {
  name: 'ItemDetailDisplay',
  components: {
    Tag,
    Date
  },
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
    }
  }
}
</script>
<style lang="scss" scoped>
.text {
  margin-top: 20px;
}
.date {
  margin-bottom: 10px;
}
</style>
