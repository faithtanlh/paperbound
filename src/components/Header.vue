<template>
  <img src="../assets/logo.png" id="logo" @click="onClick()" />
  <ul>
    <li :class="{ active: isActive('Home') }"><fa id="icon" icon="compass" />Discover</li>
    <li :class="{ active: isActive('BookDetails') }"><fa id="icon" icon="book" />Library</li>
    <!-- <li><router-link id="link" to="/"><fa id="icon" icon="compass" />Discover</router-link></li>
    <li><router-link id="link" :to="{ name: 'BookDetails' , params: {id: 1}}" exact-path><fa id="icon" icon="book" />Library</router-link></li> -->
  </ul>
</template>

<script>
export default {
    methods: {
        onClick() {
            this.$router.push({
                path: '/'
            })
        }, 
        isActive(routeName) {
            return this.$route.name == routeName;
        }
    }
}
</script>

<style scoped>
#logo {
    height: 70px;
}

#logo:hover {
    cursor: pointer;
}

nav ul li {
    list-style-type: none;
    display: inline-block;
    padding: 10px 40px;
    font-size: 18px;
    text-align: center;
    padding: 15px 35px;
}

nav ul li a {
    padding: 15px 35px;
}

nav ul li.active {
  background-color: #DAAA63;
  border-radius: 30px;
  padding: 15px 35px;
}

nav ul li a:hover {
  background-color: #DAAA63;
  border-radius: 30px;
}

#link {
    text-decoration: none;
}

#icon {
    padding-right: 10px;
    color: #2C1810;
}
</style>
