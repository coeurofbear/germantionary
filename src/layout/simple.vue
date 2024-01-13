<template>
  <main>
    <Header />
    <slot />
    <footer />
  </main>
</template>

<script setup>
import Header from '@/components/Header.vue'
</script>