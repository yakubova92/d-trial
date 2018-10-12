<template>
  <div class="people-sort-filter">
    <!-- <div>
      {{ peopleFromJSON }}
    </div> -->
    <form id='roles' @submit.prevent="applyFilter">
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
      <span>Roles: {{ checkedRoles }} | Status: {{ checkedStatus }} | Group {{ checkedGroup }}</span>
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
      checkedRoles: [],
      checkedStatus: [],
      checkedGroup: [],
      peopleFromJSON: []
    }
  },
  // created() {
	// 	fetch('people.json')
	// 	.then(res => res.json())
	// 	.then(res => {
	// 		this.peopleFromJSON = res;
	// 		console.log('loaded');

	// 		this.newPeople();

	// 		setInterval(() => {
	// 			this.newPeople();
	// 		}, 6000);

	// 	});
	// },
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
      const selectedFilters = {
        role: this._data.checkedRoles,
        status: this._data.checkedStatus,
        group: this._data.checkedGroup
      }
      this.APPLY_FILTER(selectedFilters)
    },
    clearFilter: function () {
      this._data.checkedRoles = []
      this._data.checkedStatus = []
      this._data.checkedGroup = []
      this.CLEAR_FILTER()
    },
    // newPeople() {
    //   return this._data.peopleFromJSON
		// 	// index = getRandomInt(0, this.quotes.length-1);
		// 	// app.text = this.quotes[index];
		// 	// app.loading='';
		// }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
p {
  font-weight: bold;
}
.people-sort-filter {
  border: 2px solid black;
}
</style>
