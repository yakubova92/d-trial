<template>
  <div class="people-sort-filter">
    <form id='roles' @submit.prevent="applyFilter">
      <h3> Sort </h3>
      <input type="radio" id="first-az" value="first name A-Z" v-model="sortSelection">
      <label for="fist-az">first name A-Z</label>
      <input type="radio" id="first-za" value="first name Z-A" v-model="sortSelection">
      <label for="first-za">first name Z-A</label>
      <br>
      <input type="radio" id="last-az" value="last name A-Z" v-model="sortSelection">
      <label for="last-az">last name A-Z</label>
      <input type="radio" id="last-za" value="last name Z-A" v-model="sortSelection">
      <label for="last-za">last name Z-A</label>
      <br>
      <input type="radio" id="email" value="email A-Z" v-model="sortSelection">
      <label for="email-az">email A-Z</label>
      <input type="radio" id="email-za" value="email Z-A" v-model="sortSelection">
      <label for="email-za">email Z-A</label>
      <br>

      <h3> Filter </h3>
      <h4> Roles </h4>
      <input type="checkbox" id="administrator" value="Administrator" v-model="checkedRoles">
      <label for="administrator">Administrator</label>
      <input type="checkbox" id="arranger" value="Arranger" v-model="checkedRoles">
      <label for="arranger">Arranger</label>
      <input type="checkbox" id="traveler" value="Traveler" v-model="checkedRoles">
      <label for="traveler">Traveler</label>
      <br>

      <h4> Status </h4>
      <input type="checkbox" id="active" value="Active" v-model="checkedStatus">
      <label for="administrator">Active</label>
      <input type="checkbox" id="pending" value="Pending" v-model="checkedStatus">
      <label for="arranger">Pending</label>
      <br>

      <h4> Group </h4>
      <input type="checkbox" id="executives" value="Executives" v-model="checkedGroup">
      <label for="executives">Executives</label>
      <input type="checkbox" id="staff" value="Staff" v-model="checkedGroup">
      <label for="staff">Staff</label>
      <br>
      <h4> You have selected: </h4>
      <div>Sort: {{ sortSelection }} </div>
      <div>Roles: {{ checkedRoles }} | Status: {{ checkedStatus }} | Group {{ checkedGroup }}</div>
      <br>
      <button type="submit">Apply Filter</button>
    </form>
    <button @click="clearFilter">Clear Filter</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'PeopleSortNFilter',
  data() {
    return {
      sortSelection: '',
      checkedRoles: [],
      checkedStatus: [],
      checkedGroup: [],
      peopleFromJSON: []
    }
  },
  components: {
  },
  computed: {
  },
  methods: {
    ...mapMutations([
      'APPLY_FILTER',
      'CLEAR_FILTER'
    ]),
    applyFilter: function () {
      const selectedSort = this._data.sortSelection
      const selectedFilters = {
        role: this._data.checkedRoles,
        status: this._data.checkedStatus,
        group: this._data.checkedGroup
      }
      const filterInfo = {selectedSort, selectedFilters}
      this.APPLY_FILTER(filterInfo)
    },
    clearFilter: function () {
      this._data.sortSelection = '';
      this._data.checkedRoles = []
      this._data.checkedStatus = []
      this._data.checkedGroup = []
      this.CLEAR_FILTER()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h4 {
  margin: 10px;
}
p {
  font-weight: bold;
}
</style>
