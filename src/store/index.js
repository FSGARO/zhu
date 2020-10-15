import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    car:""
  },
  mutations: {
    SET_CAR(state,car){
      state.car=car
    },
    SET_USERNAME(state,userName){
      state.userName=userName
    }
  }
})

export default store