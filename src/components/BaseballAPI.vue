<template>
    <div>
        
    </div>
</template>

<script>
import {ref} from "vue"
import { NLStandings } from '@/store/NLStandings.js'
import { NLEastStandings } from '@/store/NLEastStandings.js'
export default {
    name:'BaseballAPI',
    setup(){
        /** Constant Declaration */
        const SEASON = ref(2022);
        const LEAGUE = ref(1);
        const PONG = ref("PONG");
        const NL = ref("National League")
        const NL_EAST = ref("NL East")
        const fetchedLeagueStandings= NLStandings();
        const fetchDivStandings = NLEastStandings();

        //const NYM = "New York Mets";

        const OPTIONS = {
        method: "GET",
        url: "https://api-baseball.p.rapidapi.com/standings",
        params: { season: SEASON.value, league: LEAGUE.value },
        headers: {
            "X-RapidAPI-Key": process.env.VUE_APP_X_RAPID_API_KEY,
            "X-RapidAPI-Host": "api-baseball.p.rapidapi.com",
        },
        };

        /** REST Functions */

        function makeRestCall(func) {
        const axios = require("axios");
        axios
            .request(OPTIONS)
            .then(func)
            .catch(function (error) {
            console.error(error);
            });
        }

        /** Service Functions */
        async function pingAPI() {
            await makeRestCall(function(response) {
                console.log(response)
                console.log(PONG)
            })
        }

        async function getNLLeagueTable() {
            let temp_arr = ref([])
            await makeRestCall(function(response) {
                    let data = response.data.response;
                    for (let i = 0; i < data[0].length; i++) {
                    let standings = data[0][i];
                    let team_obj = standings["group"];
                    let league = team_obj["name"];

                    if (league == NL.value) {
                        let team_name = standings["team"]["name"];
                        let pos = standings["position"];
                        temp_arr.value.push({ pos: pos, team_name: team_name });
                    }
                    }
                    fetchedLeagueStandings.current_table = temp_arr.value;
                    console.log("Standings set:")
                    console.log(fetchedLeagueStandings.current_table);
            })
        }

        async function getNLEastTable(){
        const temp_arr = ref([]);
        await makeRestCall(function (response) {
            let data = response.data.response;
            for (let i = 0; i < data[0].length; i++) {
            let standings = data[0][i];
            let team_obj = standings["group"];
            let league = team_obj["name"];
            if (league == NL_EAST.value) {
                let team_name = standings["team"]["name"];
                let pos = standings["position"];
                temp_arr.value.push({ pos: pos, team_name: team_name });
            }
            }
            fetchDivStandings.current_table = temp_arr.value;
            console.log(NLEastStandings.value);
      });
    }
        return { 
            SEASON,
            LEAGUE,
            PONG,
            OPTIONS,
            makeRestCall,
            pingAPI,
            getNLLeagueTable,
            NLStandings,
            fetchedStandings: fetchedLeagueStandings,
            getNLEastTable,
         }
    },
    async created(){
        this.getNLLeagueTable();   
        this.getNLEastTable();
    }
}
</script>
<style>
    
</style>