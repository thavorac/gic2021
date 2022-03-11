import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  getters: {
    getCount(state) {
      return state.count
    }
  },
  mutations: {
    INCREMENT (state) {
      state.count++
    },
    DECREASE (state) {
      state.count--
    }
  },
  actions: {
    increaseCount(context) {
      context.commit('INCREMENT')
    },
    decreaseCount(context) {
      context.commit('DECREASE')
    }
  }
})

const app = createApp(App)
app.use(store)
app.mount('#app')
