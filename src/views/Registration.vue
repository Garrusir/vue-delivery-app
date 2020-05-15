<template>
    <div
    @click.self="$store.commit('closeLoginForm')"
    class="registration-container">
        <h1>Регистрация</h1>
        <div class="main-form">
<!--             <BaseInput
            v-model="name"
            label="Имя"
            type="text"
            class="main-form__input"/>
 -->
            <BaseInput
            v-model="email"
            label="Адрес электронной почты"
            type="email"
            class="main-form__input"/>

<!--             <BaseInput
            v-model="phone"
            label="Телефон"
            type="text"
            class="main-form__input"/>
 -->
            <BaseInput
            v-model="password"
            label="Пароль"
            type="password"
            class="main-form__input"/>


            <BaseInput
            v-model="passwordRepeat"
            label="Повторите пароль"
            type="password"
            class="main-form__input"/>

            <BaseButton
            :loading="$store.getters.isLoading"
            @click="submit"
            class="registration__button">Зарегестрироваться</BaseButton>

        </div>
    </div>
</template>

<script>
  import BaseInput from "@/components/blocks/BaseInput";
  import BaseButton from "@/components/blocks/BaseButton";

  export default {
    name: "Login",
    components: {
      BaseInput,
      BaseButton,
    },
    methods: {
      submit() {
        console.log(this.name, this.password);
        this.$store.dispatch('createUser', {
            name: this.name,
            email: this.email,
            password: this.password
        })
      }
    },
    data: () => {
      return {
        name: '',
        phone: '',
        email: '',
        password: '',
        passwordRepeat: '',
      }
    }
  }
</script>

<style scoped lang="scss">
    .registration-container {
        max-width: 400px;
    }
    .registration__button {
        margin-top: 24px;
    }
</style>
