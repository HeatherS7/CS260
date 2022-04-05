<template>
<div class="editBook">
  <div v-if="!isConfirmed">
    <BookForm :bookId="this.bookId" @editedBook="editedBook($event)" />
  </div>
  <div v-else>
    <h2>Successfully edited {{this.bookTitle}}</h2>
  </div>
</div>
</template>

<script>
import BookForm from '@/components/BookForm.vue';
export default {
  name: 'EditBookView',
  components: {
    BookForm
  },
  data() {
    return {
      isConfirmed: false,
      bookId: "",
      bookTitle: ""
    }
  },
  created() {
    this.bookId = this.$route.params.id;
  },
  methods: {
    editedBook(bookTitle) {
      this.bookTitle = bookTitle
      this.isConfirmed = true;
    }
  }
}
</script>
