<template>
    <div>
        <div
        v-if="$store.getters.getTotalPrice === 0"
        class="basket__empty">
            <span>В корзине пока пусто</span>
        </div>

        <div
        v-else
        class="basket__not-empty">
            <div class="basket__header">
                <h1>Мой заказ</h1>
                <button @click="$store.commit('clearAllBasket')"> Очистить </button>
            </div>

            <div class="basket__orderInfo">
                <div
                v-for="item in basketItems"
                :key="item.id"
                class="basket__item">
                    <div class="basket__title">
                        {{ item.title }}
                    </div>
                    <div class="basket__count">
                        <div
                        @click="$store.commit('decrementItemCount', item)"
                        class="basket__icon"> - </div>
                        <div> {{ item.count }} </div>
                        <div
                        @click="$store.commit('incrementItemCount', item)"
                        class="basket__icon"> + </div>
                    </div>
                    <div class="basket__price">
                        {{ item.price }}
                    </div>
                </div>
            </div>

            <div
            v-if="!hideOrderButton"
            @click="$router.push('/checkout')"
            class="basket__meta basket__button">
                <span>Заказать</span>
                <span>{{ $store.getters.getTotalPrice}} </span>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "BasketDude",
    props: {
        hideOrderButton: {
          type: Boolean,
          default: false,
        },
    },
    computed: {
      basketItems() {
        return this.$store.getters.getBasketItems;
      }
    },
  }
</script>

<style lang="scss">
    .basket__item {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
    }
    .basket__count {
        display: flex;
        flex-flow: row nowrap;
    }
    .basket__icon {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        font-size: 24px;
        line-height: 21px;
        background-color: #cccccc;
        margin: 0 6px;
        text-align: center;
        font-weight: bold;
        color: #555;
        cursor: pointer;
        transition: all 150ms ease-in-out;

        &:hover {
            background-color: #555555;
            color: #cccccc;
        }
    }

    .basket__button {
        display: flex;
        justify-content: space-between;
        background-color: #5eb8ff;
        color: #ffffff;
        padding: 14px 22px;
        border-radius: 4px;
        margin: 8px 0;
        cursor: pointer;
        &:hover {
            background-color: #49a5ef;
        }
    }
</style>
