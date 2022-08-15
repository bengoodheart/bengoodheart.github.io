<template>
  <div ref="el">
    <button @click="this.pingAPI">PING</button>
    <button @click="this.getNLEastFirst">LIST</button>
  </div>
</template>

<script>
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

//TODO: BREAK OUT THE REST PART INTO A SEPARATE COMPONENT

export default {
  name: "StillInFirst",
  props: {
    msg: String,
  },

  methods: {
    makeRestCall(func) {
      const axios = require("axios");
      axios
        .request(OPTIONS)
        .then(func)
        .catch(function (error) {
          console.error(error);
        });
    },
    pingAPI() {
      this.makeRestCall(function () {
        console.log(PONG);
      });
    },
    getNLEastFirst() {
      this.makeRestCall(function (response) {
        let data = response.data.response;
        for (let i = 0; i < data[0].length; i++) {
          let standings = data[0][i];
          let team_obj = standings["group"];
          let division = team_obj["name"];
          if (division === NL_EAST) {
            let team_name = standings["team"]["name"];
            //let positions = standings['positions'];
            console.log(team_name);
          }
        }
      });
    },
  },
};
</script>
