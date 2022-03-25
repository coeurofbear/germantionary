<template>
  <div class="container">
    <div class="row">
      <div
        class="col-12 offset-lg-3 col-lg-6 offset-sm-1 col-sm-10 offset-md-2 col-md-8 offset-xl-4 col-xl-4"
      >
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
