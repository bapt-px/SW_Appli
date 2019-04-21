<template>
  <div id="app">
    <div id="choose_item">
        <Selection></Selection>
    </div>
      <div id="list_items">
        <list-items></list-items>
      </div>
  </div>
</template>

<script>
import listItems from './components/listItems'
import Selection from './components/Selection'

export default {
  name: 'app',
  components: {
    listItems,
    Selection
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: #333;
}
span {
    font-weight: bold;
}

h2, h1 {
    color: #ffe300;
}

li {
    text-align : left;
}



</style>
