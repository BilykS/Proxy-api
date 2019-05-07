import Vue from 'vue'
import Vuex from 'vuex'
import proxy from './modules/proxy'
import common from './modules/common'
Vue.use(Vuex)

export default new Vuex.Store ({
	modules: {
		proxy,
		common
	}
})