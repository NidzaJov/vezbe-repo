<template>
    <button @click="handleClick" class="custom-button">
        <span class="button-text">
            Click me: {{ doubleCount }}
        </span>
    </button>
</template>

<script>
export default {
  name: 'CustomButton',
  props: {
    myCount: {
      type: Number,
    },
  },
  methods: {
    handleClick() {
      this.$emit('click-on-button', { amount: 1 });
    },
  },
  computed: {
    doubleCount() {
      return this.myCount * 2;
    },
  },
};
</script>

<style lang='less' scoped>
@button-color: #333333;
@text-color: #EEEEEE;

.custom-button {
    background-color: @button-color;

    .button-text {
        color: @text-color
    }
}
</style>
