<template>
  <li :class="classes" @click="goToDetail(word.wordId)">
    <div class="left" :class="date ? 'inline' : ''">
      <h3 class="main-word">
        <div class="word">{{ word.word }}</div>
        /
        <div class="meaning">{{ word.meaning }}</div>
      </h3>
      <div v-if="date" class="date">
        Added in: <span>{{ dateFormat }}</span>
      </div>
    </div>
    <div class="elements">
      <div v-if="word.gender" class="tag clear">
        {{ word.gender.charAt(0) }}
      </div>
      <div class="tag" :class="typeOfWordColor">{{ word.type }}</div>
      <div class="line"></div>
      <div @click="deleteItem(word.wordId)" class="circle-icon yellow">
        <img src="@/assets/img/delete.svg" alt="" />
      </div>
    </div>
  </li>
</template>

<script>
import { collection } from '@/main.js'

export default {
  name: 'Item',

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
    },
    edit: {
      type: Function
    }
  },
  computed: {
    dateFormat() {
      return new Date(this.word.date.seconds * 1000).toLocaleString('en-GB', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      })
    },
    typeOfWordColor() {
      return {
        green: this.word.type === 'noun',
        blue: this.word.type === 'verb',
        red: this.word.type === 'adjetive',
        purple: this.word.type === 'adverb',
        pink: this.word.type === 'article'
      }
    },
    classes() {
      return {
        search: this.search,
        regular: !this.search
      }
    }
  },
  methods: {
    deleteItem(id) {
      const itemToDelete = collection.doc(id)
      alert(`Document ${id} was successfully deleted!`)
      itemToDelete.delete()
    },
    goToDetail(wordId) {
      if (this.$route.params.id !== wordId) {
        this.$router.push(`/detail/${wordId}`)
      }
    }
  }
}
</script>

<style scoped lang="scss">
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 20px;

  &.search {
    background: white;
    margin-bottom: 3px;
    padding: 10px 20px;
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
.left {
  &.inline {
    display: flex;
    align-items: center;
  }
}

.date {
  font-size: 11px;
  margin-left: 30px;
}
</style>
