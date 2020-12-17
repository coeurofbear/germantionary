<template>
  <div>
    <h3>Add a new word</h3>
    <ul class="list">
      <NewWord />
    </ul>
  </div>
</template>

<script>
import NewWord from "./-NewWord.vue";

export default {
  name: "AddNewWord",

  components: {
    NewWord
  }
};
</script>

<style scoped lang="scss">
h3 {
  margin-bottom: 35px;
}
</style>
