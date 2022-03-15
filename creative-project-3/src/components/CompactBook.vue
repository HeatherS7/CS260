<template>
  <div class="compact">
    <div class="books">
      <div class="book" v-for="book in books" :key="book.title">
        <div class="wrapper" @click.prevent="selectSeries(book)">
          <div v-if="book.bookImage !== null">
            <img :src="'/images/' + book.bookImage" :alt=book.seriesName>
          </div>
          <div v-else>
            <img :src="'/images/NotAvailable.jpg'" :alt=book.seriesName style="margin-bottom: 0">
            <h2 style="margin-top: 0">{{book.seriesName}}<br>by {{book.author}}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompactBooks',
  props: {
    books: Array
  },
  methods: {
    selectSeries(book) {
      this.$emit('selectSeries', book)
    }
  }
}
</script>

<style scoped>
.books {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
}
img {
  height: 40vh;
  margin: 1vh;
}

@media only screen and (max-width: 768px) {
  img {
    height: 20vh;
  }
}
</style>