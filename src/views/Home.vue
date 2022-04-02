<template>
  <div class="container">
    <div v-if="!user.uid" class="row">
      <div class="col-12">
        <h1>inicie sesion</h1>
        <br />
        <router-link to="/login">Aca</router-link>
        <br />
        <h2>User: {{ userObject }}</h2>
        <br />
        <br />
      </div>
    </div>
    <div v-else class="row">
      <!-- <h2>User: {{ user }}</h2>
      <br />
      <br />
      <br /> -->

      <div class="col-12">
        <AddWordsSection />
      </div>
      <div class="col-12 col-xl-6">
        <LatestAddedSection />
      </div>
      <div class="col-12 col-lg-5 offset-lg-1">
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
      user: {
        uid: ''
      },
      userObject: {},
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
    this.__getCurrentUserObject()
    this.__getCurrentSignedInUser()
  }
}
</script>
