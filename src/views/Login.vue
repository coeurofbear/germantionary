<template>
  <div class="container">
    <div class="row">
      <div class="col-4 offset-4">
        <div class="login">
          <h3>Login</h3>
          <div>
            <input v-model="email" type="text" placeholder="User" />
            <input v-model="password" type="password" placeholder="Password" />
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
export default {
  methods: {
    login() {
      this.$router.replace("/");
    },
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>

<style>
</style>  