import Vue from 'vue'
import Vuex from 'vuex'
import vueXP from 'vuex-persistedstate'
Vue.use(Vuex)
export default new Vuex.Store({
  plugins:  [vueXP()],
  state: {
    messageList: [],
    messageList1: [],
    num: 0,
  },
  getters: {
  },
  mutations: {
    addList(state, data){
      state.messageList.push(data);
      state.messageList1 = state.messageList
    },
    delList(state, i){
      state.messageList.splice(i, 1);
    },
    search(state, val){
      if(val != ""){
        state.messageList = state.messageList1.filter(item => {
          return item.username.indexOf(val) == -1
        });
      }else{
        state.messageList = state.messageList1
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
