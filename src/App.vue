<template>
  <div id="app">
    <Header />
    <SearchSection v-if="user" />
    <div class="section" v-else>
      <div class="container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit enim
          dicta voluptates aperiam ut earum impedit laborum laudantium, hic
          corrupti recusandae eaque numquam nulla, eos exercitationem error esse
          beatae voluptate.
        </p>
        <br /><br />
        <!-- <Counter /> -->
      </div>
    </div>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
    <footer></footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import SearchSection from '@/sections/SearchSection.vue'
// import Counter from '@/components/Counter.vue'

export default {
  name: 'App',
  components: {
    Header,
    SearchSection
    // Counter
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  mounted() {
    this.$store.dispatch('getUserAsync')
  }
}
</script>

<style lang="scss">
@import './src/assets/scss/main';
.section {
  background: #f6f6f6;
  padding: 3rem 0;
  margin-bottom: 50px;
}
body {
  @include font-family-default;
}

footer {
  height: 150px;
}
</style>
