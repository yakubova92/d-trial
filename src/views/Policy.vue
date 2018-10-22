<template>
  <div class="policy">
    <Header />
    <Navbar />
    <h1>This is a policy page</h1>
    <Display />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'
import Display from '@/components/Display.vue'

export default {
  name: 'home',
  components: {
    Header,
    Navbar,
    Display
  }
}
</script>
