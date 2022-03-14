<template>
  <div class="home">
    <BookOverview :books="books" />
  </div>
</template>

<script>
import BookOverview from '../components/AllBooks.vue'
export default {
  name: 'HomeView',
  components: {
    BookOverview
  },
  computed: {
    books() {
      return this.$root.$data.allBooks
    }
  }
}
</script>
