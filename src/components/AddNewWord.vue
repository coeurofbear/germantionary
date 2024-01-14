<template>
  <div>
    <form @submit.prevent="addNewWord()" id="formVue" class="flex items-center">
      <input
        v-model="word.word"
        required
        type="text"
        class="mr-3 word-input margin-bottom-form"
        placeholder="Add a word"
      />
      <input
        v-model="word.meaning"
        required
        type="text"
        class="mr-3 word-input margin-bottom-form"
        placeholder="Meaning"
      />
      <select
        v-model="word.type"
        class="mr-3 margin-bottom-form"
        required
        name="type"
        id="type"
      >
        <option disabled selected value>Type</option>
        <option
          v-for="(word, index) in typesOfWords"
          :key="index"
          :value="word"
        >
          {{ __capitalizeFirstLetter(word) }}
        </option>
      </select>
      <select
        v-model="word.gender"
        class="mr-3 margin-bottom-form"
        name="gender"
        id="gender"
      >
        <option disabled selected value>Gender</option>
        <option v-for="(gender, index) in genders" :key="index" :value="gender">
          {{ __capitalizeFirstLetter(gender) }}
        </option>
      </select>
      <button class="circle-icon green margin-bottom-form flex-none">
        <img src="@/assets/img/plus.svg" alt="" />
      </button>
    </form>
    <div v-if="errors.length">
      <ul>
        <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
      </ul>
    </div>
    <p class="success" v-if="success">{{ success }}</p>
  </div>
</template>

<script>
import { db } from '@/firebase/config.js'
import helper from '@/mixins/helpers.js'

export default {
  name: 'AddNewWord',
  mixins: [helper],
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
      genders: ['masculine', 'femenine', 'neutral']
    }
  },
  methods: {
    addNewWord() {
      this.errors = []
      if (!this.word.word || !this.word.meaning || !this.word.type) {
        this.errors.push('Please fill all the fields.')
        return
      }

      db.collection(this.$store.state.user.uid).add({
        word: this.word.word,
        meaning: this.word.meaning,
        type: this.word.type,
        gender: this.word.gender,
        date: new Date()
      })
      this.success = `'${this.word.word}' has been added to the list.`
      this.word.word =
        this.word.meaning =
        this.word.type =
        this.word.gender =
          ''
      setTimeout(() => {
        this.success = null
      }, 4000)
    }
  }
}
</script>

