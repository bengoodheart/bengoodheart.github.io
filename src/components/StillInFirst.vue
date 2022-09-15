<template>
  <div>
    <b-card>
      <b-badge variant="primary" v-if="firstAnswer.value == true">
        <h1>YES</h1>
      </b-badge>
      <br />
      <b-badge
        variant="warning"
        v-if="firstAnswer.value == true && firstAnswer.tied == true"
      >
        <h3>Kinda....</h3>
      </b-badge>
      <span
        v-if="NLEastTable.metsDivFirst === true && firstAnswer.tied == false"
      >
        <br />
        The New York Metropolitans are currently in first in the NL East</span
      >
      <span
        v-if="NLEastTable.metsDivFirst === true && firstAnswer.tied == true"
      >
        <br />
        The New York Metropolitans are currently tied for first in the NL East
      </span>

      <span v-if="NLTable.metsLeagueFirst === true && firstAnswer.tied == false">
        and the National League</span
      >
      <span v-if="firstAnswer.value == true && firstAnswer.tied == false">!</span>
      <span v-if="firstAnswer.value == true && firstAnswer.tied == true">...</span>

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
      console.log(result);
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
      anyTies(NLTable)
      anyTies(NLEastTable)
      const result = league == true || div == true ? true : false;
      console.log(result);
      firstAnswer.value = await result;
      return firstAnswer.value;
    }

    async function anyTies(table) {
      const first_place = table.current_table[0];
      const second_place = table.current_table[1];
      const first_rec = first_place["num_rec"];
      const second_rec = second_place["num_rec"];
      console.log(first_rec, second_rec);
      if (first_rec == second_rec) {
        firstAnswer.tied = true;
      } else {
        firstAnswer.tied = false;
      }
      return firstAnswer.tied;
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
      anyTies,
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
