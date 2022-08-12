<template>
  <button @click="this.getNLEastStandings">List</button>
</template>

<script>
export default {
  name: "StillInFirst",
  props: {
    msg: String,
  },
  methods: {
    pingAPI() {
      //TODO:
    },
    getNLEastStandings() {
      const axios = require("axios");
      //TODO: DOT ENV REQUIRES

      const options = {
        method: "GET",
        url: "https://api-baseball.p.rapidapi.com/standings",
        params: { season: "2022", league: "1" },
        headers: {
          "X-RapidAPI-Key":
            process.env.X_RAPID_API_KEY,
          "X-RapidAPI-Host": "api-baseball.p.rapidapi.com",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          const standings = response.data.response[0]
          console.log(standings[0]);
        })
        .catch(function (error) {
          console.error(error);
        });
    },
  },
};
</script>
