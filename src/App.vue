<template>

<b-container >
  <BaseballAPI></BaseballAPI>

  <b-card text-variant="primary" class="shadow"><h2>Are the Mets Still In First?</h2></b-card>
    <b-card v-if="storeLeague.loading==true || storeDiv.loading==true">
    <b-spinner  variant="primary"></b-spinner>
    <p> <b-badge variant="secondary">Uhhh</b-badge> </p>
  </b-card>
  <StillInFirst :LeagueTable="storeLeague.current_table" v-if="storeLeague.loading==false && storeLeague.table_fetched==true"></StillInFirst>
  <StandingsTable :LeagueTable="storeLeague.current_table" v-if="storeLeague.loading==false && storeLeague.table_fetched==true"></StandingsTable>
  <DonateFooter></DonateFooter>
  </b-container>

</template>

<script>
import StillInFirst from "./components/StillInFirst.vue";
import StandingsTable from "./components/StandingsTable.vue"
import DonateFooter from "./components/DonateFooter.vue"
import BaseballAPI from "./components/BaseballAPI.vue"
import { NLStandings } from "@/store/NLStandings.js"
import { NLEastStandings } from "./store/NLEastStandings.js";


export default {
  name: "App",
  components: {
    StillInFirst,
    StandingsTable,
    DonateFooter,
    BaseballAPI,
},
setup(){
  const storeLeague = NLStandings();
  const storeDiv = NLEastStandings();


  return{ 
      storeLeague,
      storeDiv,
  }
},
computed: {
    console: () => console,
    window: () => window,
  },
  created(){
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

