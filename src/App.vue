<template>

<b-container >
  <BaseballAPI></BaseballAPI>
  
  <b-card text-variant="primary" class="shadow"><h2>Are the Mets Still In First?</h2></b-card>
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



  return{ 
      storeLeague
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

