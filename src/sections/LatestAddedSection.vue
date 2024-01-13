<template>
  <div>
    <h3 class="h3">Latest added words: {{ words && words.length }}</h3>
    <br />
    <AllAddedWords :words="words" :itemsToShow="10" />
    <div class="button" v-if="words && words.length > 10">
      <router-link class="link" to="/words">See all</router-link>
    </div>
  </div>
</template>

<script setup>
import AllAddedWords from '@/components/AllAddedWords.vue'
import getWords from '@/composables/getWords';
import { useStore } from 'vuex';

const store = useStore()
const { words } = getWords(store)

</script>

<style scoped lang="scss">
.button {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
</style>
