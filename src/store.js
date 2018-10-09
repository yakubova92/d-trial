import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    people: [
      {id: 1, first: 'Ned', last: 'Stark', email: 'nstark@gmail.com', role: 'Arranger', status: 'Pending', group: 'Executives'},
      {is: 2, first: 'Robert', last: 'Baratheon', email: 'rbaratheon@gmail.com', role: 'Administrator', status: 'Pending', group: 'Executives'},
      {id: 3, first: 'Jon', last: 'Snow', email: 'jsnow@gmail.com', role: 'Traveler', status: 'Active', group: 'Executives'},
      {id: 4, first: 'Dany', last: 'Targaryen', email: 'dtargaryen@gmail.com', role: 'Administrator', status: 'Active', group: 'Executives'},
      {id: 5, first: 'Tyrion', last: 'Lannister', email: 'tlannister@gmail.com', role: 'Arranger', status: 'Active', group: 'Executives'},
      {id: 6, first: 'Arya', last: 'Stark', email: 'astark@gmail.com', role: 'Traveler', status: 'Active', group: 'Staff'},
      {id: 7, first: 'Theon', last: 'Greyjoy', email: 'jdoe@gmail.com', role: 'Traveler', status: 'Active', group: 'Staff'},
      {id: 8, first: 'Khal', last: 'Drogo', email: 'kdrogo@gmail.com', role: 'Administrator', status: 'Active', group: 'Executives'},
    ],
    sortBy: '',
    filterBy: {
      role: [],
      status: [],
      group: []
    }
  },
  getters: {
    filterPeople: state => {
      let people = state.people;
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
    }
  },
  mutations: {
    APPLY_FILTER: (state, payload) => {
      const result = {role: [], status: [], group: []}
      result.role = payload.role;
      result.status = payload.status;
      result.group = payload.group;
      state.filterBy = result;
      // state is being reset here, this is probably not the best way to do it
      // use spread operator to create a copy of state.filterBy and reset that way
    }
  },
  actions: {

  }
})
