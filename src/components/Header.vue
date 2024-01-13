<template>
  <header class="header">
    <div class="container">
      <div class="links">
        <router-link to="/"><h1 class="white">Germantionary</h1></router-link>
        <div v-if="user">
          <span class="white"
            >Hi, {{ user.displayName }},<br>
          </span>
          <span @click="handleClick" class="link white">Logout</span>
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

<script setup>
import getUser from '@/composables/getUser.js'
import userLogout from '@/composables/userLogout.js'

const { user } = getUser()
const { logout } = userLogout()

const handleClick = async () => {
  await logout()
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
