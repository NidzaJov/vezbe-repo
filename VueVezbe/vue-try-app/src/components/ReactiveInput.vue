<template>
    <div>
        <label>Enter some text:</label>
        <input type="text" v-model="ordinarySentence">
        <input type="text" v-bind:value="quotedSentence">
        <ClearButton @button-clicked="removeSentence"></ClearButton>
        <simple-paragraph v-bind:my-sentence="ordinarySentence"></simple-paragraph>
    </div>
</template>

<script>
import SimpleParagraph from './SimpleParagraph.vue';
import ClearButton from './ClearButton.vue';

export default {
  name: 'ReactiveInput',
  components: {
    SimpleParagraph,
    ClearButton,
  },
  data() {
    return {
      ordinarySentence: 'Can I render this text?',
    };
  },
  methods: {
    removeSentence(eventData) {
      this.ordinarySentence = '';
      console.log(eventData);
    },
  },
  computed: {
    quotedSentence() {
      return `"${this.ordinarySentence}"`;
    },
  },
};
</script>

<style lang="less">
    .bold-text{
        font-weight: 700;
    }
</style>
