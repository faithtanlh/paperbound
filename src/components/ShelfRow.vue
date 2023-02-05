<template>
  <div class="shelf-row">
    <div class="shelf-row-space">
      <!-- First slot -->
      <slot name="first"></slot>
      <!-- Second slot -->
      <slot name="second"></slot>
      <!-- Third slot -->
      <slot name="third"></slot>
    </div>
    <Shelf />
  </div>
</template>

<script>
import Shelf from '../components/Shelf.vue'

export default {
    components: {
        Shelf
    },
    methods: {
    },
}
</script>

<style scoped>
.shelf-row {
    height: 45vh;
    margin-top: 5vh;
}

.shelf-row-space {
    display: flex;
    height: 100%;
    justify-content: space-evenly;
}
</style>