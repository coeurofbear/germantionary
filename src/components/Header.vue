<template>
  <header class="header">
    <div class="container">
      <router-link to="/"><h1>Germantionary</h1></router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
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
</style>
