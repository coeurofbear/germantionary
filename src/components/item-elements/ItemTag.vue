<template>
  <div class="tag" :class="[typeOfWordColor, { clear: this.clear }]">
    {{ word }}
  </div>
</template>

<script>
export default {
  name: 'ItemTag',
  props: {
    word: {
      type: String,
      default: null
    },
    clear: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    typeOfWordColor() {
      return {
        green: this.word === 'noun',
        blue: this.word === 'verb',
        red: this.word === 'adjetive',
        purple: this.word === 'adverb',
        pink: this.word === 'article'
      }
    }
  }
}
</script>
<style scoped lang="scss">
@import './src/assets/scss/variables';

.tag {
  padding: 3px 12px;
  font-size: 12px;
  letter-spacing: 1px;
  color: black;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 5px;
  margin-right: 7px;
  cursor: pointer;
  transition: ease 0.3s all;

  &.green {
    background: $green;

    &:hover {
      background: darken($green, 10%);
    }
  }
  &.blue {
    background: $blue;

    &:hover {
      background: darken($blue, 10%);
    }
  }
  &.red {
    background: $red;

    &:hover {
      background: darken($red, 10%);
    }
  }
  &.purple {
    background: $purple;

    &:hover {
      background: darken($purple, 10%);
    }
  }
  &.pink {
    background: $pink;

    &:hover {
      background: darken($pink, 10%);
    }
  }
  &.clear {
    padding: 3px 5px;
    border: 1px $black solid;
  }
}
</style>
