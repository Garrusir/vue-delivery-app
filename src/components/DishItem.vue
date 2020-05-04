<template>
    <div
    @click="$emit('click')"
    class="dish-item">
        <div class="dish-item__img"
        :style="{
        'background-image': dish.imageURL ? `url(${dish.imageURL})` : ''
        }"/>

        <div class="dish-item__wrap">
            <div class="dish-item__title">
                {{ dish.title }}
            </div>
            <div class="dish-item__description">
                {{ dish.description }}
            </div>
            <button
            @click="$store.dispatch('addItemToBasket', dish)"> Добавить в корзину </button>
        </div>
    </div>
</template>

<script>
  export default {
    name: "DishItem",
    props: {
      dish: {
        type: Object,
        required: true,
      },
    },
  }
</script>

<style scoped lang="scss">
    .dish-item {
        background-color: #ffffff;
    }
    .dish-item__img {
        width: 100%;
        height: 300px;

        img {
            width: 100%;
        }
    }
</style>
