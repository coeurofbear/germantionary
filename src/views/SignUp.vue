<template>
  <div class="container">
    <div class="row">
      <div class="col-4 offset-4">
        <div class="login">
          <h3>Sign up</h3>
          <div>
            <input v-model="user.name" type="text" placeholder="Name" />
            <input v-model="user.email" type="email" placeholder="User" />
            <input
              v-model="user.password"
              type="password"
              placeholder="Password"
            />
            <button @click="signup">Sign up</button>
            <p>
              Have already an account?
              <router-link to="/login">Login</router-link>
            </p>
            <div>{{ update }}</div>
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
        name: '',
        email: '',
        password: ''
      },
      update: null
    }
  },
  // coeurofbear+5@gmail.com
  methods: {
    signup() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then(
          userCredential => {
            alert('your account has been created' + userCredential.user)
            var currentUser = firebase.auth().currentUser
            currentUser
              .updateProfile({
                displayName: this.user.name
              })
              .then(
                e => {
                  alert('updated profile' + e)
                  this.update = e
                },
                e => {
                  console.log(e)
                }
              )
          },
          err => {
            console.error(err)
          }
        )
    }
  }
}
</script>

<style></style>
