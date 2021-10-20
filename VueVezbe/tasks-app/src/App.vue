<template>
  <div id="app">
    <input type="text" v-model="message"/>
    <input type="checkbox" v-model="check">
    <custom-button :myCount="count" @click-on-button="incrementCount"/>
    <div>{{ message }}</div>
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
      message: 'Testing Vue',
      check: false,
    };
  },
  methods: {
    incrementCount(eventData) {
      this.count += eventData.amount;
    },
  },
};
</script>
