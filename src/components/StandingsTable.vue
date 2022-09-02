<template>
  <div class="accordian" role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordian-1 variant="primary">
          National League Standings</b-button
        >
      </b-card-header>
      <b-collapse id="accordian-1" accordian="my-accordian" role="tabpanel">
        <b-table :items="NLTable.current_table"></b-table>
      </b-collapse>

      <b-card-header
        header-tag="header"
        class="p-1"
        role="tab"
        evariant="primary"
      >
        <b-button block v-b-toggle.accordian-2 variant="primary"
          >NL East Standings</b-button>
      </b-card-header>
      <b-collapse id="accordian-2" accordian="my-accordian" role="tabpanel">
        <b-table :items="NLEastTable.current_table"></b-table>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
import { NLStandings } from "@/store/NLStandings.js";
import { NLEastStandings } from "@/store/NLEastStandings.js";

export default {
  name: "StandingsTable",
  setup() {
    const NLTable = NLStandings();
    const NLEastTable = NLEastStandings();

    return {
      NLTable,
      NLEastTable,
    };
  },
  created() {},
};
</script>

<style lang=""></style>
