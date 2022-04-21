<template>
  <header class="header">
    <div class="container ">
      <div class="links">
        <router-link to="/"><h1>Germantionary</h1></router-link>
        <div v-if="user">
          <span v-if="user.displayName" class="white"
            >Hi, {{ user.displayName }},
          </span>
          <span v-else>Hi user lols, </span>
          <span @click="__logout" class="link white">Logout</span>
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

export default {
  name: 'Header',
  mixins: [userMethods],
  data() {
    return {
      user: null
    }
  },

  mounted() {
    this.__getCurrentSignedInUser()
  }
}
</script>

<style scoped lang="scss">
@import './src/assets/scss/variables';

.header {
  background: $black;
  padding: 45px 0;
}
h1 {
  color: white;
}
.links {
  display: flex;
  justify-content: space-between;
}
.white {
  color: white;
}
</style>
