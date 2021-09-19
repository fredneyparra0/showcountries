import { createStore } from 'vuex'

export default createStore({
    state: {
        countrys: []
    },
    mutations: {
        assignCountrys(state, getcountrys) {
            state.countrys = getcountrys
        },
        assignBanders(state, getBanders) {
            state.banders = getBanders
        }
    },
    actions: {
        async findCountrys({ commit }) {
            const data = await fetch('https://restcountries.eu/rest/v2/lang/es');
            const dataJson = await data.json()
            console.log(dataJson)

            commit('assignCountrys', dataJson)
        }
    },
    modules: {
    }
})
