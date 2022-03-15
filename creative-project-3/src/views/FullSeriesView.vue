<template>
  <div class="seriesView">
    <div v-if="this.hasSeries">
      <SeriesComponent :series="selectedSeries" />
      <button @click.prevent="selectOtherSeries" class="button">Select another series</button>
    </div>
    <div v-else>
      <h1>Pick a series to view</h1>
      <CompactBooks :books="bookSeries" @selectSeries="chooseSeries($event)" />
    </div>
  </div>
</template>

<script>
import CompactBooks from '../components/CompactBook.vue'
import SeriesComponent from '../components/SeriesComponent.vue'

export default {
  name: 'FullSeriesView',
  data() {
    return {
      hasSeries: false,
      selectedSeries: null
    }
  },
  components: {
    CompactBooks,
    SeriesComponent
  },
  created() {
    this.selectedSeries = this.$route.params.series
    if (this.selectedSeries) {
      this.hasSeries = true;
    } else {
      this.selectedSeries = null;
      this.hasSeries = false;
    }
  },
  methods: {
    chooseSeries(series) {
      console.log(`in full series: seriesName is ${series.seriesName}`)
      this.selectedSeries = series
      this.hasSeries = true
    },
    selectOtherSeries() {
      this.hasSeries = false;
      this.selectedSeries = null;
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
    },
    bookSeries() {
      return this.$root.$data.allBooks
    }
  }
}
</script>

<style scoped>
button {
  height: 1.5rem;
  margin: 2em;
  background: #6A72F7;
  color: black;
  border: none;
  font-size: 1rem;
  border-radius: 20px;
  padding: 1.5em;
  text-align: center;
  align-items: center;
}

button:hover {
  background: #262959;
  color: white;
}

button:active {
  background: black;
  color: white;
}
</style>
