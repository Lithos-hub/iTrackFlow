<template>
	<div>
		<table :key="props.tableKey" class="bg-white dark:bg-dark">
			<thead>
				<tr>
					<th v-for="{ label, key } of props.headers" :key="key">
						{{ label }}
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(data, i) of props.dataList" :key="i">
					<td v-for="{ key } of headers" :key="key">
						<img v-if="key === 'image'" :src="data[key]" class="mx-auto h-[100px]" />
						<div v-else-if="key === 'actions'" class="flex gap-5 justify-center">
							<BaseButton
								v-for="{ icon, color, onClick } of data[key]"
								:key="icon"
								:icon="icon"
								:color="color"
								@click="onClick((data as Project).id)" />
						</div>
						<slot :name="`table:${key}`" v-bind="data" />
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script setup lang="ts" generic="T">
import { Actions } from './DataTable.interfaces';
import { Project } from '@/interfaces';

interface Head {
	label: string;
	key: string;
}

interface Props {
	tableKey: number;
	headers: Head[];
	dataList: Project[] | Actions[];
}

interface Slots {
	[K in `table:${string}`]: { value: T[keyof T] };
}

const props = defineProps<Props>();

defineSlots<Slots>();
</script>

<style lang="scss" scoped>
table {
	width: 100%;
	border-collapse: collapse;

	& thead {
		@apply dark:border dark:border-primary;

		& th {
			@apply text-center p-5 text-black dark:text-white border border-dark/10 dark:border-primary;

			&:first-child {
				@apply bg-primary dark:bg-primary/50 text-white dark:text-white;
			}
		}
	}

	& tbody {
		& tr {
			& td {
				&:first-child {
					@apply font-bold text-primary;
				}
				@apply p-5 border border-primary/10 text-center [&:not(:first-child)]:hover:bg-dark/10 [&:not(:first-child)]:hover:dark:bg-primary/20 cursor-pointer;
			}
		}
	}
}
</style>
