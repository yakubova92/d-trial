import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
//import VueAxios from 'vue-axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    people: [],
    groups: [
      {id: 1, name: 'Royalty', description: 'those who have ruled Westeros', members: 5, policy: 'first class'},
      {id: 2, name: 'Lords and Ladies', description: 'those of high birth', members: 6, policy: 'business class'},
      {id: 3, name: 'The Nights Watch', description: 'the watchers on the wall', members: 4, policy: 'coach'},
      {id: 4, name: 'Peasants', description: 'the lowborn', members: 3, policy: 'cargo'}
    ],
    sortBy: '',
    filterBy: {
      role: [],
      status: [],
      group: []
    },
    todos: [
      {id: 1, text: 'learn slots', complete: false},
      {id: 2, text: 'practice slots', complete: true},
      {id: 3, text: 'apply to delta', complete: false},
      {id: 4, text: 'make it work in the store', complete: true}
    ]
  },
  getters: {
    todos: state => {
      return state.todos;
    },
    totalTodos: state => {
      return state.todos.length;
    },
    filterPeople: state => {
      let people = state.people
      const sortBy = state.sortBy

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
      people = people.sort(function (a, b){
        let A;
        let B;
        switch (sortBy) {
          case 'first name A-Z':
            A = a.first.toUpperCase();
            B = b.first.toUpperCase();
            if (A < B) return -1;
            if (A > B) return 1;
            return 0;
          case 'first name Z-A':
            A = a.first.toUpperCase();
            B = b.first.toUpperCase();
            if (A > B) return -1;
            if (A < B) return 1;
            return 0;
          case 'last name A-Z':
            A = a.last.toUpperCase();
            B = b.last.toUpperCase();
            if (A < B) return -1;
            if (A > B) return 1;
            return 0;
          case 'last name Z-A':
            A = a.last.toUpperCase();
            B = b.last.toUpperCase();
            if (A > B) return -1;
            if (A < B) return 1;
            return 0;
          case 'email A-Z':
            A = a.email.toUpperCase();
            B = b.email.toUpperCase();
            if (A < B) return -1;
            if (A > B) return 1;
            return 0;
          case 'email Z-A':
            A = a.email.toUpperCase();
            B = b.email.toUpperCase();
            if (A > B) return -1;
            if (A < B) return 1;
            return 0;
          default:
            break;
        }
      })
      return people;
    },
    groups: state => {
      console.log('hit getGroups in store')
      console.log(state.groups)
      return state.groups
    },
    totalPeople: (state, getters) => {
      const total = getters.filterPeople.length;
      return total;
    },
    totalGroups: state => {
      return state.groups.length
    }
  },
  mutations: {
    SET_PEOPLE (state, people) {
      state.people = people
    },
    APPLY_FILTER: (state, payload) => {
      const result = {role: [], status: [], group: []}
      result.role = payload.selectedFilters.role;
      result.status = payload.selectedFilters.status;
      result.group = payload.selectedFilters.group;
      state.filterBy = {...state.filterBy, ...result};
      state.sortBy = payload.selectedSort
      console.log('state.sortBy', state.sortBy)
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
    loadPeople ({ commit }) {
      axios
        .get('http://localhost:4000/people')  //run this in terminal: json-server --watch src/data/db.json --port 4000
        .then(r => r.data)
        .then(people => {
        commit('SET_PEOPLE', people)
        })
    }
  }
})
