<template>
  <div class="container">
    <div class="row">
      <div class="col-4 offset-4">
        <div class="login">
          <h3>Login</h3>
          <div>
            <input v-model="user.email" type="email" placeholder="Mail" />
            <input
              v-model="user.password"
              type="password"
              placeholder="Password"
            />
            <button @click="login">Login</button>
            <p>
              If you don't have an account you can create one
              <router-link to="/signup">here</router-link>
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
