import { defineStore } from 'pinia'

export const NLStandings = defineStore({
  // id is required so that Pinia can connect the store to the devtools
  id: 'NLStandings',
  state: () =>({
    list: []
  }),
  getters: {},
  actions:{}
})