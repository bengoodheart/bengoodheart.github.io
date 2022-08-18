<template>
  <div ref="el">
    <div class="container-sm">
    <b-card  bg-variant="primary" text-variant="white"  v-if="divPos.value = 1">
      <h1 >YES!</h1>
    </b-card>
    </div>
  </div>
</template>

<script>
import { ref, watchEffect, computed } from "vue"

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
    var inFirst = ref(false);
    var hasFetched = ref(false);
    const divPos = ref(-1)

    // const leaguePos = -1;
    // const overallPos = -1;

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
    async function getNLPos() {
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
        divPos.value = computed(()=>{
          return pos + 1
        });
        watchEffect(()=> console.log("Value Changed: " + divPos.value))
      });
    }
    function anyInFirst(){
      var res = divPos.value
      console.log(res)
    }
    return { 
      pingAPI, 
      getNLPos, 
      divPos, 
      anyInFirst, 
      inFirst, 
      hasFetched,
      };
  },
  created(){
    this.getNLPos() 
  }
}
</script>
