<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-6">
        <NewWords @update-two="updateData" />
        <LatestAdded :updateData="update" />
      </div>
      <div class="col-12 col-lg-5 offset-lg-1">
        <h1>Welcome to Germantionary</h1>
      </div>
    </div>
  </div>
</template>

<script>
import NewWords from '@/components/addnewword/NewWords.vue'
import LatestAdded from '@/components/latestadded/LatestAdded.vue'

// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    NewWords,
    LatestAdded
  },
  data() {
    return {
      update: null
    }
  },
  methods: {
    updateData(value) {
      this.update = value
    }
  }
}
</script>
