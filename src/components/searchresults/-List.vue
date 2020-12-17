<template>
  <li>
    <div class="left">
      <h3 class="main-word">
        <div class="word">Brauchen</div>
        /
        <div class="meaning">To need</div>
      </h3>
      <div class="date">Added in: <span>1/10/2020</span></div>
    </div>
    <div class="elements">
      <div class="tag clear">N</div>
      <div class="tag green">Verb</div>
      <div class="tag blue">Noun</div>
      <div class="line"></div>
      <div class="edit">
        <img src="@/assets/img/edit.svg" alt="" />
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "SearchListElement",
  components: {},
  data() {
    return {
      searchedWord: ""
    };
  }
};
</script>

<style scoped lang="scss">
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;

  &:nth-child(odd) {
    background: #f6f6f6;
  }
  &:nth-child(even) {
    background: #eaeaea;
  }
}
.main-word {
  display: flex;
  margin-bottom: 5px;
}
.word {
  margin-right: 5px;
}
.meaning {
  margin-left: 5px;
  font-weight: lighter;
}
.elements {
  display: flex;
  align-items: center;
}
</style>
