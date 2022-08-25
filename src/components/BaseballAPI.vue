<template>
    <div>
        
    </div>
</template>

<script>
import {ref, reactive} from "vue"
export default {
    name:'BaseballAPI',
    setup(){
        /** Constant Declaration */
        const SEASON = ref(2022);
        const LEAGUE = ref(1);
        const PONG = ref("PONG");
        const NL = ref("National League")
        const NLStandings = reactive([]);

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
            let temp_arr = reactive([])
            await makeRestCall(function(response) {
                    let data = response.data.response;
                    for (let i = 0; i < data[0].length; i++) {
                    let standings = data[0][i];
                    let team_obj = standings["group"];
                    let league = team_obj["name"];

                    if (league == NL.value) {
                        let team_name = standings["team"]["name"];
                        let pos = standings["position"];
                        temp_arr.push({ pos: pos, team_name: team_name });
                    }
                    }
                    NLStandings.value = temp_arr;
                    console.log(NLStandings.value[1]);
            })
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
         }
    },
    async created(){
        this.getNLLeagueTable();   
    }
}
</script>
<style>
    
</style>