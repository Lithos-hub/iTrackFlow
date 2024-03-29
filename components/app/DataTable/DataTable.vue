<template>
	<div data-test-id="DataTable">
		<table :key="props.tableKey" class="bg-white dark:bg-dark">
			<thead>
				<tr>
					<th v-for="{ label, key } of headersList" :key="key">
						{{ label }}
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(data, i) of dataListMap" :key="i">
					<td v-for="{ key } of headersList" :key="key">
						<slot v-if="$slots[`table:${key}`]" :name="`table:${key}`" v-bind="data" />
						<span v-else>{{ data[key] }}</span>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script setup lang="ts" generic="T">
import { DataTableProps } from './DataTable.interfaces';

interface Slots {
	[K in `table:${string}`]: { value: T[keyof T] };
}

const props = defineProps<DataTableProps>();

const { t } = useI18n();

const dataListMap = computed(() =>
	props.dataList.map((data) => ({
		...data,
		actions: props.actionsList,
	})),
);

const headersList = computed(() => {
	return props.actionsList
		? [...props.headers, { label: t('app.dataTable.actions'), key: 'actions' }]
		: props.headers;
});

defineSlots<Slots>();
</script>

<style lang="scss" scoped>
table {
	@apply w-full text-sm;
	border-collapse: collapse;

	& thead {
		@apply dark:border dark:border-white/10;

		& th {
			@apply text-center p-5 text-black dark:text-white default_border font-light bg-black/5 dark:bg-white/5;
		}
	}

	& tbody {
		& tr {
			& td {
				&:first-child {
					@apply font-bold text-primary;
				}
				@apply p-1 default_border text-center;
			}
		}
	}
}
</style>
