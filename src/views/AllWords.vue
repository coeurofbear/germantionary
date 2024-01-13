<template>
  <div class="container">
    <GoBackButton />
    <div class="row">
      <div class="col-12" v-if="words">
        <AllAddedWords :words="words" date />
      </div>
    </div>
  </div>
</template>

<script setup>
import AllAddedWords from '@/components/AllAddedWords.vue'
import GoBackButton from '@/components/GoBackButton.vue'
import getWords from '@/composables/getWords';
import { useStore } from 'vuex';

const store = useStore()
const { words, load } = getWords()

load(store)
</script>
