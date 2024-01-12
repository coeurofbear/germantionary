<template>
  <main>
    <Header />
    <SearchSection />
    <slot />
    <footer />
  </main>
</template>

<script setup>
import Header from '@/components/Header.vue'
import SearchSection from '@/sections/SearchSection.vue'

</script>