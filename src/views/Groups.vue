<template>
  <div class="groups">
    <Header />
    <Navbar />
    <h1>Groups</h1>
    <card-group :groups="groups">
      <template slot-scope="{ group }" class="card"></template>
    </card-group>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'
import CardGroup from '@/components/CardGroup.vue'

export default {
  name: 'home',
  components: {
    Header,
    Navbar,
    CardGroup
  }
}
</script>
