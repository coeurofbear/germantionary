<template>
  <div class="container">
    <div class="row">
      <div
        class="col-12 col-sm-10 offset-sm-1 col-md-6 offset-md-3 col-lg-4 offset-lg-4"
      >
        <div class="login">
          <h3>Login</h3>
          <form @submit.prevent="login">
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
            <input class="btn" type="submit" placeholder="Login" />
            <p class="small-text">
              If you don't have an account you can create one
              <router-link class="link" to="/signup">here</router-link>.
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
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(
          userCredential => {
            this.response = userCredential
            alert('You are logged in, ' + this.response.user.displayName)
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
