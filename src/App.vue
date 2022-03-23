<template>
  <div id="app">
    <Header title="Germantionary" />
    <SearchSection />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
    <footer></footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import SearchSection from '@/sections/SearchSection.vue'

export default {
  name: 'App',
  components: {
    Header,
    SearchSection
  }
}
</script>

<style lang="scss">
@import './src/assets/scss/main';

body {
  @include font-family-default;
}

footer {
  height: 150px;
}
</style>
