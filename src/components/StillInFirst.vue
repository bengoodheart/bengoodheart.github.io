<template>
  <div>
    <b-card>
      <b-badge variant="primary" v-if="firstAnswer.value==true"><h3>YES</h3></b-badge>
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

    async function metsLeagueFirst(){
      const result = firstInLeague == NYM ? true: false;
      return result
    }
    async function metsDivFirst(){
      const result = firstInDiv == NYM ? true: false;
      return result
    } 
    function inFirstAtAll(){
      const league = metsLeagueFirst();
      const div = metsDivFirst();
      const result = league || div == true ? true : false 
      firstAnswer.value = result;
      return firstAnswer.value
    }
    


  return {
    NLTable,
    firstInLeague,
    firstInDiv,
    metsLeagueFirst,
    metsDivFirst,
    inFirstAtAll,

  }
  },
  async created(){
    await console.log(this.inFirstAtAll())
  }
}
</script>
<style>

</style>