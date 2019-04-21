
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  data: {},
  films: [],
  planets: [],
  starships: [],
  species: [],
  people: [],
  selectedDataDescription: {name: ''},
  selectedDataInformations: {}
}

const mutations = {
  ADD_ITEM: (state, data) => {
    state.data[data.object.url] = data.object
    state[data.type].push(data.object.url)
  },
  SET_SELECTED: (state, selected) => {
    state.selectedDataDescription = {}
    state.selectedDataInformations = {}
    let data = state.data[selected.url]
    if (selected.type === 'films') data.name = data.title


    for(let key in data) {
      if (key !== 'title' && key !== 'type' && key !== 'url' && !/_id/.test(key)) {
        if (Array.isArray(data[key])) state.selectedDataInformations[key] = data[key]
        else if(/http/.test(data[key])) // sometime data referred to another pages
          state.selectedDataDescription[key] = state.data[data[key]] === undefined ? '' : state.data[data[key]].name
        else state.selectedDataDescription[key] = data[key]
      }
    }
    console.log(state.selectedDataDescription)
  }
}

const getters = {

}

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: {}
})
