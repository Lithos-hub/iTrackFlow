<template>
	<section class="flex flex-col gap-5 default_margin">
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
		<AppDataTable :table-key="tableKey" :data-list="dataList" :headers="headersList">
			<template #table:name="{ name, id }">
				<RouterLink :to="`/app/projects/${id}`" class="underline text-cyan-500">
					{{ name }}
				</RouterLink>
			</template>
			<template #table:category="{ category }">
				<span v-if="category === 'harmony'" class="projectRow__chip projectRow__harmony-chip">
					{{ $t('app.projects.harmony') }}
				</span>
				<span v-if="category === 'production'" class="projectRow__chip projectRow__production-chip">
					{{ $t('app.projects.production') }}
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
const onEdit = (id: string) => alert('Editing ' + id);
const onDelete = (id: string) => alert('Deleting ' + id);

const projectsList = ref<Project[]>([
	{
		id: 1,
		name: 'Project 1',
		category: 'harmony',
		image: 'https://picsum.photos/200',
	},
	{
		id: 2,
		name: 'Project 2',
		category: 'production',
		image: 'https://picsum.photos/201',
	},
	{
		id: 3,
		name: 'Project 3',
		category: 'harmony',
		image: 'https://picsum.photos/202',
	},
	{
		id: 4,
		name: 'Project 4',
		category: 'harmony',
		image: 'https://picsum.photos/203',
	},
	{
		id: 5,
		name: 'Project 5',
		category: 'production',
		image: 'https://picsum.photos/204',
	},
]);

const tableActions: Actions[] = [
	{
		icon: 'pencil',
		color: 'primary',
		onClick: (id) => onEdit(id),
	},
	{
		icon: 'trash',
		color: 'danger',
		onClick: (id) => onDelete(id),
	},
];

const headersList = computed(() => [
	{
		label: t('app.projects.name'),
		key: 'name',
	},
	{
		label: t('app.projects.category'),
		key: 'category',
	},
	{
		label: t('app.projects.image'),
		key: 'image',
	},
	{
		label: t('app.projects.actions'),
		key: 'actions',
	},
]);

const dataList = computed(() =>
	projectsList.value.map((project) => ({
		...project,
		actions: tableActions,
	})),
);
</script>
