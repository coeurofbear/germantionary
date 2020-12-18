<template>
  <div class="add-word-wrapper">
    <input type="text" class="word-input" placeholder="Add a word" />
    <input type="text" class="word-input" placeholder="Meaning" />
    <select name="type" id="type">
      <option disabled selected value>Type</option>
      <option value="noun">Noun</option>
      <option value="verb">Verb</option>
    </select>
    <select name="gender" id="gender">
      <option disabled selected value>Gender</option>
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
  name: "AddNewWord",

  data() {
    return {
      searchedWord: "Brauchen",
    };
  },
};
</script>

<style scoped lang="scss">
h3 {
  margin-bottom: 35px;
}

.add-word-wrapper {
  display: flex;
  align-items: flex-end;

  input,
  select {
    margin-right: 15px;
  }

  .circle-icon {
    align-self: center;
  }
}
</style>
