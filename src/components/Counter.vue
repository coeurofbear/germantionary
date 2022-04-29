<template>
  <section id="counter-page">
    <h4 class="result-text">counter: {{ count }}</h4>
  </section>
</template>

<script>
import { numberDisplay } from '@/store'

export default {
  name: 'CounterPage',

  computed: {
    count() {
      return numberDisplay.count
    }
  }
}
</script>
