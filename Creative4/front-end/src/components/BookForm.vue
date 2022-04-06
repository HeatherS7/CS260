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
  props: {
    fullbook: Object
  },
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
    if (this.fullbook?._id != null) {
      this.getBook()
        .then(book => {
          console.log(book);
          if (book) {
            this.title = this.book.title,
            this.author = this.book.author,
            this.story = this.book.book
          }
        })
    }
  },
  methods: {
    async save() {
      if (this.title == "" || this.author == "" || this.story == "") {
        this.errorMsg = "Please fill out all fields";
        return;
      }

      try {
        if (this.fullbook?._id != null) {
          let response = await axios.put("/api/book/" + this.fullbook._id, {
            title: this.title,
            author: this.author,
            book: this.story
          })
          console.log(response);
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
      let response = await axios.get("/api/book/" + this.fullbook._id);
      this.book = response.data[0];
      return this.book;
      } catch (error) {
        console.log(error);
        return null;
      }
    }
  }
}
</script>

<style scoped>
label {
  color: white;
  text-align: left;
  margin: 0.125em 0.5em;
}

form {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}
input[type="text"], textarea {
  font-size: 1.25em;
  text-align: left;
  margin: 0.125em 0.5em;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

input {
  width: 50vw;
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

.button {
  margin-bottom: 10vh;
}
</style>