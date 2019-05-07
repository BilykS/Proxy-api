<template>
	<div id="app" class="main-app">
		<v-layout row>
			<v-flex>
				<app-drawer/>
			</v-flex>

			<v-flex xs12>
				<app-proxy-list/>
			</v-flex>
		</v-layout>
	</div>
</template>

<script>
import AppDrawer from './components/AppDrawer.vue'
import AppProxyList from './components/AppProxyList.vue'

export default {
  name: 'app',
  components: {
	AppDrawer,
	AppProxyList
  }
}
</script>

<style>
html, body {
	height: 100%;
	margin: 0;
}
.main-app {
	height: 100%;
}
</style>
