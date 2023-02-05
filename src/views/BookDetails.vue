<template>
  <div class="book-details">
    <div class="go-back" @click="$router.go(-1)">
      <fa icon="chevron-left" /> Back
    </div>
    <div v-if="fetched" class="book-info">
      <div class="book-cover">
        <img :src="getImgUrl(coverId)" />
      </div>
      <div class="book-desc">
        <h1>{{ book[getISBN].title }}</h1>
        <h3>{{ subtitle }}</h3>
        <p>{{ authorNames }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'id', 'coverId' ],
  data() {
    return {
      fetched: false,
      book: {}
    }
  },
  methods: {
    getImgUrl(coverId) {
      return "https://covers.openlibrary.org/b/id/" + coverId + "-L.jpg"
    },
    consoleLog() {
      console.log(this.coverId);
    }
  },
  computed: {
    getId() {
      return this.id;
    },
    getISBN() {
      return "ISBN:" + this.id;
    },
    authorNames() {
      var authors = new Set();
      if (this.book[this.getISBN].authors) {
        for (let i = 0; i < this.book[this.getISBN].authors.length; i++) {
          authors.add(this.book[this.getISBN].authors[i].name);
        }
        var authorStr = "By ";
        var count = 0;
        for (let author of authors.values()) {
          count++;
          if (authors.size == 1) {
            authorStr += author;
          } else if (count == authors.size) {
            authorStr += " and " + author;
          } else {
            authorStr += " " + author + ",";
          }
        }
      } else {
        return "No authors available"
      }
      return authorStr;
    },
    subtitle() {
      if (this.book[this.getISBN].subtitle) {
        return this.book[this.getISBN].subtitle;
      } else {
        return "";
      }
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
.go-back {
  cursor: pointer;
  transition: all .2s ease-in-out;
  width: 80px;
  padding-top: 20px;
}

.go-back:hover {
  transform: scale(1.1);
}

.book-info {
  display: inline-flex;
  width: 100%;
}

.book-cover {
  margin: 5%;
  width: auto;
  height: 10%;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
}

.book-desc {
  border-radius: 20px;
  width: 100%;
  padding: 10% 5%;
}

.book-desc h1 {
  font-family: 'Libre Caslon Text', sans-serif;
}

.book-desc p {
  color: #9B9089;
}

.book-details {
  padding: 2% 10%;
}
</style>