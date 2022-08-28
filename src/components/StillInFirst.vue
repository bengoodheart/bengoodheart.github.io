<template>
  <div>
    <b-card>
      <b-badge variant="primary" v-if="firstAnswer.value == true">
        <h1>YES</h1>
      </b-badge>
      <br />
      The New York Metropolitans are currently in first in
      <span v-if="NLEastTable.metsDivFirst == true">the NL East</span><span v-if="NLTable.metsDivFirst == true"> and the
        National League</span>!
      <b-badge variant="danger" v-if="firstAnswer.value == false">
        <h1>Nope</h1>
      </b-badge>
      <br />
      <b-img thumbnail src="@/assets/notinfirst.jpg" fluid v-if="firstAnswer.value == false"></b-img>
    </b-card>
  </div>
</template>

<script>
import { NLStandings } from "@/store/NLStandings.js";
import { NLEastStandings } from "@/store/NLEastStandings.js";
import { EitherFirst } from "@/store/EitherFirst.js";

export default {
  name: "StillInFirst",
  props: {},
  setup() {
    const NYM = "New York Mets";
    const NLTable = NLStandings();
    const NLEastTable = NLEastStandings();
    const firstAnswer = EitherFirst();
    const firstInLeague = NLTable.getFirst.team_name;
    const firstInDiv = NLEastTable.getFirst.team_name;
    const metsFirstDiv = getMetsDivFirst();
    const metsFirstLeague = getMetsLeagueFirst();

    async function getMetsLeagueFirst() {
      const result = (await firstInLeague) == NYM ? true : false;
      NLTable.metsLeagueFirst = result;
      return result;
    }
    async function getMetsDivFirst() {
      const result = (await firstInDiv) == NYM ? true : false;
      NLEastTable.metsDivFirst = result;
      return result;
    }
    async function inFirstAtAll() {
      const league = getMetsLeagueFirst();
      const div = getMetsDivFirst();
      const result = league || div == true ? true : false;
      firstAnswer.value = await result;
      return firstAnswer.value;
    }

    return {
      NLTable,
      NLEastTable,
      firstInLeague,
      firstInDiv,
      firstAnswer,
      metsFirstDiv,
      metsFirstLeague,
      getMetsDivFirst,
      getMetsLeagueFirst,
      inFirstAtAll,
    };
  },
  async created() {
    await console.log(this.inFirstAtAll());
    await this.metsDivFirst();
    await this.metsLeagueFirst();
    console.log(await this.NLEastTable.metsDivFirst);
  },
};
</script>
<style>
</style>
