
import { defineStore } from 'pinia'


export const NLStandings = defineStore({
  // id is required so that Pinia can connect the store to the devtools
  id: 'NLStandings',
  state: () =>({
    current_table: [],
    updated: Date,
    table_fetched: false,
    loading: false,
    metsLeagueFirst: false
  }),
  getters: {
    getFirst(state){
        if (state.current_table.length > 0){
            return state.current_table[0]
        } else {
            return "error"
        }
    }
    },
  actions:{

  }

})