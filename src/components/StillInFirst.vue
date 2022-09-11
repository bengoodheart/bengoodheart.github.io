<template>
  <div>
    <b-card>
      <b-badge variant="primary" v-if="firstAnswer.value == true">
        <h1>YES</h1>
      </b-badge>

      <span v-if="NLEastTable.metsDivFirst === true">
        <br />
        The New York Metropolitans are currently in first in the NL East</span
      ><span v-if="NLTable.metsLeagueFirst === true">
        and the National League</span
      >
      <span v-if="firstAnswer.value == true">!</span>

      <b-badge variant="danger" v-if="firstAnswer.value == false">
        <h1>Nope</h1>
      </b-badge>
      <br />
      <br />
      <b-img
        thumbnail
        src="@/assets/notinfirst.jpg"
        fluid
        v-if="firstAnswer.value == false"
      ></b-img>
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
      console.log(result)
      NLTable.metsLeagueFirst = result;
      return result;
    }
    async function getMetsDivFirst() {
      const result = (await firstInDiv) == NYM ? true : false;
      NLEastTable.metsDivFirst = result;
      return result;
    }
    async function inFirstAtAll() {
      const league = await getMetsLeagueFirst();
      const div = await getMetsDivFirst();
      const result = (league == true || div == true) ? true : false;
      console.log(result)
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
    await this.inFirstAtAll();
    await this.getMetsDivFirst();
    await this.getMetsLeagueFirst();
  },
};
</script>
<style></style>
