<template>
  <div class="search">
    <h3>Search</h3>
    <div class="search-wrapper">
      <input class="search-bar" type="text" />
      <img src="@/assets/img/search.svg" alt="" />
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
  margin-bottom: 40px;
}
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
