<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-6">
        <ItemDetailDisplay />
      </div>
    </div>
  </div>
</template>

<script>
import ItemDetailDisplay from '@/components/ItemDetailDisplay.vue'
// @ is an alias to /src

export default {
  name: 'Detail',
  components: {
    ItemDetailDisplay
  }
}
</script>
