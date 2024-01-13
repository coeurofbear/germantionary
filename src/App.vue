<template>
  <div id="app">
    <component :is="user ? Layout : NoAuth" :user="user">
      <router-view />
    </component>
  </div>
</template>

<script setup>
import Layout from '@/layout/default.vue'
import NoAuth from '@/layout/no-auth.vue'
import getUser from '@/composables/getUser'

const { user } = getUser()
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
