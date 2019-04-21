<template>
    <div id="selectedItem">
        <h1>{{ $store.state.selectedDataDescription.name }}</h1>
        <ul>
            <li v-for="(e, i) of $store.state.selectedDataDescription" v-if="i !== 'name'"><span> {{ i }} : </span>{{ e }}</li>
        </ul>
        <div v-for="(e, i) of $store.state.selectedDataInformations" v-if="e.length !== 0">
            <h2>{{ i }}</h2>
            <hr>
            <ul>
                <li v-for="feature of e" v-if="$store.state.data[feature] !== undefined" v-on:click="select(feature, i)">
                    {{ i === 'films' ? $store.state.data[feature].title :  $store.state.data[feature].name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

  export default {
    name: 'Selection',
    data() {
        return {
            v1:0
        }
    },
    methods: {
      select(url, type) {
        console.log('type', type)
        this.$store.commit('SET_SELECTED', {url, type})
      }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >


#selectedItem {
    width:50%;
    overflow-y: scroll;
    position: fixed;
    height: 100%;
    background-color: #333;
}
</style>
