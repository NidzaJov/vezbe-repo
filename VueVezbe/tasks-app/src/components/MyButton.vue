<template>
    <button class="task-button ps" @click="emitClick">
        <slot>Submit</slot>
    </button>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    stop: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    emitClick($event) {
      if (this.stop) {
        $event.stopPropagation();
      }
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

.task-button{
    margin-left: $padding-l;
    background-color: $text-color;
    color: white;
}
</style>
