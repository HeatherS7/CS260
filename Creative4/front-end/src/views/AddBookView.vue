<template>
<div class="addBook">
  <div v-if="!confirmed">
    <BookForm @addedBook="addedBook($event)" />
  </div>
  <div v-else>
    <h2>Successfully added {{this.bookTitle}}</h2>
    <br>
    <button @click="addAnother" class="button">Add another story</button>
  </div>
</div>
</template>

<script>
import BookForm from "@/components/BookForm.vue";
export default {
  name: 'AddBookView',
  components: {
    BookForm
  },
  data() {
    return {
      confirmed: false,
      bookTitle: ""
    }
  },
  methods: {
    addedBook(title) {
      console.log(title);
      this.bookTitle = title;
      console.log(this.bookTitle);
      this.confirmed = true; 
    },
    addAnother() {
      this.bookTitle = false;
      this.confirmed = false;
    }
  }
}
</script>


<style scoped>
h2 {
  color: white;
}
</style>