<template>
  <div class="featured-book" @click="navToBookDetails()">
    <div v-if="fetched && books[index]">
      <img id="book" :class="getClass(index)" :src="getImgUrl(books[index].cover_i)" />
    </div>
  </div>
</template>

<script>
export default {
    props: ['fetched', 'books', 'index'],
    methods: {
      getImgUrl(coverId) {
        return "https://covers.openlibrary.org/b/id/" + coverId + "-L.jpg"
      },
      getClass(index) {
        if (index % 2 == 0) {
          return "one";
        } else {
          return "two";
        } 
      },
      navToBookDetails() {
        this.$router.push({
          name: 'BookDetails',
          params: {
            id: this.books[this.index].isbn[0],
          }
        })
      }
    }
}
</script>

<style>
#book {
  position: absolute;
  bottom: -10px;
  left: -100px;
  max-height: 40vh;
  width: auto;
  max-width: 15vw;
  min-width: 200px;
  padding: 0px;
  border-radius: 3px 0.5px 0.5px 3px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25),
      inset 5px 0px 5px 2px rgba(29, 27, 27, 0.2);
}

#book.one:hover {
  transition: transform 600ms cubic-bezier(0.34, 1.56, 0.64, 1),
    opacity 600ms cubic-bezier(0.34, 1.56, 0.64, 1);
  transform: translate(0, -45px) skew(3deg, -3deg);
  cursor: pointer;
}

#book.two:hover {
  transition: transform 600ms cubic-bezier(0.34, 1.56, 0.64, 1),
    opacity 600ms cubic-bezier(0.34, 1.56, 0.64, 1);
  transform: translate(0, -45px) skew(-3deg, 3deg);
  cursor: pointer;
}

.featured-book {
  position: relative
}
</style>