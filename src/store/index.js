import { createStore } from 'vuex'

export default createStore({
    state: {
        countrys: [],
        oneCountry: []
    },
    mutations: {
        assignCountrys(state, getcountrys) {
            state.countrys = getcountrys
        },
        assignOneCountrie(state, getCountrie) {
            state.oneCountry = getCountrie
        }
    },
    actions: {
        async findCountrys({ commit }) {
            const data = await fetch('https://restcountries.eu/rest/v2/lang/es');
            const dataJson = await data.json()
            console.log(dataJson)

            commit('assignCountrys', dataJson)
        },
        async getOneCountrie ({ commit }, name) {
            const fetchData = await fetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`);
            const dataJson = await fetchData.json();
            console.log(dataJson)

            commit('assignOneCountrie', dataJson)
        }
    },
    modules: {
    }
})
