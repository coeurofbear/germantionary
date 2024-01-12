<template>
  <li
    :class="classes"
    class="bar"
    @click="$store.commit('setWordId', word.wordId)"
  >
    <div class="left" :class="date ? 'inline' : ''">
      <div class="main-word" @click="goToDetail(word.wordId)">
        <div class="word">{{ word.word }}</div>
        /
        <div class="meaning">{{ word.meaning }}</div>
      </div>
      <Date
        v-if="date"
        :wordDate="word.date.seconds"
        @click="goToDetail(word.wordId)"
        >Added in:
      </Date>
    </div>
    <div class="elements">
      <div class="elements">
        <Tag v-if="word.gender" :word="word.gender.charAt(0)" clear />
        <Tag :word="word.type" />
      </div>
      <div class="elements">
        <div class="line"></div>
        <div @click="deleteItem(word.wordId)" class="circle-icon yellow">
          <img src="@/assets/img/delete.svg" alt="" />
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import Tag from '@/components/item-elements/ItemTag.vue'
import Date from '@/components/item-elements/ItemDate.vue'
import { collection } from '@/main.js'

export default {
  name: 'Item',
  components: {
    Tag,
    Date
  },
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
    classes() {
      return {
        search: this.search,
        regular: !this.search
      }
    }
  },
  methods: {
    async deleteItem(id) {
      const itemToDelete = collection.doc(id)
      const itemObject = await itemToDelete.get().then(item => item.data())
      const deleteItem = confirm(
        `Please confirm that you want to delete '${itemObject.word}'`
      )
      if (deleteItem) {
        itemToDelete.delete()
      }
    },
    goToDetail(wordId) {
      if (this.$route.params.id !== wordId) {
        this.$router.push(`/words/${wordId}`)
      }
    }
  }
}
</script>

<style scoped lang="scss">
li {
  display: flex;
  flex-wrap: wrap;
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
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  cursor: pointer;
}
.word {
  margin-right: 5px;
}
.meaning {
  margin-left: 5px;
  font-weight: lighter;
}
.left {
  &.inline {
    display: flex;
    align-items: center;
  }
}
.bar {
  &:hover {
    background: #d7eee3 !important;
  }
}
:deep(.date) {
  margin-left: 30px;
  cursor: pointer;
}
</style>
