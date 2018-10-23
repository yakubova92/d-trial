<template>
  <div class="people-display">
    <button id="show-modal" @click="showModal = true">Sort & Filter</button>
    <modal v-if="showModal" @close="showModal = false">
      <h3 slot="header"> Sort & Filter </h3>
    </modal>
    <h3> {{ totalPeople }} record(s) found </h3>
    <!-- <people-card v-for="person in filterPeople" :person="person" :key="person.id"></people-card> -->
    <div v-for="person in filterPeople" :key="person.id" class="card">
      <slot :person="person">
        <!-- default text -->
        <div class="col-1">
          <h3>Name</h3>
          <p>{{person.first}} {{person.last}}</p>
          <p>{{person.email}}</p>
        </div>
        <div class="col-2">
          <h3>Role type</h3>
          <p>{{person.role}}</p>
          <p>{{person.status}}</p>
        </div>
        <div class="col-3">
          <h3>Group</h3>
          <p>{{person.group}}</p>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue'
// import PeopleCard from '@/components/PeopleCard.vue'

import { mapGetters } from 'vuex';

export default {
  name: 'DisplayPeople',
  data(){
    return {
      showModal: false
    }
  },
  components: {
    // PeopleCard,
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
h3 {
  margin: 0px 0 0;
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
.col-1 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px dotted red;
}
.col-2 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px dotted blue;
}
.col-3 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px dotted green;
}
</style>
