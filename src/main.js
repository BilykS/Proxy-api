import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
  created () {
	  this.$store.dispatch('fetchProxy')
  }
}).$mount('#app')
