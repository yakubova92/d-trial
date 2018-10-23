<template>
  <div class="groups">
    <Header />
    <Navbar />
    <h1>Groups</h1>
    <display-group :groups="groups">
      <template slot-scope="{ group }" class="card"></template>
    </display-group>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'
import DisplayGroup from '@/components/DisplayGroup.vue'

export default {
  name: 'home',
  components: {
    Header,
    Navbar,
    DisplayGroup
  }
}
</script>

