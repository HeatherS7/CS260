<template>
<div class="wrapper">
  <h1>{{series.seriesName}}</h1>
  <h2>by {{series.author}}</h2>
  <div class="seriesContent">
    <div v-if="series.bookImage !== null">
      <img :src="'/images/' + series.bookImage" :alt=series.seriesName>
    </div>
    <div v-else>
      <img :src="'/images/NotAvailable.jpg'" :alt=series.seriesName>
    </div>
    <div class="books">
      <h3>Books in series</h3>
      <div v-for="book in series.books" :key="book.bookNumber">
        <h4>#{{book.bookNumber}}: {{book.title}}</h4>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'SeriesComponent',
  props: {
    series: Object
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital@1&family=Rubik:wght@400&display=swap');
.seriesContent {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
}

.books {
  margin: 0 5vw;
}

img {
  height: 40vh;
  text-align: center;
  margin-top: 5vw;
}

h1, h2, h3, h4 {
  font-family: 'Merriweather', serif;
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.75rem;
}

h3 {
  text-align: left;
  font-size: 1.5rem;
}

h4 {
  text-align: left;
  font-size: 1rem;
}

</style>