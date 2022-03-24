<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <AddWordsSection />
      </div>
      <div class="col-12 col-lg-6">
        <LatestAddedSection />
      </div>
      <!-- <div class="col-12 col-lg-5 offset-lg-1">
        <h1>Welcome to Germantionary</h1>
      </div> -->
    </div>
  </div>
</template>

<script>
import AddWordsSection from '@/sections/AddWordsSection.vue'
import LatestAddedSection from '@/sections/LatestAddedSection.vue'

// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    AddWordsSection,
    LatestAddedSection
  }
}
</script>
