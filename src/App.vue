<template>
  <the-navigation></the-navigation>
  <router-view></router-view>
  <the-footer></the-footer>
</template>

<script>
import TheNavigation from "./components/navigation/Navigation/TheNavigation.vue";
import TheFooter from "./components/footer/TheFooter.vue";
export default {
  name: "App",
  components: {
    TheNavigation,
    TheFooter
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
