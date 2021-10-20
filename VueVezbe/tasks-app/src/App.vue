<template>
  <div id="app">
    <custom-button :myCount="count" @click-on-button="incrementCount"/>
  </div>
</template>

<script>
import CustomButton from './components/CustomButton.vue';

export default {
  name: 'App',
  components: {
    CustomButton,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    incrementCount(eventData) {
      this.count += eventData.amount;
    },
  },
};
</script>
