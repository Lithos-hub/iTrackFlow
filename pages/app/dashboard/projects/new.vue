<template>
	<section>
		<ClientOnly>
			<BaseCard class="mx-auto">
				<h2 class="text-base font-bold text-black dark:text-white self-start">
					{{ $t('app.projects.create') }}
				</h2>

				<form class="rounded-2xl w-full grid grid-cols-2 gap-10" @ubmit.prevent="submit">
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
							class="flex flex-col justify-center items-center gap-5">
							<div class="mx-auto h-[200px] w-[200px] mx-auto default_border rounded-2xl">
								<img
									:src="selectedProjectImagePreview"
									alt="Project picture"
									class="max-h-[200px] aspect-square object-cover rounded-2xl" />
							</div>
							<BaseButton type="button" icon="trash" flat @click="removeImage" />
						</div>
						<!-- Drag and drop div to drop image -->
						<BaseDropzone
							v-else
							ref="dropZoneRef"
							:input-ref="fileInputRef"
							:is-over-drop-zone="isOverDropZone"
							:placeholder="$t('app.projects.project_image_placeholder')" />
						<input
							ref="fileInputRef"
							type="file"
							class="hidden"
							accept="image/*"
							@change="onSelectFile" />
						<small v-if="fileTypeError" class="text-red-500">
							{{ $t('app.projects.project_image_error') }}
						</small>
					</div>
					<BaseButton type="submit" color="primary" variant="stealth" @click="submit">
						{{ $t('app.projects.project_create_submit') }}
					</BaseButton>
				</form>
			</BaseCard>
		</ClientOnly>
	</section>
</template>

<script setup lang="ts">
import { useDropZone } from '@vueuse/core';
import { DropdownItem } from '~/components/Base/Dropdown/BaseDropdown.interfaces';

definePageMeta({
	layout: 'dashboard',
	name: 'NewProjectPage',
	middleware: 'auth',
});

const { t } = useI18n();

const dropZoneRef = ref<HTMLDivElement>();
const fileInputRef = ref<HTMLInputElement | null>(null);

const selectedTeamMembers = ref<DropdownItem[]>([]);
const selectedCategory = ref<DropdownItem[]>([]);
const selectedProjectImage = ref<File | null>(null);
const selectedProjectImagePreview = ref<string | null>(null);

const fileTypeError = ref(false);

const teamMembers = [
	{
		label: 'John Doe',
		value: '1',
	},
	{
		label: 'Jane Doe',
		value: '2',
	},
	{
		label: 'John Smith',
		value: '3',
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

const { isOverDropZone } = useDropZone(dropZoneRef, {
	onDrop,
	dataTypes: ['image/jpg', 'image/jpeg', 'image/png'],
});

const submit = () => {
	alert('submit');
};

const removeImage = () => {
	selectedProjectImage.value = null;
	selectedProjectImagePreview.value = null;
};

const onSelectFile = (event: Event) => {
	fileTypeError.value = false;
	const target = event.target as HTMLInputElement;
	const file = target.files?.[0];

	if (!file || !checkFileType(file, 'image')) {
		fileTypeError.value = true;
		return;
	}

	selectedProjectImage.value = file;
	selectedProjectImagePreview.value = URL.createObjectURL(file);
};

function onDrop(files: File[] | null) {
	fileTypeError.value = false;

	if (!files) return;

	const file = files[0];

	if (!file || !checkFileType(file, 'image')) {
		fileTypeError.value = true;
		return;
	}

	selectedProjectImage.value = files[0];
	selectedProjectImagePreview.value = URL.createObjectURL(files[0]);
}
</script>
