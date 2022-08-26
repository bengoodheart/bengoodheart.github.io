
import { defineStore } from 'pinia'


export const NLStandings = defineStore({
  // id is required so that Pinia can connect the store to the devtools
  id: 'NLStandings',
  state: () =>({
    current_table: [],
    updated: Date,
    table_fetched: false
  }),
  getters: {
    stampUpdated(state){
        state.table_fetched = true
        return state;
    },
    },
  actions:{}

})