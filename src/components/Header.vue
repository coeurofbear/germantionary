<template>
  <header class="header">
    <div class="container">
      <div class="links">
        <router-link to="/"
          ><span class="text-[#fff] text-4xl font-bold"
            >Germantionary</span
          ></router-link
        >
        <div class="flex" v-if="user">
          <span class="text-[#fff]"
            >Hi, {{ user.displayName }},
            <span @click="handleClick" class="link text-[#fff]"
              >Logout</span
            ></span
          >
        </div>
        <div v-else class="links">
          <span class="text-[#fff]"
            >New?
            <router-link class="link text-[#fff]" to="/signup">
              Signup here</router-link
            ></span
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import userLogout from '@/composables/userLogout.js'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const user = computed(() => {
  return store.state.user
})
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
</style>
