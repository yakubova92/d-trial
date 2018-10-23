<template>
  <div class="people">
    <Header />
    <Navbar />
    <h1>People</h1>
    <router-link to="/groups">Groups</router-link> |
    <!-- <PeopleDisplay /> -->
    <display-people :filterPeople="filterPeople">
      <template slot-scope="{ person }" class="card"></template>
    </display-people>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'
import DisplayPeople from '@/components/DisplayPeople.vue'
// import PeopleDisplay from '@/components/PeopleDisplay.vue'

export default {
  name: 'home',
  components: {
    Header,
    Navbar,
    DisplayPeople
    // PeopleDisplay
  }
}
</script>
