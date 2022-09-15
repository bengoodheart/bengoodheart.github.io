import { defineStore } from 'pinia'

export const EitherFirst = defineStore({
    id: 'EitherFirst',
    state: () => ({
        value: {
            type: Boolean,
            default: false,
        },
        tied: {
            type: Boolean,
            default: false,
        }
    }),
    getters: {
        whatsTheDeal(state) {
            return state.value
        },
        isTied(state){
            return state.tied
        },
    }
});
