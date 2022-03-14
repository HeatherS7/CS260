<template>
  <div class="seriesView">
    <div v-if="this.hasSeries">
      <h1>{{this.series.seriesName}}</h1>
    </div>
    <div v-else>
      <h1>Pick a series to view</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FullSeriesView',
  data() {
    return {
      hasSeries: false
    }
  },
  computed: {
    series() {
      if (this.$root.$data.selectedBook) {
        return this.$root.$data.selectedBook
      } else {
        console.log(this.$root.$data.selectedBook)
        return null
      }
    }
  }
}
</script>
