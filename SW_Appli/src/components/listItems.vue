<template>
    <div id="listItems">
        <h2>Films</h2>
        <hr>
        <ul>
            <li :key="i" v-for="(e, i) of this.$store.state.films" @click="select(e, 'films')">
                {{ $store.state.data[e].title }}
            </li>
        </ul>

        <h2>Personnages</h2>
        <hr>
        <ul>
            <li :key="i" v-for="(e, i) of this.$store.state.people" @click="select(e, 'people')">
                {{ $store.state.data[e].name }}
            </li>
        </ul>

        <h2>Vaisseau</h2>
        <hr>
        <ul>
            <li :key="i" v-for="(e, i) of this.$store.state.starships" @click="select(e, 'starships')">
                {{ $store.state.data[e].name }}
            </li>
        </ul>

        <h2>Planète</h2>
        <hr>
        <ul>
            <li :key="i" v-for="(e, i) of this.$store.state.planets" @click="select(e, 'planets')">
                {{ $store.state.data[e].name }}
            </li>
        </ul>

        <h2>Species</h2>
        <hr>
        <ul>
            <li :key="i" v-for="(e, i) of this.$store.state.species" @click="select(e, 'species')">
                {{ $store.state.data[e].name }}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'

  async function fillArray (update, type) {
    let t = type
    let continuer = true

    let promise = Array()
    let start = 0
    dataL.size[type] = undefined
    while (continuer) {
      for (let i = 1; i < 20; i++) {

        let req = 'https://swapi.co/api/' + type + '/' + (i + start) + '/'
        promise[promise.length] = new Promise(function (resolve) {
          axios.get(req)
            .then(e => {
              update.$store.commit('ADD_ITEM', {type, object: e.data})
              // dataL.data[e.data.url] = e.data
              // dataL[type].push(e.data.url)
              update.$forceUpdate()
              resolve()
            })
            .catch(() => {
              resolve()
              continuer = false
            })
        })
      }
      start += 10
      await Promise.all(promise)
      promise = Array()
    }
  }
  async function fillPromise(update, type) {

    return new Promise(async function (resolve) {
      await fillArray(update, type)
      resolve()
    })
  }
  async function getInformations (update) {

    dataL['size'] = {}
    let films = fillPromise(update, 'films')
    let planets = fillPromise(update, 'planets')
    let starships = fillPromise(update, 'starships')
    let vehicles = fillPromise(update, 'vehicles')
    let species = fillPromise(update, 'species')
    let people = fillPromise(update, 'people')
    await Promise.all([films,
      planets,
      starships,
      vehicles,
      species,
      people
    ])
  }
  let dataL = {
    data: {},
    films: [],
    planets: [],
    starships: [],
    species: [],
    people: []
  }
  export default {
    name: 'listItem',
    props: {
      msg: String
    },
    data() {
      return dataL
    },
    created () {
      getInformations(this)
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

    #listItems {
        width: 50%;
        overflow-y: scroll;
        position: fixed;
        left: 50%;
        height: 100%;
        background-color: #333;
    }

</style>
