<template>
  <div class="wrapper" :class="{ 'with-background': bg }">
    <!-- <div class="circle-icon yellow">
      <img src="@/assets/img/edit.svg" alt="" />
    </div>
    <div class="circle-icon red">
      <img src="@/assets/img/delete.svg" alt="" />
    </div> -->
    <ItemDate class="date" :wordDate="seconds" />
    <h1 class="title bold">{{ word.word }}</h1>
    <div class="elements">
      <ItemTag v-if="word.gender" :word="word.gender.charAt(0)" clear />
      <ItemTag :word="word.type" />
    </div>
    <div class="line vertical"></div>
    <div class="meaning">
      <p>{{ __capitalizeFirstLetter(meaning) }}</p>
      <a :href="`http://google.com/${word.word}`" target="_blank"
        ><ItemTag word="Go to definition"
      /></a>
    </div>
    <div class="line vertical"></div>
    <div class="notas">
      <div>
        <h3>More info</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          dolor asperiores molestias inventore repellendus omnis deserunt ab
          quisquam, cupiditate molestiae veniam esse, ipsa rem aliquid illo
          perferendis praesentium provident ut!
        </p>
        <!-- <input type="text" class="search-bar" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import ItemTag from '@/components/item-elements/ItemTag.vue'
import ItemDate from '@/components/item-elements/ItemDate.vue'
import helper from '@/mixins/helpers.js'
import { db } from '@/firebase/config.js'
// import words from '@/words/words.js'
// import _ from 'lodash'

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
  props: {
    wordId: {
      type: String,
      default: null
    },
    bg: {
      type: Boolean,
      default: false
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
      return this.$route.params.id || this.wordId
    }
  },
  async mounted() {
    this.word = await this.getItem()
    this.meaning = this.word && this.word.meaning
    this.seconds = this.word && this.word.date.seconds
  },
  methods: {
    getItem() {
      return db.collection($store.state.user.uid)
        .doc(this.wordIdPath)
        .get()
        .then(data => data.data())
    }
    // getItemTwo() {
    //   // TBD
    //   const filteredWord = _.filter(words, word => {
    //     return word.wordId === this.wordIdPath
    //   })
    //   this.word = filteredWord[0]
    //   this.meaning = filteredWord[0].meaning
    //   this.seconds = filteredWord[0].date
    // }
  }
}
</script>
<style lang="scss" scoped>
.title {
  font-size: 45px;
  margin-bottom: 15px;
}
.meaning {
  display: flex;
  margin-top: 20px;
  p {
    margin-right: 15px;
  }
}
.date {
  margin-bottom: 10px;
}
.wrapper {
  position: relative;
  transition: all ease 0.3s;

  &.with-background {
    border-radius: 5px;
    background: #f6f6f6;
    padding: 20px;

    &:hover {
      background: darken(#f6f6f6, 2%);
    }
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

  &.yellow {
    right: 15px;
    top: 15px;
  }
  &.red {
    right: 15px;
    top: 60px;
  }
}
</style>
