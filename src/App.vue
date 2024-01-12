<template>
  <div id="app">  
    <Layout>
      <router-view />
    </Layout>
  </div>
</template>

<script setup>
import Layout from '@/layout/default.vue'
import { onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

onMounted(()=> {
  store.dispatch('getUserAsync')
})
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
