<template>
  <the-navigation></the-navigation>
  <router-view></router-view>
</template>

<script>
import TheNavigation from "./components/navigation/Navigation/TheNavigation.vue";
export default {
  name: "App",
  components: {
    TheNavigation
  }
};
</script>

<style>
@import "../public/css/style.css";

* {
  margin: 0;
  padding: 0;
}
#app {
  display: contents;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
