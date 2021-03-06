const firebase = require('@/firebaseConfig.js');
import {db} from "../../firebaseConfig";
import router from '@/router'

export default{
  state: {
    loginForm: false,
    user: null,
    error: null,
    registrationError: null,
  },
  getters: {
    getLoginFormState(state) {
      return state.loginForm;
    },
    getUser(state) {
      return state.user;
    },
    getAuthError(state) {
      return state.error;
    },
    getRegistrationError(state) {
      return state.registrationError;
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
      if (user) {
        state.user = user;
        localStorage.userId = user.uid;
      } else {
        state.user = null;
        localStorage.removeItem('userId');
      }
    },
    setError(state, errorCode) {
      const errorMessages = {
        'auth/invalid-email': 'Неверный формат email',
        'auth/user-not-found': 'Пользователь не найден',
        'auth/wrong-password': 'Неверный пароль',
      }

      state.error = errorMessages[errorCode] || 'Неизвестная ошибка';
    },
    setRegistrationError(state, {errorCode, email}) {
      const errorMessages = {
        'auth/email-already-in-use': `Адрес ${email} уже занят`,
      }

      state.registrationError = errorMessages[errorCode] || 'Неизвестная ошибка';
    }
  },
  actions: {
    createUser({commit, dispatch}, user) {
      commit('setLoading', true);
      return firebase
      .auth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(({ user}) => {
          return db
            .collection('users')
            .doc(user.uid)
            .set({
              restaurant: null,
              role: 2,
            })
      })
      .catch(error => {
        const errorCode = error.code;
        commit('setRegistrationError', {errorCode, email: user.email});
      })
      .finally(() => {
        commit('setLoading', false);
        dispatch('signIn', {
          email: user.email,
          password: user.password
        })
      })
    },
    findRole({commit}, user) {
      return db
      .collection('users')
      .doc(user.uid)
      .get()
      .then(data => {
        commit('updateUser', {...user, ...data.data()});
        commit('closeLoginForm');
        commit('setLoading', false);
      })
    },
    signIn({commit, dispatch}, {email, password}) {
      commit('setLoading', true);
      firebase
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(data => {
        console.log('logged', data);
        dispatch('findRole', data.user);
      })
      .catch(function(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        commit('setError', errorCode);
        commit('setLoading', false);
      });
    },
    signOut({commit}) {
      console.log('logout');
      firebase
        .auth
        .signOut();
      commit('updateUser', null);
      router.push({name: 'Home'});
    }
  },
  modules: {
  }
}
