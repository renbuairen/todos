import Vue from 'vue'
import Vuex from 'vuex'
import photo from './modules/photo'
import todos from './modules/todos'
import createVuexPersisted from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {
    list: (state) => state.todos.list,
    color: (state) => state.photo.color
  },
  mutations: {},

  actions: {},

  modules: {
    todos,
    photo
  },
  plugins: [
    createVuexPersisted({
      reducer(state) {
        return {
          todos: state.todos,
          color: state.photo
        }
      }
    })
  ]
})
