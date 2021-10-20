<template>
  <div id="app">
    Hello, world!
    <custom-button/>
    <custom-button/>
    <custom-button/>
  </div>
</template>

<script>
import CustomButton from './components/CustomButton.vue';

export default {
  name: 'App',
  components: {
    CustomButton,
  },
};
</script>

<style lang="less">

</style>
