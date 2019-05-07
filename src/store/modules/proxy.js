import axios from 'axios'
export default {
	state: {
		proxy: [],
		alive: false,
		typeTransp: false,
		typeAnon: false,
		typeElite: false,
		countryActive: '',
		countryList: ['all']
	},
	mutations: {
		loadProxy (state, payload) {
			state.proxy = payload
		},
		setAlive (state, payload) {
			state.alive = payload
		},
		setCountry (state, payload) {
			state.countryActive = payload
		},
		setCountryList (state, payload) {
			state.countryActive = payload
		},
		setTypeTransp (state, payload) {
			state.typeTransp = payload
		},
		setTypeAnon (state, payload) {
			state.typeAnon = payload
		},
		setTypeElite (state, payload) {
			state.typeElite = payload
		}
	},
	actions: {
		async fetchProxy ({commit}) {
			commit('clearError')
			commit('setLoading', true)
			await  axios
				.get('https://proxyfordevelopers.com/api/proxies/?format=json')
				.then(response => {
					let temp = response.data
					commit('loadProxy', temp)

				})
				.catch(error => {
					commit('setError', error.message)
					commit('setLoading', false)
				})
				.finally(() => (
					commit('setLoading', false)
				))
		},
		setAlive ({commit}, payload) {
			commit('setAlive', payload)
		},
		setCountry ({commit}, payload) {
			commit('setCountry', payload)
		},
		setCountryList ({commit}, payload) {
			commit('setCountryList', payload)
		},
		setTypeTransp ({commit}, payload) {
			commit('setTypeTransp', payload)
		},
		setTypeAnon ({commit}, payload) {
			commit('setTypeAnon', payload)
		},
		setTypeElite ({commit}, payload) {
			commit('setTypeElite', payload)
		}
	},
	getters: {
		proxy (state) {
			return state.proxy.filter(item => {
				let conditions = [true]
				if (state.countryActive) {
					conditions.push(state.countryActive.toLowerCase() === item.country.toLowerCase())
				}
				if (state.alive === true) {
					conditions.push(item.alive === true)
				}
				if (state.typeTransp === true) {
					conditions.push(item['proxy_type'] == '0')
				}
				if (state.typeAnon === true) {
					conditions.push(item['proxy_type'] == '1')
				}
				if (state.typeElite === true) {
					conditions.push(item['proxy_type'] == '2')
				}
				return conditions.every(condition => condition)
			})
		},

		alive (state) {
			return state.alive
		},
		country (state) {
			return state.countryActive
		},
		countryList (state) {
			state.proxy.forEach(function (item) {
				state.countryList.push(item.country)
			})
			return state.countryList
		},
		typeTransp (state) {
			return state.typeTransp
		},
		typeAnon (state) {
			return state.typeAnon
		},
		typeElite (state) {
			return state.typeElite
		}
	}
}