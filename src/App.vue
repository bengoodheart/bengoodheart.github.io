<template>
<b-container >
  <b-card text-variant="primary" class="shadow"><h2>Are the Mets Still In First?</h2></b-card>
  
  <StillInFirst></StillInFirst>
  <StandingsTable></StandingsTable>
  </b-container>
</template>

<script>
import StillInFirst from "./components/StillInFirst.vue";
import StandingsTable from "./components/StandingsTable.vue"

export default {
  name: "App",
  components: {
    StillInFirst,
    StandingsTable,
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

