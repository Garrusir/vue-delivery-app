<template>
    <div
    @click="$emit('click')"
    class="dish-item">
        <div class="dish-item__img"
        :style="{
        'background-image': `url('https://www.delivery-club.ru/media/cms/relation_product/33267/313105348_m650.jpg')`
        }"/>

        <div class="dish-item__wrap">
            <div class="dish-item__title">
                11111111111111 {{ title }}
            </div>
            <div class="dish-item__description">
                {{ description }}
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "DishItem",
    props: {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    }, 
    created() {
        console.log('hi')
    }
  }
</script>

<style scoped lang="scss">
    .dish-item__img {
        width: 300px;
        height: 300px;

        img {
            width: 100%;
        }
    }
</style>
