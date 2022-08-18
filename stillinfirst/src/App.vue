<template>
  <StillInFirst></StillInFirst>
</template>

<script>
import StillInFirst from "./components/StillInFirst.vue";

export default {
  name: "App",
  components: {
    StillInFirst,
  },
  computed: {
    console: () => console,
    window: () => window,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: auto;
}

</style>

