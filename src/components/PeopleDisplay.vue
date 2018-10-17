<template>
  <div class="people-display">
    <button id="show-modal" @click="showModal = true">Sort & Filter</button>
    <modal v-if="showModal" @close="showModal = false">
      <h3 slot="header"> Sort & Filter </h3>
    </modal>
    <h3> {{ totalPeople }} record(s) found </h3>
    <people-card v-for="person in filterPeople" :person="person" :key="person.id"></people-card>
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue'
import PeopleCard from '@/components/PeopleCard.vue'

import { mapGetters } from 'vuex';

export default {
  name: 'PeopleDisplay',
  data(){
    return {
      showModal: false
    }
  },
  components: {
    PeopleCard,
    Modal
  },
  mounted () {
    this.$store.dispatch('loadPeople')
  },
  computed: {
    ...mapGetters([
      'filterPeople',
      'totalPeople'
    ]),
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
