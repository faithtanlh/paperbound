<template>
  <nav>
    <Header />
  </nav>
  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    Header
  }
}

</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Libre+Caslon+Text&family=Montserrat:wght@600&display=swap');

body {
  background-color: #F8F3ED;
  font-family: 'Montserrat', 'Libre Caslon Text', sans-serif;
  color: #2C1810;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 40px;
  padding-left: 10%;
  padding-right: 10%;
}

nav a {
  font-weight: bold;
  color: #2C1810;
}

/* route transitions */
.route-enter-from {
  opacity: 0;
  transform: translateX(200px)
}

.route-enter-active {
  transition: ass 0.5s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px)
}

.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
