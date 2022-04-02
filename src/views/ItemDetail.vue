<template>
  <div class="container">
    <GoBackButton />
    <div class="row">
      <div class="col-sm-1 col-md-2 col-lg-3 col-xl-4 buttons">
        <div
          @click="goToPrevious('back')"
          class="circle-icon green"
          :class="{ invalid: hasNoMoreItemsLeft }"
        >
          <img src="@/assets/img/arrow-left.svg" alt="" />
        </div>
      </div>
      <div class="col-12 col-lg-6 col-sm-10 col-md-8 col-xl-4">
        <ItemDetailDisplay bg />
      </div>
      <div class="col-sm-1 col-md-2 col-lg-3 col-xl-4 buttons">
        <div
          @click="goToPrevious('next')"
          class="circle-icon green"
          :class="{ invalid: hasNoMoreItemsRight }"
        >
          <img src="@/assets/img/arrow-right.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ItemDetailDisplay from '@/components/ItemDetailDisplay.vue'
import GoBackButton from '@/components/GoBackButton.vue'
import { collection } from '@/main.js'
// import words from '@/words/words.js'
// @ is an alias to /src

export default {
  name: 'Detail',
  components: {
    ItemDetailDisplay,
    GoBackButton
  },
  data() {
    return {
      wordsIdArray: [],
      invalid: false
    }
  },
  methods: {
    getData() {
      collection.orderBy('date', 'desc').onSnapshot(querySnapshot => {
        this.wordsIdArray = querySnapshot.docs.map(doc => {
          return doc.id
        })
      })
      // words.forEach(word => {
      //   this.wordsIdArray.push(word.wordId)
      // })
    },
    goToPrevious(direction) {
      if (
        this.getIndex !== -1 &&
        direction === 'back' &&
        !this.hasNoMoreItemsLeft
      ) {
        this.$router.push(this.wordsIdArray[this.getIndex - 1])
      }
      if (
        this.getIndex !== -1 &&
        direction === 'next' &&
        !this.hasNoMoreItemsRight
      ) {
        this.$router.push(this.wordsIdArray[this.getIndex + 1])
      }
    }
  },
  computed: {
    getIndex() {
      return this.wordsIdArray.indexOf(this.$route.params.id)
    },
    hasNoMoreItemsLeft() {
      return this.getIndex === 0
    },
    hasNoMoreItemsRight() {
      return this.wordsIdArray.length === this.getIndex + 1
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
.buttons {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>
