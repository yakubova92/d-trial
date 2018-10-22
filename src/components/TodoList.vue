<template>
  <div>
    {{totalTodos}} records found
    <br>
    <div v-for="todo in todos" :key="todo.id">
      <slot :todo="todo">
        {{todo.text}}
      </slot>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TodoList',
  // data(){
  //   return{
  //     todos: [
  //       {id: 1, text: 'learn slots', complete: false},
  //       {id: 2, text: 'practice slots', complete: true},
  //       {id: 3, text: 'apply to delta', complete: false}
  //     ]
  //   }
  // },
  components: {
  },
  computed: {
    ...mapGetters([
      'todos',
      'totalTodos'
    ]),
  },
}
</script>
