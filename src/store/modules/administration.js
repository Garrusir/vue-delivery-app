import {db} from "../../firebaseConfig";
import router from '@/router'

export default{
  state: {

  },
  getters: {

  },
  mutations: {

  },
  actions: {
    addDish() {
      
    },
    editDish({ dispatch, commit }, {item, resId}) {
      commit("setLoading", true);
      return db
        .doc(`restaurants/${resId}`)
        .collection('menu')
        .doc(item.id)
        .update(item)
        .then(data => {
          dispatch("updateDishes", data);
          setTimeout(() => {
            commit("setLoading", false);
            router.push({
              name: 'Admin'
            })
          }, 3000)
        });
    },
    editVendorInfo({ commit, dispatch }, {vendor, id}) {
      commit('setLoading', true);
      return db
        .collection('restaurants')
        .doc(id)
        .update(vendor)
        .then(() => {
          dispatch("updateVendor", id);
          setTimeout(() => {
            commit("setLoading", false);
            router.push({
              name: 'Admin'
            })
          }, 3000)
        });
    }
  },
  modules: {
  }
}
