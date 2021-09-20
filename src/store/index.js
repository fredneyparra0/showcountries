import { createStore } from 'vuex'

export default createStore({
    state: {
        countrys: [],
        oneCountry: [],
        filterCountry: 'hola como estas'
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
            commit('assignCountrys', dataJson)
        },
        async getOneCountrie ({ commit }, name) {
            const fetchData = await fetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`);
            const dataJson = await fetchData.json();
            commit('assignOneCountrie', dataJson)
        },
        filterCountrie (state ,name) {
            this.state.countrys.forEach(el => {
                if (el.name.includes(name)) {
                    console.log('sip', el)
                }else {
                    console.log('no hay coincidencia')
                }
            })
        }
    },
    modules: {
    }
})
