<template>
  <div>
    <button @click="replaceColor">换肤</button>
    <div class="todoapp">
      <TodoHeader />
      <TodoMain />
      <TodoFooter />
    </div>
  </div>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue' // shift + alt + 下
import TodoHeader from './components/TodoHeader.vue' // shift + alt + 下
import TodoMain from './components/TodoMain.vue' // shift + alt + 下
import { mapActions } from 'vuex'
export default {
  data() {
    return {}
  },

  components: {
    TodoFooter,
    TodoHeader,
    TodoMain
  },

  created() {},

  methods: {
    ...mapActions('photo', ['replaceColor'])
  }
}
</script>

<style scoped></style>
