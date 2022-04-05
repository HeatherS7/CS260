<template>
<div class="form">
  <form class="bookForm">
    <label for="title">Title: </label>
    <input type="text" id="title" name="title" v-model="title" required>
    <br>
    <label for="author">Author: </label>
    <input type="text" id="author" name="author" v-model="author" required>
    <br>
    <textarea id="book" v-model="story" placeholder="Write your short story here..." required></textarea>
    
  </form>
  <p class="errorMsg">{{errorMsg}}</p>
  <button type="submit" @click="save" class="button">Save</button>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'BookForm',
  props: ['bookId'],
  data() {
    return {
      title: "",
      author: "",
      story: "",
      errorMsg: "",
      book: null
    }
  },
  created() {
    console.log(bookId);
    if (bookId != null) {
      this.book = getBook();
      if (this.book) {
        this.title = this.book.title,
        this.author = this.book.author,
        this.story = this.book.story
      }
    }
  },
  methods: {
    async save() {
      if (this.title == "" || this.author == "" || this.story == "") {
        this.errorMsg = "Please fill out all fields";
        return;
      }

      try {
        if (bookId) {
          let response = await axios.put("/api/book/" + bookId, {
            title: this.title,
            author: this.author,
            book: this.story
          })
          this.$emit('editedBook', this.title);
        } else {
          let response = await axios.post("/api/book", {
          author: this.author,
          title: this.title,
          story: this.story
        });
        this.$emit('addedBook', this.title);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getBook() {
      try {
      let response = await axios.get("/api/book/" + bookId);
      return response.data;
      } catch (error) {
        console.log(error);
        return null;
      }
    }
  }
}
</script>

<style scoped>
/* label {
  text-align: left;
} */
input[type="text"], textarea {
  font-size: 1.25em;
  text-align: left;
  margin: 0.125em 0.5em;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

input {
  width: 80%;
  text-align: right;
}

textarea {
  width: 90%;
  height: 75vh;
}

p {
  font-size: 1.25em;
  text-align: center;
  color: red;
}
</style>