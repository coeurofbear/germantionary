<template>
  <div class="container">
    <GoBackButton />
    <div class="row">
      <div class="col-12">
        <AllAddedWords date />
      </div>
    </div>
  </div>
</template>

<script>
import AllAddedWords from '@/components/AllAddedWords.vue'
import GoBackButton from '@/components/GoBackButton.vue'
// @ is an alias to /src

export default {
  name: 'Detail',
  components: {
    AllAddedWords,
    GoBackButton
  }
}
</script>
