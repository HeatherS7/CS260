<template>
  <div class="series">
    <hr>
    <form id="series">
    <label for="bookTitle">Book title:</label>
    <input type="text" id="bookTitle" name="bookTitle" v-model="bookTitle" required><br>
    <label for="bookNumber">Book number:</label>
    <input type="number" id="bookNumber" name="bookNumber" v-model="bookNumber" min="1" required><br>
    <button type="submit" @click.prevent="submitBook()" class="submit">Add book</button>
  </form>
  </div>
</template>

<script>
export default {
  name: 'BookInSeries',
  data() {
    return {
      bookTitle: '',
      bookNumber: null
    }
  },
  methods: {
    addBook() {
      this.$root.$data.allBooks[this.title].books.push({
        likes: 0,
        dislikes: 0,
        bookNumber: this.bookNumber,
        title: this.bookTitle
      })
      console.log(this.title)
    },
    submitBook() {
      this.$emit('addNewBook',{
        bookNumber: this.bookNumber,
        title: this.bookTitle
      })
      this.bookTitle = ''
      this.bookNumber = null
    }
  }
}
</script>
