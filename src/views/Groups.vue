<template>
  <div class="groups">
    <Header />
    <Navbar />
    <h1>Groups</h1>
    <GroupDisplay />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'
import GroupDisplay from '@/components/GroupDisplay.vue'

export default {
  name: 'home',
  components: {
    Header,
    Navbar,
    GroupDisplay
  }
}
</script>
