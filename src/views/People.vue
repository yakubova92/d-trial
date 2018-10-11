<template>
  <div class="people">
    <Header />
    <Navbar />
    <h1>This is a people page</h1>
    <PeopleSortNFilter />
    <PeopleDisplay />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'
import PeopleSortNFilter from '@/components/PeopleSortNFilter.vue'
import PeopleDisplay from '@/components/PeopleDisplay.vue'

export default {
  name: 'home',
  components: {
    Header,
    Navbar,
    PeopleSortNFilter,
    PeopleDisplay
  }
}
</script>
