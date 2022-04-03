<template>
  <header class="header">
    <div class="container ">
      <div class="links">
        <router-link to="/"><h1>Germantionary</h1></router-link>
        <div v-if="userObject">
          <span class="white">Hi, {{ userObject.displayName }}, </span>
          <span @click="__logout" class="link white">Logout</span>
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
      userObject: null
    }
  },
  mounted() {
    this.__getCurrentUserObject()
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
