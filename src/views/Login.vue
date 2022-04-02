<template>
  <div class="container">
    <div class="row">
      <div
        class="col-12 col-sm-10 offset-sm-1 col-md-6 offset-md-3 col-lg-4 offset-lg-4"
      >
        <div class="login">
          <h3>Login</h3>
          <div>
            <input
              class="input"
              v-model="user.email"
              type="email"
              placeholder="Mail"
            />
            <input
              class="input"
              v-model="user.password"
              type="password"
              placeholder="Password"
            />
            <button class="btn" @click="login">Login</button>
            <p class="small-text">
              If you don't have an account you can create one
              <router-link class="link" to="/signup">here</router-link>
            </p>
          </div>
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
      }
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
            alert('your are signed in' + this.response.user)
            // console.log(this.response.user)
          },
          function(err) {
            console.error(err)
          }
        )
    }
  }
}
</script>
