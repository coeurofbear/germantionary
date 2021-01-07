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
        <option value="noun">Noun</option>
        <option value="verb">Verb</option>
        <option value="verb">Adjetive</option>
      </select>
      <select v-model="gender" required name="gender" id="gender">
        <option disabled selected value>Gender</option>
        <option value="neutral">Neutral</option>
        <option value="masculine">Masculine</option>
        <option value="feminine">Feminine</option>
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

export default {
  name: 'AddNewWord',
  data() {
    return {
      errors: [],
      word: '',
      meaning: '',
      type: '',
      gender: '',
      success: null
    }
  },
  mounted() {
    this.callFunction()
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
        gender: this.gender
      })
      this.success = `Se ha agreado ${this.word} a la lista`
      this.word = this.meaning = this.type = this.gender = ''
    },
    callFunction() {
      // .toJSON()
      // .slice(0, 10)
      // .replace(/-/g, '/')
      var getDate = new Date().getDate()
      var getFullYear = new Date().getFullYear()
      var getHours = new Date().getHours()
      var getMilliseconds = new Date().getMilliseconds()
      var getMinutes = new Date().getMinutes()
      var getMonth = new Date().getMonth()
      var getSeconds = new Date().getSeconds()
      var getTime = new Date().getTime()
      var getDay = new Date().getDay()
      //Date.now()
      console.log(Date.now())
      console.log(getDate)
      console.log(getFullYear)
      console.log(getHours)
      console.log(getMilliseconds)
      console.log(getMinutes)
      console.log(getMonth)
      console.log(getSeconds)
      console.log(getTime)
      console.log(getDay)
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
