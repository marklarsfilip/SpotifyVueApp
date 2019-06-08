<template>
  <div id="app">
    <Track msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Track from "./components/Track.vue";
import ScaleLoader from "./components/ScaleLoader.vue";

export default {
  name: "app",
  components: {
    Track,
    ScaleLoader
  },
  data() {
    return {
      loading: true,
      color: "#3AB982",
      height: "20px",
      width: "4px",
      margin: "1px",
      radius: "3px"
    };
  }
};
</script>

<style>
</style>
