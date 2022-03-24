<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <AllAddedWords />
      </div>
    </div>
  </div>
</template>

<script>
import AllAddedWords from '@/components/AllAddedWords.vue'
// @ is an alias to /src

export default {
  name: 'Detail',
  components: {
    AllAddedWords
  }
}
</script>
