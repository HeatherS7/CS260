<template>
  <div class="addBook">
    <div v-if="!(this.added)">
    <form id="bookForm">
      <label for="title">Book series:</label>
      <input type="text" id="title" name="title" v-model="title" required><br>
      <label for="author">Author:</label>
      <input type="text" id="author" name="author" v-model="author" required><br>
      <label for="description">Series description:</label>
      <input type="text" name="description" v-model="description" required><br>
      <label for="webLink">Website link:</label>
      <input type="text" id="webLink" name="webLink" v-model="webLink"><br>
      <label for="numBooks">Number of books in series:</label>
      <input type="number" min=1 id="numBooks" name="numBooks" v-model="numBooks" required><br>

      <button type="submit" @click.prevent="submit" class="submit">Submit series</button> 
      <p class="errorMsg"><i>{{errorMsg}}</i></p>
      <div v-if="books.length > 0">
        <h2>Books added to series</h2>
        <div v-for="book in this.books" :key="book.title">
          <p>Book title: {{book.title}}</p>
          <p>Number: {{book.bookNumber}}</p>
        </div>
      </div>

      <button type="button" @click.prevent="addABook" class="submit">Add a book to series</button>
      <div v-if="this.addedBooks > 0">
        <div class="bookInSeries" v-for="index in this.addedBooks" :key="index">
          <BookInSeries @addNewBook="updateBookInfo($event)" />
        </div>
      </div>
      <br>
    </form>
    </div>
    <div v-else>
      <h2>Successfully added {{title}}</h2>
      <button @click="addAnother" class="submit">Add another book series</button>
      <button><router-link to = "/">Return home</router-link></button>
    </div>
  </div>
</template>

<script>
import BookInSeries from "./AddBooksInSeries.vue"
export default {
  name: 'AddBook',
  components: {
    BookInSeries
  },
  data() {
    return {
      title: '',
      author: '',
      description: '',
      webLink: '',
      numBooks: null,
      added: false,
      errorMsg: '',
      books: [],
      addedBooks: 0
    }
  },
  methods: {
    updateBookInfo(newBook) {
      this.books.push(newBook)
      console.log(newBook.title)
      this.addedBooks = 0
    },
    submit() {
      this.errorMsg = ''
      if (this.webLink === '') {
        this.webLink = null
      }
      if (this.title === '') {
        this.errorMsg = "Please enter a valid book series"
      } else if (this.author === '') {
        this.errorMsg = "Please enter a valid author"
      } else if (this.description === '') {
        this.errorMsg = "Please enter a valid description"
      } else if (this.numBooks == null) {
        this.errorMsg = "Please enter the number of books in the series"
      } else if (this.alreadyExists(this.title)) {
        this.errorMsg = "Book series already entered"
      } else {
          this.$root.$data.allBooks.push({
            seriesName: this.title,
            author: this.author,
            description: this.description,
            websiteLink: this.webLink ?? null,
            bookImage: null,
            numBooks: this.numBooks,
            books: this.books
          })
          this.added = true
          this.addedBooks = 0
      }
    },
    addABook() {
      this.addedBooks++
    },
    addAnother() {
      this.title = ''
      this.author = ''
      this.description = ''
      this.webLink = ''
      this.numBooks = null
      this.errorMsg = ''
      this.added = false,
      this.addedBooks = 0
      this.books = []
    },
    alreadyExists(title) {
      if (this.$root.$data.allBooks.find(item => item.seriesName === title)) {
        return true
      }
      return false
    }
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400&display=swap');
.addBook {
  display: flex;
  align-content: center;
  justify-content: center;
}

form {
  text-align: left;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  font-family: 'Rubik', sans-serif;
}

input {
  margin: 0;
  width: 50vw;
  font-size: 1.1rem;
}

label {
  font-size: 1.25rem;
}

h2 {
  font-size: 1.5rem;
}

p {
  font-size: 1rem;
}

.errorMsg {
  color: maroon;
  font-size: 1.25rem;
  font-family: 'Rubik', sans-serif;
  margin: 0;
}

button {
  font-size: 1.25rem;
  border-radius: 5px;
  border: none;
  background-color: #6A72F7;
  color: black;
  margin: 4vh 0 1vh 3vw;
}

button:hover {
  background-color: #262959;
  color: white;
}

button:active {
  background-color: black;
  color: white;
}

a {
  text-decoration: none;
  color: black;
}

@media only screen and (min-width: 768px) {
  input {
    width: 40vw;
    margin: 1vh;
    font-size: 1.25rem;
  }
  form {
    text-align: right;
    display: block;
  }
}

</style>