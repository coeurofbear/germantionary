<template>
  <div>
    <input type="text" class="word" />
    <input type="text" class="meaning" />
    <select name="type" id="type">
      <option value="noun">Noun</option>
      <option value="verb">Verb</option>
    </select>
    <select name="gender" id="gender">
      <option value="neutral">Neutral</option>
      <option value="masculine">Masculine</option>
      <option value="feminine">Feminine</option>
    </select>
    <div class="circle-icon green">
      <img src="@/assets/img/plus.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddNewWord',

  data() {
    return {
      searchedWord: 'Brauchen'
    };
  }
};
</script>

<style scoped lang="scss">
h3 {
  margin-bottom: 35px;
}
</style>
