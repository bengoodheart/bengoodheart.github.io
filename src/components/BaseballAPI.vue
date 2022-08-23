<template>
    <div>
        
    </div>
</template>

<script>
import {ref} from "vue"
export default {
    name:'BaseballAPI',
    setup(){
        /** Constant Declaration */
        const SEASON = ref(2022);
        const LEAGUE = ref(1);
        const PONG = ref("PONG");
        //const NYM = "New York Mets";

        const OPTIONS = {
        method: "GET",
        url: "https://api-baseball.p.rapidapi.com/standings",
        params: { season: SEASON, league: LEAGUE },
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
        return { 
            SEASON,
            LEAGUE,
            PONG,
            OPTIONS,
            makeRestCall,
            pingAPI,
         }
    },
    created(){
        this.pingAPI();
    }
}
</script>
<style>
    
</style>