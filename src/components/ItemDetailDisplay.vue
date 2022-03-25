<template>
  <div v-if="seconds" class="wrapper">
    <div class="circle-icon yellow">
      <img src="@/assets/img/edit.svg" alt="" />
    </div>
    <ItemDate class="date" :wordDate="seconds" />
    <div class="elements">
      <ItemTag v-if="word.gender" :word="word.gender.charAt(0)" clear />
      <ItemTag :word="word.type" />
    </div>
    <div class="text">
      <h3 class="h3">{{ word.word }}</h3>
      <p>{{ __capitalizeFirstLetter(meaning) }}</p>
    </div>
    <div class="notas">
      <span
        >Notas:
        <!-- <input type="text" class="search-bar" /> -->
      </span>
    </div>
  </div>
</template>

<script>
import ItemTag from '@/components/item-elements/ItemTag.vue'
import ItemDate from '@/components/item-elements/ItemDate.vue'
import helper from '@/mixins/helpers.js'
import { collection } from '@/main.js'

export default {
  name: 'ItemDetailDisplay',
  components: {
    ItemTag,
    ItemDate
  },
  mixins: [helper],
  data() {
    return {
      word: {},
      meaning: '',
      seconds: null
    }
  },
  watch: {
    async wordIdPath() {
      this.word = await this.getItem()
      this.meaning = await this.word.meaning
      this.seconds = await this.word.date.seconds
    }
  },
  computed: {
    wordIdPath() {
      return this.$route.params.id
    }
  },
  async mounted() {
    this.word = await this.getItem()
    this.meaning = await this.word.meaning
    this.seconds = await this.word.date.seconds
  },
  methods: {
    getItem() {
      return collection
        .doc(this.wordIdPath)
        .get()
        .then(data => data.data())
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
.wrapper {
  background: #f6f6f6;
  padding: 20px;
  border-radius: 5px;
  position: relative;
  transition: all ease 0.3s;
  &:hover {
    background: darken(#f6f6f6, 2%);
  }
}
.notas {
  margin-top: 20px;
}
.search-bar {
  margin-top: 20px;
}
.circle-icon {
  position: absolute;
  right: 15px;
  top: 15px;
}
</style>
