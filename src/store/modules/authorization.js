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
    },
    isAuthenticated(state) {
      return !!state.user;
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
        commit('closeLoginForm');
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
