<template>
  <div class="order-history">
    <h1>Все заказы</h1>
    <div
    v-for="order in orderList"
    :key="order.id"
    class="order-item">
      <div class="order-item__date">{{ parseDate(order.createdAt) }}</div>
      <div class="order-item__vendor">{{ order.vendor.name }}</div>
      <div class="order-item__price">{{ order.price }} ₽</div>
      <div class="order-item__status">{{ orderStatus(order.status) }}</div>
      <BaseButton
      ref="sign"
      :disabled="order.status !== 'created'"
      :loading="acceptingOrderId === order.id"
      @click.native="accept(order.id)"
      class="order-item__button">
        Принять
      </BaseButton>
    </div>
  </div>
</template>

<script>
  import BaseButton from "../../components/blocks/BaseButton";

  export default {
    name: "DeliveryHome",
    components: {
      BaseButton
    },
    created() {
      this.$store.dispatch('updateAllOrders');
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
        return this.$store.getters.getAllOrders;
      }
    },
    data: () => ({
      acceptingOrderId: null
    })
  }
</script>

<style lang="scss">
  .order-item {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    background-color: #fff;
    padding: 16px;
    margin: 16px 0;
    box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.04),
    0 -2px 8px 0 rgba(0, 0, 0, 0.04);

    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .order-item__date {
    width: 28%;
  }
  .order-item__vendor {
    width: 28%;
  }
  .order-item__price {
    width: 16%;
    text-align: right;
  }
  .order-item__status {
    width: 28%;
    text-align: right;
  }
  .order-item__button {
    margin-left: 16px;
    width: 100px;
    height: 42px;
  }
</style>
