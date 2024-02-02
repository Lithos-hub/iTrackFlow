<template>
	<section class="flex flex-col gap-5 app_margin dark:text-white text-black">
		<h2 class="uppercase font-bold">
			{{ $t('app.projects.title') }}
		</h2>
		<div class="flex justify-end">
			<RouterLink to="/app/dashboard/projects/new">
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
				<RouterLink
					:to="`/app/dashboard/projects/${category}/${id}`"
					class="underline text-cyan-500">
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
		<!-- Alert modal when deleting project -->
		<BaseModalAlert
			v-if="showModal"
			v-bind="modalProps"
			@on-action="onConfirmDelete"
			@close="showModal = false" />
	</section>
</template>

<script setup lang="ts">
import { Actions } from '@/components/App/DataTable/DataTable.interfaces';
import { Project } from '@/interfaces';

definePageMeta({
	layout: 'dashboard',
	middleware: 'auth',
});

const { t } = useI18n();

const { showModal, modalProps } = useModal();

const tableKey = ref(0);

const onEdit = (id: number) => alert('Editing ' + id);
const onDelete = (_: number) => {
	showModal.value = true;
	modalProps.value = {
		type: 'warning',
		title: t('app.projects.delete_project'),
		message: t('app.projects.delete_project_message'),
	};
};

const onConfirmDelete = () => {
	showModal.value = false;
	alert('Deleting project');
};

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
