<template>
  <div class="add-word-section">
    <h3 class="h3">Add a new word</h3>
    <AddNewWord />
  </div>
</template>

<script>
import AddNewWord from '@/components/AddNewWord.vue'

export default {
  name: 'NewWords',

  components: {
    AddNewWord
  }
}
</script>

<style lang="scss" scoped>
.add-word-section {
  margin-bottom: 60px;
}
</style>
