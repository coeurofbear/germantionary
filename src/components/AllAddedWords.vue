<template>
  <ul class="list" v-if="words">
    <Item
      v-for="(word, index) in words.slice(0, itemsToShow)"
      :word="word"
      :key="index"
      :date="date"
    />
  </ul>
</template>

<script setup>
import Item from '@/components/Item.vue'
import { defineProps } from 'vue'

const props = defineProps(
  { 
    words: Object,
    itemsToShow: {
      type: Number,
      default: 9999
    },
    date: {
      type: Boolean,
      default: false
    }
  },
)
</script>

<style scoped lang="scss">
.latest-added-words {
  margin-top: 60px;
}
</style>
