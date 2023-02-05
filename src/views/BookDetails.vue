<template>
  <div class="bookDetails">
    <h1>Hello World</h1>
    <h2>{{ getId }}</h2>
    <div v-if="fetched">
      <h3>{{ book[getISBN].title }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fetched: false,
      book: {}
    }
  },
  computed: {
    getId() {
      return this.$route.params.id;
    },
    getISBN() {
      return "ISBN:" + this.$route.params.id;
    }
  },
  mounted() {
    fetch("https://openlibrary.org/api/books?bibkeys=ISBN:" + this.getId + "&jscmd=data&format=json")
      .then(res => res.json())
      .then(data => this.book = data)
      .then(r => this.fetched = true)
  }
}
</script>

<style>

</style>