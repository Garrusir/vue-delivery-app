<template>
    <button class="btn" @click="$emit('click')">{{ label }}</button>
</template>

<script>
  export default {
    name: 'BaseInput',
    props: {
      label: {
        type: String
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
</style>
