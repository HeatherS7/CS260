<template>
<div class="wrapper">
  <div class="books">
    <div class="book" v-for="book in books" :key="book.title">
      <div class="wrapper">
      <div class="image">
        <div v-if="book.bookImage !== null">
          <img :src="'/images/' + book.bookImage" alt="Book image">
        </div>
        <div v-else>
          <img :src="'/images/NotAvailable.jpg'" alt="Book image not available">
        </div>
      </div>
      <div class="description">
        <h2>{{book.seriesName}}</h2>
        <h3>by {{book.author}}</h3>
        <p>{{book.description}}</p>
      </div>
      </div>
      <div class="buttons">
        <button v-if="book.websiteLink !== null" @click="visitWebsite(book.websiteLink)" class="visitWebsite">Visit book website</button>
        <button @click.prevent="viewSeries(book)" class="viewSeries">View full series</button>
      </div>
    </div>
  </div>
</div>
</template>


<script>
export default {
  name: 'BookOverview',
  props: {
    books: Array
  },
  methods: {
    visitWebsite(link) {
      window.location = link;
    },
    viewSeries(book) {
      this.$root.$data.selectedBook = book
      console.log(`selected book is ${book}`)
      window.location = "/fullSeries";
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital@1&family=Rubik:wght@400&display=swap');
.books {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
}

.wrapper {
  display: flex;
  align-items: top;
}

.book {
  padding: 0;
  margin-bottom: 10vh;
}

img {
  height: 20vh;
  margin: 1vh auto;
}

.description {
  display: block;
  text-align: left;
  margin: 1vh 5vw;
  font-family: 'Merriweather', serif;
}

h1 {
  font-size: 2.5rem;
  margin: 0;
}

h2 {
  font-size: 2rem;
  margin: 0;
}

h3 {
  font-size: 1.5rem;
}

p {
  font-size: 1rem;
  font-family: 'Rubik', sans-serif;
}

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

button {
  display: flex;
  margin: 0 2em;
  height: 2.125rem;
  background: #6A72F7;
  color: black;
  border: none;
  font-size: 1rem;
  border-radius: 20px;
  align-items: center;
  padding: 1.5em;
}

button:hover {
  background: #262959;
  color: white;
}

button:active {
  background: black;
  color: white;
}

@media only screen and (min-width: 768px) {
  .book {
    width: 40%;
  }
}

</style>