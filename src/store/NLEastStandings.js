import { defineStore } from 'pinia'

export const NLEastStandings = defineStore({
    id:'NLEastStandings',
    state: () =>({
        current_table: [],
        updated: Date,
        table_fetched: false,
        loading: false,
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