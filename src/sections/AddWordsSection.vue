<template>
  <div>
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
