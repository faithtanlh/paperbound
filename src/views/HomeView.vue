<template>
  <div class="home">
    <!-- Top Shelf Row -->  
    <ShelfRow>
      <template v-slot:first>
        <div class="main-caption">
          <p>Find Your <br /> Favourite Book</p>
          <span>Explore new worlds from authors</span>
          <SearchBar v-model="searchValue" @change="onChange()"/>
          <fa v-if="!fetched" id="spinner" icon="spinner" class="fa-spin-pulse"/>
        </div>
      </template>
      <template v-slot:second v-if="filterBooksWithCovers.length > 1">
        <Book :books="filterBooksWithCovers" :fetched="fetched" :index="0" />
      </template>
      <template v-if="filterBooksWithCovers.length > 2" v-slot:third>
        <Book :books="filterBooksWithCovers" :fetched="fetched" :index="1" />
      </template>
    </ShelfRow>
    <!-- More Shelf Rows-->
    <div v-if="filterBooksWithCovers.length > 2">
      <div v-for="row in (Math.floor((filterBooksWithCovers.length - 2)/3))" :key="row">
        <ShelfRow>
          <template v-slot:first>
            <Book :books="filterBooksWithCovers" :fetched="fetched" :index="row*3 - 1"/>
          </template>
          <template v-slot:second>
            <Book :books="filterBooksWithCovers" :fetched="fetched" :index="row*3" />
          </template>
          <template v-slot:third>
            <Book :books="filterBooksWithCovers" :fetched="fetched" :index="row*3 + 1"/>
          </template>
        </ShelfRow>
      </div>
    </div>
  </div>
</template>

<script>
import ShelfRow from '../components/ShelfRow.vue'
import SearchBar from '../components/SearchBar.vue'
import Book from '../components/Book.vue'

export default {
  name: 'HomeView',
  components: {
    ShelfRow,
    SearchBar,
    Book
  },
  data() {
    return {
      fetched: false,
      books: [],
      searchValue: ""
    }
  },
  mounted() {
    fetch("https://openlibrary.org/search.json?q=books&limit=100")
      .then(res => res.json())
      .then(data => this.books = data.docs)
      .then(r => this.fetched = true)
    
  },
  computed: {
    filterBooksWithCovers() {
      return this.books.filter((o) => o.cover_i !== undefined)
    }
  },
  methods: {
    onChange() {
      this.fetched = false;
      fetch("https://openlibrary.org/search.json?q=" + this.searchValue + "&limit=100")
        .then(res => res.json())
        .then(data => this.books = data.docs)
        .then(r => this.fetched = true)
    }
  }
}
</script>

<style scoped>
#spinner {
  padding: 10px;
  margin: auto;
  font-size: 40px;
}

.main-caption {
    margin-top: 3%;
    height: 100%;
}

.main-caption span {
    color: #9B9089;
}

.main-caption p {
    font-family: 'Libre Caslon Text', sans-serif;
    font-weight: 600;
    font-size: 40px;
}
</style>
