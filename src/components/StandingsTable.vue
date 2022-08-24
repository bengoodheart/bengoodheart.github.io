<template>
  <div class="accordian" role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordian-1 variant="primary"> National League Standings</b-button>
      </b-card-header>
      <b-collapse id="accordian-1" accordian="my-accordian" role="tabpanel">
        <b-table :items="NLStandings"></b-table>
      </b-collapse>

      <b-card-header header-tag="header" class="p-1" role="tab" evariant="primary">
        <b-button block v-b-toggle.accordian-2 variant="primary">NL East Standings</b-button>
      </b-card-header>
      <b-collapse id="accordian-2" accordian="my-accordian" role="tabpanel">
        <b-table :items="NLEastStandings"></b-table>
      </b-collapse>
    </b-card>
  </div>
</template>
<script>
/*eslint-disable*/
import { ref, computed, onMounted } from "vue";

const SEASON = 2022;
const LEAGUE = 1;
const NL_EAST = "NL East";
const OPTIONS = {
  method: "GET",
  url: "https://api-baseball.p.rapidapi.com/standings",
  params: { season: SEASON, league: LEAGUE },
  headers: {
    "X-RapidAPI-Key": process.env.VUE_APP_X_RAPID_API_KEY,
    "X-RapidAPI-Host": "api-baseball.p.rapidapi.com",
  },
};

export default {
  name: "StandingsTable",
  props:{
    NLEastTable: Array,
    NLStandings: Array,
  },
  setup() {        
    async function getNLEastTable() {
      const temp_arr = ref([]);

      //Retrieve the table from the Baseball API module
      /**
      await makeRestCall(function (response) {
        let data = response.data.response;
        for (let i = 0; i < data[0].length; i++) {
          let standings = data[0][i];
          let team_obj = standings["group"];
          let league = team_obj["name"];

          if (league == NL_EAST) {
            let team_name = standings["team"]["name"];
            let pos = standings["position"];
            temp_arr.value.push({ pos: pos, team_name: team_name });
          }
        }
        NLEastStandings.value = temp_arr.value;
        console.log(NLEastStandings.value);
      });*/
    }
    return {
    };
  },
  created() {
  },
};
</script>

<style lang=""></style>
