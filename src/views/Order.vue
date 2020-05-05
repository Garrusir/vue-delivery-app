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
        <BaseInput label="Телефон для связи" value=" " type="text" class="order-page__input"/>

        <BaseInput label="Адрес доставки" value=" " type="text" class="order-page__input"/>

        <div class="order-page__input-row">
          <BaseInput label="Подъезд" value=" " type="text" class="order-page__input"/>

          <BaseInput label="Домофон" value=" " type="text" class="order-page__input"/>

          <BaseInput label="Этаж" value=" " type="number" class="order-page__input"/>

          <BaseInput label="Квартира" value=" " type="number" class="order-page__input"/>
        </div>

        <div class="order-page__input">
          <label for="comment">Комментарий</label>
          <textarea id="comment" type="text" resize="none"/>
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
import BaseInput from "../components/blocks/BaseInput";

export default {
  name: 'OrderPage',
  components: {
    BasketDude,
    BaseInput
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

  .order-page__input-row {
    margin-top: 18px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    .order-page__input {
      margin-right: 12px;
      &:last-child {
        margin-right: 0;
      }
    }
  }

  .order-page__input {
    margin-top: 18px;

    textarea {
      width: 100%;
      padding: 4px 11px;
      color: rgba(0,0,0,.65);
      font-size: 14px;
      line-height: 1.5715;
      background-color: #fff;
      background-image: none;
      border: 1px solid #d9d9d9;
      border-radius: 2px;
      transition: all .3s;
      resize: none;

      &:hover {
        border-color: #40a9ff;
        border-right-width: 1px !important;
      }

      &:focus {
        border-color: #40a9ff;
        border-right-width: 1px !important;
        outline: 0;
        box-shadow: 0 0 0 2px rgba(24,144,255,.2);
      }

      &::placeholder {
        color: #bfbfbf;
      }
    }
  }

  .basket__meta {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }

  .order-page__cart {
    min-width: 300px;
  }
</style>
