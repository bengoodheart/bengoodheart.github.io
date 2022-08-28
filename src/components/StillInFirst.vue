<template>
  <div>
    <b-card>
      <b-badge variant="primary" v-if="firstAnswer.value==true"><h3>YES</h3></b-badge>
      <p> The New York Metropolitans are currently in first in <span v-if="NLEastTable.metsDivFirst == true">the NL East</span><span v-if="NLTable.metsLeagueFirst == true" > and the National League</span>!</p>
      <b-badge variant="danger" v-if="firstAnswer.value==false">Nope</b-badge>
      <b-img thumbnail src="@/assets/notinfirst.jpg" fluid v-if="firstAnswer.value == false"></b-img>
    </b-card>
  </div>
</template>

<script>


import { NLStandings } from '@/store/NLStandings.js';
import { NLEastStandings } from '@/store/NLEastStandings.js';
import { EitherFirst } from '@/store/EitherFirst.js';

export default{
  name: "StillInFirst",
  props: {
  },
  setup(){
    const NYM = "New York Mets"
    const NLTable = NLStandings();
    const NLEastTable = NLEastStandings();
    const firstAnswer = EitherFirst();
    const firstInLeague = NLTable.getFirst.team_name
    const firstInDiv = NLEastTable.getFirst.team_name
    const metsFirstDiv = metsDivFirst();
    const metsFirstLeague = metsLeagueFirst();

    async function metsLeagueFirst(){
      const result = await firstInLeague == NYM ? true: false;
      NLTable.metsLeagueFirst = result;
      return result
    }
    async function metsDivFirst(){
      const result = await firstInDiv == NYM ? true: false;
      NLEastTable.metsDivFirst = result;
      return result
    } 
    async function inFirstAtAll(){
      const league = metsLeagueFirst();
      const div = metsDivFirst();
      const result = league || div == true ? true : false 
      firstAnswer.value = await result;
      return firstAnswer.value
    }



  return {
    NLTable,
    NLEastTable,
    firstInLeague,
    firstInDiv,
    metsLeagueFirst,
    metsDivFirst,
    inFirstAtAll,
    firstAnswer,
    metsFirstDiv,
    metsFirstLeague,
  }
  },
  async created(){
    await console.log(this.inFirstAtAll())
    console.log(await this.NLEastTable.metsDivFirst)
  }
}
</script>
<style>

</style>