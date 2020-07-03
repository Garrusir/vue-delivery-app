<template>
  <div class="admin-page">
    <div
    class="admin-header"
    :style="{
      'background-image': `url(${vendor.img})`
    }">
      <div class="admin-header__blackout">
        <div class="admin-header__wrap">
          <router-link
          tag="a"
          class="admin-header__link"
          :to="{ name: 'Admin', params: { resId: $route.params.resId } }">
            <i class="material-icons admin-header__icon">
              keyboard_arrow_left
            </i>

            <span>
              Все рестораны
            </span>
          </router-link>

          <div class="admin-header__title"> {{ vendor.name }}</div>
        </div>
      </div>
    </div>



    <div class="admin-menu-container" v-if="!isFetched">
      <BaseInput
      v-model="name"
      label="Название"
      type="text"
      class="main-form__input"/>

      <BaseInput
      v-model="description"
      label="Описание"
      type="text"
      class="main-form__input"/>


      <BaseInput
      v-model="price"
      label="Цена"
      type="number"
      class="main-form__input"/>

      <BaseInput
      v-model="imageSrc"
      label="Фото товара"
      type="text"
      class="main-form__input"/>

      <BaseButton
      :loading="$store.getters.isLoading"
       class="registration__button"
       @click="editDish"
      >
        Сохранить изменения
      </BaseButton>
    </div>
    <div class="fetch_spinner" v-else>
      <svg width="100" height="100" viewBox="0 0 135 135" xmlns="http://www.w3.org/2000/svg" fill="#b0bec5">
        <path d="M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z">
            <animateTransform attributeName="transform" type="rotate" from="0 67 67" to="-360 67 67" dur="2.5s" repeatCount="indefinite"/>
        </path>
        <path d="M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z">
            <animateTransform attributeName="transform" type="rotate" from="0 67 67" to="360 67 67" dur="8s" repeatCount="indefinite"/>
        </path>
    </svg>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BaseInput from "@/components/blocks/BaseInput";
import BaseButton from "@/components/blocks/BaseButton";

export default {
  name: 'AdminEditItemPage',
  components: {
    BaseInput,
    BaseButton,
  },
  created() {
    this.$store.dispatch('updateVendor', this.$route.params.resId);
    this.$store.dispatch('updateDish', {
      resId: this.$route.params.resId, 
      id: this.$route.params.id
    });
  },
  mounted() {
    // console.log('mounted')
    setTimeout(() => {
      this.name = this.editedItem.title;
      this.description = this.editedItem.description;
      this.price = this.editedItem.price;
      this.imageSrc = this.editedItem.img;
      this.isFetched = false;
  }, 3000)
  },
  computed: {
    vendor() {
      return this.$store.getters.getCurrentVendor;
    },
    editedItem() {
      return this.$store.getters.getEditedDish;
    }
  },
  data: () => {
    return {
      name: 'Имя товара',
      description: 'Описание товара',
      price: '0',
      imageSrc: '',
      isFetched: true,
    }
  },
  methods: {
    editDish() {
      this.$store.dispatch('editDish', {
        resId: this.$route.params.resId, 
        item: {
          id: this.$route.params.id,
          title: this.name,
          description: this.description,
          price: this.price,
          imageSrc: this.imageSrc,
        }
      })
    }
  }
}
</script>

<style lang="scss">
  .admin-header {
    background-size: cover;
    background-position: center;
    height: 240px;
  }

  .admin-header__blackout {
    height: 100%;
    background-color: rgba(0,0,0, .5);
  }

  .admin-header__wrap {
    height: 100%;
    width: 90%;
    margin: 0 auto;
    padding: 16px 0;
  }

  .admin-header__link {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #fff;
    text-decoration: none;
  }

  .admin-header__icon {
    font-size: 32px;
  }

  .admin-header__title {
    font-size: 46px;
    font-weight: 700;
    color: #fff;
    margin-left: 32px;
  }

  .admin-menu-container {
    display: flex;
    flex-flow: column nowrap !important;
    margin: 20px 0;
  }

  .admin-menu {
    display: flex;
    flex-flow: row wrap;
  }

  .admin-menu__dish {
    min-width: 240px;
    width: calc(100% / 3 - 11px);
    overflow: hidden;
    flex-grow: 1;
    margin-bottom: 16px;
    margin-right: 16px;
    &:nth-child(3n) {
      margin-right: 0;
    }
  }

  .admin-menu__main {
    flex-grow: 1;
    flex-shrink: 1;
  }

  .admin-menu__basket {
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    width: 300px;
    margin-left: 18px;
    position: fixed;
    top: 70px;
    right: 0;
    background-color: #fff;
    height: 100%;
    box-shadow: 0 0px 8px 0 rgba(0,0,0,.04),
                0 0px 8px 0 rgba(0,0,0,.04)
  }

  .admin-info p{
    color: #555;
  }

  .fetch_spinner {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px 0;
  }
</style>
