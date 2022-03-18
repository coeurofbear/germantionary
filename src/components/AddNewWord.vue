<template>
  <div>
    <form @submit.prevent="addNewWord()" id="formVue" class="add-word-wrapper">
      <input
        v-model="word.word"
        required
        type="text"
        class="word-input"
        placeholder="Add a word"
      />
      <input
        v-model="word.meaning"
        required
        type="text"
        class="word-input"
        placeholder="Meaning"
      />
      <select v-model="word.type" required name="type" id="type">
        <option disabled selected value>Type</option>
        <option
          v-for="(word, index) in typesOfWords"
          :key="index"
          :value="word"
        >
          {{ capitalizeFirstLetter(word) }}
        </option>
      </select>
      <select v-model="word.gender" name="gender" id="gender">
        <option disabled selected value>Gender</option>
        <option v-for="(gender, index) in genders" :key="index" :value="gender">
          {{ capitalizeFirstLetter(gender) }}
        </option>
      </select>
      <button class="circle-icon green">
        <img src="@/assets/img/plus.svg" alt="" />
      </button>
    </form>
    <div v-if="errors.length">
      <ul>
        <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
      </ul>
    </div>
    <p v-if="success">{{ success }}</p>
  </div>
</template>

<script>
import { collection } from '@/main.js'

export default {
  name: 'AddNewWord',
  data() {
    return {
      errors: [],
      word: {
        word: '',
        meaning: '',
        type: '',
        gender: ''
      },
      success: null,
      typesOfWords: ['noun', 'verb', 'adjetive', 'adverb', 'article'],
      genders: ['masculine', 'femenine', 'neutral'],
      update: null
    }
  },
  watch: {
    update() {
      this.$emit('update', this.update)
    }
  },
  methods: {
    addNewWord() {
      this.errors = []
      if (!this.word.word || !this.word.meaning || !this.word.type) {
        this.errors.push('Please fill all the fields.')
        return
      }
      collection.add({
        word: this.word.word,
        meaning: this.word.meaning,
        type: this.word.type,
        gender: this.word.gender,
        date: new Date()
      })
      this.success = `'${this.word.word}' has been added to the list.`
      this.word.word = this.word.meaning = this.word.type = this.word.gender =
        ''

      collection.onSnapshot(doc => {
        this.update = doc.metadata
      })
    },

    capitalizeFirstLetter(word) {
      return word.charAt(0).toUpperCase() + word.slice(1)
    }
  }
}
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
