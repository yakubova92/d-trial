<template>
  <div>
    <slot props="props"></slot>
    <!-- <slot v-for="item in items" :item="item"></slot> -->
  </div>
</template>

<script>
export default {
  props: {
    // items: {
    //   type: Array,
    //   default: () => []
    // }
    people: [
      {id: 1, name: 'Ned', group: 'Stark'},
      {id: 2, name: 'Arya', group: 'Stark'},
      {id: 3, name: 'Robert', group: 'Baratheon'},
      {id: 4, name: 'Jon', group: 'Nights Watch'}
    ],
    groups: [
      {id: 1, groupName: 'Stark', members: 2},
      {id: 2, groupName: 'Baratheon', members: 1},
      {id: 3, groupName: 'Nights Watch', members: 1},
    ],
    total: {
      people: 4,
      groups: 3
    }
  }
}
</script>
