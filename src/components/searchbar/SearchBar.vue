<template>
  <div class="search">
    <div class="container">
      <h3>Search</h3>
      <input class="search-bar" type="text" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar"
};
</script>

<style scoped lang="scss">
@import "./src/assets/scss/variables";

.search {
  background: #f6f6f6;
  padding: 3rem 0;
  margin-bottom: 50px;
}

.search-bar {
  width: 100%;
  height: 45px;
  border-radius: 5px;
  border: 1px solid #afafaf;
  padding: 10px 20px;
  color: $black;
  font-size: 16px;
}
h3 {
  padding-bottom: 1rem;
}
</style>
