<template>
  <div class="home">
    <div class="allBooks" v-if="!isSelected">
      <div class="book" v-for="book in this.books" :key="book._id" @click="viewBook(book)">
        <h2>{{book.title}}</h2>
        <h3>by {{book.author}}</h3>
      </div>
    </div>
    <div class="editBook" v-else-if="isEditing">
      <BookForm :bookId="this.fullBook._id" @editedBook="editedBook($event)"/>
    </div>
    <div class="viewBook" v-else>
      <div class="buttons">
        <button class="button" @click="editStory">Edit</button>
        <button class="button" @click="deleteStory">Delete</button>
        <button class="button" @click="returnToFullView">See all books</button>
      </div>
      <div class="story">
        <h2>{{fullBook.title}}</h2>
        <h3>by {{fullBook.author}}</h3>
        <hr>
        <p>{{fullBook.book}}</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import BookForm from '@/components/BookForm.vue';

export default {
  name: 'HomeView',
  components: {
    BookForm
  },
  data() {
    return {
      books: [],
      isSelected: false,
      fullBook: null,
      isEditing: false
    }
  },
  created() {
    this.getAllBooks();
  },
  methods: {
    async getAllBooks() {
      try {
        let response = await axios.get("/api/book");
        this.books = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    editStory() {
      this.isEditing = true;
    },
    async deleteStory() {
      try {
        await axios.delete("/api/book/" + this.fullBook._id);
        this.isSelected = false;
        this.books = this.getAllBooks();
        this.fullBook = null;
      } catch (error) {
        console.log(error);
      }
    },
    editedBook() {
      this.isEditing = false;
      this.fullBook = getBook(this.fullBook)
    },
    returnToFullView() {
      this.isSelected = false;
      this.fullBook = null;
    },
    viewBook(book) {
      console.log(book);
      this.selectedBook = this.getBook(book);
      this.isSelected = true;
    },
    async getBook(book) {
      try {
        let response = await axios.get('/api/book/' + book._id);
        this.fullBook = response.data[0];
        console.log(this.fullBook);
        return true;
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style scoped>
.allBooks {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
}
.book {
  background-color: #9FEB46;
  margin: 1.125em 1.5em;
  padding: 1.5em;
  border-radius: 30px;
  text-align: center;
  border: 2px solid black;
}

.book:hover {
  background-color: #6F9E37;
}

.story {
  background-color: #9FEB46;
  border-radius: 30px;
  padding: 1.5em;
  margin-top: 1.125em;
  height: 75vh;
}

.home {
  min-height: 50%;
}

h2, h3, p {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  text-align: left;
  margin: 0.125em 1em;
}
h2 {
  font-size: 1.5em;
}
h3 {
  font-size: 1.25em;
}
p {
  font-size: 1.125em;
}

@media only screen and (min-width: 1024px) {
  .book {
    width: 25%;
  }
}

@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .book {
    width: 50%;
  }
}

@media only screen and (max-width: 767px) and (min-width: 540px) {
  .book {
    width: 90%;
  }
}
</style>
