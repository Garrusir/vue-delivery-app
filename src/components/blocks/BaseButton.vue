<template>
    <button
    :disabled="disabled"
    :class="{
      'btn--disabled': disabled
    }"
    class="btn"
    @click="$emit('click')">
        <slot>{{ label }}</slot>
    </button>
</template>

<script>
  export default {
    name: 'BaseButton',
    props: {
      label: {
        type: String,
        default: 'Отправить'
      },
      disabled: {
        type: Boolean,
        default: false,
      }
    }
  }
</script>

<style lang="scss" scoped>
    .btn {
        background-color: #5eb8ff;
        color: #ffffff;
        padding: 14px 22px;
        border: none;
        border-radius: 4px;
        margin: 8px 0;
        cursor: pointer;
        text-align: center;
        font-size: 14px;
        width: 100%;
        &:hover {
            background-color: #49a5ef;
        }
    }
    .btn--disabled {
        background-color: #c8e7ff;
        cursor: default;
        &:hover {
            background-color: #c8e7ff;
        }
    }
</style>
