<template>
  <header class="header">
    <div class="container ">
      <div class="links">
        <router-link to="/"><h1>Germantionary</h1></router-link>
        <div>
          <span class="white">Hi, {{ userObject }}, </span>
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
      userObject: {}
    }
  },
  // computed: {
  //   userObject() {
  //     return this.__getCurrentUserObject()
  //   }
  // }
  async mounted() {
    this.userObject = await this.__getCurrentUserObject()
    // this.__getCurrentUserObject().then(e => {
    //   this.userObject = e
    // })
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
