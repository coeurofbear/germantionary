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
              class="input"
              v-model="user.name"
              type="text"
              placeholder="Name"
            />
            <input
              class="input"
              v-model="user.email"
              type="email"
              placeholder="Email"
            />
            <input
              class="input"
              v-model="user.password"
              type="password"
              placeholder="Password"
            />
            <input class="btn" type="submit" placeholder="Sign up" />
            <p class="small-text">
              Have already an account?
              <router-link class="link" to="/login">Login</router-link>
            </p>
            <div>update: {{ update }}</div>
            <div>response: {{ response }}</div>
            <div>updatedUser: {{ updatedUser }}</div>
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
      update: null,
      updatedUser: null
    }
  },
  // coeurofbear+5@gmail.com
  // coeurofbear+123@gmail.com
  // coeurofbear+000@gmail.com
  methods: {
    goToIndex() {
      this.$router.push('/')
    },
    signup() {
      const auth = firebase.auth()
      auth
        .createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then(
          userCredential => {
            this.response = userCredential
            const currentUser = auth.currentUser
            currentUser
              .updateProfile({
                displayName: this.user.name
              })
              .then(e => {
                this.updatedUser = e
                console.log('your account has been created: ' + currentUser)
              })
          },
          err => {
            console.error(err)
            this.update = err
          }
        )
    }
  }
}
</script>

<style></style>
