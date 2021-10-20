<template>
    <div class="single-task">
        {{task.text}}
        </div>
</template>

<script>
export default {
  name: 'SingleTask',
  props: {
    task: {
      type: Object,
    },
  },
};
</script>

<style lang="less" scoped>

</style>
