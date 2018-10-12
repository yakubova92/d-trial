import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
//import VueAxios from 'vue-axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    people: [],
    sortBy: '',
    filterBy: {
      role: [],
      status: [],
      group: []
    }
  },
  getters: {
    filterPeople: state => {
      let people = state.people
      if (state.filterBy.role.length){ // if roles were selected in the filter
        people = people.filter((person) => { // find people who match those roles
          if(state.filterBy.role.indexOf(person.role) !== -1) return person
        })
      }
      if (state.filterBy.status.length){ // if status was selected in the filter
        people = people.filter((person) => {
          if(state.filterBy.status.indexOf(person.status) !== -1) return person
        })
      }
      if (state.filterBy.group.length){ // if groups were selected in the filter
        people = people.filter((person) => {
          if (state.filterBy.group.indexOf(person.group) !== -1) return person
        })
      }
      // add sorting logic here
      return people;
    },
    totalPeople: (state, getters) => {
      const total = getters.filterPeople.length;
      return total;
    }
  },
  mutations: {
    SET_PEOPLE (state, people) {
      state.people = people
    },
    APPLY_FILTER: (state, payload) => {
      const result = {role: [], status: [], group: []}
      result.role = payload.role;
      result.status = payload.status;
      result.group = payload.group;
      state.filterBy = {...state.filterBy, ...result};
    },
    CLEAR_FILTER: (state) => {
      state.filterBy = {
        role: [],
        status: [],
        group: []
      }
    }
  },
  actions: {
    loadCoins ({ commit }) {
      axios
        .get('http://localhost:4000/people')  //run this in terminal: json-server --watch src/data/db.json --port 4000
        .then(r => r.data)
        .then(people => {
        commit('SET_PEOPLE', people)
        })
    }
  }
})
