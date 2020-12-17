<template>
  <li :class="[date ? 'date' : '', search ? 'search' : 'regular']">
    <div class="left">
      <h3 class="main-word">
        <div class="word">{{ word.word }}</div>
        /
        <div class="meaning">{{ word.meaning }}</div>
      </h3>
      <div v-if="date" class="date">Added in: <span>1/10/2020</span></div>
    </div>
    <div class="elements">
      <div v-if="word.gender" class="tag clear">
        {{ word.gender.charAt(0) }}
      </div>
      <div class="tag green">Verb</div>
      <div class="tag blue">Noun</div>
      <div class="line"></div>
      <div class="circle-icon yellow">
        <img src="@/assets/img/edit.svg" alt="" />
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "SearchListElement",
  props: {
    date: {
      type: Boolean
    },
    search: {
      type: Boolean,
      default: false
    },
    word: {
      type: Object
    }
  }
};
</script>

<style scoped lang="scss">
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 20px;

  &.date {
    padding: 15px 20px;
  }

  &.search {
    background: white;
    margin-bottom: 3px;
  }

  &.regular {
    &:nth-child(odd) {
      background: #f6f6f6;
    }
    &:nth-child(even) {
      background: #eaeaea;
    }
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
