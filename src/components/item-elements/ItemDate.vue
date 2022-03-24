<template>
  <div class="date">
    Added in: <span>{{ dateFormat }}</span>
  </div>
</template>

<script>
export default {
  name: 'Item Date',
  props: {
    wordDate: {
      type: String,
      default: ''
    }
  },
  computed: {
    dateFormat() {
      return new Date(this.wordDate * 1000).toLocaleString('en-GB', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      })
    }
  }
}
</script>
<style scoped lang="scss">
.date {
  font-size: 11px;
}
</style>
