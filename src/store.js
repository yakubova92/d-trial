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
      {id: 6, first: 'Arya', last: 'Stark', email: 'astark@gmail.com', role: 'Traveler', status: 'Active', group: 'Support Staff'},
      {id: 7, first: 'Theon', last: 'Greyjoy', email: 'jdoe@gmail.com', role: 'Traveler', status: 'Active', group: 'Support Staff'},
      {id: 8, first: 'Khal', last: 'Drogo', email: 'kdrogo@gmail.com', role: 'Administrator', status: 'Pending', group: 'Executives'},
    ]
  },
  mutations: {

  },
  actions: {

  }
})
