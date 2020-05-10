const firebase = require('@/firebaseConfig.js');

export default{
  state: {
    loginForm: false,
    user: null,
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
    signIn(context, {email, password}) {
      firebase
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(data => {
        console.log('logged', data);
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
