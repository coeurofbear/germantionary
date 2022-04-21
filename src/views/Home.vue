<template>
  <div class="container">
    <!-- <div v-if="true" class="row"> -->
    <div v-if="!user" class="row">
      <div
        class="col-12 col-sm-10 offset-sm-1 col-md-6 offset-md-3 col-lg-4 offset-lg-4"
      >
        <h1>Please log in</h1>
        <p class="small-text">
          In order to use Germantionary, you'll need to log in or create an
          account
          <router-link class="link" to="/login">here</router-link>.
        </p>
      </div>
    </div>
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
import userMethods from '@/mixins/user.js'
import ItemDetailDisplay from '@/components/ItemDetailDisplay.vue'

// @ is an alias to /rc

export default {
  name: 'Home',
  components: {
    AddWordsSection,
    LatestAddedSection,
    ItemDetailDisplay
  },
  mixins: [userMethods],
  data() {
    return {
      user: null,
      wordId: ''
    }
  },
  watch: {
    '$store.state.wordId'() {
      this.wordId = this.$store.state.wordId
      console.log('mutation', this.$store.state.wordId)
    }
  },
  computed: {
    itemSelected() {
      return this.wordId
    }
  },
  mounted() {
    this.__getCurrentSignedInUser()
  }
}
</script>
