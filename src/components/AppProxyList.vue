<template>
	<div>
		<v-data-table
				:headers="headers"
				:items="proxy"
				class="elevation-1"
				:rows-per-page-items='[20]'
		>
			<template v-slot:items="props">
				<td>{{ props.item.id }}</td>
				<td class="text-xs-right">{{ props.item.country }}</td>
				<td class="text-xs-right">{{ props.item.proxy_type }}</td>
				<td class="text-xs-right">{{ props.item.alive }}</td>
				<td class="text-xs-right">{{ props.item.host }}</td>
				<td class="text-xs-right">{{ props.item.port }}</td>
				<td class="text-xs-right">{{ props.item.protocol }}</td>
				<td class="text-xs-right">{{ props.item.modified }}</td>
				<td class="text-xs-right">{{ props.item.last_check_time }}</td>
			</template>
		</v-data-table>
	</div>

</template>

<script>
export default {
	data () {
		return {
			headers: [
				{
					text: 'id',
					align: 'left',
					sortable: false,
					value: 'name'
				},
				{ 	text: 'Country',
					value: 'country',
					sortable: false
				},
				{ 	text: 'Proxy type',
					value: 'proxy_type',
					sortable: false,
				},
				{ 	text: 'Alive',
					value: 'alive',
					sortable: false
				},
				{ 	text: 'Host',
					value: 'host',
					sortable: false
				},
				{ 	text: 'Port',
					value: 'port',
					sortable: false},
				{ 	text: 'Protocol',
					value: 'protocol',
					sortable: false
				},
				{ text: 'Modified', value: 'modified' },
				{ text: 'Last check time', value: 'last_check_time' }
			]
		}
	},
	computed: {
		proxy () {
			return this.$store.getters.proxy;
		}
	}
}
</script>