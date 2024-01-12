<template>
  <div class="search-wrapper">
    <input
      class="search-bar"
      type="text"
      placeholder="Search for a word"
      v-model="searchValue"
    />
    <img src="@/assets/img/search.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: 'SearchBar',

  data() {
    return {
      searchValue: ''
    }
  },
  watch: {
    searchValue(word) {
      this.$emit('send-input', word)
    }
  }
}
</script>

<style scoped lang="scss">
@import './src/assets/scss/variables';

.search-wrapper {
  position: relative;

  img {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
}
</style>
