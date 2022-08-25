<template>

<b-container >
  <BaseballAPI ref="api"></BaseballAPI>
  <b-card text-variant="primary" class="shadow"><h2>Are the Mets Still In First?</h2></b-card>
  
  <StillInFirst></StillInFirst>
  <StandingsTable></StandingsTable>
  <DonateFooter></DonateFooter>
  </b-container>

  <BaseballAPI></BaseballAPI>
</template>

<script>
import StillInFirst from "./components/StillInFirst.vue";
import StandingsTable from "./components/StandingsTable.vue"
import DonateFooter from "./components/DonateFooter.vue"
import BaseballAPI from "./components/BaseballAPI.vue"

export default {
  name: "App",
  components: {
    StillInFirst,
    StandingsTable,
    DonateFooter,
    BaseballAPI,
},
  computed: {
    console: () => console,
    window: () => window,
  },
  created(){
    this.console.log(this.$refs)
  }
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

