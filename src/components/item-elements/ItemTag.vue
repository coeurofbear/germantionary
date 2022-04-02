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
  box-shadow: 3px 3px 4px #c0c0c0;
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
    border: 1px $green solid;

    &:hover {
      background: darken($green, 10%);
      border: 1px darken($green, 10%) solid;
    }
  }
  &.blue {
    background: $blue;
    border: 1px $blue solid;

    &:hover {
      background: darken($blue, 10%);
      border: 1px darken($blue, 10%) solid;
    }
  }
  &.red {
    background: $red;
    border: 1px $red solid;

    &:hover {
      background: darken($red, 10%);
      border: 1px darken($red, 10%) solid;
    }
  }
  &.purple {
    background: $purple;
    border: 1px $purple solid;

    &:hover {
      background: darken($purple, 10%);
      border: 1px darken($purple, 10%) solid;
    }
  }
  &.pink {
    background: $pink;
    border: 1px $pink solid;

    &:hover {
      background: darken($pink, 10%);
      border: 1px darken($pink, 10%) solid;
    }
  }
  &.clear {
    padding: 3px 5px;
    border: 1px $black solid;
  }
}
</style>
