export default {
  state: {
    basketItems: [],
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

    }
  },
}
