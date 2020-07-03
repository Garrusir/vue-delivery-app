import {db} from "../../firebaseConfig";

export default {
  state: {
    dishes: [],
    currentVendor: {},
    editedDish: null,
    // isFetched: false,
  },
  getters: {
    getDishes(state) {
      return state.dishes;
    },
    getCurrentVendor(state) {
      // return state.vendors.find(vendor => vendor.id === id)
      return state.currentVendor;
    },
    getEditedDish(state) {
      return state.editedDish;
    },
/*    getIsFetched(state) {
      return state.isFetched;
    }*/
  },
  mutations: {
    setDishes(state, date) {
      state.dishes = date.map(item => {
        item.address = state.currentVendor.address;
        item.vendorId = state.currentVendor.id;
        item.vendorName = state.currentVendor.name;
        return item;
      });
    },
    setCurrentVendor(state, data) {
      state.currentVendor = data;
    },
    setEditedDish(state, data) {
      state.editedDish = data;
    },
/*    setIsFetched(state, data) {
      state.isFetched = data;
    }*/
  },
  actions: {
    updateDishes({commit}, id) {
      let menu = db.doc(`restaurants/${id}`).collection('menu')
      menu
      .get()
      .then(data => {
        const menuItems = [];
        data.forEach(doc => {
          menuItems.push({id: doc.id, ...doc.data()});
        })
        commit("setDishes", menuItems);
        });
    },
    updateDish( {commit}, {resId, id}) {
      console.log(resId, id);
      return db
      .doc(`restaurants/${resId}`)
      .collection('menu')
      .doc(id)
      .get()
      .then((res) => {
        console.log(res.data());
        commit('setEditedDish', res.data())
      })
      
    },
    updateVendor({commit}, id) {
      // console.log(id);
      db
        .doc(`restaurants/${id}`)
        .get()
        .then(data => {
          console.log('data', data.data());
          commit('setCurrentVendor', data.data());
        });
    }
  },
}
