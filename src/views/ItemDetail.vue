<template>
  <div class="container">
    <div class="buttons">
      <div @click="goToPrevious('back')">antes</div>
      <br />
      <br />
      <div @click="goToPrevious('next')">despues</div>
    </div>

    <div class="row">
      <div
        class="col-12 offset-lg-3 col-lg-6 offset-sm-1 col-sm-10 offset-md-2 col-md-8 offset-xl-4 col-xl-4"
      >
        <ItemDetailDisplay />
      </div>
    </div>
  </div>
</template>

<script>
import ItemDetailDisplay from '@/components/ItemDetailDisplay.vue'
import { collection } from '@/main.js'
// @ is an alias to /src

export default {
  name: 'Detail',
  components: {
    ItemDetailDisplay
  },
  data() {
    return {
      wordsIdArray: []
    }
  },
  methods: {
    getData() {
      collection.orderBy('date', 'desc').onSnapshot(querySnapshot => {
        this.wordsIdArray = querySnapshot.docs.map(doc => {
          return doc.id
        })
      })
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
}
</style>
