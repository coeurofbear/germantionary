<template>
  <div class="container">
    <div class="row">
      <div class="col-4 offset-4">
        <div class="login">
          <h3>Sign up</h3>
          <div>
            <input v-model="email" type="text" placeholder="User" />
            <input v-model="password" type="password" placeholder="Password" />
            <button @click="signup">Sign up</button>
            <p>
              Have already an account?
              <router-link to="/login">Login</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signup() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          function (user) {
            alert("your account has been created" + user);
          },
          function (err) {
            alert("Oops. " + err.message);
          }
        );
    },
  },
};
</script>

<style>
</style>  