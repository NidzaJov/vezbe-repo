<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style lang="scss" scoped>
@import "./styles/variables.scss";

#app {
  width: 600px;
  border: 4px solid $border-color;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
<style lang="scss" src="./styles/global.scss"></style>
