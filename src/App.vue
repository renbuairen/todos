<template>
  <div>
    <button @click="replaceColor">换肤</button>
    <div class="todoapp">
      <TodoHeader />
      <TodoMain />
      <TodoFooter />
    </div>
    <MyButton
      @click="clickFn"
      btnStyle="warning"
      type="normal"
      text="好的按钮"
    />
  </div>
</template>

<script>
import MyButton from './components/MyButton.vue'
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
    TodoMain,
    MyButton
  },

  created() {},

  methods: {
    ...mapActions('photo', ['replaceColor']),

    clickFn() {
      alert('触发了按钮事件')
    }
  }
}
</script>

<style scoped></style>
