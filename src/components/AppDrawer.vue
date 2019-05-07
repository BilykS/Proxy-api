<template>
  <v-navigation-drawer permanent>

    <v-select
            v-model="countrySelect"
            @change="isCountry"
            :items="isCountryList"
            label="Country"
    ></v-select>

    <v-checkbox
            @change="isTypeTransp"
            label="0 - 'Transparent'"
    ></v-checkbox>

    <v-checkbox
            @change="isTypeAnon"
            label="1 - 'Anonymous'"
    ></v-checkbox>

    <v-checkbox
            @change="isTypeElite"
            label="2 - 'Elite'"
    ></v-checkbox>

    <v-divider></v-divider>
    <v-checkbox
            @change="isAlive"
            label="alive"
    ></v-checkbox>

  </v-navigation-drawer>
</template>

<script>
export default {
    data () {
        return {
            countrySelect: '',
        }
    },
    methods: {
		isAlive () {
			return this.$store.getters.alive ? this.$store.dispatch('setAlive', false) : this.$store.dispatch('setAlive', true)
        },
        isCountry () {
            return this.countrySelect === 'all' ?  this.$store.dispatch('setCountry', '') : this.$store.dispatch('setCountry', this.countrySelect)
        },
		isTypeTransp () {
			return this.$store.getters.typeTransp ? this.$store.dispatch('setTypeTransp', false) : this.$store.dispatch('setTypeTransp', true)
		},
		isTypeAnon () {
			return this.$store.getters.typeAnon ? this.$store.dispatch('setTypeAnon', false) : this.$store.dispatch('setTypeAnon', true)
		},
        isTypeElite () {
			return this.$store.getters.typeElite ? this.$store.dispatch('setTypeElite', false) : this.$store.dispatch('setTypeElite', true)
		}

    },
    computed: {
		isCountryList () {
			return this.$store.getters.countryList
		}
    }
}
</script>

<style>

</style>
