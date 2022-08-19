<template>
<b-container >
<b-card text-variant="primary" class="shadow">Are the Mets Still In First?</b-card>

  <StillInFirst></StillInFirst>
  </b-container>
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

