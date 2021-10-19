<template>
    <p class="bold-text"> Your text is: {{ mySentence }}</p>
</template>

<script>
export default {
  name: 'SimpleParagraph',
  props: {
    mySentence: {
      type: [String, Number],
      /* required: true,
      validator(val) {
        return val.toString().length > 3;
      }, */
    },
  },
};
</script>

<style lang="less">
.bold-text {
  font-weight: 700;
}
</style>
