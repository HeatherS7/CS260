<template>
<div class="readBook">
  <h2>{{book.title}}</h2>
  <h3>by {{book.author}}</h3>
  <p>{{book.story}}</p>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ReadBook',
  props: ['chosenBook'],
  data() {
    return {
      book: {
        title: "title",
        author: "author",
        story: "story"
      }
    }
  },
  created() {
    this.getBook();
  },
  methods: {
    async getBook() {
      try {
        let response = await axios.get('/api/book/' + selectedBook.id);
        this.book = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style scoped>
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
</style>