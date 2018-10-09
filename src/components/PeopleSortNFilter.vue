<template>
  <div class="people-sort-filter">
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
      checkedGroup: []
    }
  },
  components: {
  },
  computed: {
  },
  methods: {
    ...mapMutations([
      'APPLY_FILTER',
    ]),
    applyFilter: function () {
      const selectedFilters = {
        role: this._data.checkedRoles,
        status: this._data.checkedStatus,
        group: this._data.checkedGroup
      }
      this.APPLY_FILTER(selectedFilters)
    }
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
