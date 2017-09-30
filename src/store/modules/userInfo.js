var userInfo = {
  state: {
    userInfo: localStorage.getItem('userInfo')
},
mutations: {
  setUserInfo(state, info) {
    state.userInfo=info;
    localStorage.setItem('userInfo', info);
  },
  clearUserInfo(state,info){
    state.userInfo='';
    localStorage.removeItem('userInfo');
  }

},
  actions: {
    setUserInfo ({ commit },info) {
      commit('setUserInfo',info)
    }
  }
}
export default userInfo
