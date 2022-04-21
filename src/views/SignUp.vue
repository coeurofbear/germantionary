<template>
  <div class="container">
    <div class="row">
      <div
        class="col-12 col-sm-10 offset-sm-1 col-md-6 offset-md-3 col-lg-4 offset-lg-4"
      >
        <div class="login">
          <h3>Sign up</h3>
          <form @submit.prevent="signup">
            <input
              autocomplete="name"
              class="input"
              v-model="user.name"
              type="text"
              placeholder="Name"
            />
            <input
              autocomplete="email"
              class="input"
              v-model="user.email"
              type="email"
              placeholder="E-mail"
            />
            <input
              class="input"
              v-model="user.password"
              type="password"
              placeholder="Password"
            />
            <div class="input" v-if="error">{{ error }}</div>
            <input class="btn" type="submit" placeholder="Sign up" />
            <p class="small-text">
              Have already an account?
              <router-link class="link" to="/login">Login</router-link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: ''
      },
      response: null,
      error: null
    }
  },
  methods: {
    goToIndex() {
      this.$router.push('/')
    },
    async signup() {
      const auth = firebase.auth()
      auth
        .createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then(
          userCredential => {
            this.error = null
            this.response = userCredential
            const currentUser = auth.currentUser
            currentUser.updateProfile({
              displayName: this.user.name
            })
            this.goToIndex()
          },
          err => {
            console.error(err)
            this.error = err
          }
        )
    }
  }
}
</script>

<style></style>
