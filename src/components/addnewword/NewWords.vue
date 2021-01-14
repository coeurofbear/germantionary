<template>
  <div>
    <h3>Add a new word</h3>
    <ul class="list">
      <AddNewWord />
    </ul>
  </div>
</template>

<script>
import AddNewWord from './-AddNewWord.vue'

export default {
  name: 'NewWords',

  components: {
    AddNewWord
  }
}
</script>

<style scoped lang="scss">
h3 {
  margin-bottom: 35px;
}
</style>
