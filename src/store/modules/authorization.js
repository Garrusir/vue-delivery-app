const firebase = require('@/firebaseConfig.js');

export default{
  state: {
    loginForm: false,
    user: null,
  },
  getters: {
    getLoginFormState(state) {
      return state.loginForm;
    },
    getUser(state) {
      return state.user;
    }
  },
  mutations: {
    openLoginForm(state) {
      state.loginForm = true;
    },
    closeLoginForm(state) {
      state.loginForm = false;
    },
    updateUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    createUser(context, user) {
      console.log(context);
      console.log('user', user);
      console.log('firebase', firebase)
      firebase
      .auth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(data => {
        console.log('data', data);
      })
      .catch(error => {
        console.log('error', error.message);
      })
    },
    signIn({commit}, {email, password}) {
      firebase
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(data => {
        console.log('logged', data);
        commit('updateUser', data.user);
      })
      .catch(function(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
    }
  },
  modules: {
  }
}
