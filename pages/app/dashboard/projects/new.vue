<template>
	<section>
		<BaseCard class="mx-auto">
			<h2 class="text-base font-bold text-black dark:text-white self-start">
				{{ $t('app.projects.create') }}
			</h2>

			<form ref="formRef" class="rounded-2xl w-full grid grid-cols-2 gap-10">
				<div class="flex flex-col gap-5">
					<BaseInput
						:label="$t('app.projects.project_name')"
						:placeholder="$t('app.projects.project_name_placeholder')" />
					<BaseDropdown
						v-model="selectedTeamMembers"
						:label="$t('app.projects.project_team_members')"
						:placeholder="$t('app.projects.project_team_members_placeholder')"
						multiselect
						color="white"
						:data="teamMembers" />
					<BaseDropdown
						v-model="selectedCategory"
						:label="$t('app.projects.project_category')"
						:placeholder="$t('app.projects.project_category_placeholder')"
						color="white"
						:data="categories" />
				</div>
				<div class="flex flex-col gap-5 justify-center items-center">
					<label>{{ $t('app.projects.project_image') }}</label>
					<div
						v-if="selectedProjectImagePreview"
						class="mx-auto h-[200px] w-[200px] mx-auto border border-white/10 rounded-2xl">
						<img
							:src="selectedProjectImagePreview"
							alt="Project picture"
							class="max-h-[200px] aspect-square object-cover rounded-2xl" />
					</div>
					<!-- Drag and drop div to drop image -->
					<div
						v-else
						ref="dropZoneRef"
						class="relative h-[200px] w-[200px] rounded-2xl gap-5 items-center cursor-pointer flex flex-col justify-center items-center"
						:class="{
							'bg-success/10 selected__border-success': isOverDropZone,
							'bg-none border-2 border-dashed border-gray-500 dark:border-white/10':
								!isOverDropZone,
						}"
						@click="fileInputRef?.click()">
						<div :key="updateKey">
							<BaseIcon icon="upload" :color="lightMode ? 'black' : 'white'" :size="30" />
						</div>
						<small>{{ $t('app.projects.project_image_placeholder') }}</small>
					</div>
				</div>
				<input
					ref="fileInputRef"
					type="file"
					class="hidden"
					accept="image/*"
					@change="onSelectFile" />
			</form>

			<BaseButton color="primary" variant="stealth" class="self-end" @click="submit">
				{{ $t('app.projects.project_create_submit') }}
			</BaseButton>
		</BaseCard>
	</section>
</template>

<script setup lang="ts">
import { useDropZone } from '@vueuse/core';
import { useScreenStore } from '~/store/colorMode';

definePageMeta({
	layout: 'dashboard',
	name: 'NewProjectPage',
	middleware: 'auth',
});

const { t } = useI18n();

const { lightMode } = storeToRefs(useScreenStore());

const dropZoneRef = ref<HTMLDivElement>();
const { isOverDropZone } = useDropZone(dropZoneRef, {
	onDrop,
	dataTypes: ['image/jpg', 'image/jpeg', 'image/png', 'image/svg+xml'],
});

const formRef = ref<HTMLFormElement | null>(null);
const fileInputRef = ref<HTMLInputElement | null>(null);

const updateKey = ref(Math.random());
const selectedTeamMembers = ref<unknown[]>([]);
const selectedCategory = ref<unknown[]>([]);
const selectedProjectImage = ref<File | null>(null);
const selectedProjectImagePreview = ref<string | null>(null);

const teamMembers = [
	{
		label: 'John Doe',
		value: 1,
	},
	{
		label: 'Jane Doe',
		value: 2,
	},
	{
		label: 'John Smith',
		value: 3,
	},
];

const categories = [
	{
		label: t('app.projects.production'),
		value: 'production',
	},
	{
		label: t('app.projects.harmony'),
		value: 'harmony',
	},
];

const submit = () => {
	if (!formRef.value) return;

	formRef.value.submit();
};

const onSelectFile = (event: Event) => {
	const target = event.target as HTMLInputElement;
	const file = target.files?.[0];

	if (
		!file ||
		(file.type !== 'image/png' && file.type !== 'image/jpg' && file.type !== 'image/jpeg')
	) {
		return;
	}

	selectedProjectImage.value = file;
	selectedProjectImagePreview.value = URL.createObjectURL(file);
};

function onDrop(files: File[] | null) {
	if (!files) return;

	const file = files[0];

	if (
		!file ||
		(file.type !== 'image/png' && file.type !== 'image/jpg' && file.type !== 'image/jpeg')
	) {
		return;
	}

	selectedProjectImage.value = files[0];
	selectedProjectImagePreview.value = URL.createObjectURL(files[0]);
}

watch(lightMode, () => (updateKey.value = Math.random()));
</script>
