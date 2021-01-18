<template>
  <div>
    <form @submit.prevent="addNewWord" id="formVue" class="add-word-wrapper">
      <input
        v-model="word"
        required
        type="text"
        class="word-input"
        placeholder="Add a word"
      />
      <input
        v-model="meaning"
        required
        type="text"
        class="word-input"
        placeholder="Meaning"
      />
      <select v-model="type" required name="type" id="type">
        <option disabled selected value>Type</option>
        <option
          v-for="(word, index) in typesOfWords"
          :key="index"
          :value="word"
        >
          {{ capitalizeFirstLetter(word) }}
        </option>
      </select>
      <select v-model="gender" name="gender" id="gender">
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
import { db } from '@/main.js'
const getDate = new Date().getDate()
const getFullYear = new Date().getFullYear()
const getMonth = new Date().getMonth()

export default {
  name: 'AddNewWord',
  data() {
    return {
      errors: [],
      word: '',
      meaning: '',
      type: '',
      gender: '',
      success: null,
      typesOfWords: ['noun', 'verb', 'adjetive', 'adverb', 'article'],
      genders: ['masculine', 'femenine', 'neutral']
    }
  },
  methods: {
    addNewWord() {
      this.errors = []
      if (!this.word || !this.meaning || !this.type) {
        this.errors.push('Please fill all the fields.')
        return
      }
      db.collection('words').add({
        word: this.word,
        meaning: this.meaning,
        type: this.type,
        gender: this.gender,
        date: this.printCurrentDate(),
        dateFormat: this.addFormatedDate()
      })
      this.success = `'${this.word}' has been added to the list.`
      this.word = this.meaning = this.type = this.gender = ''
    },

    printCurrentDate() {
      return `${getDate}.${getMonth + 1}.${getFullYear}`
    },
    addFormatedDate() {
      return `${getFullYear}.${getMonth + 1}.${getDate}`
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
