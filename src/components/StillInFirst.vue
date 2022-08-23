<template>
  <div>
    <b-card bg-variant="primary" text-variant="white" class="shadow"  v-if="divFirst.value == true">
      <b-badge text-variant="secondary"><h1>YES!</h1></b-badge>
      <p>
        The New York Metropolitons are still in first in the <span v-if="divFirst.value == true"> NL East</span><span v-if="leagueFirst.value == true"> and the National league</span>!
      </p>
    </b-card>
    <b-card bg-variant="danger" text-variant="white" v-else > <h3>Uh....</h3> </b-card> 
  </div>
</template>

<script>

import { ref, computed } from "vue"

/**
 * Constant Declarations
 */

const SEASON = 2022;
const LEAGUE = 1;
const PONG = "PONG";
const NL_EAST = "NL East";
//const NYM = "New York Mets";
//const POS = 1;

const OPTIONS = {
  method: "GET",
  url: "https://api-baseball.p.rapidapi.com/standings",
  params: { season: SEASON, league: LEAGUE },
  headers: {
    "X-RapidAPI-Key": process.env.VUE_APP_X_RAPID_API_KEY,
    "X-RapidAPI-Host": "api-baseball.p.rapidapi.com",
  },
};

export default{
  name: "StillInFirst",
  setup(){
    const divFirst = ref(false);
    const leagueFirst = ref(false);

    function makeRestCall(func) {
      const axios = require("axios");
      axios
        .request(OPTIONS)
        .then(func)
        .catch(function (error) {
          console.error(error);
        });
    }
    function pingAPI() {
      makeRestCall(function () {
        console.log(PONG);
      });
    }
    async function getNLEastPos() {
      const temp_arr = ref([]);
      await makeRestCall(function (response) {
        let data = response.data.response;
        for (let i = 0; i < data[0].length; i++) {
          let standings = data[0][i];
          let team_obj = standings["group"];
          let division = team_obj["name"];
          if (division === NL_EAST) {
            let team_name = standings["team"]["name"];
            temp_arr.value.push(team_name)
          }
        }
        let pos = temp_arr.value.indexOf("New York Mets")
        pos = pos + 1;
        if(pos == 1){
          divFirst.value = computed(() =>{
            return true;
          });
        }
      });
    }
    async function getNLLeaguePos(){
      const temp_arr = ref([]);
      await makeRestCall(function (response) {
        let data = response.data.response;
        console.log(data)
        for (let i = 0; i < data[0].length; i++) {
          let standings = data[0][i];
          let team_obj = standings["group"];
          let league = team_obj["name"];
          if (league == "National League"){
            let team_name = standings["team"]['name']
            temp_arr.value.push(team_name);
          }
        }
        let pos = (temp_arr.value.indexOf("New York Mets")) + 1
        if(pos == 1){
          leagueFirst.value = computed(() => {
            return true
          })
        }
      })
    }
    return { 
      pingAPI, 
      getNLEastPos,
      getNLLeaguePos, 
      divFirst,
      leagueFirst,
      };
  },
  created(){
    this.getNLEastPos() 
    this.getNLLeaguePos()
  }
}
</script>
