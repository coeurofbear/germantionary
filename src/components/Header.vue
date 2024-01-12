<template>
  <header class="header">
    <div class="container">
      <div class="links">
        <router-link to="/"><h1 class="white">Germantionary</h1></router-link>
        <div v-if="user">
          <span class="white"
            >Hi, {{ displayName ? displayName : user.displayName }},
          </span>
          <span @click="logout" class="link white">Logout</span>
        </div>
        <div v-else class="links">
          <span class="white"
            >New?
            <router-link class="link white" to="/signup">
              Signup here</router-link
            ></span
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import userMethods from '@/mixins/user.js'
import firebase from 'firebase/compat/app'

export default {
  name: 'Header',
  mixins: [userMethods],
  computed: {
    user() {
      return this.$store.state.user
    },
    displayName() {
      return this.$store.state.displayName
    }
  },
  watch: {
    'user.displayName'(current) {
      if (current) {
        this.$store.commit('setDisplayName', '')
      }
    }
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          if (this.$route.path !== '/') {
            this.$router.push('/')
          }
        })
    }
  }
}
</script>

<style scoped lang="scss">
@import './src/assets/scss/variables';

.header {
  background: $black;
  padding: 45px 0;
}
.links {
  display: flex;
  justify-content: space-between;
}
.white {
  color: white;
}
</style>
