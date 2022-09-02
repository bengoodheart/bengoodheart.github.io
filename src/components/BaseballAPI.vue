<template>
    <div></div>
</template>

<script>
import { ref } from "vue";
import { NLStandings } from "@/store/NLStandings.js";
import { NLEastStandings } from "@/store/NLEastStandings.js";
export default {
    name: "BaseballAPI",
    setup() {
        /** Constant Declaration */
        const SEASON = ref(2022);
        const LEAGUE = ref(1);
        const PONG = ref("PONG");
        const NL = ref("National League");
        const NL_EAST = ref("NL East");
        const fetchedLeagueStandings = NLStandings();
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
            await makeRestCall(function (response) {
                console.log(response);
                console.log(PONG);
            });
        }

        function getNumRecord(standings){
            let win = standings['games']['win']
            let loss = standings['games']['lose']
            console.log(loss)
            let win_loss_num = win['total'] + " - " + loss['total'] 
            return win_loss_num
        }

        function getPercentRecord(standings){
            let win = standings['games']['win']
            let win_pcent = win['percentage'] 
            return win_pcent
        }

        async function getNLLeagueTable() {
            fetchedLeagueStandings.loading = true;
            let temp_arr = ref([]);
            await makeRestCall(function (response) {
                let data = response.data.response;
                for (let i = 0; i < data[0].length; i++) {
                    let standings = data[0][i];
                    let team_obj = standings["group"];
                    let league = team_obj["name"];

                    if (league == NL.value) {
                        let team_name = standings["team"]["name"];
                        let pos = standings["position"];
                        let num_rec = getNumRecord(standings)
                        let pcent_rec = getPercentRecord(standings)
                        temp_arr.value.push({ pos: pos, team_name: team_name, num_rec: num_rec, pcent_rec: pcent_rec});
                    }
                }
                fetchedLeagueStandings.current_table = temp_arr.value;
                fetchedLeagueStandings.table_fetched = true;
                fetchedLeagueStandings.loading = false;
            });
        }

        async function getNLEastTable() {
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
                fetchDivStandings.table_fetched = true;
            });
        }
        return {
            SEASON,
            LEAGUE,
            PONG,
            OPTIONS,
            NLStandings,
            fetchedStandings: fetchedLeagueStandings,
            getNumRecord,
            getNLEastTable,
            makeRestCall,
            pingAPI,
            getNLLeagueTable,
            getPercentRecord,
        };
    },
    async created() {
        await this.getNLLeagueTable();
        await this.getNLEastTable();
    },
};
</script>
<style>
</style>