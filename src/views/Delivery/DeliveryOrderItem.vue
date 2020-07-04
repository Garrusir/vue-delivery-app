<template>
  <div class="delivery-order-item">
    <div class="delivery-order-item__main">
      <div class="delivery-order-item__date">{{ parseDate(order.createdAt) }}</div>
      <div class="delivery-order-item__vendor">{{ order.vendor.name }}</div>
      <div class="delivery-order-item__price">{{ order.price }} ₽</div>
      <div class="delivery-order-item__status">{{ orderStatus(order.status) }}</div>

      <BaseButton
      ref="sign"
      :disabled="order.status !== 'taken'"
      :loading="acceptingOrderId === order.id"
      @click.native="done(order.id)"
      class="delivery-order-item__button">
        Завершить
      </BaseButton>
    </div>

    <div class="delivery-order-item__meta">
      <div class="delivery-order-item__customer-info">
        <h5>Клиент</h5>
        <div class="delivery-order-item__customer" > Адресс доставки: {{ order.customerAddress }}</div>
        <div class="delivery-order-item__customer"> Телефон: {{ order.customerPhone }}</div>
        <div class="delivery-order-item__customer"> Комментарий: {{ order.comment}}</div>
      </div>
      <div class="delivery-order-item__order-info">
        <h5>Заведение</h5>
        <div class="delivery-order-item__customer" > Название: "{{ order.vendor.name }}"</div>
        <div class="delivery-order-item__customer" > Адресс: {{ order.vendor.address }}</div>
        <h5>Заказ</h5>
        <div
        v-for="(cartItem, index) in order.cart"
        :key="cartItem.id"
        class="delivery-order-item__cart">
          <div>{{ index + 1}}. </div>
          <div>{{ cartItem.title }}</div>
          <div> х {{ cartItem.count }}</div>
          <div>{{ cartItem.price }} ₽</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BaseButton from "../../components/blocks/BaseButton";

  export default {
    name: "DeliveryOrderItem",
    components: {
      BaseButton
    },
    props: {
      order: {
        type: Object,
        required: true,
      }
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
      done(id) {
        this.acceptingOrderId = id;
        this.$store.dispatch('doneOrder', id)
        .then(() => {
          this.$store.dispatch('updateMyOrders');
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

<style lang="scss">
  .delivery-order-item {
    display: flex;
    flex-flow: column nowrap;
    background-color: white;
    border-radius: 2px;
    margin: 16px 0;
    padding: 16px;
    overflow: hidden;
    box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.04), 0 -2px 8px 0 rgba(0, 0, 0, 0.04);
  }

  .delivery-order-item__main {
    display: flex;
    flex-flow: row nowrap;

    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .delivery-order-item__date {
    width: 28%;
  }
  .delivery-order-item__vendor {
    width: 28%;
  }
  .delivery-order-item__price {
    width: 16%;
    text-align: right;
  }
  .delivery-order-item__status {
    width: 28%;
    text-align: right;
  }
  .delivery-order-item__button {
    margin-left: 16px;
    height: 42px;
  }
  .delivery-order-item__meta {
    padding: 8px 0;
    margin-top: 16px;
    border-top: 1px solid #e8e8e8;
  }

  h5 {
    margin: 8px 0;
  }

  .delivery-order-item__customer {
    margin: 4px 0;
    color: #555555;
  }

  .delivery-order-item__cart {
    display: flex;
    flex-grow: 1;
    flex-flow: row nowrap;

    & > div {
      margin-right: 8px;
    }
  }
</style>
