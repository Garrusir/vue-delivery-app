<template>
  <div class="order-history">
    <router-link
    tag="a"
    class="delivery-header__link"
    to="/delivery">
      <i class="material-icons vendor-header__icon">
        keyboard_arrow_left
      </i>

      <span>
        Все заказы
      </span>
    </router-link>
    <h1>Активные заказы</h1>
    <div
    v-for="order in orderList"
    :key="order.id">
      <OrderItem :order="order"/>
    </div>
  </div>
</template>

<script>
  import OrderItem from "./DeliveryOrderItem";

  export default {
    name: "DeliveryMyOrders",
    components: {
      OrderItem
    },
    created() {
      this.$store.dispatch('updateMyOrders');
    },
    methods: {
      parseDate(timestamp){
        const date = timestamp.toDate();
        const minutes = `${date.getMinutes()}`.padStart(2, '0');
        const hours = `${date.getHours()}`.padStart(2, '0');
        const day = `${date.getDate()}`.padStart(2, '0');
        const month = `${date.getMonth() + 1}`.padStart(2, '0');
        const year = date.getFullYear();
        return `${day}.${month}.${year} ${hours}:${minutes}`;
      },
      orderStatus(status) {
        return new Map([
          ['created', 'Заказ обрабатывается'],
          ['taken', 'Заказ передан курьеру'],
          ['done', 'Заказ доставлен'],
          ['cancelled', 'Заказ отменен']
        ]).get(status)
      },
      accept(id) {
        this.acceptingOrderId = id;
        this.$store.dispatch('updateOrder', id)
        .then(() => {
          this.$store.dispatch('updateAllOrders');
        })
        .finally(() => {
          this.acceptingOrderId = null;
          this.$store.commit('setLoading', false);
        });
      }
    },
    computed: {
      orderList() {
        return this.$store.getters.getMyOrders;
      }
    },
    data: () => ({
      acceptingOrderId: null
    })
  }
</script>

<style>
  .delivery-header__link {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #999;
    text-decoration: none;
  }
</style>
