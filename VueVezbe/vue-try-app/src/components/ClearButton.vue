<template>
    <button v-on:click="clearSentence">Clear</button>
</template>

<script>

export default {
  name: 'ClearButton',
  data() {
    return {
      totalCliks: 0,
    };
  },
  methods: {
    clearSentence() {
      this.totalCliks += 1;
      this.$emit('button-clicked', { clicks: this.totalCliks });
    },
  },
};
</script>

<style lang="less">

</style>
