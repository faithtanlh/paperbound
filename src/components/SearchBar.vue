<template>
  <div class="home-search">
    <fa icon="magnifying-glass" id="search-icon"/>
    <input type="text" class="search-bar" placeholder="Titles, authors, or topics" 
        :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"/>
  </div>
</template>

<script>
export default {
    props: ['modelValue'],
    emits: ['update:modelValue']
}
</script>

<style>
#search-icon {
    padding: 26px 20px;
    position: absolute;
}

.home-search {
    display: flex;
    color: #9B9089;
}

.search-bar {
    margin: 5% 0px;
    padding-left: 50px;
    line-height: 40px;
    width: 100%;
    border: none;
    border-radius: 20px;
    font-size: 14px;
    font-family: sans-serif;
}

.search-bar::placeholder { 
    color: #9B9089;
}

</style>