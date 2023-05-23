<template>
  <the-navigation></the-navigation>
  <front-page></front-page>
</template>

<script>
import TheNavigation from "./components/navigation/Navigation/TheNavigation.vue";
import FrontPage from "./components/Pages/FrontPage.vue";

export default {
  name: "App",
  components: {
    TheNavigation,
    FrontPage
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: contents;
}
</style>
