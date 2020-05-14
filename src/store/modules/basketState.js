import {db} from "../../firebaseConfig";

export default {
  state: {
    basketItems: [],
    customerAddress: '',
    customerPhone: '',

  },
  getters: {
    getBasketItems(state) {
      return state.basketItems;
    },
    getTotalPrice(state) {
      return state.basketItems.reduce((accumulator, currentDish) => accumulator + currentDish.price * currentDish.count, 0);
    }
  },
  mutations: {
    pushToBasket(state, item) {
      state.basketItems.push({
        id: item.id,
        title: item.title,
        price: item.price,
        count: 1,
        address: item.address,
      });
    },
    incrementItemCount(state, { id }) {
      let basketItem = state.basketItems.find(item => item.id === id);
      basketItem.count++;
    },
    decrementItemCount(state, { id }) {
      let basketItem = state.basketItems.find(item => item.id === id);
      basketItem.count--;
      if (basketItem.count === 0 ) {
        state.basketItems = state.basketItems.filter(item => item.id !== id);
      }
    },
    clearAllBasket(state) {
      state.basketItems = [];
    }
  },
  actions: {
    addItemToBasket({state, commit}, dish) {
      // if (state.basketItems.indexOf())
      const basketItem = state.basketItems.find(item => item.id === dish.id );
      if (!basketItem) {
        commit('pushToBasket', dish);
      } else {
        console.log('increment');
        commit('incrementItemCount', dish);
      }

    },
    createOrder({state, getters}, orderInfo) {
      const newOrder = {
        createdAt: new Date(),
        customerAddress: orderInfo.address,
        customerPhone: orderInfo.phone,
        comment: orderInfo.comment,
        userId: getters.getUser.uid,
        status: 'created',
        cart: state.basketItems,
        price: getters.getTotalPrice,
      }
      db.collection('orders').add(newOrder).then(r => {
        console.log('order created', r);
      });
    }
  },
}
