<template>
  <div class="date">
    <slot /><span>{{ dateFormat }}</span>
  </div>
</template>

<script>
export default {
  name: 'ItemDate',
  props: {
    wordDate: {
      type: Number,
      default: null
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
