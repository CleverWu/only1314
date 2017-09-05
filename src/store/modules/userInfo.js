var userInfo = {
  state: {
    userInfo: sessionStorage.getItem('userInfo')
},
mutations: {
  setUserInfo(state, info) {
    state.userInfo=info;
    sessionStorage.setItem('userInfo', info);
  },
  clearUserInfo(state,info){
    state.userInfo='';
    sessionStorage.removeItem('userInfo');
  }

}
}
export default userInfo
