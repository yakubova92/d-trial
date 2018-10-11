<template>
  <div class="people-display">
    <div class="card" v-for="person in filterPeople" v-bind:key="person.id">
      <div class="identity">
        <h3> Name </h3>
        <p>{{ person.first }} {{ person.last }} </p>
        <p>{{ person.email }} </p>
      </div>
      <div class="role">
        <h3> Role Type </h3>
        <p>{{ person.role }} </p>
        <p>{{ person.status }} </p>
      </div>
      <div class="group">
        <h3> Group </h3>
        <p>{{ person.group }} </p>
      </div>
    </div>
  </div>
</template>

<script>
//import PeopleSortNFilter from '@/components/PeopleSortNFilter.vue'

import { mapGetters } from 'vuex';

export default {
  name: 'PeopleDisplay',
  components: {
    //PeopleSortNFilter
  },
  computed: {
    ...mapGetters([
      'filterPeople'
    ]),
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 0px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
p {
  margin: 0px
}
.card {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid grey;
}
.identity {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px dotted red;
}
.role {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px dotted blue;
}
.group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px dotted green;
}
.typo__label {
  border: 1px solid red;
}
.form__label {
  border: 1px solid blue;
}

</style>
