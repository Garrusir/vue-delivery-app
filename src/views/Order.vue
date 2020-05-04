<template>
  <div class="order-page">
    <div class="order-page__header">
      <button
      @click="$router.go(-1)">Вернуться в меню</button>
      <h1>Оформление заказа</h1>
    </div>

    <div class="order-page__main">
      <div class="order-page__form">
        <h2>Доставка</h2>
        <div class="order-page__input">
          <label for="phone">Телефон для связи</label>
          <input id="phone" type="text">
        </div>

        <div class="order-page__input">
          <label for="address">Адрес доставки</label>
          <input id="address" type="text">
        </div>

        <div class="order-page__input-row">
          <div class="order-page__input">
            <label for="porch">Подъезд</label>
            <input id="porch" type="text">
          </div>

          <div class="order-page__input">
            <label for="intercom">Домофон</label>
            <input id="intercom" type="text">
          </div>

          <div class="order-page__input">
            <label for="flow">Этаж</label>
            <input id="flow" type="number">
          </div>

          <div class="order-page__input">
            <label for="phone">Квартира</label>
            <input id="phone" type="number">
          </div>
        </div>

        <div class="order-page__input">
          <label for="comment">Комментарий</label>
          <textarea id="comment" type="text" />
        </div>

        <div
        class="basket__meta basket__button">
          <span>Заказать</span>
        </div>
      </div>

      <div class="order-page__cart">
        <BasketDude
        hideOrderButton/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BasketDude from "../components/BasketDude";
export default {
  name: 'OrderPage',
  components: {
    BasketDude,
  },
  computed: {
  }
}
</script>

<style lang="scss">
  .order-page__main {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }

  .order-page__form {
    flex-grow: 1;
    border-radius: 4px;
    margin-right: 16px;
    margin-bottom: 24px;
    padding: 8px 16px;
    box-sizing: border-box;
    box-shadow: 0 8px 8px 0 rgba(0,0,0,.04),
    0 -2px 8px 0 rgba(0,0,0,.04);
    background-color: #ffffff;
  }

  .order-page__cart {
    min-width: 300px;
  }
</style>
