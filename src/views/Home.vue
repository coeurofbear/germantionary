<template>
  <div class="container">
    <Login v-if="!user" />
    <div v-else class="row">
      <div class="col-12">
        <AddWordsSection />
      </div>
      <div class="col-12 col-xl-6">
        <LatestAddedSection />
      </div>
      <div class="col-12 col-xl-5 offset-xl-1">
        <ItemDetailDisplay v-if="itemSelected" :wordId="wordId" />
        <!-- <h1>Welcome to Germantionary</h1> -->
      </div>
    </div>
  </div>
</template>

<script>
import AddWordsSection from '@/sections/AddWordsSection.vue'
import LatestAddedSection from '@/sections/LatestAddedSection.vue'
import ItemDetailDisplay from '@/components/ItemDetailDisplay.vue'
import Login from '@/components/Login.vue'

// @ is an alias to /rc

export default {
  name: 'Home',
  components: {
    AddWordsSection,
    LatestAddedSection,
    ItemDetailDisplay,
    Login
  },
  data() {
    return {
      wordId: ''
    }
  },
  watch: {
    '$store.state.wordId'() {
      this.wordId = this.$store.state.wordId
    }
  },
  computed: {
    itemSelected() {
      return this.wordId
    },
    user() {
      return this.$store.state.user
    }
  }
}
</script>
