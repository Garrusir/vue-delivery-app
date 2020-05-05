export default{
  state: {
    loginForm: false,
  },
  getters: {
    getLoginFormState(state) {
      return state.loginForm;
    }
  },
  mutations: {
    openLoginForm(state) {
      state.loginForm = true;
    },
    closeLoginForm(state) {
      state.loginForm = false;
    },
  },
  actions: {
  },
  modules: {
  }
}
