import { defineStore } from 'pinia'

export const NLEastStandings = defineStore({
    id:'NLEastStandings',
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