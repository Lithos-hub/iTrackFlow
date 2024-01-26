<template>
	<section class="flex flex-col gap-5 app_margin dark:text-white text-black">
		<h2 class="uppercase font-bold">
			{{ $t('app.projects.title') }}
		</h2>
		<div class="flex justify-between">
			<BaseButton
				variant="stealth"
				color="secondary"
				icon="chevron-rounded-left"
				icon-left
				class="my-5"
				@click="$router.back()">
				{{ $t('app.ui.go_back') }}
			</BaseButton>
			<RouterLink to="/app/projects/new">
				<BaseButton color="success" icon="add" icon-right class="my-5">
					{{ $t('app.projects.add_project') }}
				</BaseButton>
			</RouterLink>
		</div>
		<AppDataTable
			:table-key="tableKey"
			:data-list="projectsList"
			:actions-list="actionsList"
			:headers="headersList">
			<template #table:name="{ name, category, id }">
				<RouterLink :to="`/app/projects/${category}/${id}`" class="underline text-cyan-500">
					{{ name }}
				</RouterLink>
			</template>
			<template #table:category="{ category }">
				<span v-if="category === 'harmony'" class="projectRow__chip projectRow__harmony-chip">
					{{ $t('app.dataTable.harmony') }}
				</span>
				<span v-if="category === 'production'" class="projectRow__chip projectRow__production-chip">
					{{ $t('app.dataTable.production') }}
				</span>
			</template>
		</AppDataTable>
	</section>
</template>

<script setup lang="ts">
import { Actions } from '@/components/app/DataTable/DataTable.interfaces';
import { Project } from '@/interfaces/projects';

definePageMeta({
	layout: 'default',
	middleware: 'auth',
});

const { t } = useI18n();

const tableKey = ref(0);
const onEdit = (id: number) => alert('Editing ' + id);
const onDelete = (id: number) => alert('Deleting ' + id);

const projectsList = ref<Project[]>([
	{
		id: 1,
		name: 'Project 1',
		category: 'harmony',
		image: 'https://picsum.photos/200',
		year: 2024,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
	},
	{
		id: 2,
		name: 'Project 2',
		category: 'production',
		image: 'https://picsum.photos/201',
		year: 2023,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
	},
]);

const actionsList: Actions[] = [
	{
		icon: 'pencil',
		color: 'primary',
		onClick: (id) => onEdit(id as number),
	},
	{
		icon: 'trash',
		color: 'danger',
		onClick: (id) => onDelete(id as number),
	},
];

const headersList = computed(() =>
	Object.keys(projectsList.value[0])
		.filter((key) => key !== 'id')
		.map((key) => ({
			label: t(`app.dataTable.${key}`),
			key,
		})),
);
</script>
