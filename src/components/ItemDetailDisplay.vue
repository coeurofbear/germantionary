<template>
  <div>
    <ItemDate class="date" v-if="dateInfo" :wordDate="dateInfo" />
    <div class="elements">
      <ItemTag v-if="word.gender" :word="word.gender.charAt(0)" clear />
      <ItemTag :word="word.type" />
    </div>
    <div class="text">
      <h3 class="h3">{{ word.word }}</h3>
      <p>{{ word.meaning }}</p>
    </div>
  </div>
</template>

<script>
import ItemTag from '@/components/item-elements/ItemTag.vue'
import ItemDate from '@/components/item-elements/ItemDate.vue'
import { collection } from '@/main.js'

export default {
  name: 'ItemDetailDisplay',
  components: {
    ItemTag,
    ItemDate
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
    },
    dateInfo() {
      return this.word?.date?.seconds
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
        .then(doc => {
          this.word = doc.data()
        })
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
