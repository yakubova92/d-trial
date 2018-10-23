<template>
  <div>
    {{totalGroups}} records found!
    <br>
    <div v-for="group in groups" :key="group.id" class="card">
      <slot :group="group">
        <!-- default text -->
        <div class="col-1">
          <h3>Group name</h3>
          <p>{{group.name}}</p>
          <p>{{group.description}}</p>
        </div>
        <div class="col-2">
          <h3>Members</h3>
          <p>{{group.members}}</p>
        </div>
        <div class="col-3">
          <h3>Policy</h3>
          <p>{{group.policy}}</p>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'DisplayGroup',
  components: {
  },
  computed: {
    ...mapGetters([
      'groups',
      'totalGroups'
    ]),
  },
}
</script>

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
