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



    <div class="admin-menu-container">
      <BaseInput
      v-model="name"
      label="Название заведения"
      type="text"
      class="main-form__input"/>

      <BaseInput
      v-model="description"
      label="Описание заведения"
      type="text"
      class="main-form__input"/>

      <BaseInput
      v-model="photo"
      label="Фото заведения"
      type="text"
      class="main-form__input"/>

      <BaseInput
      v-model="phone"
      label="Телефон заведения"
      type="text"
      class="main-form__input"/>

      <BaseButton
      :loading="$store.getters.isLoading"
      class="registration__button"
      @click="editVendor"
      >
        Сохранить изменения
      </BaseButton>
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
    this.name = this.vendor.name;
    this.description = this.vendor.description;
    this.photo = this.vendor.img;
    this.phone = this.vendor.phone;
  },
  computed: {
    vendor() {
      return this.$store.getters.getCurrentVendor;
    }
  },
  data: () => {
    return {
      name: 'Название',
      description: 'Описание',
      photo: 'Фото',
      phone: '+7'
    }
  },
  methods: {
    editVendor() {
      this.$store.dispatch('editVendorInfo', {
        id: this.$route.params.resId,
        vendor: {
          name: this.name,
          description: this.description,
          photo: this.photo,
          phone: this.phone
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
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
    margin: 20px 0;
    display: flex;
    flex-flow: column nowrap;
  }

  .admin-menu {
    display: flex;
    flex-flow: row wrap;
  }

  .admin-menu__main {
    flex-grow: 1;
    flex-shrink: 1;
  }

  .admin-info p{
    color: #555;
  }
</style>
